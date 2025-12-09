/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
'use strict';

var React = require('react');
var styled = require('styled-components');
var polished = require('polished');
var reactTheming = require('@zendeskgarden/react-theming');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);
var styled__default = /*#__PURE__*/_interopDefault(styled);

const COMPONENT_ID$8 = 'draggable.grip';
function sizeStyles$6(_ref) {
  let {
    theme
  } = _ref;
  const property = theme.rtl ? 'margin-left' : 'margin-right';
  return styled.css(["", ":", ";"], property, theme.space.xs);
}
const StyledGrip = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID$8,
  'data-garden-version': '8.76.9'
}).withConfig({
  displayName: "StyledGrip",
  componentId: "sc-n349wb-0"
})(["display:flex;transition:color 0.1s ease-in-out;box-sizing:border-box;color:", ";", " ", ";"], p => reactTheming.getColorV8('neutralHue', 600, p.theme), sizeStyles$6, props => reactTheming.retrieveComponentStyles(COMPONENT_ID$8, props));
StyledGrip.defaultProps = {
  theme: reactTheming.DEFAULT_THEME
};

const COMPONENT_ID$7 = 'draggable';
function getDragShadow(theme) {
  const {
    space,
    shadows
  } = theme;
  const offsetY = `${space.base * 5}px`;
  const blurRadius = `${space.base * 7}px`;
  const color = reactTheming.getColorV8('neutralHue', 600, theme, 0.35);
  return shadows.lg(offsetY, blurRadius, color);
}
const colorStyles$2 = props => {
  const {
    isBare,
    isGrabbed,
    isDisabled,
    isPlaceholder,
    focusInset,
    theme
  } = props;
  const baseColor = reactTheming.getColorV8('primaryHue', 600, theme);
  const dragShadow = getDragShadow(theme);
  const baseBgColor = reactTheming.getColorV8('background', 600 , theme);
  const disabledColor = reactTheming.getColorV8('neutralHue', 400, theme);
  let color;
  let hoverBackgroundColor;
  let boxShadow;
  let borderColor = 'transparent';
  let backgroundColor = baseBgColor;
  if (isDisabled) {
    backgroundColor = reactTheming.getColorV8('neutralHue', 200, theme);
    color = disabledColor;
  } else if (isPlaceholder) {
    backgroundColor = reactTheming.getColorV8('neutralHue', 800, theme, 0.1);
  } else {
    color = reactTheming.getColorV8('foreground', 600 , theme);
    borderColor = isBare ? 'transparent' : reactTheming.getColorV8('neutralHue', 300, theme);
    hoverBackgroundColor = isGrabbed ? baseBgColor : polished.rgba(baseColor, 0.08);
    boxShadow = dragShadow;
  }
  return styled.css(["border-color:", ";box-shadow:", ";background-color:", ";color:", ";&:hover{background-color:", ";}", " > ", "{color:", ";}"], borderColor, isGrabbed && boxShadow, backgroundColor, color, hoverBackgroundColor, reactTheming.focusStyles({
    theme,
    inset: focusInset,
    boxShadow: isGrabbed ? dragShadow : undefined
  }), StyledGrip, isDisabled && disabledColor);
};
const sizeStyles$5 = props => {
  const {
    isCompact,
    theme
  } = props;
  const paddingDefault = theme.space.base * 2.25;
  const paddingCompact = theme.space.base * 1.25;
  return styled.css(["margin:0;border:", ";border-radius:", ";padding:", ";line-height:", ";font-size:", ";font-weight:", ";"], theme.borders.sm, theme.borderRadii.md, isCompact ? `${paddingCompact}px ${paddingDefault}px` : `${paddingDefault}px`, reactTheming.getLineHeight(theme.space.base * 5, theme.fontSizes.md), theme.fontSizes.md, theme.fontWeights.regular);
};
const getCursor = props => {
  let cursor = props.isGrabbed ? 'grabbing' : 'grab';
  if (props.isDisabled || props.isPlaceholder) {
    cursor = 'default';
  }
  return cursor;
};
const StyledDraggable = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID$7,
  'data-garden-version': '8.76.9'
}).withConfig({
  displayName: "StyledDraggable",
  componentId: "sc-btbf2w-0"
})(["display:flex;flex:1;align-items:center;transition:border-color 0.25s ease-in-out,box-shadow 0.1s ease-in-out,background-color 0.25s ease-in-out,color 0.25s ease-in-out,z-index 0.25s ease-in-out;cursor:", ";font-family:", ";direction:", ";box-sizing:border-box;", " ", " > *{visibility:", ";}", ";"], getCursor, props => props.theme.fonts.system, props => props.theme.rtl && 'rtl', sizeStyles$5, colorStyles$2, p => p.isPlaceholder && !p.isDisabled && 'hidden', props => reactTheming.retrieveComponentStyles(COMPONENT_ID$7, props));
StyledDraggable.defaultProps = {
  theme: reactTheming.DEFAULT_THEME
};

