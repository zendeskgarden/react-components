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
var polished = require('polished');

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
function sizeStyles$6({
  theme
}) {
  const property = theme.rtl ? 'margin-left' : 'margin-right';
  return styled.css(["", ":", ";"], property, theme.space.xs);
}
const StyledGrip = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID$8,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledGrip",
  componentId: "sc-13uv9iv-0"
})(["display:flex;transition:color 0.1s ease-in-out;box-sizing:border-box;color:", ";", " ", ";"], p => reactTheming.getColor({
  variable: 'foreground.subtle',
  theme: p.theme
}), sizeStyles$6, reactTheming.componentStyles);

const COMPONENT_ID$7 = 'draggable';
function getDragShadow(theme) {
  const {
    space,
    shadows
  } = theme;
  const offsetY = `${space.base * 5}px`;
  const blurRadius = `${space.base * 7}px`;
  const color = reactTheming.getColor({
    variable: 'shadow.large',
    theme
  });
  return shadows.lg(offsetY, blurRadius, color);
}
const colorStyles$2 = props => {
  const {
    $isBare,
    $isGrabbed,
    $isDisabled,
    $isPlaceholder,
    $focusInset,
    theme
  } = props;
  const dragShadow = getDragShadow(theme);
  const baseBgColor = reactTheming.getColor({
    variable: 'background.default',
    theme
  });
  const placeholderBgColor = reactTheming.getColor({
    variable: 'background.disabled',
    theme
  });
  const disabledBgColor = reactTheming.getColor({
    variable: 'background.disabled',
    theme
  });
  const disabledColor = reactTheming.getColor({
    variable: 'foreground.disabled',
    theme
  });
  let color;
  let hoverBackgroundColor;
  let boxShadow;
  let borderColor = 'transparent';
  let backgroundColor = baseBgColor;
  if ($isDisabled) {
    backgroundColor = disabledBgColor;
    color = disabledColor;
  } else if ($isPlaceholder) {
    backgroundColor = placeholderBgColor;
  } else {
    color = reactTheming.getColor({
      variable: 'foreground.default',
      theme
    });
    borderColor = $isBare ? 'transparent' : reactTheming.getColor({
      variable: 'border.default',
      theme
    });
    hoverBackgroundColor = reactTheming.getColor({
      variable: $isGrabbed ? 'background.raised' : 'background.primaryEmphasis',
      ...(!$isGrabbed && {
        transparency: theme.opacity[100],
        dark: {
          offset: -100
        }
      }),
      theme
    });
    boxShadow = dragShadow;
  }
  return styled.css(["border-color:", ";box-shadow:", ";background-color:", ";color:", ";&:hover{background-color:", ";}", " > ", "{color:", ";}"], borderColor, $isGrabbed && boxShadow, backgroundColor, color, hoverBackgroundColor, reactTheming.focusStyles({
    theme,
    inset: $focusInset,
    boxShadow: $isGrabbed ? dragShadow : undefined
  }), StyledGrip, $isDisabled && disabledColor);
};
const sizeStyles$5 = props => {
  const {
    $isCompact,
    theme
  } = props;
  const paddingDefault = theme.space.base * 2.25;
  const paddingCompact = theme.space.base * 1.25;
  return styled.css(["margin:0;border:", ";border-radius:", ";padding:", ";line-height:", ";font-size:", ";font-weight:", ";"], theme.borders.sm, theme.borderRadii.md, $isCompact ? `${paddingCompact}px ${paddingDefault}px` : `${paddingDefault}px`, reactTheming.getLineHeight(theme.space.base * 5, theme.fontSizes.md), theme.fontSizes.md, theme.fontWeights.regular);
};
const getCursor = props => {
  let cursor = props.$isGrabbed ? 'grabbing' : 'grab';
  if (props.$isDisabled || props.$isPlaceholder) {
    cursor = 'default';
  }
  return cursor;
};
const StyledDraggable = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID$7,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledDraggable",
  componentId: "sc-3lxpf1-0"
})(["display:flex;flex:1;align-items:center;transition:border-color 0.25s ease-in-out,box-shadow 0.1s ease-in-out,background-color 0.25s ease-in-out,color 0.25s ease-in-out,z-index 0.25s ease-in-out;cursor:", ";font-family:", ";direction:", ";box-sizing:border-box;", " ", " > *{visibility:", ";}", ";"], getCursor, props => props.theme.fonts.system, props => props.theme.rtl && 'rtl', sizeStyles$5, colorStyles$2, p => p.$isPlaceholder && !p.$isDisabled && 'hidden', reactTheming.componentStyles);

const COMPONENT_ID$6 = 'draggable.content';
const StyledContent = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID$6,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledContent",
  componentId: "sc-15arore-0"
})(["flex:1;word-wrap:break-word;overflow-wrap:anywhere;", ";"], reactTheming.componentStyles);

