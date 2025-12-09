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
var reactButtons = require('@zendeskgarden/react-buttons');
var PropTypes = require('prop-types');
var containerUtilities = require('@zendeskgarden/container-utilities');

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
var PropTypes__default = /*#__PURE__*/_interopDefault(PropTypes);

const COMPONENT_ID$b = 'tables.body';
const StyledBody = styled__default.default.tbody.attrs({
  'data-garden-id': COMPONENT_ID$b,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledBody",
  componentId: "sc-14ud6y-0"
})(["", ";"], reactTheming.componentStyles);

const COMPONENT_ID$a = 'tables.caption';
const StyledCaption = styled__default.default.caption.attrs({
  'data-garden-id': COMPONENT_ID$a,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledCaption",
  componentId: "sc-113y327-0"
})(["display:table-caption;text-align:", ";", ";"], props => props.theme.rtl ? 'right' : 'left', reactTheming.componentStyles);

const sizeStyles$4 = ({
  theme
}) => {
  return styled.css(["border-bottom:", ";vertical-align:top;box-sizing:border-box;"], theme.borders.sm);
};
const colorStyles$5 = ({
  theme,
  $isStriped
}) => {
  const borderColor = reactTheming.getColor({
    variable: 'border.subtle',
    theme
  });
  const backgroundColor = reactTheming.getColor({
    variable: 'background.subtle',
    transparency: theme.opacity[100],
    light: {
      offset: 300
    },
    dark: {
      offset: -600
    },
    theme
  });
  return styled.css(["border-bottom-color:", ";background-color:", ";"], borderColor, $isStriped && backgroundColor);
};
const StyledBaseRow = styled__default.default.tr.withConfig({
  displayName: "StyledBaseRow",
  componentId: "sc-1t4zqg4-0"
})(["display:table-row;transition:background-color 0.1s ease-in-out;", " ", ""], sizeStyles$4, colorStyles$5);

const getRowHeight = props => {
  if (props.$size === 'large') {
    return `${props.theme.space.base * 16}px`;
  } else if (props.$size === 'small') {
    return `${props.theme.space.base * 8}px`;
  }
  return `${props.theme.space.base * 10}px`;
};

const COMPONENT_ID$9 = 'tables.overflow_button';
const OVERFLOW_BUTTON_SIZE = '2em';
const StyledOverflowButton = styled__default.default(reactButtons.IconButton).attrs({
  'data-garden-id': COMPONENT_ID$9,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledOverflowButton",
  componentId: "sc-1eba2ml-0"
})(["margin-top:calc(", " - 1em);width:100%;min-width:unset;height:", ";font-size:inherit;", ";"], props => polished.math(`${getRowHeight(props)} / 2`), OVERFLOW_BUTTON_SIZE, reactTheming.componentStyles);

const COMPONENT_ID$8 = 'tables.header_row';
const getHeaderRowHeight = props => {
  if (props.$size === 'large') {
    return `${props.theme.space.base * 18}px`;
  } else if (props.$size === 'small') {
    return `${props.theme.space.base * 10}px`;
  }
  return `${props.theme.space.base * 12}px`;
};
const colorStyles$4 = ({
  theme
}) => {
  return styled.css(["border-bottom-color:", ";"], reactTheming.getColor({
    variable: 'border.default',
    theme
  }));
};
const sizeStyles$3 = props => {
  const rowHeight = getHeaderRowHeight(props);
  return styled.css(["height:", ";vertical-align:bottom;", "{margin-top:0;margin-bottom:calc(", " - 1em);}"], rowHeight, StyledOverflowButton, polished.math(`${rowHeight} / 2`));
};
const StyledHeaderRow = styled__default.default(StyledBaseRow).attrs({
  'data-garden-id': COMPONENT_ID$8,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledHeaderRow",
  componentId: "sc-16ogvdx-0"
})(["font-weight:", ";", " ", " ", "{opacity:1;}", ";"], props => props.theme.fontWeights.semibold, sizeStyles$3, colorStyles$4, StyledOverflowButton, reactTheming.componentStyles);

const COMPONENT_ID$7 = 'tables.table';
const getLineHeight = props => {
  return `${props.theme.space.base * 5}px`;
};
const StyledTable = styled__default.default.table.attrs({
  'data-garden-id': COMPONENT_ID$7,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledTable",
  componentId: "sc-gje7na-0"
})(["display:table;border:none;width:100%;table-layout:fixed;border-collapse:collapse;border-spacing:0;line-height:", ";color:", ";font-size:", ";direction:", ";", ";"], props => getLineHeight(props), props => reactTheming.getColor({
  variable: 'foreground.default',
  theme: props.theme
}), props => props.theme.fontSizes.md, props => props.theme.rtl && 'rtl', reactTheming.componentStyles);