const COMPONENT_ID$6 = 'draggable.content';
const StyledContent = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID$6,
  'data-garden-version': '8.76.9'
}).withConfig({
  displayName: "StyledContent",
  componentId: "sc-7l57xi-0"
})(["flex:1;word-wrap:break-word;overflow-wrap:anywhere;", ";"], props => reactTheming.retrieveComponentStyles(COMPONENT_ID$6, props));
StyledContent.defaultProps = {
  theme: reactTheming.DEFAULT_THEME
};

const COMPONENT_ID$5 = 'draggable_list.item';
const sizeStyles$4 = props => {
  const {
    isHorizontal,
    theme: {
      space
    }
  } = props;
  return styled.css(["padding:", ";"], isHorizontal ? `0 ${space.xxs}` : `${space.xxs} 0`);
};
const StyledItem = styled__default.default.li.attrs({
  'data-garden-id': COMPONENT_ID$5,
  'data-garden-version': '8.76.9'
}).withConfig({
  displayName: "StyledItem",
  componentId: "sc-1pyxc3j-0"
})(["display:flex;", " ", ";"], sizeStyles$4, props => reactTheming.retrieveComponentStyles(COMPONENT_ID$5, props));
StyledItem.defaultProps = {
  theme: reactTheming.DEFAULT_THEME
};

const COMPONENT_ID$4 = 'draggable_list';
const sizeStyles$3 = props => {
  const {
    isHorizontal,
    theme: {
      space
    }
  } = props;
  let marginStart = 'margin-top';
  let marginEnd = 'margin-bottom';
  if (isHorizontal) {
    marginStart = 'margin-right';
    marginEnd = 'margin-left';
  }
  return styled.css(["", ":-", ";", ":-", ";"], marginStart, space.xxs, marginEnd, space.xxs);
};
const StyledDraggableList = styled__default.default.ul.attrs({
  'data-garden-id': COMPONENT_ID$4,
  'data-garden-version': '8.76.9'
}).withConfig({
  displayName: "StyledDraggableList",
  componentId: "sc-o1r4ua-0"
})(["display:flex;flex-direction:", ";margin:0;padding:0;list-style:none;box-sizing:border-box;direction:", ";> ", "{flex:1;}", ";", ";"], p => p.isHorizontal ? 'row' : 'column', props => props.theme.rtl && 'rtl', StyledItem, sizeStyles$3, props => reactTheming.retrieveComponentStyles(COMPONENT_ID$4, props));
StyledDraggableList.defaultProps = {
  theme: reactTheming.DEFAULT_THEME
};

const COMPONENT_ID$3 = 'draggable_list.drop_indicator';
const colorStyles$1 = props => {
  const {
    theme
  } = props;
  const backgroundColor = reactTheming.getColorV8('primaryHue', 600, theme);
  const color = reactTheming.getColorV8('primaryHue', 600, theme);
  return styled.css(["box-shadow:", ";&::before,&::after{background-color:", ";}&:focus{outline:none;}"], `0 0 0 ${theme.borderWidths.sm} ${color}`, backgroundColor);
};
const sizeStyles$2 = props => {
  const {
    isHorizontal,
    theme
  } = props;
  const pseudoSize = theme.space.xs;
  const translateX = isHorizontal ? theme.space.xxs : theme.space.xs;
  const translateY = isHorizontal ? theme.space.xs : theme.space.xxs;
  return styled.css(["&::before,&::after{border-radius:50%;width:", ";height:", ";}&::before{top:0;left:0;transform:translate(-", ",-", ");}&::after{right:0;bottom:0;transform:translate(", ",", ");}"], pseudoSize, pseudoSize, translateX, translateY, translateX, translateY);
};
const StyledDropIndicator = styled__default.default.li.attrs({
  'data-garden-id': COMPONENT_ID$3,
  'data-garden-version': '8.76.9'
}).withConfig({
  displayName: "StyledDropIndicator",
  componentId: "sc-1bot7ty-0"
})(["position:relative;", " ", " &::before,&::after{position:absolute;content:'';}", ";"], sizeStyles$2, colorStyles$1, props => reactTheming.retrieveComponentStyles(COMPONENT_ID$3, props));
StyledDropIndicator.defaultProps = {
  theme: reactTheming.DEFAULT_THEME
};