const COMPONENT_ID$5 = 'draggable_list.item';
const sizeStyles$4 = props => {
  const {
    $isHorizontal,
    theme: {
      space
    }
  } = props;
  return styled.css(["padding:", ";"], $isHorizontal ? `0 ${space.xxs}` : `${space.xxs} 0`);
};
const StyledItem = styled__default.default.li.attrs({
  'data-garden-id': COMPONENT_ID$5,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledItem",
  componentId: "sc-1nps3s3-0"
})(["display:flex;", " ", ";"], sizeStyles$4, reactTheming.componentStyles);

const COMPONENT_ID$4 = 'draggable_list';
const sizeStyles$3 = props => {
  const {
    $isHorizontal,
    theme: {
      space
    }
  } = props;
  let marginStart = 'margin-top';
  let marginEnd = 'margin-bottom';
  if ($isHorizontal) {
    marginStart = 'margin-right';
    marginEnd = 'margin-left';
  }
  return styled.css(["", ":-", ";", ":-", ";"], marginStart, space.xxs, marginEnd, space.xxs);
};
const StyledDraggableList = styled__default.default.ul.attrs({
  'data-garden-id': COMPONENT_ID$4,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledDraggableList",
  componentId: "sc-17agksa-0"
})(["display:flex;flex-direction:", ";margin:0;padding:0;list-style:none;box-sizing:border-box;direction:", ";> ", "{flex:1;}", ";", ";"], p => p.$isHorizontal ? 'row' : 'column', props => props.theme.rtl && 'rtl', StyledItem, sizeStyles$3, reactTheming.componentStyles);

const COMPONENT_ID$3 = 'draggable_list.drop_indicator';
const colorStyles$1 = props => {
  const {
    theme
  } = props;
  const color = reactTheming.getColor({
    variable: 'border.primaryEmphasis',
    theme
  });
  return styled.css(["box-shadow:", ";&::before,&::after{background-color:", ";}&:focus{outline:none;}"], theme.shadows.xs(color), color);
};
const sizeStyles$2 = props => {
  const {
    $isHorizontal,
    theme
  } = props;
  const pseudoSize = theme.space.xs;
  const translateX = $isHorizontal ? theme.space.xxs : theme.space.xs;
  const translateY = $isHorizontal ? theme.space.xs : theme.space.xxs;
  return styled.css(["&::before,&::after{border-radius:50%;width:", ";height:", ";}&::before{top:0;left:0;transform:translate(-", ",-", ");}&::after{right:0;bottom:0;transform:translate(", ",", ");}"], pseudoSize, pseudoSize, translateX, translateY, translateX, translateY);
};
const StyledDropIndicator = styled__default.default.li.attrs({
  'data-garden-id': COMPONENT_ID$3,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledDropIndicator",
  componentId: "sc-1f1u2lh-0"
})(["position:relative;", " ", " &::before,&::after{position:absolute;content:'';}", ";"], sizeStyles$2, colorStyles$1, reactTheming.componentStyles);

const COMPONENT_ID$2 = 'dropzone';
const colorStyles = props => {
  const {
    $isDanger,
    $isDisabled,
    $isActive,
    $isHighlighted,
    theme
  } = props;
  const fgVariable = $isDanger ? 'foreground.danger' : 'foreground.primary';
  const fgActive = reactTheming.getColor({
    variable: fgVariable,
    theme
  });
  const borderActive = reactTheming.getColor({
    variable: $isDanger ? `border.dangerEmphasis` : 'border.primaryEmphasis',
    theme
  });
  let backgroundColor = 'transparent';
  let borderColor = reactTheming.getColor({
    variable: `border.emphasis`,
    theme
  });
  let color = reactTheming.getColor({
    variable: `foreground.subtle`,
    theme
  });
  if ($isDisabled) {
    backgroundColor = reactTheming.getColor({
      variable: 'background.disabled',
      theme
    });
    borderColor = reactTheming.getColor({
      variable: `border.disabled`,
      theme
    });
    color = reactTheming.getColor({
      variable: 'foreground.disabled',
      theme
    });
  } else if ($isActive || $isHighlighted) {
    color = $isHighlighted ? reactTheming.getColor({
      variable: fgVariable,
      light: {
        offset: 200
      },
      dark: {
        offset: -200
      },
      theme
    }) : fgActive;
    backgroundColor = reactTheming.getColor({
      variable: $isDanger ? 'background.dangerEmphasis' : 'background.primaryEmphasis',
      transparency: theme.opacity[100],
      dark: {
        offset: -100
      },
      theme
    });
    borderColor = borderActive;
  } else if ($isDanger) {
    borderColor = borderActive;
    color = fgActive;
  }
  return styled.css(["border-color:", ";background-color:", ";color:", ";"], borderColor, backgroundColor, color);
};
const sizeStyles$1 = props => {
  const {
    theme,
    $isHighlighted
  } = props;
  const borderWidth = $isHighlighted ? polished.math(`${theme.borderWidths.sm} * 2`) : theme.borderWidths.sm;
  return styled.css(["border-width:", ";border-style:", ";border-radius:", ";padding:", "px;width:100%;font-family:", ";font-size:", ";"], borderWidth, $isHighlighted ? theme.borderStyles.solid : 'dashed', theme.borderRadii.md, $isHighlighted ? theme.space.base * 4 - 1 : theme.space.base * 4, theme.fonts.system, theme.fontSizes.md);
};
const StyledDropzone = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID$2,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledDropzone",
  componentId: "sc-1b7zuip-0"
})(["display:", ";flex-direction:", ";align-items:", ";justify-content:", ";transition:border-color 0.25s ease-in-out,background-color 0.25s ease-in-out,color 0.25s ease-in-out,z-index 0.25s ease-in-out;margin:0;text-align:", ";direction:", ";box-sizing:border-box;", " ", " ", ";"], p => (p.$hasMessage || p.$hasIcon) && 'flex', p => p.$hasMessage && p.$isVertical && 'column', p => (p.$hasMessage || p.$hasIcon) && 'center', p => (p.$hasMessage || p.$hasIcon) && 'center', p => p.$hasMessage && 'center', props => props.theme.rtl && 'rtl', sizeStyles$1, colorStyles, reactTheming.componentStyles);

