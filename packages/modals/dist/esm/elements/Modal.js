/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { forwardRef, useContext, useRef, useState, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';
import { useDocument, useText } from '@zendeskgarden/react-theming';
import { useModal } from '@zendeskgarden/container-modal';
import { mergeRefs } from 'react-merge-refs';
import isWindow from 'dom-helpers/isWindow';
import ownerDocument from 'dom-helpers/ownerDocument';
import ownerWindow from 'dom-helpers/ownerWindow';
import css from 'dom-helpers/css';
import getScrollbarSize from 'dom-helpers/scrollbarSize';
import { StyledBackdrop } from '../styled/StyledBackdrop.js';
import '../styled/StyledBody.js';
import '../styled/StyledClose.js';
import '../styled/StyledFooter.js';
import '../styled/StyledFooterItem.js';
import '../styled/StyledHeader.js';
import '../styled/StyledDangerIcon.js';
import { StyledModal } from '../styled/StyledModal.js';
import '../styled/StyledTooltipDialogBackdrop.js';
import '../styled/StyledTooltipWrapper.js';
import '../styled/StyledTooltipDialog.js';
import '../styled/StyledTooltipDialogTitle.js';
import '../styled/StyledTooltipDialogBody.js';
import '../styled/StyledTooltipDialogFooter.js';
import '../styled/StyledTooltipDialogFooterItem.js';
import '../styled/StyledTooltipDialogClose.js';
import '../styled/StyledDrawer.js';
import '../styled/StyledDrawerHeader.js';
import '../styled/StyledDrawerClose.js';
import '../styled/StyledDrawerBody.js';
import '../styled/StyledDrawerFooter.js';
import '../styled/StyledDrawerFooterItem.js';
import { ModalsContext } from '../utils/useModalContext.js';
import { Body } from './Body.js';
import { Close } from './Close.js';
import { Footer } from './Footer.js';
import { FooterItem } from './FooterItem.js';
import { Header } from './Header.js';

const isOverflowing = element => {
  const doc = ownerDocument(element);
  const win = ownerWindow(doc);
  const isBody = element && element.tagName.toLowerCase() === 'body';
  if (!isWindow(doc) && !isBody) {
    return element.scrollHeight > element.clientHeight;
  }
  const style = win.getComputedStyle(doc.body);
  const marginLeft = parseInt(style.getPropertyValue('margin-left'), 10);
  const marginRight = parseInt(style.getPropertyValue('margin-right'), 10);
  return marginLeft + doc.body.clientWidth + marginRight < win.innerWidth;
};
const ModalComponent = forwardRef((_ref, ref) => {
  let {
    backdropProps,
    children,
    onClose,
    isLarge,
    isCentered = true,
    isAnimated = true,
    id,
    appendToNode,
    focusOnMount,
    restoreFocus,
    ...modalProps
  } = _ref;
  const theme = useContext(ThemeContext);
  const modalRef = useRef(null);
  const environment = useDocument(theme);
  const [isCloseButtonPresent, setIsCloseButtonPresent] = useState(false);
  const [hasHeader, setHasHeader] = useState(false);
  const {
    getBackdropProps,
    getModalProps,
    getTitleProps,
    getContentProps,
    getCloseProps
  } = useModal({
    idPrefix: id,
    onClose,
    modalRef,
    focusOnMount,
    restoreFocus,
    environment
  });
  useEffect(() => {
    if (!environment) {
      return undefined;
    }
    const htmlElement = environment.querySelector('html');
    const bodyElement = environment.querySelector('body');
    let previousHtmlOverflow;
    let previousBodyPaddingRight;
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
  const value = useMemo(() => ({
    isLarge,
    isCloseButtonPresent,
    hasHeader,
    setHasHeader,
    getTitleProps,
    getContentProps,
    getCloseProps,
    setIsCloseButtonPresent
  }), [isLarge, hasHeader, isCloseButtonPresent, getTitleProps, getContentProps, getCloseProps]);
  const modalContainerProps = getModalProps({
    'aria-describedby': undefined,
    ...(hasHeader ? {} : {
      'aria-labelledby': undefined
    })
  });
  const attribute = hasHeader ? 'aria-labelledby' : 'aria-label';
  const defaultValue = hasHeader ? modalContainerProps['aria-labelledby'] : 'Modal dialog';
  const labelValue = hasHeader ? modalContainerProps['aria-labelledby'] : modalProps['aria-label'];
  const ariaProps = {
    [attribute]: useText(ModalComponent, {
      [attribute]: labelValue
    }, attribute, defaultValue, modalRef.current !== null )
  };
  if (!rootNode) {
    return null;
  }
  return createPortal(React__default.createElement(ModalsContext.Provider, {
    value: value
  }, React__default.createElement(StyledBackdrop, Object.assign({
    $isCentered: isCentered,
    $isAnimated: isAnimated
  }, getBackdropProps(backdropProps)), React__default.createElement(StyledModal, Object.assign({
    $isCentered: isCentered,
    $isAnimated: isAnimated,
    $isLarge: isLarge
  }, modalContainerProps, ariaProps, modalProps, {
    ref: mergeRefs([ref, modalRef])
  }), children))), rootNode);
});
ModalComponent.displayName = 'Modal';
ModalComponent.propTypes = {
  backdropProps: PropTypes.object,
  isLarge: PropTypes.bool,
  isAnimated: PropTypes.bool,
  isCentered: PropTypes.bool,
  focusOnMount: PropTypes.bool,
  restoreFocus: PropTypes.bool,
  onClose: PropTypes.func,
  appendToNode: PropTypes.any
};
const Modal = ModalComponent;
Modal.Body = Body;
Modal.Close = Close;
Modal.Footer = Footer;
Modal.FooterItem = FooterItem;
Modal.Header = Header;

export { Modal, ModalComponent };