const COMPONENT_ID$2 = 'dropzone';
const colorStyles = props => {
  const {
    isDanger,
    isDisabled,
    isActive,
    isHighlighted,
    theme
  } = props;
  const hue = isDanger ? 'dangerHue' : 'primaryHue';
  const baseColor = reactTheming.getColorV8(hue, 600, theme);
  const neutralColor = reactTheming.getColorV8('neutralHue', 600, theme);
  let backgroundColor = 'transparent';
  let borderColor = neutralColor;
  let color = neutralColor;
  if (isDisabled) {
    backgroundColor = reactTheming.getColorV8('neutralHue', 200, theme);
    borderColor = reactTheming.getColorV8('neutralHue', 300, theme);
    color = reactTheming.getColorV8('neutralHue', 400, theme);
  } else if (isActive || isHighlighted) {
    color = isHighlighted ? reactTheming.getColorV8(hue, 800, theme) : baseColor;
    backgroundColor = polished.rgba(baseColor, 0.08);
    borderColor = baseColor;
  } else if (isDanger) {
    borderColor = baseColor;
    color = baseColor;
  }
  return styled.css(["border-color:", ";background-color:", ";color:", ";"], borderColor, backgroundColor, color);
};
const sizeStyles$1 = props => {
  const {
    theme,
    isHighlighted
  } = props;
  const borderWidth = isHighlighted ? polished.math(`${theme.borderWidths.sm} * 2`) : theme.borderWidths.sm;
  return styled.css(["border-width:", ";border-style:", ";border-radius:", ";padding:", "px;width:100%;font-family:", ";font-size:", ";"], borderWidth, isHighlighted ? theme.borderStyles.solid : 'dashed', theme.borderRadii.md, isHighlighted ? theme.space.base * 4 - 1 : theme.space.base * 4, theme.fonts.system, theme.fontSizes.md);
};
const StyledDropzone = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID$2,
  'data-garden-version': '8.76.9'
}).withConfig({
  displayName: "StyledDropzone",
  componentId: "sc-19dn146-0"
})(["display:", ";flex-direction:", ";align-items:", ";justify-content:", ";transition:border-color 0.25s ease-in-out,background-color 0.25s ease-in-out,color 0.25s ease-in-out,z-index 0.25s ease-in-out;margin:0;text-align:", ";direction:", ";box-sizing:border-box;", " ", " ", ";"], p => (p.hasMessage || p.hasIcon) && 'flex', p => p.hasMessage && p.isVertical && 'column', p => (p.hasMessage || p.hasIcon) && 'center', p => (p.hasMessage || p.hasIcon) && 'center', p => p.hasMessage && 'center', props => props.theme.rtl && 'rtl', sizeStyles$1, colorStyles, props => reactTheming.retrieveComponentStyles(COMPONENT_ID$2, props));
StyledDropzone.defaultProps = {
  theme: reactTheming.DEFAULT_THEME
};

const COMPONENT_ID$1 = 'dropzone.message';
const StyledMessage = styled__default.default.p.attrs({
  'data-garden-id': COMPONENT_ID$1,
  'data-garden-version': '8.76.9'
}).withConfig({
  displayName: "StyledMessage",
  componentId: "sc-6uwqey-0"
})(["margin:0;line-height:", ";color:inherit;font-size:", ";font-weight:", ";", ";"], p => reactTheming.getLineHeight(p.theme.space.base * 5, p.theme.fontSizes.md), p => p.theme.fontSizes.md, p => p.theme.fontWeights.regular, props => reactTheming.retrieveComponentStyles(COMPONENT_ID$1, props));
StyledMessage.defaultProps = {
  theme: reactTheming.DEFAULT_THEME
};

