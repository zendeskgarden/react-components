/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useEffect, HTMLAttributes } from 'react';
import { createPortal } from 'react-dom';
import { ThemeProps, DefaultTheme } from 'styled-components';
import PropTypes from 'prop-types';
import { useDocument, withTheme } from '@zendeskgarden/react-theming';
import { useModal } from '@zendeskgarden/container-modal';
import { useFocusVisible } from '@zendeskgarden/container-focusvisible';
import { useCombinedRefs } from '@zendeskgarden/container-utilities';
import isWindow from 'dom-helpers/isWindow';
import ownerDocument from 'dom-helpers/ownerDocument';
import ownerWindow from 'dom-helpers/ownerWindow';
import css from 'dom-helpers/css';
import getScrollbarSize from 'dom-helpers/scrollbarSize';

import { StyledModal, StyledBackdrop } from '../styled';
import { ModalsContext } from '../utils/useModalContext';

const isOverflowing = (element: Element) => {
  const doc = ownerDocument(element);
  const win = ownerWindow((doc as unknown) as Element);

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

export interface IModalProps {
  /**
   * HTML attributes to spread onto backdrop element
   */
  backdropProps?: HTMLAttributes<HTMLDivElement>;
  /**
   * Callback when a close action has been completed.
   * Can be triggered from the backdrop and Close icon.
   * @param {Object} event - DOM event that triggered the close action
   */
  onClose?: (event: KeyboardEvent | MouseEvent) => void;
  /**
   * Center the modal on the backdrop
   */
  isCentered?: boolean;
  /**
   * Enable modal animation
   */
  isAnimated?: boolean;
  /**
   * The root ID to use for descendants. A unique ID is created if none is provided.
   **/
  id?: string;
  /**
   * The DOM element where the modal will be rendered to
   **/
  appendToNode?: Element;
  /**
   * Enable large modal styling
   */
  isLarge?: boolean;
}

/**
 * High-level abstraction for basic Modal implementations. Accepts all `<div>` props.
 */
export const Modal = withTheme(
  React.forwardRef<
    HTMLDivElement,
    IModalProps & ThemeProps<DefaultTheme> & HTMLAttributes<HTMLDivElement>
  >(
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
        theme,
        ...modalProps
      },
      ref
    ) => {
      const modalRef = useCombinedRefs(ref);
      const environment = useDocument(theme);

      const {
        getBackdropProps,
        getModalProps,
        getTitleProps,
        getContentProps,
        getCloseProps
      } = useModal({ id, onClose, modalRef });

      useFocusVisible({ scope: modalRef });

      useEffect(() => {
        if (!environment) {
          return undefined;
        }

        const bodyElement = environment.querySelector('body');
        let previousBodyPaddingRight: string;

        if (bodyElement) {
          if (isOverflowing(bodyElement)) {
            const scrollbarSize = getScrollbarSize();
            const bodyPaddingRight = parseInt(css(bodyElement, 'paddingRight') || '0', 10);

            previousBodyPaddingRight = bodyElement.style.paddingRight;
            bodyElement.style.paddingRight = `${bodyPaddingRight + scrollbarSize}px`;
          }

          const previousBodyOverflow = bodyElement.style.overflow;

          bodyElement.style.overflow = 'hidden';

          return () => {
            bodyElement.style.overflow = previousBodyOverflow;
            bodyElement.style.paddingRight = previousBodyPaddingRight;
          };
        }

        return undefined;
      }, [environment]);

      const value = {
        isLarge,
        getTitleProps,
        getContentProps,
        getCloseProps
      };

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
                ref: modalRef,
                ...modalProps
              }) as any)}
            >
              {children}
            </StyledModal>
          </StyledBackdrop>
        </ModalsContext.Provider>,
        appendToNode!
      );
    }
  )
) as React.FC<IModalProps & HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;

Modal.displayName = 'Modal';

Modal.propTypes = {
  children: PropTypes.any,
  backdropProps: PropTypes.object,
  isLarge: PropTypes.bool,
  isAnimated: PropTypes.bool,
  isCentered: PropTypes.bool,
  onClose: PropTypes.func,
  appendToNode: PropTypes.instanceOf(Element),
  id: PropTypes.string
};

Modal.defaultProps = {
  isAnimated: true,
  isCentered: true,
  appendToNode: document.body
};
