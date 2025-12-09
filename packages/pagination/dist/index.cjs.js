/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
'use strict';

var React = require('react');
var PropTypes = require('prop-types');
var containerUtilities = require('@zendeskgarden/container-utilities');
var reactTheming = require('@zendeskgarden/react-theming');
var styled = require('styled-components');
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
var PropTypes__default = /*#__PURE__*/_interopDefault(PropTypes);
var styled__default = /*#__PURE__*/_interopDefault(styled);

const COMPONENT_ID$8 = 'pagination.list';
const colorStyles$2 = ({
  theme
}) => {
  return styled.css(["color:", ";"], reactTheming.getColor({
    variable: 'foreground.subtle',
    theme
  }));
};
const StyledList = styled__default.default.ul.attrs({
  'data-garden-id': COMPONENT_ID$8,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledList",
  componentId: "sc-1uz2jxo-0"
})(["direction:", ";display:flex;justify-content:center;margin:0;padding:0;list-style:none;white-space:nowrap;", " &:focus{outline:none;}", ";"], p => p.theme.rtl && 'rtl', colorStyles$2, reactTheming.componentStyles);

const COMPONENT_ID$7 = 'pagination.list_item';
const StyledListItem = styled__default.default.li.attrs({
  'data-garden-id': COMPONENT_ID$7,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledListItem",
  componentId: "sc-16j4sju-0"
})(["box-sizing:border-box;margin-left:", ";user-select:none;&", "{margin-left:0;}", ";"], props => `${props.theme.space.base}px`, props => props.theme.rtl ? ':last-of-type' : ':first-of-type', reactTheming.componentStyles);

const COMPONENT_ID$6 = 'pagination.page';
const colorStyles$1 = ({
  theme
}) => {
  const disabledColor = reactTheming.getColor({
    variable: 'foreground.disabled',
    theme
  });
  const defaultColor = reactTheming.getColor({
    variable: 'foreground.subtle',
    theme
  });
  const hoverForegroundColor = reactTheming.getColor({
    variable: 'foreground.subtle',
    light: {
      offset: 100
    },
    dark: {
      offset: -100
    },
    theme
  });
  const hoverBackgroundColor = reactTheming.getColor({
    variable: 'background.primaryEmphasis',
    transparency: theme.opacity[100],
    dark: {
      offset: -100
    },
    theme
  });
  const activeForegroundColor = reactTheming.getColor({
    variable: 'foreground.subtle',
    light: {
      offset: 200
    },
    dark: {
      offset: -200
    },
    theme
  });
  const activeBackgroundColor = reactTheming.getColor({
    variable: 'background.primaryEmphasis',
    transparency: theme.opacity[200],
    dark: {
      offset: -100
    },
    theme
  });
  const currentForegroundColor = activeForegroundColor;
  const currentBackgroundColor = hoverBackgroundColor;
  const currentHoverBackgroundColor = activeBackgroundColor;
  const currentActiveBackgroundColor = reactTheming.getColor({
    variable: 'background.primaryEmphasis',
    transparency: theme.opacity[300],
    dark: {
      offset: -100
    },
    theme
  });
  return styled.css(["border:none;background:transparent;color:", ";&:hover{background-color:", ";color:", ";}", " &:active,&:focus-visible:active{background-color:", ";color:", ";}&[aria-current='page']{background-color:", ";color:", ";}&[aria-current='page']:hover{background-color:", ";}&[aria-current='page']:active{background-color:", ";}&:disabled,&[aria-disabled='true']{background-color:transparent;color:", ";}"], defaultColor, hoverBackgroundColor, hoverForegroundColor, reactTheming.focusStyles({
    theme,
    inset: true
  }), activeBackgroundColor, activeForegroundColor, currentBackgroundColor, currentForegroundColor, currentHoverBackgroundColor, currentActiveBackgroundColor, disabledColor);
};
const sizeStyles$2 = props => {
  const fontSize = props.theme.fontSizes.md;
  const height = `${props.theme.space.base * 8}px`;
  const lineHeight = reactTheming.getLineHeight(height, fontSize);
  const padding = `${props.theme.space.base * 1.5}px`;
  return styled.css(["padding:0 ", ";height:", ";line-height:", ";font-size:", ";"], padding, height, lineHeight, fontSize);
};
const StyledPageBase = styled__default.default.button.attrs({
  'data-garden-id': COMPONENT_ID$6,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledPageBase",
  componentId: "sc-ttwj4u-0"
})(["box-sizing:border-box;display:inline-block;transition:box-shadow 0.1s ease-in-out,background-color 0.25s ease-in-out,color 0.25s ease-in-out;visibility:", ";border-radius:", ";cursor:pointer;overflow:hidden;text-align:center;text-overflow:ellipsis;font-family:inherit;user-select:none;", ";&[aria-current='page']{font-weight:", ";}&::-moz-focus-inner{border:0;}&:disabled,[aria-disabled='true']{cursor:default;}", ";", ";"], props => props.hidden && 'hidden', props => props.theme.borderRadii.md, props => sizeStyles$2(props), props => props.theme.fontWeights.semibold, props => colorStyles$1(props), reactTheming.componentStyles);

