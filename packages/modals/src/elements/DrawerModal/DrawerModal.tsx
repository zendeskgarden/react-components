/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

/* eslint-disable */

import React, {
  useState,
  useEffect,
  useRef,
  useContext,
  useCallback,
  createRef,
  forwardRef,
  RefAttributes,
  HTMLAttributes,
  PropsWithoutRef,
  ForwardRefExoticComponent
} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import mergeRefs from 'react-merge-refs';
import { ThemeProps, DefaultTheme, ThemeContext } from 'styled-components';
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

export interface IDrawerModalProps {
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
  onClose?: (event: TransitionEvent) => void;
  /**
   * Enable drawer modal animation
   */
  isAnimated?: boolean;
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
  children?: any;
}

export const DrawerModal = forwardRef<
  HTMLDivElement,
  IDrawerModalProps & ThemeProps<DefaultTheme> & HTMLAttributes<HTMLDivElement>
>(
  (
    {
      id,
      isOpen,
      onClose,
      isAnimated,
      backdropProps,
      appendToNode,
      focusOnMount,
      restoreFocus,
      ...props
    },
    ref
  ) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const theme = useContext(ThemeContext);
    const environment = useDocument(theme);
    const { rtl } = theme;
    /**
     * The `showDrawer` local state is synced to `isOpen` prop. The DrawerModal component needs to control
     * local state in order to know when (CSS transition ends) to unmount the DrawerModal component.
     */
    const [showDrawer, setShowDrawer] = useState(false);

    useFocusVisible({ scope: showDrawer ? modalRef : createRef() });

    const unmountDrawer = useCallback(
      (event: TransitionEvent) => {
        if ((event.target as HTMLDivElement).getAttribute('role') === 'dialog') {
          setShowDrawer(false);
          onClose && onClose(event);
        }
      },
      [setShowDrawer, onClose]
    );

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
      onClose: () => {
        if (modalRef.current) {
          const { width } = modalRef.current.getBoundingClientRect();
          modalRef.current.addEventListener('transitionend', unmountDrawer);

          if (rtl) {
            modalRef.current.style.transform = 'translateX(0px)';
          } else {
            modalRef.current.style.right = `-${width}px`;
            modalRef.current.style.transform = `translateX(${width}px)`;
          }
        }
      }
    });

    useEffect(() => {
      if (modalRef.current) {
        const { width } = modalRef.current.getBoundingClientRect();

        if (isOpen) {
          setShowDrawer(true);
          modalRef.current.style.right = 'initial';

          if (rtl) {
            modalRef.current.style.left = `-${width}px`;
            modalRef.current.style.transform = `translateX(${width}px)`;
          } else {
            modalRef.current.style.right = `-${width}px`;
            modalRef.current.style.transform = `translateX(-${width}px)`;
          }
        } else {
          modalRef.current.addEventListener('transitionend', unmountDrawer);

          if (rtl) {
            modalRef.current.style.transform = 'translateX(0px)';
          } else {
            modalRef.current.style.right = `-${width}px`;
            modalRef.current.style.transform = `translateX(${width}px)`;
          }

          return () => {
            modalRef.current &&
              modalRef.current.removeEventListener('transitionend', unmountDrawer);
          };
        }
      }
    }, [isOpen, modalRef.current]);

    useEffect(() => {
      if (!environment) {
        return undefined;
      }

      const bodyElement = environment.querySelector('body');

      if (bodyElement && showDrawer) {
        const previousBodyOverflow = bodyElement.style.overflow;

        bodyElement.style.overflow = 'hidden';

        return () => {
          bodyElement.style.overflow = previousBodyOverflow;
        };
      }

      return undefined;
    }, [environment, showDrawer]);

    const value = {
      getTitleProps,
      getContentProps,
      getCloseProps
    };

    return showDrawer || isOpen
      ? ReactDOM.createPortal(
          <ModalsContext.Provider value={value}>
            <StyledDrawerModalBackdrop
              {...(getBackdropProps({ isAnimated, ...backdropProps }) as any)}
            >
              <StyledDrawerModal
                {...getModalProps({ ref: mergeRefs([ref, modalRef]), ...props } as any)}
              />
            </StyledDrawerModalBackdrop>
          </ModalsContext.Provider>,
          appendToNode!
        )
      : null;
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
  isAnimated: PropTypes.bool,
  focusOnMount: PropTypes.bool,
  restoreFocus: PropTypes.bool,
  onClose: PropTypes.func,
  appendToNode: PropTypes.any,
  id: PropTypes.string
};

DrawerModal.defaultProps = {
  isAnimated: true,
  appendToNode: document.body
};
