/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useEffect, useMemo, useContext, HTMLAttributes, useRef } from 'react';
import { createPortal } from 'react-dom';
import { ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';
import { useDocument } from '@zendeskgarden/react-theming';
import { useModal } from '@zendeskgarden/container-modal';
import { useFocusVisible } from '@zendeskgarden/container-focusvisible';
import mergeRefs from 'react-merge-refs';
import isWindow from 'dom-helpers/isWindow';
import ownerDocument from 'dom-helpers/ownerDocument';
import ownerWindow from 'dom-helpers/ownerWindow';
import css from 'dom-helpers/css';
import getScrollbarSize from 'dom-helpers/scrollbarSize';

import { StyledModal, StyledBackdrop } from '../styled';
import { ModalsContext } from '../utils/useModalContext';

const isOverflowing = (element: Element) => {
  const doc = ownerDocument(element);
  const win = ownerWindow(doc as unknown as Element);

  const isBody = element && element.tagName.toLowerCase() === 'body';

  /* istanbul ignore next */
  if (!isWindow(doc) && !isBody) {
    return element.scrollHeight > element.clientHeight;
  }

  const style = win.getComputedStyle(doc.body);
  const marginLeft = parseInt(style.getPropertyValue('margin-left'), 10);
  const marginRight = parseInt(style.getPropertyValue('margin-right'), 10);

  return marginLeft + doc.body.clientWidth + marginRight < win.innerWidth;
};

export interface IModalProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Passes HTML attributes to the backdrop element
   */
  backdropProps?: HTMLAttributes<HTMLDivElement>;
  /**
   * Handles close actions. Can be triggered from the backdrop and from the close icon.
   *
   * @param {Object} event The DOM event that triggered the close action
   */
  onClose?: (event: KeyboardEvent | MouseEvent) => void;
  /**
   * Centers the modal on the backdrop
   */
  isCentered?: boolean;
  /**
   * Animates the modal
   */
  isAnimated?: boolean;
  /**
   * Sets the root ID. A unique ID is created if none is provided.
   */
  id?: string;
  /**
   * Defines the DOM element that the modal will attatch to
   */
  appendToNode?: Element;
  /**
   * Applies large styling
   */
  isLarge?: boolean;
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
export const Modal = React.forwardRef<HTMLDivElement, IModalProps>(
  (
    {
      backdropProps,
      children,
      onClose,
      isLarge,
      isCentered,
      isAnimated,
      id,
      appendToNode,
      focusOnMount,
      restoreFocus,
      ...modalProps
    },
    ref
  ) => {
    const theme = useContext(ThemeContext);
    const modalRef = useRef<HTMLDivElement>(null);
    const environment = useDocument(theme);

    const { getBackdropProps, getModalProps, getTitleProps, getContentProps, getCloseProps } =
      useModal({
        id,
        onClose,
        modalRef,
        focusOnMount,
        restoreFocus
      });

    useFocusVisible({ scope: modalRef, relativeDocument: environment });

    useEffect(() => {
      if (!environment) {
        return undefined;
      }

      const htmlElement = environment.querySelector('html');
      const bodyElement = environment.querySelector('body');
      let previousHtmlOverflow: string;
      let previousBodyPaddingRight: string;

      if (bodyElement) {
        if (isOverflowing(bodyElement)) {
          const scrollbarSize = getScrollbarSize();
          const bodyPaddingRight = parseInt(css(bodyElement, 'paddingRight') || '0', 10);

          previousBodyPaddingRight = bodyElement.style.paddingRight;
          bodyElement.style.paddingRight = `${bodyPaddingRight + scrollbarSize}px`;
        }

        if (htmlElement) {
          previousHtmlOverflow = htmlElement.style.overflow;

          htmlElement.style.overflow = 'hidden';
        }

        return () => {
          if (htmlElement) {
            htmlElement.style.overflow = previousHtmlOverflow;
          }

          bodyElement.style.paddingRight = previousBodyPaddingRight;
        };
      }

      return undefined;
    }, [environment]);

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
        isLarge,
        getTitleProps,
        getContentProps,
        getCloseProps
      }),
      [isLarge, getTitleProps, getContentProps, getCloseProps]
    );

    if (!rootNode) {
      return null;
    }

    return createPortal(
      <ModalsContext.Provider value={value}>
        <StyledBackdrop
          {...(getBackdropProps({ isCentered, isAnimated, ...backdropProps }) as any)}
        >
          <StyledModal
            {...(getModalProps({
              isCentered,
              isAnimated,
              isLarge,
              ref: mergeRefs([ref, modalRef]),
              ...modalProps
            }) as any)}
          >
            {children}
          </StyledModal>
        </StyledBackdrop>
      </ModalsContext.Provider>,
      rootNode
    );
  }
);

Modal.displayName = 'Modal';

Modal.propTypes = {
  backdropProps: PropTypes.object,
  isLarge: PropTypes.bool,
  isAnimated: PropTypes.bool,
  isCentered: PropTypes.bool,
  focusOnMount: PropTypes.bool,
  restoreFocus: PropTypes.bool,
  onClose: PropTypes.func,
  appendToNode: PropTypes.any,
  id: PropTypes.string
};

Modal.defaultProps = {
  isAnimated: true,
  isCentered: true
};