const COMPONENT_ID$5 = 'pagination.page';
const sizeStyles$1 = props => {
  const height = props.theme.space.base * 8;
  return styled.css(["min-width:", "px;max-width:", "px;&[aria-current='true']{max-width:none;}"], height, height * 2);
};
const StyledPage = styled__default.default(StyledPageBase).attrs({
  'data-garden-id': COMPONENT_ID$5,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledPage",
  componentId: "sc-sxjfwy-0"
})(["", ";&[aria-current=\"true\"]{font-weight:", ";}", ";"], props => sizeStyles$1(props), props => props.theme.fontWeights.semibold, reactTheming.componentStyles);

const COMPONENT_ID$4 = 'cursor_pagination';
const StyledCursorPagination = styled__default.default.nav.attrs({
  'data-garden-id': COMPONENT_ID$4,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledCursorPagination",
  componentId: "sc-qmfecg-0"
})(["display:flex;justify-content:center;", ";"], reactTheming.componentStyles);

const COMPONENT_ID$3 = 'cursor_pagination.cursor';
const StyledCursor = styled__default.default(StyledPageBase).attrs({
  'data-garden-id': COMPONENT_ID$3,
  'data-garden-version': '9.12.3',
  as: 'button'
}).withConfig({
  displayName: "StyledCursor",
  componentId: "sc-507ee-0"
})(["display:flex;align-items:center;border:none;background:transparent;padding:", ";overflow:visible;&:not(", "-of-type){margin-right:", "px;}", ";"], props => `0px ${props.theme.space.base * 2}px`, props => props.theme.rtl ? ':first' : ':last', props => props.theme.space.base, reactTheming.componentStyles);

const marginStyles = props => {
  const {
    $type,
    theme
  } = props;
  const margin = theme.space.base;
  if (theme.rtl) {
    return styled.css(["margin-", ":", "px;"], $type === 'last' || $type === 'next' ? 'right' : 'left', margin);
  }
  return styled.css(["margin-", ":", "px;"], $type === 'first' || $type === 'previous' ? 'right' : 'left', margin);
};
const StyledIcon = styled__default.default(reactTheming.StyledBaseIcon).withConfig({
  displayName: "StyledIcon",
  componentId: "sc-2vzk6e-0"
})(["", " transform:", ";"], marginStyles, props => props.theme.rtl && 'rotate(180deg)');

const COMPONENT_ID$2 = 'pagination.gap';
const sizeStyles = props => {
  const shift = 2;
  const fontSize = polished.math(`${props.theme.fontSizes.md} + ${shift}`);
  const height = `${props.theme.space.base * 8}px`;
  const lineHeight = reactTheming.getLineHeight(height, fontSize);
  const padding = `${props.theme.space.base * 1.5}px`;
  return styled.css(["padding:0 ", ";min-width:", ";max-width:", ";height:", ";line-height:", ";font-size:", ";"], padding, height, polished.math(`${height} * 2`), height, lineHeight, fontSize);
};
const colorStyles = ({
  theme
}) => {
  return styled.css(["color:", ";"], reactTheming.getColor({
    variable: 'foreground.subtle',
    theme
  }));
};
const StyledGapListItem = styled__default.default(StyledListItem).attrs({
  'data-garden-id': COMPONENT_ID$2,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledGapListItem",
  componentId: "sc-10wd0iz-0"
})(["display:inline-block;text-align:center;", ";", " &:hover{color:inherit;}", ";"], sizeStyles, colorStyles, reactTheming.componentStyles);

const COMPONENT_ID$1 = 'pagination.navigation';
const StyledNavigation = styled__default.default(StyledPage).attrs({
  'data-garden-id': COMPONENT_ID$1,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledNavigation",
  componentId: "sc-1lpl8pp-0"
})(["display:flex;align-items:center;justify-content:center;", ";"], reactTheming.componentStyles);