const COMPONENT_ID$6 = 'tables.cell';
const truncatedStyling$1 = styled.css(["overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"]);
const sizeStyling = props => {
  let boxSizing = 'border-box';
  let padding;
  let width = props.width;
  let height;
  if (props.$hasOverflow) {
    boxSizing = 'content-box';
    width = '2em';
    height = 'inherit';
    padding = props.theme.rtl ? `0 0 0 ${props.theme.space.base}px` : `0 ${props.theme.space.base}px 0 0`;
  } else {
    const paddingVertical = polished.math(`(${getRowHeight(props)} - ${getLineHeight(props)}) / 2`);
    const paddingHorizontal = `${props.theme.space.base * 3}px`;
    padding = `${paddingVertical} ${paddingHorizontal}`;
  }
  if (props.$isMinimum) {
    boxSizing = 'content-box';
    width = '1em';
  }
  return styled.css(["box-sizing:", ";padding:", ";width:", ";height:", ";"], boxSizing, padding, width, height);
};
const StyledCell = styled__default.default.td.attrs({
  'data-garden-id': COMPONENT_ID$6,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledCell",
  componentId: "sc-8hpncx-0"
})(["display:table-cell;transition:border-color 0.25s ease-in-out,box-shadow 0.1s ease-in-out;", ";", ";", ";"], props => sizeStyling(props), props => props.$isTruncated && truncatedStyling$1, reactTheming.componentStyles);

const COMPONENT_ID$5 = 'tables.sortable';
const StyledBaseIconWrapper = styled__default.default.div.withConfig({
  displayName: "StyledSortableButton__StyledBaseIconWrapper",
  componentId: "sc-2s1dli-0"
})(["display:flex;position:absolute;top:0;", ":0;align-items:center;justify-content:center;opacity:0;width:", ";height:100%;color:inherit;fill:inherit;"], props => props.theme.rtl ? 'left' : 'right', props => props.theme.iconSizes.sm);
const StyledSortableStrokeIconWrapper = styled__default.default(StyledBaseIconWrapper).withConfig({
  displayName: "StyledSortableButton__StyledSortableStrokeIconWrapper",
  componentId: "sc-2s1dli-1"
})([""]);
const StyledSortableFillIconWrapper = styled__default.default(StyledBaseIconWrapper).withConfig({
  displayName: "StyledSortableButton__StyledSortableFillIconWrapper",
  componentId: "sc-2s1dli-2"
})([""]);
const colorStyles$3 = ({
  theme,
  $sort
}) => {
  const fgInactive = reactTheming.getColor({
    variable: 'foreground.subtle',
    transparency: theme.opacity[200],
    theme
  });
  const fgActive = reactTheming.getColor({
    variable: 'foreground.subtle',
    theme
  });
  const fgPrimaryActive = reactTheming.getColor({
    variable: 'foreground.primary',
    theme
  });
  const fgPrimaryInactive = reactTheming.getColor({
    variable: 'foreground.primary',
    theme,
    dark: {
      offset: -100
    },
    transparency: theme.opacity[200]
  });
  let color = fgActive;
  let fill = fgActive;
  if ($sort === 'asc') {
    color = fgActive;
    fill = fgInactive;
  } else if ($sort === 'desc') {
    color = fgInactive;
    fill = fgActive;
  }
  return styled.css(["", "{color:", ";fill:", ";}", "{color:", ";fill:", ";}&:hover,", "{color:", ";", ";", " ", "}", ""], StyledSortableStrokeIconWrapper, fgActive, fgActive, StyledSortableFillIconWrapper, color, fill, reactTheming.SELECTOR_FOCUS_VISIBLE, fgPrimaryActive, $sort === undefined && `
        ${StyledSortableFillIconWrapper} {
          opacity: 1;
          color: ${fgPrimaryActive};
          fill: ${fgPrimaryActive};
        }

        ${StyledSortableStrokeIconWrapper} {
          opacity: 0;
        }
      `, $sort === 'asc' && `
        ${StyledSortableFillIconWrapper} {
          color: ${fgPrimaryActive};
          fill: ${fgPrimaryInactive};
        }
      `, $sort === 'desc' && `
        ${StyledSortableFillIconWrapper} {
          color: ${fgPrimaryInactive};
          fill: ${fgPrimaryActive};
        }
      `, reactTheming.focusStyles({
    theme
  }));
};
const StyledSortableButton = styled__default.default.button.attrs({
  'data-garden-id': COMPONENT_ID$5,
  'data-garden-version': '9.12.3',
  type: 'button'
}).withConfig({
  displayName: "StyledSortableButton",
  componentId: "sc-2s1dli-3"
})(["position:relative;transition:box-shadow 0.1s ease-in-out;border:none;border-radius:", ";background-color:transparent;cursor:pointer;padding:0;padding-", ":", ";width:", ";text-decoration:none;color:inherit;font-family:inherit;font-size:inherit;font-weight:", ";", "{opacity:", ";}", "{opacity:", ";}&:hover,", "{text-decoration:none;}", " ", ";"], props => props.theme.borderRadii.sm, props => props.theme.rtl ? 'left' : 'right', props => polished.math(`${props.theme.space.base} + ${props.theme.iconSizes.sm}`), props => props.width, props => props.theme.fontWeights.semibold, StyledSortableStrokeIconWrapper, props => props.$sort === undefined && 1, StyledSortableFillIconWrapper, props => props.$sort !== undefined && 1, reactTheming.SELECTOR_FOCUS_VISIBLE, colorStyles$3, reactTheming.componentStyles);

