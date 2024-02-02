/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, {
  HTMLAttributes,
  useEffect,
  useMemo,
  useContext,
  useRef,
  useState,
  forwardRef
} from 'react';
import { createPortal } from 'react-dom';
import { ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';
import { useDocument, useText } from '@zendeskgarden/react-theming';
import { useModal } from '@zendeskgarden/container-modal';
import { useFocusVisible } from '@zendeskgarden/container-focusvisible';
import { mergeRefs } from 'react-merge-refs';
import isWindow from 'dom-helpers/isWindow';
import ownerDocument from 'dom-helpers/ownerDocument';
import ownerWindow from 'dom-helpers/ownerWindow';
import css from 'dom-helpers/css';
import getScrollbarSize from 'dom-helpers/scrollbarSize';
import { StyledModal, StyledBackdrop } from '../styled';
import { IModalProps } from '../types';
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

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Modal = forwardRef<HTMLDivElement, IModalProps>(
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
    const [isCloseButtonPresent, setIsCloseButtonPresent] = useState<boolean>(false);
    const [hasHeader, setHasHeader] = useState<boolean>(false);

    const { getBackdropProps, getModalProps, getTitleProps, getContentProps, getCloseProps } =
      useModal({
        idPrefix: id,
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
        isCloseButtonPresent,
        hasHeader,
        setHasHeader,
        getTitleProps,
        getContentProps,
        getCloseProps,
        setIsCloseButtonPresent
      }),
      [isLarge, hasHeader, isCloseButtonPresent, getTitleProps, getContentProps, getCloseProps]
    );

    const modalContainerProps = getModalProps({
      'aria-describedby': undefined,
      ...(hasHeader ? {} : { 'aria-labelledby': undefined })
    }) as HTMLAttributes<HTMLDivElement>;

    // Derive aria attributes from props
    const attribute = hasHeader ? 'aria-labelledby' : 'aria-label';
    const defaultValue = hasHeader ? modalContainerProps['aria-labelledby'] : 'Modal dialog';
    const labelValue = hasHeader
      ? modalContainerProps['aria-labelledby']
      : modalProps['aria-label'];

    const ariaProps = {
      [attribute]: useText(Modal, { [attribute]: labelValue }, attribute, defaultValue!)
    };

    if (!rootNode) {
      return null;
    }

    return createPortal(
      <ModalsContext.Provider value={value}>
        <StyledBackdrop
          isCentered={isCentered}
          isAnimated={isAnimated}
          {...(getBackdropProps(backdropProps) as HTMLAttributes<HTMLDivElement>)}
        >
          <StyledModal
            isCentered={isCentered}
            isAnimated={isAnimated}
            isLarge={isLarge}
            {...modalContainerProps}
            {...ariaProps}
            {...modalProps}
            ref={mergeRefs([ref, modalRef])}
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
  appendToNode: PropTypes.any
};

Modal.defaultProps = {
  isAnimated: true,
  isCentered: true
};