const COMPONENT_ID = 'dropzone.icon';
function sizeStyles(_ref) {
  let {
    theme,
    isVertical
  } = _ref;
  let property;
  let value;
  if (isVertical) {
    property = 'margin-bottom';
    value = theme.space.xs;
  } else {
    property = theme.rtl ? 'margin-left' : 'margin-right';
    value = theme.space.xs;
  }
  return styled.css(["", ":", ";"], property, value);
}
const StyledIcon = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '8.76.9'
}).withConfig({
  displayName: "StyledIcon",
  componentId: "sc-1f3x7nk-0"
})(["display:flex;width:", ";height:", ";", " ", ";"], props => props.theme.iconSizes.md, props => props.theme.iconSizes.md, p => p.hasMessage && sizeStyles(p), props => reactTheming.retrieveComponentStyles(COMPONENT_ID, props));
StyledIcon.defaultProps = {
  theme: reactTheming.DEFAULT_THEME
};

const Content = React.forwardRef((props, ref) => React__namespace.default.createElement(StyledContent, Object.assign({}, props, {
  ref: ref
})));
Content.displayName = 'Draggable.Content';

var _g;
function _extends$1() { return _extends$1 = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$1.apply(null, arguments); }
var SvgGrip = function SvgGrip(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$1({
    xmlns: "http://www.w3.org/2000/svg",
    width: 12,
    height: 12,
    focusable: "false",
    viewBox: "0 0 12 12",
    "aria-hidden": "true"
  }, props), _g || (_g = /*#__PURE__*/React__namespace.createElement("g", {
    fill: "currentColor"
  }, /*#__PURE__*/React__namespace.createElement("rect", {
    width: 2,
    height: 2,
    x: 3,
    y: 1,
    rx: 0.5,
    ry: 0.5
  }), /*#__PURE__*/React__namespace.createElement("rect", {
    width: 2,
    height: 2,
    x: 7,
    y: 1,
    rx: 0.5,
    ry: 0.5
  }), /*#__PURE__*/React__namespace.createElement("rect", {
    width: 2,
    height: 2,
    x: 3,
    y: 5,
    rx: 0.5,
    ry: 0.5
  }), /*#__PURE__*/React__namespace.createElement("rect", {
    width: 2,
    height: 2,
    x: 7,
    y: 5,
    rx: 0.5,
    ry: 0.5
  }), /*#__PURE__*/React__namespace.createElement("rect", {
    width: 2,
    height: 2,
    x: 3,
    y: 9,
    rx: 0.5,
    ry: 0.5
  }), /*#__PURE__*/React__namespace.createElement("rect", {
    width: 2,
    height: 2,
    x: 7,
    y: 9,
    rx: 0.5,
    ry: 0.5
  }))));
};

const Grip = React.forwardRef((props, ref) => React__namespace.default.createElement(StyledGrip, Object.assign({}, props, {
  ref: ref
}), React__namespace.default.createElement(SvgGrip, null)));
Grip.displayName = 'Draggable.Grip';

const DraggableComponent = React.forwardRef((_ref, ref) => {
  let {
    tag,
    ...props
  } = _ref;
  const isDisabled = props.isDisabled;
  return React__namespace.default.createElement(StyledDraggable, Object.assign({
    as: tag,
    "aria-disabled": isDisabled,
    tabIndex: isDisabled ? undefined : 0
  }, props, {
    ref: ref
  }));
});
DraggableComponent.displayName = 'Draggable';
const Draggable = DraggableComponent;
Draggable.Grip = Grip;
Draggable.Content = Content;

const DraggableListContext = React.createContext(undefined);
const useDraggableListContext = () => {
  const context = React.useContext(DraggableListContext);
  if (context === undefined) {
    throw new Error('This component must be rendered within a DraggableList component');
  }
  return context;
};

const DropIndicator = React.forwardRef((props, ref) => {
  const {
    isHorizontal
  } = useDraggableListContext();
  const ariaLabel = reactTheming.useText(DropIndicator, props, 'aria-label', 'Drop indicator');
  return React__namespace.default.createElement(StyledDropIndicator, Object.assign({}, props, {
    "aria-label": ariaLabel,
    isHorizontal: isHorizontal,
    ref: ref
  }));
});
DropIndicator.displayName = 'DraggableList.DropIndicator';