const COMPONENT_ID$4 = 'tables.header_cell';
const truncatedStyling = styled.css(["", "{max-width:100%;overflow:hidden;text-overflow:ellipsis;}"], StyledSortableButton);
const sizeStyles$2 = props => {
  let paddingVertical = undefined;
  if (!props.$hasOverflow) {
    paddingVertical = polished.math(`(${getRowHeight(props)} - ${getLineHeight(props)}) / 2`);
  }
  return styled.css(["padding-top:", ";padding-bottom:", ";"], paddingVertical, paddingVertical);
};
const StyledHeaderCell = styled__default.default(StyledCell).attrs({
  as: 'th',
  'data-garden-id': COMPONENT_ID$4,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledHeaderCell",
  componentId: "sc-fzagoe-0"
})(["text-align:", ";font-weight:inherit;", " ", " ", ";"], props => {
  if (!props.$hasOverflow) {
    if (props.theme.rtl) {
      return 'right';
    }
    return 'left';
  }
  return undefined;
}, props => sizeStyles$2(props), props => props.$isTruncated && truncatedStyling, reactTheming.componentStyles);

const COMPONENT_ID$3 = 'tables.head';
const colorStyles$2 = ({
  theme
}) => {
  const borderColor = reactTheming.getColor({
    variable: 'border.default',
    theme
  });
  const backgroundColor = reactTheming.getColor({
    variable: 'background.default',
    theme
  });
  return styled.css(["background-color:", ";& > ", ":last-child{border-bottom-color:transparent;& > ", "{box-shadow:inset 0 -", " 0 ", ";}}"], backgroundColor, StyledHeaderRow, StyledHeaderCell, theme.borderWidths.sm, borderColor);
};
const stickyStyles = () => {
  return styled.css(["position:sticky;top:0;z-index:1;"]);
};
const StyledHead = styled__default.default.thead.attrs({
  'data-garden-id': COMPONENT_ID$3,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledHead",
  componentId: "sc-spf23a-0"
})(["", " ", " ", ";"], props => props.$isSticky && stickyStyles(), colorStyles$2, reactTheming.componentStyles);

const COMPONENT_ID$2 = 'tables.group_row';
const colorStyles$1 = ({
  theme
}) => {
  return styled.css(["background-color:", ";"], reactTheming.getColor({
    variable: 'background.subtle',
    transparency: theme.opacity[100],
    light: {
      offset: 300
    },
    dark: {
      offset: -600
    },
    theme
  }));
};
const sizeStyles$1 = props => {
  const height = `${props.theme.space.base * 8}px`;
  const lineHeight = getLineHeight(props);
  return styled.css(["height:", ";line-height:", ";font-size:", ";", "{padding:", " ", "px;}"], height, lineHeight, props.theme.fontSizes.sm, StyledCell, polished.math(`(${height} - ${lineHeight}) / 2`), props.theme.space.base * 3);
};
const StyledGroupRow = styled__default.default(StyledBaseRow).attrs({
  'data-garden-id': COMPONENT_ID$2,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledGroupRow",
  componentId: "sc-mpd0r8-0"
})(["", " ", " ", ";"], sizeStyles$1, colorStyles$1, reactTheming.componentStyles);