const COMPONENT_ID$1 = 'dropzone.message';
const StyledMessage = styled__default.default.p.attrs({
  'data-garden-id': COMPONENT_ID$1,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledMessage",
  componentId: "sc-5kb2l2-0"
})(["margin:0;line-height:", ";color:inherit;font-size:", ";font-weight:", ";", ";"], p => reactTheming.getLineHeight(p.theme.space.base * 5, p.theme.fontSizes.md), p => p.theme.fontSizes.md, p => p.theme.fontWeights.regular, reactTheming.componentStyles);

const COMPONENT_ID = 'dropzone.icon';
function sizeStyles({
  theme,
  $isVertical
}) {
  let property;
  let value;
  if ($isVertical) {
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
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledIcon",
  componentId: "sc-1o12gen-0"
})(["display:flex;width:", ";height:", ";", " ", ";"], props => props.theme.iconSizes.md, props => props.theme.iconSizes.md, p => p.$hasMessage && sizeStyles(p), reactTheming.componentStyles);

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

const DraggableComponent = React.forwardRef(({
  focusInset,
  isBare,
  isCompact,
  isDisabled,
  isGrabbed,
  isPlaceholder,
  tag,
  ...other
}, ref) => {
  return React__namespace.default.createElement(StyledDraggable, Object.assign({
    $focusInset: focusInset,
    $isBare: isBare,
    $isCompact: isCompact,
    $isDisabled: isDisabled,
    $isGrabbed: isGrabbed,
    $isPlaceholder: isPlaceholder,
    "aria-disabled": isDisabled,
    as: tag,
    ref: ref,
    tabIndex: isDisabled ? undefined : 0
  }, other));
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
    $isHorizontal: isHorizontal,
    ref: ref
  }));
});
DropIndicator.displayName = 'DraggableList.DropIndicator';

const Item = React.forwardRef((props, ref) => {
  const {
    isHorizontal
  } = useDraggableListContext();
  return React__namespace.default.createElement(StyledItem, Object.assign({}, props, {
    $isHorizontal: isHorizontal,
    ref: ref
  }));
});
Item.displayName = 'DraggableList.Item';

const DraggableListComponent = React.forwardRef(({
  isHorizontal,
  ...other
}, ref) => {
  const value = React.useMemo(() => ({
    isHorizontal
  }), [isHorizontal]);
  return React__namespace.default.createElement(DraggableListContext.Provider, {
    value: value
  }, React__namespace.default.createElement(StyledDraggableList, Object.assign({
    $isHorizontal: isHorizontal,
    ref: ref
  }, other)));
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
    $hasMessage: hasMessage,
    $isVertical: isVertical,
    ref: ref
  }));
});
Icon.displayName = 'Dropzone.Icon';

const DropzoneComponent = React.forwardRef(({
  children,
  isActive,
  isDanger,
  isDisabled,
  isHighlighted,
  isVertical,
  tag,
  ...other
}, ref) => {
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
    "aria-disabled": isDisabled
  }, other, {
    $isActive: isActive,
    $isDisabled: isDisabled,
    $isDanger: isDanger,
    $isHighlighted: isHighlighted,
    $hasIcon: hasIcon,
    $hasMessage: hasMessage,
    $isVertical: isVertical,
    ref: ref
  }), !!(hasMessage && isDanger) && !hasIcon && React__namespace.default.createElement(StyledIcon, {
    "aria-hidden": "true",
    $hasMessage: hasMessage,
    $isVertical: isVertical
  }, React__namespace.default.createElement(SvgTrashStroke, null)), children));
});
DropzoneComponent.displayName = 'Dropzone';
const Dropzone = DropzoneComponent;
Dropzone.Message = Message;
Dropzone.Icon = Icon;

exports.Draggable = Draggable;
exports.DraggableList = DraggableList;
exports.Dropzone = Dropzone;