const COMPONENT_ID = 'pagination.pagination_view';
const StyledNav = styled__default.default.nav.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledNav",
  componentId: "sc-ppnpkw-0"
})(["", ";"], reactTheming.componentStyles);

var _path$3;
function _extends$3() { return _extends$3 = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$3.apply(null, arguments); }
var SvgChevronLeftStroke = function SvgChevronLeftStroke(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$3({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    focusable: "false",
    viewBox: "0 0 16 16",
    "aria-hidden": "true"
  }, props), _path$3 || (_path$3 = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M10.39 12.688a.5.5 0 01-.718.69l-.062-.066-4-5a.5.5 0 01-.054-.542l.054-.082 4-5a.5.5 0 01.83.55l-.05.074L6.641 8l3.75 4.688z"
  })));
};

var _path$2;
function _extends$2() { return _extends$2 = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$2.apply(null, arguments); }
var SvgChevronRightStroke = function SvgChevronRightStroke(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$2({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    focusable: "false",
    viewBox: "0 0 16 16",
    "aria-hidden": "true"
  }, props), _path$2 || (_path$2 = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M5.61 3.312a.5.5 0 01.718-.69l.062.066 4 5a.5.5 0 01.054.542l-.054.082-4 5a.5.5 0 01-.83-.55l.05-.074L9.359 8l-3.75-4.688z"
  })));
};

const PreviousComponent$1 = React.forwardRef((props, ref) => {
  const ariaLabel = reactTheming.useText(PreviousComponent$1, props, 'aria-label', 'Previous page');
  const theme = React.useContext(styled.ThemeContext);
  return React__namespace.default.createElement(StyledNavigation, Object.assign({
    type: "button"
  }, props, {
    "aria-label": ariaLabel,
    ref: ref
  }), theme.rtl ? React__namespace.default.createElement(SvgChevronRightStroke, null) : React__namespace.default.createElement(SvgChevronLeftStroke, null));
});
PreviousComponent$1.displayName = 'Pagination.Previous';
const Previous$1 = PreviousComponent$1;

const NextComponent$1 = React.forwardRef((props, ref) => {
  const ariaLabel = reactTheming.useText(NextComponent$1, props, 'aria-label', 'Next page');
  const theme = React.useContext(styled.ThemeContext);
  return React__namespace.default.createElement(StyledNavigation, Object.assign({
    type: "button"
  }, props, {
    "aria-label": ariaLabel,
    ref: ref
  }), theme.rtl ? React__namespace.default.createElement(SvgChevronLeftStroke, null) : React__namespace.default.createElement(SvgChevronRightStroke, null));
});
NextComponent$1.displayName = 'Pagination.Next';
const Next$1 = NextComponent$1;

const PageComponent = React.forwardRef((props, ref) => {
  const ariaLabel = reactTheming.useText(PageComponent, props, 'aria-label', `Page ${props.children}`);
  return React__namespace.default.createElement(StyledPage, Object.assign({
    type: "button"
  }, props, {
    "aria-label": ariaLabel,
    ref: ref
  }));
});
PageComponent.displayName = 'Pagination.Page';
const Page = PageComponent;

const GapComponent = React.forwardRef((props, ref) => {
  const ariaLabel = reactTheming.useText(GapComponent, props, 'aria-label', 'Ellipsis indicating non-visible pages');
  return React__namespace.default.createElement(StyledGapListItem, Object.assign({}, props, {
    "aria-label": ariaLabel,
    ref: ref
  }), "\u2026");
});
GapComponent.displayName = 'Pagination.Gap';
const Gap = GapComponent;