const COMPONENT_ID$1 = 'tables.hidden_cell';
const StyledHiddenCell = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID$1,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledHiddenCell",
  componentId: "sc-1x454xw-0"
})(["", " ", ";"], polished.hideVisually(), reactTheming.componentStyles);

const COMPONENT_ID = 'tables.row';
const colorStyles = ({
  theme,
  $isFocused,
  $isSelected,
  $isHovered,
  $isReadOnly
}) => {
  const hoveredBackgroundColor = reactTheming.getColor({
    variable: 'background.primaryEmphasis',
    transparency: theme.opacity[100],
    dark: {
      offset: -100
    },
    theme
  });
  const hoveredBorderColor = reactTheming.getColor({
    variable: 'border.primaryEmphasis',
    transparency: theme.opacity[200],
    dark: {
      offset: -100
    },
    theme
  });
  const selectedBackgroundColor = reactTheming.getColor({
    variable: 'background.primaryEmphasis',
    transparency: theme.opacity[200],
    dark: {
      offset: -100
    },
    theme
  });
  const selectedBorderColor = reactTheming.getColor({
    variable: 'border.primaryEmphasis',
    light: {
      offset: -400
    },
    dark: {
      offset: 300
    },
    theme
  });
  const hoveredSelectedBackgroundColor = reactTheming.getColor({
    variable: 'background.primaryEmphasis',
    transparency: theme.opacity[300],
    dark: {
      offset: -100
    },
    theme
  });
  const boxShadowColor = reactTheming.getColor({
    variable: 'border.primaryEmphasis',
    theme
  });
  const boxShadow = `inset ${theme.rtl ? '-' : ''}${theme.shadowWidths.md} 0 0 0 ${boxShadowColor}`;
  let backgroundColor = undefined;
  let borderColor = undefined;
  let hoverBorderBottomColor = undefined;
  let hoverBackgroundColor = undefined;
  if ($isSelected) {
    if ($isHovered) {
      backgroundColor = hoveredSelectedBackgroundColor;
    } else {
      backgroundColor = selectedBackgroundColor;
    }
    borderColor = selectedBorderColor;
    hoverBorderBottomColor = selectedBorderColor;
    hoverBackgroundColor = hoveredSelectedBackgroundColor;
  } else if ($isHovered) {
    backgroundColor = hoveredBackgroundColor;
    borderColor = hoveredBorderColor;
  } else if (!$isReadOnly) {
    hoverBorderBottomColor = hoveredBorderColor;
    hoverBackgroundColor = hoveredBackgroundColor;
  }
  return styled.css(["border-bottom-color:", ";background-color:", ";&:hover{border-bottom-color:", ";background-color:", ";", "{opacity:1;}}&:focus{outline:none;}", ":first-of-type{box-shadow:", ";&:focus{box-shadow:", ";}}"], borderColor, backgroundColor, hoverBorderBottomColor, hoverBackgroundColor, StyledOverflowButton, StyledCell, $isFocused && boxShadow, boxShadow);
};
const sizeStyles = props => {
  return styled.css(["height:", ";"], getRowHeight(props));
};
const StyledRow = styled__default.default(StyledBaseRow).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledRow",
  componentId: "sc-ek66ow-0"
})(["", " ", " ", ";"], sizeStyles, colorStyles, reactTheming.componentStyles);

const Body = React.forwardRef((props, ref) => React__namespace.default.createElement(StyledBody, Object.assign({
  ref: ref
}, props)));
Body.displayName = 'Table.Body';

const Caption = React.forwardRef((props, ref) => React__namespace.default.createElement(StyledCaption, Object.assign({
  ref: ref
}, props)));
Caption.displayName = 'Table.Caption';

const TableContext = React__namespace.default.createContext({
  size: 'medium',
  isReadOnly: false
});
const useTableContext = () => {
  return React.useContext(TableContext);
};

