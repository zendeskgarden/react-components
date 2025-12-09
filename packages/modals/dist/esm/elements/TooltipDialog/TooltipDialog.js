/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { useContext, useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import { useFloating, platform, offset, autoPlacement, flip, autoUpdate } from '@floating-ui/react-dom';
import { useModal } from '@zendeskgarden/container-modal';
import { mergeRefs } from 'react-merge-refs';
import { TooltipDialogContext } from '../../utils/useTooltipDialogContext.js';
import '../../styled/StyledBackdrop.js';
import '../../styled/StyledBody.js';
import '../../styled/StyledClose.js';
import '../../styled/StyledFooter.js';
import '../../styled/StyledFooterItem.js';
import '../../styled/StyledHeader.js';
import '../../styled/StyledDangerIcon.js';
import '../../styled/StyledModal.js';
import { StyledTooltipDialogBackdrop } from '../../styled/StyledTooltipDialogBackdrop.js';
import { StyledTooltipWrapper } from '../../styled/StyledTooltipWrapper.js';
import { StyledTooltipDialog } from '../../styled/StyledTooltipDialog.js';
import '../../styled/StyledTooltipDialogTitle.js';
import '../../styled/StyledTooltipDialogBody.js';
import '../../styled/StyledTooltipDialogFooter.js';
import '../../styled/StyledTooltipDialogFooterItem.js';
import '../../styled/StyledTooltipDialogClose.js';
import '../../styled/StyledDrawer.js';
import '../../styled/StyledDrawerHeader.js';
import '../../styled/StyledDrawerClose.js';
import '../../styled/StyledDrawerBody.js';
import '../../styled/StyledDrawerFooter.js';
import '../../styled/StyledDrawerFooterItem.js';
import { PLACEMENT } from '../../types/index.js';
import { Title } from './Title.js';
import { Body } from './Body.js';
import { Close } from './Close.js';
import { Footer } from './Footer.js';
import { FooterItem } from './FooterItem.js';
import { DEFAULT_THEME, useDocument, getFloatingPlacements, useText } from '@zendeskgarden/react-theming';
import { createPortal } from 'react-dom';

const PLACEMENT_DEFAULT = 'top';
const TooltipDialogComponent = React__default.forwardRef((_ref, ref) => {
  let {
    appendToNode,
    referenceElement,
    placement: _placement = 'auto',
    fallbackPlacements: _fallbackPlacements,
    offset: _offset,
    onClose,
    hasArrow = true,
    keepMounted,
    isAnimated,
    zIndex,
    backdropProps,
    focusOnMount = true,
    restoreFocus = true,
    id,
    ...props
  } = _ref;
  const theme = useContext(ThemeContext) || DEFAULT_THEME;
  const environment = useDocument(theme);
  const previousReferenceElementRef = useRef();
  const modalRef = useRef(null);
  const transitionRef = useRef(null);
  const [floatingElement, setFloatingElement] = useState();
  const [hasTitle, setHasTitle] = useState(false);
  const {
    getTitleProps,
    getCloseProps,
    getContentProps,
    getBackdropProps,
    getModalProps
  } = useModal({
    idPrefix: id,
    onClose,
    modalRef,
    focusOnMount,
    restoreFocus: false,
    environment
  });
  const [floatingPlacement, fallbackPlacements] = getFloatingPlacements(theme, _placement === 'auto' ? PLACEMENT_DEFAULT : _placement, _fallbackPlacements);
  const {
    refs,
    placement,
    update,
    floatingStyles: {
      transform
    }
  } = useFloating({
    platform: {
      ...platform,
      isRTL: () => theme.rtl
    },
    elements: {
      reference: referenceElement,
      floating: floatingElement
    },
    placement: floatingPlacement,
    middleware: [offset(_offset === undefined ? theme.space.base * 3 : _offset), _placement === 'auto' ? autoPlacement() : flip({
      fallbackPlacements
    })]
  });
  useEffect(() => {
    let cleanup;
    if (referenceElement && floatingElement && refs.reference.current && refs.floating.current) {
      cleanup = autoUpdate(refs.reference.current, refs.floating.current, update, {
        elementResize: typeof ResizeObserver === 'function'
      });
    }
    return () => cleanup && cleanup();
  }, [referenceElement, floatingElement, refs.reference, refs.floating, update]);
  useEffect(() => {
    if (!referenceElement && previousReferenceElementRef.current && restoreFocus) {
      previousReferenceElementRef.current.focus();
    }
    previousReferenceElementRef.current = referenceElement;
  }, [referenceElement, restoreFocus]);
  const modalProps = getModalProps({
    'aria-describedby': undefined,
    ...(hasTitle ? {} : {
      'aria-labelledby': undefined
    })
  });
  const attribute = hasTitle ? 'aria-labelledby' : 'aria-label';
  const defaultValue = hasTitle ? modalProps['aria-labelledby'] : 'Modal dialog';
  const labelValue = hasTitle ? modalProps['aria-labelledby'] : props['aria-label'];
  const ariaProps = {
    [attribute]: useText(TooltipDialogComponent, {
      [attribute]: labelValue
    }, attribute, defaultValue, modalRef.current !== null )
  };
  const value = {
    hasTitle,
    setHasTitle,
    getTitleProps,
    getContentProps,
    getCloseProps
  };
  const Node = React__default.createElement(CSSTransition, {
    unmountOnExit: !keepMounted,
    timeout: isAnimated ? 200 : 0,
    in: Boolean(referenceElement),
    classNames: isAnimated ? 'garden-tooltip-modal-transition' : '',
    nodeRef: transitionRef,
    onEntered: () => {
      if (keepMounted && focusOnMount && modalRef.current) {
        modalRef.current.focus();
      }
    }
  }, transitionState => {
    const isHidden = keepMounted && transitionState === 'exited';
    return React__default.createElement(TooltipDialogContext.Provider, {
      value: value
    }, React__default.createElement(StyledTooltipDialogBackdrop, Object.assign({}, getBackdropProps(), backdropProps, {
      ref: transitionRef,
      "aria-hidden": isHidden ? true : undefined
    }), React__default.createElement(StyledTooltipWrapper, {
      ref: setFloatingElement,
      style: {
        transform
      },
      $placement: placement,
      $zIndex: zIndex,
      $isAnimated: isAnimated
    }, React__default.createElement(StyledTooltipDialog, Object.assign({
      $transitionState: transitionState,
      $placement: placement,
      $hasArrow: hasArrow,
      $isAnimated: isAnimated,
      inert: isHidden ? '' : undefined
    }, modalProps, ariaProps, props, {
      ref: mergeRefs([modalRef, ref])
    })))));
  });
  return appendToNode ? createPortal(Node, appendToNode) : Node;
});
TooltipDialogComponent.displayName = 'TooltipDialog';
TooltipDialogComponent.propTypes = {
  appendToNode: PropTypes.any,
  referenceElement: PropTypes.any,
  placement: PropTypes.any,
  fallbackPlacements: PropTypes.arrayOf(PropTypes.oneOf(PLACEMENT.filter(placement => placement !== 'auto'))),
  isAnimated: PropTypes.bool,
  hasArrow: PropTypes.bool,
  keepMounted: PropTypes.bool,
  zIndex: PropTypes.number,
  onClose: PropTypes.func,
  backdropProps: PropTypes.any,
  focusOnMount: PropTypes.bool,
  restoreFocus: PropTypes.bool
};
const TooltipDialog = TooltipDialogComponent;
TooltipDialog.Body = Body;
TooltipDialog.Close = Close;
TooltipDialog.Footer = Footer;
TooltipDialog.FooterItem = FooterItem;
TooltipDialog.Title = Title;

export { TooltipDialog };