const PREVIOUS_KEY = 'previous';
const NEXT_KEY = 'next';
const OffsetPagination = React.forwardRef(({
  currentPage: controlledCurrentPage,
  totalPages,
  pagePadding = 2,
  pageGap = 2,
  onChange,
  'aria-label': ariaLabel,
  labels,
  ...otherProps
}, ref) => {
  const [focusedItem, setFocusedItem] = React.useState();
  const [internalCurrentPage, setInternalCurrentPage] = React.useState(1);
  const navigationLabel = reactTheming.useText(OffsetPagination, {
    'aria-label': ariaLabel
  }, 'aria-label', 'Pagination');
  const currentPage = containerUtilities.getControlledValue(controlledCurrentPage, internalCurrentPage);
  const handleFocus = React.useCallback(item => {
    setFocusedItem(item);
  }, []);
  const handleSelect = React.useCallback(item => {
    let updatedCurrentPage = item;
    let updatedFocusedKey = focusedItem;
    if (updatedCurrentPage === PREVIOUS_KEY && currentPage > 1) {
      updatedCurrentPage = currentPage - 1;
      if (updatedCurrentPage === 1 && focusedItem === PREVIOUS_KEY) {
        updatedFocusedKey = 1;
      }
    } else if (updatedCurrentPage === NEXT_KEY && currentPage < totalPages) {
      updatedCurrentPage = currentPage + 1;
      if (updatedCurrentPage === totalPages && updatedFocusedKey === NEXT_KEY) {
        updatedFocusedKey = totalPages;
      }
    }
    if (onChange && updatedCurrentPage !== undefined) {
      onChange(updatedCurrentPage);
    }
    setFocusedItem(updatedFocusedKey);
    setInternalCurrentPage(updatedCurrentPage);
  }, [currentPage, focusedItem, onChange, totalPages]);
  const renderPreviousPage = () => {
    const isFirstPageSelected = totalPages > 0 && currentPage === 1;
    return React__namespace.default.createElement(StyledListItem, null, React__namespace.default.createElement(Previous$1, {
      hidden: isFirstPageSelected,
      onFocus: () => handleFocus('previous'),
      onClick: () => handleSelect('previous'),
      "aria-label": labels?.previous
    }));
  };
  const renderNextPage = () => {
    const isLastPageSelected = currentPage === totalPages;
    return React__namespace.default.createElement(StyledListItem, null, React__namespace.default.createElement(Next$1, {
      hidden: isLastPageSelected,
      onFocus: () => handleFocus('next'),
      onClick: () => handleSelect('next'),
      "aria-label": labels?.next
    }));
  };
  const createGap = pageIndex => React__namespace.default.createElement(Gap, {
    key: `gap-${pageIndex}`,
    "aria-label": labels?.gap
  });
  const createPage = pageIndex => {
    return React__namespace.default.createElement(StyledListItem, {
      key: pageIndex
    }, React__namespace.default.createElement(Page, {
      onFocus: () => handleFocus(pageIndex),
      onClick: () => handleSelect(pageIndex),
      "aria-current": currentPage === pageIndex ? 'page' : undefined,
      "aria-label": labels?.renderPage?.(pageIndex)
    }, pageIndex));
  };
  const renderPages = () => {
    const pages = [];
    const PADDING = pagePadding;
    const GAP = pageGap;
    for (let pageIndex = 1; pageIndex <= totalPages; pageIndex++) {
      if (pageIndex === currentPage || pageIndex < GAP || pageIndex > totalPages - GAP + 1) {
        pages.push(createPage(pageIndex));
        continue;
      }
      let minimum;
      let maximum;
      if (currentPage <= GAP + PADDING) {
        minimum = GAP + 1;
        maximum = minimum + PADDING * 2;
      } else if (currentPage >= totalPages - GAP - PADDING) {
        maximum = totalPages - GAP;
        minimum = maximum - PADDING * 2;
      } else {
        minimum = currentPage - PADDING;
        maximum = currentPage + PADDING;
      }
      if (pageIndex >= minimum && pageIndex <= currentPage || pageIndex >= currentPage && pageIndex <= maximum) {
        pages.push(createPage(pageIndex));
        continue;
      }
      if (pageIndex === GAP) {
        if (minimum > GAP + 1 && currentPage > GAP + PADDING + 1) {
          pages.push(createGap(pageIndex));
        } else {
          pages.push(createPage(pageIndex));
        }
        continue;
      }
      if (pageIndex === totalPages - GAP + 1) {
        if (maximum < totalPages - GAP && currentPage < totalPages - GAP - PADDING) {
          pages.push(createGap(pageIndex));
        } else {
          pages.push(createPage(pageIndex));
        }
        continue;
      }
    }
    return pages;
  };
  return React__namespace.default.createElement(StyledNav, {
    "aria-label": navigationLabel
  }, React__namespace.default.createElement(StyledList, Object.assign({}, otherProps, {
    ref: ref
  }), renderPreviousPage(), totalPages > 0 && renderPages(), renderNextPage()));
});
OffsetPagination.propTypes = {
  currentPage: PropTypes__default.default.number.isRequired,
  totalPages: PropTypes__default.default.number.isRequired,
  pagePadding: PropTypes__default.default.number,
  pageGap: PropTypes__default.default.number,
  onChange: PropTypes__default.default.func,
  labels: PropTypes__default.default.any
};
OffsetPagination.displayName = 'OffsetPagination';