const Cell = React__namespace.default.forwardRef(({
  hidden,
  isMinimum,
  isTruncated,
  hasOverflow,
  ...props
}, ref) => {
  const {
    size
  } = useTableContext();
  return React__namespace.default.createElement(StyledCell, Object.assign({
    ref: ref,
    $size: size,
    $isMinimum: isMinimum,
    $isTruncated: isTruncated,
    $hasOverflow: hasOverflow
  }, props), hidden && props.children ? React__namespace.default.createElement(StyledHiddenCell, null, props.children) : props.children);
});
Cell.displayName = 'Table.Cell';
Cell.propTypes = {
  isMinimum: PropTypes__default.default.bool,
  isTruncated: PropTypes__default.default.bool,
  hasOverflow: PropTypes__default.default.bool,
  width: PropTypes__default.default.oneOfType([PropTypes__default.default.string, PropTypes__default.default.number])
};

const GroupRow = React.forwardRef((props, ref) => {
  const {
    size
  } = useTableContext();
  return React__namespace.default.createElement(StyledGroupRow, Object.assign({
    ref: ref,
    $size: size
  }, props));
});
GroupRow.displayName = 'Table.GroupRow';

const Head = React.forwardRef(({
  isSticky,
  ...props
}, ref) => React__namespace.default.createElement(StyledHead, Object.assign({
  ref: ref,
  $isSticky: isSticky
}, props)));
Head.displayName = 'Table.Head';

const HeaderCell = React.forwardRef(({
  hidden,
  isMinimum,
  isTruncated,
  hasOverflow,
  ...props
}, ref) => {
  const {
    size
  } = useTableContext();
  return React__namespace.default.createElement(StyledHeaderCell, Object.assign({
    ref: ref,
    $size: size,
    $isMinimum: isMinimum,
    $isTruncated: isTruncated,
    $hasOverflow: hasOverflow
  }, props), hidden && props.children ? React__namespace.default.createElement(StyledHiddenCell, null, props.children) : props.children);
});
HeaderCell.displayName = 'Table.HeaderCell';
HeaderCell.propTypes = Cell.propTypes;

const HeaderRow = React__namespace.default.forwardRef((props, ref) => {
  const {
    size
  } = useTableContext();
  return React__namespace.default.createElement(StyledHeaderRow, Object.assign({
    ref: ref,
    $size: size
  }, props));
});
HeaderRow.displayName = 'Table.HeaderRow';

var _path$2;
function _extends$2() { return _extends$2 = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$2.apply(null, arguments); }
var SvgOverflowVerticalStroke = function SvgOverflowVerticalStroke(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$2({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    focusable: "false",
    viewBox: "0 0 16 16",
    "aria-hidden": "true"
  }, props), _path$2 || (_path$2 = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M9.5 2.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0 5.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0 5.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
  })));
};

const OverflowButton = React.forwardRef((props, ref) => {
  const {
    size
  } = useTableContext();
  return React__namespace.default.createElement(StyledOverflowButton, Object.assign({
    type: "button",
    $size: size,
    ref: ref
  }, props, {
    focusInset: true
  }), React__namespace.default.createElement(SvgOverflowVerticalStroke, null));
});
OverflowButton.displayName = 'Table.OverflowButton';

const Row = React.forwardRef(({
  onFocus,
  onBlur,
  isSelected,
  isStriped,
  isHovered,
  isFocused: focused,
  ...otherProps
}, ref) => {
  const [isFocused, setIsFocused] = React.useState(false);
  const {
    size,
    isReadOnly
  } = useTableContext();
  const computedFocused = React.useMemo(() => {
    if (typeof focused !== 'undefined') {
      return focused;
    }
    if (isReadOnly) {
      return false;
    }
    return isFocused;
  }, [focused, isFocused, isReadOnly]);
  const onFocusCallback = React.useMemo(() => containerUtilities.composeEventHandlers(onFocus, () => {
    setIsFocused(true);
  }), [onFocus, setIsFocused]);
  const onBlurCallback = React.useMemo(() => containerUtilities.composeEventHandlers(onBlur, () => {
    setIsFocused(false);
  }), [onBlur, setIsFocused]);
  return React__namespace.default.createElement(StyledRow, Object.assign({
    onFocus: onFocusCallback,
    onBlur: onBlurCallback,
    ref: ref,
    $size: size,
    $isReadOnly: isReadOnly,
    $isFocused: computedFocused,
    $isHovered: isHovered,
    $isStriped: isStriped,
    $isSelected: isSelected
  }, otherProps, {
    tabIndex: isReadOnly ? undefined : -1
  }));
});
Row.displayName = 'Table.Row';
Row.propTypes = {
  isStriped: PropTypes__default.default.bool,
  isFocused: PropTypes__default.default.bool,
  isHovered: PropTypes__default.default.bool,
  isSelected: PropTypes__default.default.bool
};