const Item = React.forwardRef((props, ref) => {
  const {
    isHorizontal
  } = useDraggableListContext();
  return React__namespace.default.createElement(StyledItem, Object.assign({}, props, {
    isHorizontal: isHorizontal,
    ref: ref
  }));
});
Item.displayName = 'DraggableList.Item';

const DraggableListComponent = React.forwardRef((props, ref) => {
  const value = React.useMemo(() => ({
    isHorizontal: props.isHorizontal
  }), [props.isHorizontal]);
  return React__namespace.default.createElement(DraggableListContext.Provider, {
    value: value
  }, React__namespace.default.createElement(StyledDraggableList, Object.assign({}, props, {
    ref: ref
  })));
});
DraggableListComponent.displayName = 'DraggableList';
const DraggableList = DraggableListComponent;
DraggableList.Item = Item;
DraggableList.DropIndicator = DropIndicator;

var _path;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var SvgTrashStroke = function SvgTrashStroke(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    focusable: "false",
    viewBox: "0 0 16 16",
    "aria-hidden": "true"
  }, props), _path || (_path = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    d: "M6.5 2.5V1c0-.3.2-.5.5-.5h2c.3 0 .5.2.5.5v1.5M3 2.5h10m-6.5 11v-8m3 8v-8m-6-1V15c0 .3.2.5.5.5h8c.3 0 .5-.2.5-.5V4.5"
  })));
};

const DropzoneContext = React.createContext(undefined);
const useDropzoneContext = () => {
  const context = React.useContext(DropzoneContext);
  if (context === undefined) {
    throw new Error('This component must be rendered within a Dropzone component');
  }
  return context;
};

const Message = React.forwardRef((props, ref) => {
  const {
    setHasMessage,
    hasMessage
  } = useDropzoneContext();
  React.useEffect(() => {
    if (setHasMessage && !hasMessage) {
      setHasMessage(true);
    }
    return () => {
      if (setHasMessage && hasMessage) {
        setHasMessage(false);
      }
    };
  }, [setHasMessage, hasMessage]);
  return React__namespace.default.createElement(StyledMessage, Object.assign({}, props, {
    ref: ref
  }));
});
Message.displayName = 'Dropzone.Message';

const Icon = React.forwardRef((props, ref) => {
  const {
    hasIcon,
    setHasIcon,
    hasMessage,
    isVertical
  } = useDropzoneContext();
  React.useEffect(() => {
    if (setHasIcon && !hasIcon) {
      setHasIcon(true);
    }
    return () => {
      if (setHasIcon && hasIcon) {
        setHasIcon(false);
      }
    };
  }, [setHasIcon, hasIcon]);
  return React__namespace.default.createElement(StyledIcon, Object.assign({
    "aria-hidden": "true"
  }, props, {
    hasMessage: hasMessage,
    isVertical: isVertical,
    ref: ref
  }));
});
Icon.displayName = 'Dropzone.Icon';

const DropzoneComponent = React.forwardRef((_ref, ref) => {
  let {
    tag,
    isVertical,
    children,
    ...props
  } = _ref;
  const {
    isDanger
  } = props;
  const [hasMessage, setHasMessage] = React.useState(false);
  const [hasIcon, setHasIcon] = React.useState(false);
  const value = React.useMemo(() => ({
    isVertical,
    hasMessage,
    setHasMessage,
    hasIcon,
    setHasIcon,
    isDanger
  }), [hasMessage, hasIcon, isDanger, isVertical]);
  return React__namespace.default.createElement(DropzoneContext.Provider, {
    value: value
  }, React__namespace.default.createElement(StyledDropzone, Object.assign({
    as: tag,
    "aria-disabled": props.isDisabled
  }, props, {
    hasIcon: hasIcon,
    hasMessage: hasMessage,
    isVertical: isVertical,
    ref: ref
  }), hasMessage && isDanger && !hasIcon && React__namespace.default.createElement(StyledIcon, {
    "aria-hidden": "true",
    hasMessage: hasMessage,
    isVertical: isVertical
  }, React__namespace.default.createElement(SvgTrashStroke, null)), children));
});
DropzoneComponent.displayName = 'Dropzone';
const Dropzone = DropzoneComponent;
Dropzone.Message = Message;
Dropzone.Icon = Icon;

exports.Draggable = Draggable;
exports.DraggableList = DraggableList;
exports.Dropzone = Dropzone;
