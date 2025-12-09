/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
'use strict';

var React = require('react');
var styled = require('styled-components');
var reactTheming = require('@zendeskgarden/react-theming');
var reactDom$1 = require('react-dom');
var PropTypes = require('prop-types');
var reactMergeRefs = require('react-merge-refs');
var containerTooltip = require('@zendeskgarden/container-tooltip');
var containerUtilities = require('@zendeskgarden/container-utilities');
var reactDom = require('@floating-ui/react-dom');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);
var styled__default = /*#__PURE__*/_interopDefault(styled);
var PropTypes__default = /*#__PURE__*/_interopDefault(PropTypes);

const COMPONENT_ID$2 = 'tooltip.paragraph';
const StyledParagraph = styled__default.default.p.attrs({
  'data-garden-id': COMPONENT_ID$2,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledParagraph",
  componentId: "sc-wuqkfc-0"
})(["margin:0;", ";"], reactTheming.componentStyles);

const COMPONENT_ID$1 = 'tooltip.title';
const StyledTitle = styled__default.default.strong.attrs({
  'data-garden-id': COMPONENT_ID$1,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledTitle",
  componentId: "sc-vnjcvz-0"
})(["display:none;margin:0;font-weight:", ";", ";"], props => props.theme.fontWeights.semibold, reactTheming.componentStyles);

const COMPONENT_ID = 'tooltip.tooltip';
const sizeStyles = ({
  theme,
  $hasArrow,
  $placement,
  $size
}) => {
  let margin = `${theme.space.base * 1.5}px`;
  let borderRadius = theme.borderRadii.sm;
  let padding = '0 1em';
  let maxWidth;
  let overflowWrap;
  let whiteSpace = 'nowrap';
  let lineHeight = reactTheming.getLineHeight(theme.space.base * 5, theme.fontSizes.sm);
  let fontSize = theme.fontSizes.sm;
  let titleDisplay;
  let paragraphMarginTop;
  let wordWrap;
  if ($size !== 'small') {
    borderRadius = theme.borderRadii.md;
    overflowWrap = 'break-word';
    whiteSpace = 'normal';
    wordWrap = 'break-word';
  }
  if ($size === 'extra-large') {
    padding = `${theme.space.base * 10}px`;
    maxWidth = `460px`;
    lineHeight = reactTheming.getLineHeight(theme.space.base * 5, theme.fontSizes.md);
    paragraphMarginTop = `${theme.space.base * 2.5}px`;
  } else if ($size === 'large') {
    padding = `${theme.space.base * 5}px`;
    maxWidth = `270px`;
    lineHeight = reactTheming.getLineHeight(theme.space.base * 5, theme.fontSizes.md);
    paragraphMarginTop = `${theme.space.base * 2}px`;
  } else if ($size === 'medium') {
    padding = '1em';
    maxWidth = `140px`;
    lineHeight = reactTheming.getLineHeight(theme.space.base * 4, theme.fontSizes.sm);
  }
  if ($size === 'extra-large' || $size === 'large') {
    fontSize = theme.fontSizes.md;
    titleDisplay = 'block';
  }
  let arrowSize;
  let arrowShift;
  if ($hasArrow) {
    if ($size === 'small') {
      arrowSize = margin;
      if (['left-start', 'left-end', 'right-start', 'right-end'].includes($placement)) {
        arrowShift = `-${theme.borderRadii.md}px`;
      } else {
        arrowShift = '0';
      }
    } else if ($size === 'medium') {
      arrowSize = margin;
    } else if ($size === 'large') {
      margin = `${theme.space.base * 2}px`;
      arrowSize = margin;
    } else if ($size === 'extra-large') {
      margin = `${theme.space.base * 3}px`;
      arrowSize = `${theme.space.base * 2.5}px`;
    }
  }
  return styled.css(["margin:", ";border-radius:", ";padding:", ";max-width:", ";line-height:", ";word-wrap:", ";white-space:", ";font-size:", ";overflow-wrap:", ";", ";", "{margin-top:", ";}", "{display:", ";}"], margin, borderRadius, padding, maxWidth, lineHeight, wordWrap, whiteSpace, fontSize, overflowWrap, $hasArrow && reactTheming.arrowStyles(reactTheming.getArrowPosition(theme, $placement), {
    size: arrowSize,
    shift: arrowShift
  }), StyledParagraph, paragraphMarginTop, StyledTitle, titleDisplay);
};
const colorStyles = ({
  theme,
  $type
}) => {
  let borderColor;
  let boxShadow;
  let backgroundColor;
  let color;
  let titleColor;
  if ($type === 'light') {
    backgroundColor = reactTheming.getColor({
      theme,
      variable: 'background.raised'
    });
    borderColor = reactTheming.getColor({
      theme,
      variable: 'border.default'
    });
    boxShadow = theme.shadows.lg(`${theme.space.base * (theme.colors.base === 'dark' ? 4 : 5)}px`, `${theme.space.base * (theme.colors.base === 'dark' ? 6 : 7)}px`, reactTheming.getColor({
      variable: 'shadow.medium',
      theme
    }));
    color = reactTheming.getColor({
      theme,
      variable: 'foreground.subtle'
    });
    titleColor = reactTheming.getColor({
      theme,
      variable: 'foreground.default'
    });
  } else {
    backgroundColor = reactTheming.getColor({
      theme,
      hue: 'neutralHue',
      light: {
        shade: 900
      },
      dark: {
        shade: 700
      }
    });
    borderColor = backgroundColor;
    boxShadow = theme.shadows.lg(`${theme.space.base}px`, `${theme.space.base * 2}px`, reactTheming.getColor({
      variable: 'shadow.small',
      theme
    }));
    color = reactTheming.getColor({
      theme,
      hue: 'white'
    });
  }
  return styled.css(["border-color:", ";box-shadow:", ";background-color:", ";color:", ";", "{color:", ";}"], borderColor, boxShadow, backgroundColor, color, StyledTitle, titleColor);
};
const StyledTooltip = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledTooltip",
  componentId: "sc-gzzjq4-0"
})(["display:inline-block;border:", ";box-sizing:border-box;direction:", ";text-align:", ";font-weight:", ";", ";&[aria-hidden='true']{display:none;}", ";", ";"], props => props.theme.borders.sm, props => props.theme.rtl && 'rtl', props => props.theme.rtl ? 'right' : 'left', props => props.theme.fontWeights.regular, sizeStyles, colorStyles, reactTheming.componentStyles);