var _path$1;
function _extends$1() { return _extends$1 = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$1.apply(null, arguments); }
var SvgSortStroke = function SvgSortStroke(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$1({
    xmlns: "http://www.w3.org/2000/svg",
    width: 12,
    height: 12,
    focusable: "false",
    viewBox: "0 0 12 12",
    "aria-hidden": "true"
  }, props), _path$1 || (_path$1 = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    d: "M2.5 4L5.6.9c.2-.2.5-.2.7 0L9.5 4m-7 4l3.1 3.1c.2.2.5.2.7 0L9.5 8"
  })));
};

var _path, _path2;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var SvgSortFill = function SvgSortFill(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 12,
    height: 12,
    focusable: "false",
    viewBox: "0 0 12 12",
    "aria-hidden": "true"
  }, props), _path || (_path = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M10 5H2a.5.5 0 01-.46-.31.47.47 0 01.11-.54L5.29.5A1 1 0 016.7.5l3.65 3.65a.49.49 0 01.11.54A.51.51 0 0110 5z"
  })), _path2 || (_path2 = /*#__PURE__*/React__namespace.createElement("path", {
    d: "M2 7a.5.5 0 00-.46.31.47.47 0 00.11.54L5.3 11.5a1 1 0 001.41 0l3.65-3.65a.49.49 0 00.11-.54A.53.53 0 0010 7z"
  })));
};

const SIZE = ['small', 'medium', 'large'];
const SORT = ['asc', 'desc'];

const SortableCell = React.forwardRef(({
  sort,
  cellProps = {},
  width,
  children,
  ...sortableButtonProps
}, ref) => {
  const {
    isMinimum,
    isTruncated,
    hasOverflow,
    ...otherCellProps
  } = cellProps;
  let ariaSortValue = 'none';
  if (sort === 'asc') {
    ariaSortValue = 'ascending';
  } else if (sort === 'desc') {
    ariaSortValue = 'descending';
  }
  const SortIcon = sort === undefined ? SvgSortStroke : SvgSortFill;
  return React__namespace.default.createElement(StyledHeaderCell, Object.assign({
    "aria-sort": ariaSortValue,
    width: width,
    $isMinimum: isMinimum,
    $isTruncated: isTruncated,
    $hasOverflow: hasOverflow
  }, otherCellProps), React__namespace.default.createElement(StyledSortableButton, Object.assign({
    $sort: sort,
    ref: ref
  }, sortableButtonProps), children, React__namespace.default.createElement(StyledSortableStrokeIconWrapper, null, React__namespace.default.createElement(SortIcon, null)), React__namespace.default.createElement(StyledSortableFillIconWrapper, null, React__namespace.default.createElement(SvgSortFill, null))));
});
SortableCell.displayName = 'Table.SortableCell';
SortableCell.propTypes = {
  sort: PropTypes__default.default.oneOf(SORT),
  cellProps: PropTypes__default.default.any,
  width: PropTypes__default.default.oneOfType([PropTypes__default.default.string, PropTypes__default.default.number])
};

const TableComponent = React__namespace.default.forwardRef(({
  isReadOnly,
  size = 'medium',
  ...props
}, ref) => {
  const tableContextValue = React.useMemo(() => ({
    size: size,
    isReadOnly: isReadOnly
  }), [size, isReadOnly]);
  return React__namespace.default.createElement(TableContext.Provider, {
    value: tableContextValue
  }, React__namespace.default.createElement(StyledTable, Object.assign({
    ref: ref
  }, props)));
});
TableComponent.displayName = 'Table';
TableComponent.propTypes = {
  size: PropTypes__default.default.oneOf(SIZE),
  isReadOnly: PropTypes__default.default.bool
};
const Table = TableComponent;
Table.Body = Body;
Table.Caption = Caption;
Table.Cell = Cell;
Table.GroupRow = GroupRow;
Table.Head = Head;
Table.HeaderCell = HeaderCell;
Table.HeaderRow = HeaderRow;
Table.OverflowButton = OverflowButton;
Table.Row = Row;
Table.SortableCell = SortableCell;

exports.Body = Body;
exports.Caption = Caption;
exports.Cell = Cell;
exports.GroupRow = GroupRow;
exports.Head = Head;
exports.HeaderCell = HeaderCell;
exports.HeaderRow = HeaderRow;
exports.OverflowButton = OverflowButton;
exports.Row = Row;
exports.SortableCell = SortableCell;
exports.Table = Table;
