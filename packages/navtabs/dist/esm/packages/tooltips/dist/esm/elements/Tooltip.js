/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { useContext, useRef, useEffect, cloneElement } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import { mergeRefs } from 'react-merge-refs';
import { useTooltip } from '../../../../../node_modules/@zendeskgarden/container-tooltip/dist/index.esm.js';
import { getControlledValue, composeEventHandlers } from '../../../../../node_modules/@zendeskgarden/container-utilities/dist/index.esm.js';
import { StyledTooltip } from '../styled/StyledTooltip.js';
import { StyledTooltipWrapper } from '../styled/StyledTooltipWrapper.js';
import { PLACEMENT, SIZE, TYPE } from '../types/index.js';
import { useFloating, autoPlacement, flip } from '../../../../../node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.js';
import { DEFAULT_THEME, getFloatingPlacements } from '@zendeskgarden/react-theming';
import { toSize } from './utils.js';
import { Paragraph } from './Paragraph.js';
import { Title } from './Title.js';
import { platform, autoUpdate } from '../../../../../node_modules/@floating-ui/dom/dist/floating-ui.dom.js';

const PLACEMENT_DEFAULT = 'top';
const TooltipComponent = _ref => {
  let {
    id,
    delayMS,
    isInitialVisible,
    content,
    refKey,
    placement: _placement,
    fallbackPlacements: _fallbackPlacements,
    children,
    hasArrow,
    size,
    type,
    appendToNode,
    zIndex,
    isVisible: externalIsVisible,
    onFocus,
    onBlur,
    ...props
  } = _ref;
  const theme = useContext(ThemeContext) || DEFAULT_THEME;
  const triggerRef = useRef(null);
  const floatingRef = useRef(null);
  const {
    isVisible,
    getTooltipProps,
    getTriggerProps,
    openTooltip,
    closeTooltip
  } = useTooltip({
    id,
    delayMilliseconds: delayMS,
    isVisible: isInitialVisible,
    triggerRef
  });
  const controlledIsVisible = getControlledValue(externalIsVisible, isVisible);
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
      reference: triggerRef?.current,
      floating: floatingRef?.current
    },
    placement: floatingPlacement,
    middleware: _placement === 'auto' ? [autoPlacement()] : [flip({
      fallbackPlacements
    })]
  });
  useEffect(() => {
    let cleanup;
    if (controlledIsVisible && refs.reference.current && refs.floating.current) {
      cleanup = autoUpdate(refs.reference.current, refs.floating.current, update, {
        elementResize: typeof ResizeObserver === 'function'
      });
    }
    return () => cleanup && cleanup();
  }, [controlledIsVisible, refs.reference, refs.floating, update]);
  const Child = React__default.Children.only(children);
  const Node = React__default.createElement(StyledTooltipWrapper, {
    ref: floatingRef,
    style: {
      transform
    },
    $zIndex: zIndex,
    "aria-hidden": !controlledIsVisible
  }, React__default.createElement(StyledTooltip, Object.assign({
    $hasArrow: hasArrow,
    $placement: placement,
    $size: toSize(size, type),
    $type: type
  }, getTooltipProps({
    'aria-hidden': !controlledIsVisible,
    onBlur: composeEventHandlers(onBlur, () => closeTooltip(0)),
    onFocus: composeEventHandlers(onFocus, openTooltip),
    ...props
  })), content));
  return React__default.createElement(React__default.Fragment, null, cloneElement(Child, getTriggerProps({
    ...Child.props,
    [refKey]: mergeRefs([triggerRef, Child.ref ? Child.ref : null])
  })), appendToNode ? createPortal(Node, appendToNode) : Node);
};
TooltipComponent.displayName = 'Tooltip';
TooltipComponent.propTypes = {
  appendToNode: PropTypes.any,
  hasArrow: PropTypes.bool,
  delayMS: PropTypes.number,
  id: PropTypes.string,
  content: PropTypes.node.isRequired,
  placement: PropTypes.oneOf(PLACEMENT),
  fallbackPlacements: PropTypes.arrayOf(PropTypes.oneOf(PLACEMENT.filter(placement => placement !== 'auto'))),
  size: PropTypes.oneOf(SIZE),
  type: PropTypes.oneOf(TYPE),
  zIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  isInitialVisible: PropTypes.bool,
  refKey: PropTypes.string
};
TooltipComponent.defaultProps = {
  hasArrow: true,
  type: 'dark',
  placement: PLACEMENT_DEFAULT,
  delayMS: 500,
  refKey: 'ref'
};
const Tooltip = TooltipComponent;
Tooltip.Paragraph = Paragraph;
Tooltip.Title = Title;

export { PLACEMENT_DEFAULT, Tooltip, TooltipComponent };
