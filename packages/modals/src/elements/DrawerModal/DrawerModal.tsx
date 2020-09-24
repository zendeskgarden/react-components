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
  StyledDrawerModalBackdrop,
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
   * Determines whether the `DrawerModal` is opened or closed
   */
  isOpen?: boolean;
  /**
   * HTML attributes to spread onto backdrop element
   */
  backdropProps?: any;
  /**
   * Callback when a close action has been completed.
   * Can be triggered from the backdrop and Close icon.
   * @param {Object} event - DOM event that triggered the close action
   */
  onClose?: (event: KeyboardEvent | MouseEvent) => void;
  /**
   * The root ID to use for descendants. A unique ID is created if none is provided.
   **/
  id?: string;
  /**
   * The DOM element where the drawer modal will be rendered to
   **/
  appendToNode?: Element;
  /**
   * Determines whether to apply keyboard focus on the drawer modal on mount
   */
  focusOnMount?: boolean;
  /**
   * Determines whether to return keyboard focus to the element that triggered the drawer modal
   */
  restoreFocus?: boolean;
}

export const DrawerModal = forwardRef<
  HTMLDivElement,
  IDrawerModalProps & HTMLAttributes<HTMLDivElement>
>(
  (
    { id, isOpen, onClose, backdropProps, appendToNode, focusOnMount, restoreFocus, ...props },
    ref
  ) => {
    const modalRef = useRef<HTMLDivElement | null>(null);
    const theme = useContext(ThemeContext);
    const environment = useDocument(theme);

    useFocusVisible({ scope: modalRef, relativeDocument: modalRef.current });

    const {
      getTitleProps,
      getCloseProps,
      getContentProps,
      getBackdropProps,
      getModalProps
    } = useModal({
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

      const bodyElement = environment.querySelector('body');

      if (bodyElement && isOpen) {
        const previousBodyOverflow = bodyElement.style.overflow;

        bodyElement.style.overflow = 'hidden';

        return () => {
          bodyElement.style.overflow = previousBodyOverflow;
        };
      }

      return undefined;
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

    const value = {
      getTitleProps,
      getContentProps,
      getCloseProps
    };

    if (!rootNode) {
      return null;
    }

    const modalProps = isOpen
      ? getModalProps({ ref: mergeRefs([ref, modalRef]), ...props } as any)
      : props;

    return ReactDOM.createPortal(
      <ModalsContext.Provider value={value}>
        <CSSTransition
          in={isOpen}
          timeout={250}
          unmountOnExit
          classNames="garden-drawer-transition"
        >
          <StyledDrawerModal {...modalProps} />
        </CSSTransition>
        {isOpen && (
          <StyledDrawerModalBackdrop
            {...(getBackdropProps({ isAnimated: true, ...backdropProps }) as any)}
          />
        )}
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
  id: PropTypes.string
};
