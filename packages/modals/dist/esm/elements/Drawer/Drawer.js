/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { forwardRef, useRef, useContext, useState, useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { mergeRefs } from 'react-merge-refs';
import { CSSTransition } from 'react-transition-group';
import { ThemeContext } from 'styled-components';
import { useModal } from '@zendeskgarden/container-modal';
import { useDocument, useText } from '@zendeskgarden/react-theming';
import activeElement from 'dom-helpers/activeElement';
import { ModalsContext } from '../../utils/useModalContext.js';
import { StyledBackdrop } from '../../styled/StyledBackdrop.js';
import '../../styled/StyledBody.js';
import '../../styled/StyledClose.js';
import '../../styled/StyledFooter.js';
import '../../styled/StyledFooterItem.js';
import '../../styled/StyledHeader.js';
import '../../styled/StyledDangerIcon.js';
import '../../styled/StyledModal.js';
import '../../styled/StyledTooltipDialogBackdrop.js';
import '../../styled/StyledTooltipWrapper.js';
import '../../styled/StyledTooltipDialog.js';
import '../../styled/StyledTooltipDialogTitle.js';
import '../../styled/StyledTooltipDialogBody.js';
import '../../styled/StyledTooltipDialogFooter.js';
import '../../styled/StyledTooltipDialogFooterItem.js';
import '../../styled/StyledTooltipDialogClose.js';
import { StyledDrawer } from '../../styled/StyledDrawer.js';
import '../../styled/StyledDrawerHeader.js';
import '../../styled/StyledDrawerClose.js';
import '../../styled/StyledDrawerBody.js';
import '../../styled/StyledDrawerFooter.js';
import '../../styled/StyledDrawerFooterItem.js';
import { Header } from './Header.js';
import { Body } from './Body.js';
import { Close } from './Close.js';
import { Footer } from './Footer.js';
import { FooterItem } from './FooterItem.js';

const DrawerComponent = forwardRef(({
  id,
  isOpen,
  onClose,
  backdropProps,
  appendToNode,
  focusOnMount = true,
  restoreFocus = true,
  ...props
}, ref) => {
  const modalRef = useRef(null);
  const transitionRef = useRef(null);
  const triggerRef = useRef(null);
  const theme = useContext(ThemeContext);
  const environment = useDocument(theme);
  const [isCloseButtonPresent, setIsCloseButtonPresent] = useState(false);
  const [hasHeader, setHasHeader] = useState(false);
  const {
    getTitleProps,
    getCloseProps,
    getContentProps,
    getBackdropProps,
    getModalProps
  } = useModal({
    idPrefix: id,
    modalRef,
    focusOnMount: false ,
    restoreFocus: false ,
    environment,
    onClose
  });
  useEffect(() => {
    if (environment) {
      if (isOpen && modalRef.current) {
        if (restoreFocus) {
          triggerRef.current = activeElement(environment);
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
    let previousHtmlOverflow;
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
  const value = useMemo(() => ({
    isCloseButtonPresent,
    hasHeader,
    setHasHeader,
    getTitleProps,
    getContentProps,
    getCloseProps,
    setIsCloseButtonPresent
  }), [isCloseButtonPresent, hasHeader, getTitleProps, getContentProps, getCloseProps]);
  const modalProps = getModalProps({
    'aria-describedby': undefined,
    ...(hasHeader ? {} : {
      'aria-labelledby': undefined
    })
  });
  const attribute = hasHeader ? 'aria-labelledby' : 'aria-label';
  const defaultValue = hasHeader ? modalProps['aria-labelledby'] : 'Modal dialog';
  const labelValue = hasHeader ? modalProps['aria-labelledby'] : props['aria-label'];
  const ariaProps = {
    [attribute]: useText(DrawerComponent, {
      [attribute]: labelValue
    }, attribute, defaultValue, modalRef.current !== null )
  };
  if (!rootNode) {
    return null;
  }
  return ReactDOM.createPortal(React__default.createElement(ModalsContext.Provider, {
    value: value
  }, React__default.createElement(CSSTransition, {
    in: isOpen,
    timeout: 250,
    unmountOnExit: true,
    classNames: "garden-drawer-transition",
    nodeRef: transitionRef
  }, React__default.createElement(StyledBackdrop, Object.assign({
    $isAnimated: true
  }, getBackdropProps(backdropProps)), React__default.createElement(StyledDrawer, Object.assign({}, modalProps, ariaProps, props, {
    ref: mergeRefs([ref, modalRef, transitionRef])
  }))))), rootNode);
});
DrawerComponent.displayName = 'Drawer';
DrawerComponent.propTypes = {
  backdropProps: PropTypes.object,
  focusOnMount: PropTypes.bool,
  restoreFocus: PropTypes.bool,
  onClose: PropTypes.func,
  appendToNode: PropTypes.any,
  isOpen: PropTypes.bool
};
const Drawer = DrawerComponent;
Drawer.Body = Body;
Drawer.Close = Close;
Drawer.Footer = Footer;
Drawer.FooterItem = FooterItem;
Drawer.Header = Header;

export { Drawer };