var _path$1;
function _extends$1() { return _extends$1 = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$1.apply(null, arguments); }
var SvgChevronDoubleLeftStroke = function SvgChevronDoubleLeftStroke(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$1({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    focusable: "false",
    viewBox: "0 0 16 16",
    "aria-hidden": "true"
  }, props), _path$1 || (_path$1 = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M7.812 13.39a.5.5 0 01-.64-.012l-.062-.066-4-5a.5.5 0 01-.054-.542l.054-.082 4-5a.5.5 0 01.83.55l-.05.074L4.141 8l3.75 4.688a.5.5 0 01-.079.702zm5 0a.5.5 0 01-.64-.012l-.062-.066-4-5a.5.5 0 01-.054-.542l.054-.082 4-5a.5.5 0 01.83.55l-.05.074L9.141 8l3.75 4.688a.5.5 0 01-.079.702z"
  })));
};

const FirstComponent = React.forwardRef(({
  children,
  ...other
}, ref) => {
  return React__namespace.default.createElement(StyledCursor, Object.assign({
    ref: ref
  }, other), React__namespace.default.createElement(StyledIcon, {
    $type: "first"
  }, React__namespace.default.createElement(SvgChevronDoubleLeftStroke, null)), React__namespace.default.createElement("span", null, children));
});
FirstComponent.displayName = 'CursorPagination.First';
const First = FirstComponent;

const NextComponent = React.forwardRef(({
  children,
  ...other
}, ref) => {
  return React__namespace.default.createElement(StyledCursor, Object.assign({
    ref: ref,
    as: "button"
  }, other), React__namespace.default.createElement("span", null, children), React__namespace.default.createElement(StyledIcon, {
    $type: "next"
  }, React__namespace.default.createElement(SvgChevronRightStroke, null)));
});
NextComponent.displayName = 'CursorPagination.Next';
const Next = NextComponent;

const PreviousComponent = React.forwardRef(({
  children,
  ...other
}, ref) => {
  return React__namespace.default.createElement(StyledCursor, Object.assign({
    ref: ref,
    as: "button"
  }, other), React__namespace.default.createElement(StyledIcon, {
    $type: "previous"
  }, React__namespace.default.createElement(SvgChevronLeftStroke, null)), React__namespace.default.createElement("span", null, children));
});
PreviousComponent.displayName = 'CursorPagination.Previous';
const Previous = PreviousComponent;

var _path;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var SvgChevronDoubleRightStroke = function SvgChevronDoubleRightStroke(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    focusable: "false",
    viewBox: "0 0 16 16",
    "aria-hidden": "true"
  }, props), _path || (_path = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M8.188 2.61a.5.5 0 01.64.013l.062.065 4 5a.5.5 0 01.054.542l-.054.082-4 5a.5.5 0 01-.83-.55l.05-.074L11.859 8l-3.75-4.688a.5.5 0 01.079-.702zm-5 0a.5.5 0 01.64.013l.062.065 4 5a.5.5 0 01.054.542l-.054.082-4 5a.5.5 0 01-.83-.55l.05-.074L6.859 8l-3.75-4.688a.5.5 0 01.079-.702z"
  })));
};

const LastComponent = React.forwardRef(({
  children,
  ...other
}, ref) => {
  return React__namespace.default.createElement(StyledCursor, Object.assign({
    ref: ref,
    as: "button"
  }, other), React__namespace.default.createElement("span", null, children), React__namespace.default.createElement(StyledIcon, {
    $type: "last"
  }, React__namespace.default.createElement(SvgChevronDoubleRightStroke, null)));
});
LastComponent.displayName = 'CursorPagination.Last';
const Last = LastComponent;

const CursorPaginationComponent = React.forwardRef((props, ref) => React__namespace.default.createElement(StyledCursorPagination, Object.assign({
  ref: ref
}, props)));
CursorPaginationComponent.displayName = 'CursorPagination';
const CursorPagination = CursorPaginationComponent;
CursorPagination.First = First;
CursorPagination.Next = Next;
CursorPagination.Previous = Previous;
CursorPagination.Last = Last;

exports.CursorPagination = CursorPagination;
exports.OffsetPagination = OffsetPagination;
