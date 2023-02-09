/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, {
  HTMLAttributes,
  useEffect,
  useRef,
  useMemo,
  useContext,
  useState,
  forwardRef
} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import mergeRefs from 'react-merge-refs';
import { CSSTransition } from 'react-transition-group';
import { ThemeContext } from 'styled-components';
import { useModal } from '@zendeskgarden/container-modal';
import { useDocument, useText } from '@zendeskgarden/react-theming';
import { useFocusVisible } from '@zendeskgarden/container-focusvisible';
import activeElement from 'dom-helpers/activeElement';
import { ModalsContext } from '../../utils/useModalContext';
import { StyledBackdrop, StyledDrawerModal } from '../../styled';
import { IDrawerModalProps } from '../../types';
import { Header } from './Header';
import { Body } from './Body';
import { Close } from './Close';
import { Footer } from './Footer';
import { FooterItem } from './FooterItem';

/**
 * [1] implementation of focus management for Drawer usage to support focus edge cases
 *     - (1:a) a ref used to return focus on the last focused element
 *     - (1:b) opt out of `@zendeskgarden/focus-jail` managing the focus
 *     - (1:c) implementation of the focus management effect inside the component
 *     - (1:d) set default props to match useFocusJail behavior
 */

const DrawerModalComponent = forwardRef<HTMLDivElement, IDrawerModalProps>(
  (
    { id, isOpen, onClose, backdropProps, appendToNode, focusOnMount, restoreFocus, ...props },
    ref
  ) => {
    const modalRef = useRef<HTMLDivElement | null>(null);
    const transitionRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLElement | null>(null); /* [1:a] */
    const theme = useContext(ThemeContext);
    const environment = useDocument(theme);
    const [isCloseButtonPresent, setIsCloseButtonPresent] = useState<boolean>(false);
    const [hasHeader, setHasHeader] = useState<boolean>(false);

    useFocusVisible({ scope: modalRef, relativeDocument: modalRef.current });

    const { getTitleProps, getCloseProps, getContentProps, getBackdropProps, getModalProps } =
      useModal({
        idPrefix: id,
        modalRef,
        focusOnMount: false /* [1:b] */,
        restoreFocus: false /* [1:b] */,
        environment,
        onClose
      });

    /* [1:c] */
    useEffect(() => {
      if (environment) {
        if (isOpen && modalRef.current) {
          if (restoreFocus) {
            triggerRef.current = activeElement(environment) as HTMLElement;
          }

          if (focusOnMount) {
            modalRef.current.focus();
          }
        }

        if (!isOpen && triggerRef.current) {
          triggerRef.current.focus();
        }
      }

      return () => {
        if (!(restoreFocus && isOpen)) {
          triggerRef.current = null;
        }
      };
    }, [environment, restoreFocus, focusOnMount, isOpen]);

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
        isCloseButtonPresent,
        hasHeader,
        setHasHeader,
        getTitleProps,
        getContentProps,
        getCloseProps,
        setIsCloseButtonPresent
      }),
      [isCloseButtonPresent, hasHeader, getTitleProps, getContentProps, getCloseProps]
    );

    const modalProps = getModalProps({
      'aria-describedby': undefined,
      ...(hasHeader ? {} : { 'aria-labelledby': undefined })
    }) as HTMLAttributes<HTMLDivElement>;

    // Derive aria attributes from props
    const attribute = hasHeader ? 'aria-labelledby' : 'aria-label';
    const defaultValue = hasHeader ? modalProps['aria-labelledby'] : 'Modal dialog';
    const labelValue = hasHeader ? modalProps['aria-labelledby'] : props['aria-label'];

    const ariaProps = {
      [attribute]: useText(
        DrawerModalComponent,
        { [attribute]: labelValue },
        attribute,
        defaultValue!
      )
    };

    if (!rootNode) {
      return null;
    }

    return ReactDOM.createPortal(
      <ModalsContext.Provider value={value}>
        <CSSTransition
          in={isOpen}
          timeout={250}
          unmountOnExit
          classNames="garden-drawer-transition"
          nodeRef={transitionRef}
        >
          <StyledBackdrop
            isAnimated
            {...(getBackdropProps(backdropProps) as HTMLAttributes<HTMLDivElement>)}
          >
            <StyledDrawerModal
              {...modalProps}
              {...ariaProps}
              {...props}
              ref={mergeRefs([ref, modalRef, transitionRef])}
            />
          </StyledBackdrop>
        </CSSTransition>
      </ModalsContext.Provider>,
      rootNode
    );
  }
);

DrawerModalComponent.displayName = 'DrawerModal';

DrawerModalComponent.propTypes = {
  backdropProps: PropTypes.object,
  focusOnMount: PropTypes.bool,
  restoreFocus: PropTypes.bool,
  onClose: PropTypes.func,
  appendToNode: PropTypes.any,
  isOpen: PropTypes.bool
};

DrawerModalComponent.defaultProps = {
  focusOnMount: true /* [1:d] */,
  restoreFocus: true /* [1:d] */
};

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const DrawerModal = DrawerModalComponent as typeof DrawerModalComponent & {
  Body: typeof Body;
  Close: typeof Close;
  Footer: typeof Footer;
  FooterItem: typeof FooterItem;
  Header: typeof Header;
};

DrawerModal.Body = Body;
DrawerModal.Close = Close;
DrawerModal.Footer = Footer;
DrawerModal.FooterItem = FooterItem;
DrawerModal.Header = Header;
