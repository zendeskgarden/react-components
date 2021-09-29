/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, {
  useEffect,
  useRef,
  useMemo,
  useContext,
  forwardRef,
  RefAttributes,
  HTMLAttributes,
  PropsWithoutRef,
  ForwardRefExoticComponent
} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import mergeRefs from 'react-merge-refs';
import { CSSTransition } from 'react-transition-group';
import { ThemeContext } from 'styled-components';
import { useModal } from '@zendeskgarden/container-modal';
import { useDocument } from '@zendeskgarden/react-theming';
import { useFocusVisible } from '@zendeskgarden/container-focusvisible';
import { ModalsContext } from '../../utils/useModalContext';
import {
  StyledBackdrop,
  StyledDrawerModal,
  StyledDrawerModalFooter,
  StyledDrawerModalFooterItem
} from '../../styled';

import { Header } from './Header';
import { Body } from './Body';
import { Close } from './Close';

interface IStaticDrawerModalExport<T, P>
  extends ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>> {
  Header: typeof Header;
  Body: typeof Body;
  Close: typeof Close;
  Footer: typeof StyledDrawerModalFooter;
  FooterItem: typeof StyledDrawerModalFooterItem;
}

export interface IDrawerModalProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Opens the modal
   */
  isOpen?: boolean;
  /**
   * Passes HTML attributes to the backdrop element
   */
  backdropProps?: any;
  /**
   * Handles close actions. Can be triggered from the backdrop and from the close icon.
   *
   * @param {Object} event The DOM event that triggered the close action
   */
  onClose?: (event: KeyboardEvent | MouseEvent) => void;
  /**
   * Sets the root ID. A unique ID is created if none is provided.
   */
  id?: string;
  /**
   * Defines the DOM element that the modal will attatch to
   */
  appendToNode?: Element;
  /**
   * Directs keyboard focus to the modal on mount
   */
  focusOnMount?: boolean;
  /**
   * Returns keyboard focus to the element that triggered the modal
   */
  restoreFocus?: boolean;
}

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const DrawerModal = forwardRef<
  HTMLDivElement,
  IDrawerModalProps & HTMLAttributes<HTMLDivElement>
>(
  (
    { id, isOpen, onClose, backdropProps, appendToNode, focusOnMount, restoreFocus, ...props },
    ref
  ) => {
    const modalRef = useRef<HTMLDivElement | null>(null);
    const transitionRef = useRef<HTMLDivElement>(null);
    const theme = useContext(ThemeContext);
    const environment = useDocument(theme);

    useFocusVisible({ scope: modalRef, relativeDocument: modalRef.current });

    const { getTitleProps, getCloseProps, getContentProps, getBackdropProps, getModalProps } =
      useModal({
        id,
        modalRef,
        focusOnMount,
        restoreFocus,
        environment,
        onClose
      });

    useEffect(() => {
      if (!environment) {
        return undefined;
      }

      const htmlElement = environment.querySelector('html');
      let previousHtmlOverflow: string;

      if (htmlElement && isOpen) {
        previousHtmlOverflow = htmlElement.style.overflow;

        htmlElement.style.overflow = 'hidden';
      }

      return () => {
        if (htmlElement && isOpen) {
          htmlElement.style.overflow = previousHtmlOverflow;
        }
      };
    }, [environment, isOpen]);

    const rootNode = useMemo(() => {
      if (appendToNode) {
        return appendToNode;
      }

      if (environment) {
        return environment.body;
      }

      return undefined;
    }, [appendToNode, environment]);

    const value = useMemo(
      () => ({
        getTitleProps,
        getContentProps,
        getCloseProps
      }),
      [getTitleProps, getContentProps, getCloseProps]
    );

    if (!rootNode) {
      return null;
    }

    const modalProps = isOpen
      ? getModalProps({ ref: mergeRefs([ref, modalRef, transitionRef]), ...props } as any)
      : { ref: mergeRefs([ref, modalRef, transitionRef]), ...props };

    return ReactDOM.createPortal(
      <ModalsContext.Provider value={value}>
        <CSSTransition
          in={isOpen}
          timeout={250}
          unmountOnExit
          classNames="garden-drawer-transition"
          nodeRef={transitionRef}
        >
          <StyledBackdrop {...(getBackdropProps({ isAnimated: true, ...backdropProps }) as any)}>
            <StyledDrawerModal {...modalProps} />
          </StyledBackdrop>
        </CSSTransition>
      </ModalsContext.Provider>,
      rootNode
    );
  }
) as IStaticDrawerModalExport<HTMLDivElement, IDrawerModalProps>;

DrawerModal.Header = Header;
DrawerModal.Body = Body;
DrawerModal.Close = Close;
DrawerModal.Footer = StyledDrawerModalFooter;
DrawerModal.FooterItem = StyledDrawerModalFooterItem;

DrawerModal.displayName = 'DrawerModal';

DrawerModal.propTypes = {
  backdropProps: PropTypes.object,
  focusOnMount: PropTypes.bool,
  restoreFocus: PropTypes.bool,
  onClose: PropTypes.func,
  appendToNode: PropTypes.any,
  id: PropTypes.string,
  isOpen: PropTypes.bool
};