const StyledTooltipWrapper = styled__default.default.div.withConfig({
  displayName: "StyledTooltipWrapper",
  componentId: "sc-1b7q9q6-0"
})(["position:absolute;top:0;left:0;transition:opacity 10ms;opacity:1;z-index:", ";&[aria-hidden='true']{visibility:hidden;opacity:0;}"], props => props.$zIndex);

const Paragraph = React.forwardRef((props, ref) => React__default.default.createElement(StyledParagraph, Object.assign({
  ref: ref
}, props)));
Paragraph.displayName = 'Tooltip.Paragraph';

const Title = React.forwardRef((props, ref) => React__default.default.createElement(StyledTitle, Object.assign({
  ref: ref
}, props)));
Title.displayName = 'Tooltip.Title';

const PLACEMENT = ['auto', ...reactTheming.PLACEMENT];
const SIZE = ['small', 'medium', 'large', 'extra-large'];
const TYPE = ['light', 'dark'];

const toSize = (size, type) => {
  let retVal = size;
  if (retVal === undefined) {
    retVal = type === 'dark' ? 'small' : 'large';
  }
  return retVal;
};

const PLACEMENT_DEFAULT = 'top';
const TooltipComponent = ({
  id,
  delayMS = 500,
  isInitialVisible,
  content,
  refKey = 'ref',
  placement: _placement = PLACEMENT_DEFAULT,
  fallbackPlacements: _fallbackPlacements,
  children,
  hasArrow = true,
  size,
  type = 'dark',
  appendToNode,
  zIndex,
  isVisible: externalIsVisible,
  onFocus,
  onBlur,
  ...props
}) => {
  const theme = React.useContext(styled.ThemeContext) || reactTheming.DEFAULT_THEME;
  const triggerRef = React.useRef(null);
  const floatingRef = React.useRef(null);
  const {
    isVisible,
    getTooltipProps,
    getTriggerProps,
    openTooltip,
    closeTooltip
  } = containerTooltip.useTooltip({
    id,
    delayMilliseconds: delayMS,
    isVisible: isInitialVisible,
    triggerRef
  });
  const controlledIsVisible = containerUtilities.getControlledValue(externalIsVisible, isVisible);
  const [floatingPlacement, fallbackPlacements] = reactTheming.getFloatingPlacements(theme, _placement === 'auto' ? PLACEMENT_DEFAULT : _placement, _fallbackPlacements);
  const {
    refs,
    placement,
    update,
    floatingStyles: {
      transform
    }
  } = reactDom.useFloating({
    platform: {
      ...reactDom.platform,
      isRTL: () => theme.rtl
    },
    elements: {
      reference: triggerRef?.current,
      floating: floatingRef?.current
    },
    placement: floatingPlacement,
    middleware: _placement === 'auto' ? [reactDom.autoPlacement()] : [reactDom.flip({
      fallbackPlacements
    })]
  });
  React.useEffect(() => {
    let cleanup;
    if (controlledIsVisible && refs.reference.current && refs.floating.current) {
      cleanup = reactDom.autoUpdate(refs.reference.current, refs.floating.current, update, {
        elementResize: typeof ResizeObserver === 'function'
      });
    }
    return () => cleanup && cleanup();
  }, [controlledIsVisible, refs.reference, refs.floating, update]);
  const Child = React__default.default.Children.only(children);
  const Node = React__default.default.createElement(StyledTooltipWrapper, {
    ref: floatingRef,
    style: {
      transform
    },
    $zIndex: zIndex,
    "aria-hidden": !controlledIsVisible
  }, React__default.default.createElement(StyledTooltip, Object.assign({
    $hasArrow: hasArrow,
    $placement: placement,
    $size: toSize(size, type),
    $type: type
  }, getTooltipProps({
    'aria-hidden': !controlledIsVisible,
    onBlur: containerUtilities.composeEventHandlers(onBlur, () => closeTooltip(0)),
    onFocus: containerUtilities.composeEventHandlers(onFocus, openTooltip),
    ...props
  })), content));
  return React__default.default.createElement(React__default.default.Fragment, null, React.cloneElement(Child, getTriggerProps({
    ...Child.props,
    [refKey]: reactMergeRefs.mergeRefs([triggerRef, Child.ref ? Child.ref : null])
  })), appendToNode ? reactDom$1.createPortal(Node, appendToNode) : Node);
};
TooltipComponent.displayName = 'Tooltip';
TooltipComponent.propTypes = {
  appendToNode: PropTypes__default.default.any,
  hasArrow: PropTypes__default.default.bool,
  delayMS: PropTypes__default.default.number,
  id: PropTypes__default.default.string,
  content: PropTypes__default.default.node.isRequired,
  placement: PropTypes__default.default.oneOf(PLACEMENT),
  fallbackPlacements: PropTypes__default.default.arrayOf(PropTypes__default.default.oneOf(PLACEMENT.filter(placement => placement !== 'auto'))),
  size: PropTypes__default.default.oneOf(SIZE),
  type: PropTypes__default.default.oneOf(TYPE),
  zIndex: PropTypes__default.default.oneOfType([PropTypes__default.default.number, PropTypes__default.default.string]),
  isInitialVisible: PropTypes__default.default.bool,
  refKey: PropTypes__default.default.string
};
const Tooltip = TooltipComponent;
Tooltip.Paragraph = Paragraph;
Tooltip.Title = Title;

exports.Paragraph = Paragraph;
exports.Title = Title;
exports.Tooltip = Tooltip;
