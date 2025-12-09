/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
'use strict';

var React = require('react');
var PropTypes = require('prop-types');
var styled = require('styled-components');
var reactTheming = require('@zendeskgarden/react-theming');
var polished = require('polished');
var reactButtons = require('@zendeskgarden/react-buttons');
var containerUtilities = require('@zendeskgarden/container-utilities');
var reactMergeRefs = require('react-merge-refs');
var activeElement = require('dom-helpers/activeElement');

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
var activeElement__default = /*#__PURE__*/_interopDefault(activeElement);

const PLACEMENT = ['end', 'start'];
const PRODUCTS = ['chat', 'explore', 'guide', 'support', 'talk'];

const COMPONENT_ID$w = 'chrome.chrome';
const StyledChrome = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID$w,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledChrome",
  componentId: "sc-1uqm6u6-0"
})(["display:flex;position:relative;margin:0;height:100vh;overflow-y:hidden;font-family:", ";direction:", ";", ";"], props => props.theme.fonts.system, props => props.theme.rtl && 'rtl', reactTheming.componentStyles);

const getFooterHeight = theme => `${theme.space.base * 20}px`;
const getHeaderHeight = theme => `${theme.space.base * 13}px`;
const getHeaderItemSize = theme => `${theme.space.base * 7.5}px`;
const getNavItemHeight = theme => getHeaderHeight(theme);
const getNavWidth = theme => `${theme.space.base * 15}px`;
const getNavWidthExpanded = () => `200px`;
const getProductColor = function (product) {
  let fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'inherit';
  return product ? reactTheming.PALETTE.product[product] || fallback : fallback;
};

const COMPONENT_ID$v = 'chrome.skipnav';
const animationStyles = () => {
  const animationName = styled.keyframes(["0%{transform:translate(-50%,-50%);}"]);
  return styled.css(["transition:opacity 0.2s ease-out,clip 0s linear 0.2s;opacity:0;clip:rect(0,0,0,0);&:focus{transition:opacity 0.2s ease-in-out;animation:0.2s cubic-bezier(0.15,0.85,0.35,1.2) ", ";opacity:1;clip:rect(0,150vw,100vh,-50vw);}"], animationName);
};
const colorStyles$a = _ref => {
  let {
    theme
  } = _ref;
  const backgroundColor = reactTheming.getColor({
    theme,
    variable: 'background.raised'
  });
  const borderColor = reactTheming.getColor({
    theme,
    variable: 'border.default'
  });
  const boxShadowColor = reactTheming.getColor({
    variable: 'shadow.medium',
    theme
  });
  const boxShadow = theme.shadows.lg(`${theme.space.base * 4}px`, `${theme.space.base * 6}px`, boxShadowColor);
  const foregroundColor = reactTheming.getColor({
    theme,
    variable: 'foreground.primary'
  });
  return styled.css(["border-color:", ";box-shadow:", ";background-color:", ";color:", ";&:hover,&:focus{color:", ";}", ""], borderColor, boxShadow, backgroundColor, foregroundColor, foregroundColor, reactTheming.focusStyles({
    theme,
    inset: true,
    boxShadow
  }));
};
const sizeStyles$g = _ref2 => {
  let {
    theme
  } = _ref2;
  const top = polished.math(`${getHeaderHeight(theme)} / 2`);
  const border = theme.borders.sm;
  const padding = `${theme.space.base * 5}px`;
  const paddingStart = `${theme.space.base * 4}px`;
  const fontSize = theme.fontSizes.md;
  const lineHeight = reactTheming.getLineHeight(padding, fontSize);
  return styled.css(["top:", ";border:", ";padding:", ";padding-", ":", ";line-height:", ";font-size:", ";"], top, border, padding, theme.rtl ? 'right' : 'left', paddingStart, lineHeight, fontSize);
};
const StyledSkipNav = styled__default.default.a.attrs({
  'data-garden-id': COMPONENT_ID$v,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledSkipNav",
  componentId: "sc-1tsro34-0"
})(["", ";display:inline-flex;position:absolute;left:50%;align-items:center;justify-content:center;transform:translateX(-50%);direction:", ";z-index:", ";border-radius:", ";text-decoration:underline;white-space:nowrap;", ";", "{text-decoration:none;}&:hover{text-decoration:underline;}", ";", ";"], animationStyles(), props => props.theme.rtl && 'rtl', props => props.$zIndex, props => props.theme.borderRadii.md, sizeStyles$g, reactTheming.SELECTOR_FOCUS_VISIBLE, colorStyles$a, reactTheming.componentStyles);

var _path$1;
function _extends$1() { return _extends$1 = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$1.apply(null, arguments); }
var SvgLinkStroke = function SvgLinkStroke(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$1({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    focusable: "false",
    viewBox: "0 0 16 16",
    "aria-hidden": "true"
  }, props), _path$1 || (_path$1 = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M4.441 7.38l.095.083.939.939-.708.707-.939-.939-2 2-.132.142a2.829 2.829 0 003.99 3.99l.142-.132 2-2-.939-.939.707-.708.94.94a1 1 0 01.083 1.32l-.083.094-2 2A3.828 3.828 0 01.972 9.621l.15-.158 2-2A1 1 0 014.34 7.31l.101.07zm7.413-3.234a.5.5 0 01.057.638l-.057.07-7 7a.5.5 0 01-.765-.638l.057-.07 7-7a.5.5 0 01.708 0zm3.023-3.025a3.829 3.829 0 01.15 5.257l-.15.158-2 2a1 1 0 01-1.32.083l-.094-.083-.94-.94.708-.707.939.94 2-2 .132-.142a2.829 2.829 0 00-3.99-3.99l-.142.131-2 2 .939.939-.707.708-.94-.94a1 1 0 01-.082-1.32l.083-.094 2-2a3.828 3.828 0 015.414 0z"
  })));
};

const COMPONENT_ID$u = 'chrome.skipnav_icon';
const sizeStyles$f = _ref => {
  let {
    theme
  } = _ref;
  const margin = `${theme.space.base * 2}px`;
  const size = theme.iconSizes.md;
  return styled.css(["margin-", ":", ";width:", ";height:", ";"], theme.rtl ? 'left' : 'right', margin, size, size);
};
const StyledSkipNavIcon = styled__default.default(SvgLinkStroke).attrs({
  'data-garden-id': COMPONENT_ID$u,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledSkipNavIcon",
  componentId: "sc-1ika5z4-0"
})(["transform:", ";color:", ";", ";", ";"], p => p.theme.rtl && 'scaleX(-1)', p => reactTheming.getColor({
  theme: p.theme,
  variable: 'foreground.subtle'
}), sizeStyles$f, reactTheming.componentStyles);

const COMPONENT_ID$t = 'chrome.body';
const StyledBody = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID$t,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledBody",
  componentId: "sc-c7h9kv-0"
})(["flex:1;order:1;background-color:", ";min-width:0;", ";"], props => reactTheming.getColor({
  theme: props.theme,
  variable: 'background.default'
}), reactTheming.componentStyles);

const COMPONENT_ID$s = 'chrome.content';
const sizeStyles$e = _ref => {
  let {
    theme,
    $hasFooter
  } = _ref;
  const fontSize = theme.fontSizes.md;
  const height = $hasFooter ? `calc(100% - ${polished.math(`${getHeaderHeight(theme)} + ${getFooterHeight(theme)}`)})` : `calc(100% - ${getHeaderHeight(theme)})`;
  const lineHeight = reactTheming.getLineHeight(theme.lineHeights.md, theme.fontSizes.md);
  return styled.css(["height:", ";line-height:", ";font-size:", ";"], height, lineHeight, fontSize);
};
const StyledContent = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID$s,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledContent",
  componentId: "sc-qcuzxn-0"
})(["display:flex;color-scheme:only ", ";color:", ";", ";&:focus{outline:none;}", ";"], p => p.theme.colors.base, props => reactTheming.getColor({
  theme: props.theme,
  variable: 'foreground.default'
}), sizeStyles$e, reactTheming.componentStyles);

const COMPONENT_ID$r = 'chrome.main';
const StyledMain = styled__default.default.main.attrs({
  'data-garden-id': COMPONENT_ID$r,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledMain",
  componentId: "sc-t61cre-0"
})(["flex:1;order:1;background-color:", ";overflow:auto;&:focus{outline:none;}", ";"], props => reactTheming.getColor({
  theme: props.theme,
  variable: 'background.default'
}), reactTheming.componentStyles);

const COMPONENT_ID$q = 'chrome.footer';
const colorStyles$9 = _ref => {
  let {
    theme
  } = _ref;
  const backgroundColor = reactTheming.getColor({
    theme,
    variable: 'background.default'
  });
  const borderColor = reactTheming.getColor({
    theme,
    variable: 'border.default'
  });
  return styled.css(["border-top-color:", ";background-color:", ";"], borderColor, backgroundColor);
};
const sizeStyles$d = _ref2 => {
  let {
    theme
  } = _ref2;
  const border = theme.borders.sm;
  const padding = `0 ${theme.space.base * 9}px`;
  const height = getFooterHeight(theme);
  return styled.css(["box-sizing:border-box;border-top:", ";padding:", ";height:", ";"], border, padding, height);
};
const StyledFooter = styled__default.default.footer.attrs({
  'data-garden-id': COMPONENT_ID$q,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledFooter",
  componentId: "sc-v7lib2-0"
})(["display:flex;align-items:center;justify-content:flex-end;", ";", ";", ";"], sizeStyles$d, colorStyles$9, reactTheming.componentStyles);

const COMPONENT_ID$p = 'chrome.footer_item';
const StyledFooterItem = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID$p,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledFooterItem",
  componentId: "sc-1cktm85-0"
})(["margin:", ";", ";"], props => `0 ${props.theme.space.base}px`, reactTheming.componentStyles);

const COMPONENT_ID$o = 'chrome.header_item_icon';
const sizeStyles$c = _ref => {
  let {
    theme
  } = _ref;
  const margin = `0 ${theme.space.base * 0.75}px`;
  const size = theme.iconSizes.md;
  return styled.css(["margin:", ";width:", ";min-width:", ";height:", ";"], margin, size, size, size);
};
const StyledHeaderItemIcon = styled__default.default(reactTheming.StyledBaseIcon).attrs({
  'data-garden-id': COMPONENT_ID$o,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledHeaderItemIcon",
  componentId: "sc-1jhhp6z-0"
})(["transition:transform 0.25s ease-in-out;", ";", ";"], sizeStyles$c, reactTheming.componentStyles);

const COMPONENT_ID$n = 'chrome.base_header_item';
const sizeStyles$b = _ref => {
  let {
    theme,
    $maxY,
    $isRound
  } = _ref;
  const margin = `0 ${theme.space.base * 3}px`;
  const size = getHeaderItemSize(theme);
  const height = $maxY ? '100%' : size;
  const lineHeight = reactTheming.getLineHeight(size, theme.fontSizes.md);
  const padding = `0 ${theme.space.base * 0.75}px`;
  let borderRadius;
  if ($isRound) {
    borderRadius = '100%';
  } else if ($maxY) {
    borderRadius = '0';
  } else {
    borderRadius = theme.borderRadii.md;
  }
  return styled.css(["margin:", ";border-radius:", ";padding:", ";min-width:", ";height:", ";line-height:", ";font-size:inherit;"], margin, borderRadius, padding, size, height, lineHeight);
};
const StyledBaseHeaderItem = styled__default.default.button.attrs({
  'data-garden-id': COMPONENT_ID$n,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledBaseHeaderItem",
  componentId: "sc-1qua7h6-0"
})(["display:inline-flex;position:relative;flex:", ";align-items:center;justify-content:", ";order:1;transition:box-shadow 0.1s ease-in-out,color 0.1s ease-in-out;z-index:0;border:none;background:transparent;text-decoration:none;white-space:nowrap;color:inherit;", ";", ";"], props => props.$maxX && '1', props => props.$maxX ? 'start' : 'center', sizeStyles$b, reactTheming.componentStyles);

const COMPONENT_ID$m = 'chrome.header_item_text';
const StyledHeaderItemText = styled__default.default.span.attrs({
  'data-garden-id': COMPONENT_ID$m,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledHeaderItemText",
  componentId: "sc-goz7la-0"
})(["margin:", ";", " ", ";"], props => `0 ${props.theme.space.base * 0.75}px`, props => props.$isClipped && polished.hideVisually(), reactTheming.componentStyles);

const COMPONENT_ID$l = 'chrome.header_item';
const colorStyles$8 = _ref => {
  let {
    theme,
    $product
  } = _ref;
  const borderColor = reactTheming.getColor({
    theme,
    variable: 'border.default'
  });
  const fill = reactTheming.getColor({
    theme,
    variable: 'foreground.default'
  });
  const color = getProductColor($product, fill );
  return styled.css(["border-", "-color:", ";color:", ";fill:", ";"], theme.rtl ? 'left' : 'right', borderColor, color, fill);
};
const sizeStyles$a = _ref2 => {
  let {
    theme
  } = _ref2;
  const border = theme.borders.sm;
  const iconSize = theme.iconSizes.lg;
  const marginRight = theme.rtl ? `-${theme.space.base}px` : 'auto';
  const marginLeft = theme.rtl ? 'auto' : `-${theme.space.base}px`;
  const width = getNavWidth(theme);
  return styled.css(["margin-right:", ";margin-left:", ";border-", ":", ";width:", ";height:100%;", "{margin:0;width:", ";height:", ";}"], marginRight, marginLeft, theme.rtl ? 'left' : 'right', border, width, StyledHeaderItemIcon, iconSize, iconSize);
};
const StyledLogoHeaderItem = styled__default.default(StyledBaseHeaderItem).attrs({
  'data-garden-id': COMPONENT_ID$l,
  'data-garden-version': '9.12.3',
  as: 'div'
}).withConfig({
  displayName: "StyledLogoHeaderItem",
  componentId: "sc-1n1d1yv-0"
})(["display:none;order:0;border-radius:0;padding:0;overflow:hidden;text-decoration:none;", ";", ";", "{", "}", ";"], sizeStyles$a, colorStyles$8, StyledHeaderItemText, polished.hideVisually(), reactTheming.componentStyles);

const COMPONENT_ID$k = 'chrome.header';
const colorStyles$7 = _ref => {
  let {
    theme,
    $isStandalone
  } = _ref;
  const backgroundColor = reactTheming.getColor({
    theme,
    variable: 'background.default'
  });
  const borderColor = reactTheming.getColor({
    theme,
    variable: 'border.default'
  });
  const boxShadowColor = reactTheming.getColor({
    variable: 'shadow.small',
    theme
  });
  const boxShadow = $isStandalone ? theme.shadows.lg('0', `${theme.space.base * 2}px`, boxShadowColor) : undefined;
  const foregroundColor = reactTheming.getColor({
    theme,
    variable: 'foreground.subtle'
  });
  return styled.css(["border-bottom-color:", ";box-shadow:", ";background-color:", ";color:", ";"], borderColor, boxShadow, backgroundColor, foregroundColor);
};
const sizeStyles$9 = _ref2 => {
  let {
    theme
  } = _ref2;
  const border = theme.borders.sm;
  const padding = `0 ${theme.space.base}px`;
  const fontSize = theme.fontSizes.md;
  const height = getHeaderHeight(theme);
  return styled.css(["box-sizing:border-box;border-bottom:", ";padding:", ";height:", ";font-size:", ";"], border, padding, height, fontSize);
};
const StyledHeader = styled__default.default.header.attrs({
  'data-garden-id': COMPONENT_ID$k,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledHeader",
  componentId: "sc-1cexpz-0"
})(["display:flex;position:", ";align-items:center;justify-content:flex-end;", ";", ";", "{display:", ";}", ";"], props => props.$isStandalone && 'relative', sizeStyles$9, colorStyles$7, StyledLogoHeaderItem, props => props.$isStandalone && 'inline-flex', reactTheming.componentStyles);

const COMPONENT_ID$j = 'chrome.header_item';
const colorStyles$6 = _ref => {
  let {
    theme,
    $maxY
  } = _ref;
  const options = {
    theme,
    variable: 'foreground.subtle'
  };
  const hoverColor = reactTheming.getColor({
    ...options,
    dark: {
      offset: -100
    },
    light: {
      offset: 100
    }
  });
  const activeColor = reactTheming.getColor({
    ...options,
    dark: {
      offset: -200
    },
    light: {
      offset: 200
    }
  });
  return styled.css(["&:hover,&:focus{color:inherit;}", ";&:hover ", ",&:hover ", "{color:", ";}&:active ", ",&:active ", "{color:", ";}"], reactTheming.focusStyles({
    theme,
    inset: $maxY
  }), StyledHeaderItemIcon, StyledHeaderItemText, hoverColor, StyledHeaderItemIcon, StyledHeaderItemText, activeColor);
};
const sizeStyles$8 = _ref2 => {
  let {
    theme,
    $isRound
  } = _ref2;
  const iconBorderRadius = $isRound ? '100px' : undefined;
  const imageBorderRadius = polished.math(`${theme.borderRadii.md} - 1`);
  const imageSize = polished.math(`${getHeaderItemSize(theme)} - ${theme.space.base * 2}`);
  return styled.css(["img{margin:0;border-radius:", ";width:", ";height:", ";}", "{border-radius:", ";}"], imageBorderRadius, imageSize, imageSize, StyledHeaderItemIcon, iconBorderRadius);
};
const StyledHeaderItem = styled__default.default(StyledBaseHeaderItem).attrs({
  'data-garden-id': COMPONENT_ID$j,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledHeaderItem",
  componentId: "sc-14sft6n-0"
})(["cursor:pointer;&:hover,&:focus{text-decoration:none;}", ";", ";& ", ",& ", "{transition:box-shadow 0.1s ease-in-out,color 0.1s ease-in-out;}", ";"], sizeStyles$8, colorStyles$6, StyledHeaderItemIcon, StyledHeaderItemText, reactTheming.componentStyles);

const COMPONENT_ID$i = 'chrome.header_item_wrapper';
const StyledHeaderItemWrapper = styled__default.default(StyledBaseHeaderItem).attrs({
  'data-garden-id': COMPONENT_ID$i,
  'data-garden-version': '9.12.3',
  as: 'div'
}).withConfig({
  displayName: "StyledHeaderItemWrapper",
  componentId: "sc-1uieu55-0"
})(["", ";"], reactTheming.componentStyles);

const COMPONENT_ID$h = 'chrome.nav';
const colorStyles$5 = _ref => {
  let {
    theme,
    $hue
  } = _ref;
  const shade = $hue === 'chromeHue' ? 900 : undefined;
  const backgroundColor = reactTheming.getColor({
    theme,
    hue: $hue,
    shade
  });
  const foregroundColor = reactTheming.getColor({
    theme,
    dark: {
      hue: 'white'
    },
    light: {
      hue: 'black'
    }
  });
  return styled.css(["background-color:", ";color:", ";"], backgroundColor, foregroundColor);
};
const sizeStyles$7 = _ref2 => {
  let {
    theme,
    $isExpanded
  } = _ref2;
  const fontSize = theme.fontSizes.md;
  const width = $isExpanded ? getNavWidthExpanded() : getNavWidth(theme);
  return styled.css(["width:", ";font-size:", ";"], width, fontSize);
};
const StyledNav = styled__default.default.nav.attrs({
  'data-garden-id': COMPONENT_ID$h,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledNav",
  componentId: "sc-6j462r-0"
})(["display:flex;position:relative;flex-direction:column;flex-shrink:0;order:-1;", ";", ";", ";"], colorStyles$5, sizeStyles$7, reactTheming.componentStyles);

const COMPONENT_ID$g = 'chrome.nav_list';
const StyledNavList = styled__default.default.ul.attrs({
  'data-garden-id': COMPONENT_ID$g,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledNavList",
  componentId: "sc-1s0nkfb-0"
})(["display:flex;flex:1;flex-direction:column;order:0;margin:0;padding:0;list-style:none;", ";"], reactTheming.componentStyles);

const COMPONENT_ID$f = 'chrome.nav_list_item';
const StyledNavListItem = styled__default.default.li.attrs({
  'data-garden-id': COMPONENT_ID$f,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledNavListItem",
  componentId: "sc-18cj2v7-0"
})(["display:flex;order:1;margin:0;padding:0;list-style-type:none;", ";"], reactTheming.componentStyles);

const COMPONENT_ID$e = 'chrome.base_nav_item';
const sizeStyles$6 = _ref => {
  let {
    theme
  } = _ref;
  const minHeight = getNavItemHeight(theme);
  const verticalPadding = polished.math(`(${minHeight} - ${theme.iconSizes.lg}) / 2`);
  const horizontalPadding = polished.math(`(${getNavWidth(theme)} - ${theme.iconSizes.lg}) / 4`);
  return styled.css(["padding:", " ", ";min-height:", ";"], verticalPadding, horizontalPadding, minHeight);
};
const StyledBaseNavItem = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID$e,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledBaseNavItem",
  componentId: "sc-zvo43f-0"
})(["display:flex;flex-shrink:0;align-items:center;justify-content:center;transition:outline-color 0.1s ease-in-out,box-shadow 0.1s ease-in-out,background-color 0.1s ease-in-out,opacity 0.1s ease-in-out;", ";"], sizeStyles$6);

const COMPONENT_ID$d = 'chrome.logo_nav_list_item';
const colorStyles$4 = _ref => {
  let {
    theme,
    $hue,
    $product
  } = _ref;
  const fillColor = reactTheming.getColor({
    theme,
    variable: 'foreground.default'
  });
  const color = $hue === 'chromeHue' ? getProductColor($product) : fillColor;
  return styled.css(["color:", ";fill:", ";"], color, fillColor);
};
const StyledLogoNavItem = styled__default.default(StyledBaseNavItem).attrs({
  'data-garden-id': COMPONENT_ID$d,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledLogoNavItem",
  componentId: "sc-saaydx-0"
})(["order:-1;opacity:1;cursor:default;min-height:0;", ";"], colorStyles$4);

const COMPONENT_ID$c = 'chrome.brandmark_nav_list_item';
const StyledBrandmarkNavItem = styled__default.default(StyledBaseNavItem).attrs({
  'data-garden-id': COMPONENT_ID$c,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledBrandmarkNavItem",
  componentId: "sc-8kynd4-0"
})(["order:1;opacity:", ";margin-top:auto;min-height:0;"], props => props.theme.opacity[400]);

const COMPONENT_ID$b = 'chrome.nav_item_icon';
const sizeStyles$5 = _ref => {
  let {
    theme
  } = _ref;
  const size = theme.iconSizes.lg;
  return styled.css(["width:", ";height:", ";"], size, size);
};
const StyledNavItemIcon = styled__default.default(reactTheming.StyledBaseIcon).attrs({
  'data-garden-id': COMPONENT_ID$b,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledNavItemIcon",
  componentId: "sc-7w9rpt-0"
})(["align-self:flex-start;order:0;border-radius:", ";", ";", ";"], props => props.theme.borderRadii.md, sizeStyles$5, reactTheming.componentStyles);

const COMPONENT_ID$a = 'chrome.nav_button';
const colorStyles$3 = _ref => {
  let {
    theme,
    $hue
  } = _ref;
  const activeBackgroundColor = reactTheming.getColor({
    theme,
    dark: {
      hue: 'white'
    },
    light: {
      hue: 'black'
    },
    transparency: theme.opacity[100]
  });
  const currentBackgroundColor = $hue === 'chromeHue' ? reactTheming.getColor({
    theme,
    hue: $hue,
    shade: 700
  }) : reactTheming.getColor({
    theme,
    dark: {
      hue: 'white'
    },
    light: {
      hue: 'black'
    },
    transparency: theme.opacity[500]
  });
  const focusOutlineColor = reactTheming.getColor({
    theme,
    dark: {
      hue: 'white'
    },
    light: {
      hue: 'black'
    }
  });
  const focusOutlineOffset = `-${theme.borderWidths.md}`;
  const hoverBackgroundColor = reactTheming.getColor({
    theme,
    dark: {
      hue: 'black'
    },
    light: {
      hue: 'white'
    },
    transparency: theme.opacity[100]
  });
  return styled.css(["opacity:", ";outline-color:transparent;background-color:transparent;color:inherit;&:hover{opacity:1;background-color:", ";}&:hover,&:focus{color:inherit;}", " &:active{background-color:", ";}&[aria-current='true']{opacity:1;background-color:", ";}"], theme.opacity[700], hoverBackgroundColor, reactTheming.focusStyles({
    theme,
    condition: false,
    styles: {
      opacity: 1,
      outlineColor: focusOutlineColor,
      outlineOffset: focusOutlineOffset
    }
  }), activeBackgroundColor, currentBackgroundColor);
};
const sizeStyles$4 = _ref2 => {
  let {
    theme,
    $isExpanded
  } = _ref2;
  const iconMargin = $isExpanded ? `0 ${polished.math(`(${getNavWidth(theme)} - ${theme.iconSizes.lg}) / 4`)}` : undefined;
  return styled.css(["margin:0;border:none;box-sizing:border-box;min-width:0;font-size:inherit;", "{margin:", ";}"], StyledNavItemIcon, iconMargin);
};
const StyledNavButton = styled__default.default(StyledBaseNavItem).attrs({
  'data-garden-id': COMPONENT_ID$a,
  'data-garden-version': '9.12.3',
  as: 'button'
}).withConfig({
  displayName: "StyledNavButton",
  componentId: "sc-f5ux3-0"
})(["flex:1;justify-content:", ";cursor:pointer;text-align:", ";text-decoration:none;", ";&:hover,&:focus{text-decoration:none;}&[aria-current='true']{cursor:default;}", ";", ";"], props => props.$isExpanded && 'start', props => props.$isExpanded && 'inherit', sizeStyles$4, colorStyles$3, reactTheming.componentStyles);

const COMPONENT_ID$9 = 'chrome.nav_item_text';
const sizeStyles$3 = _ref => {
  let {
    theme,
    $isExpanded,
    $isWrapped
  } = _ref;
  const clip = $isExpanded ? 'auto' : undefined;
  const lineHeight = reactTheming.getLineHeight(theme.space.base * 5, theme.fontSizes.md);
  const margin = $isExpanded ? `0 ${polished.math(`(${getNavWidth(theme)} - ${theme.iconSizes.lg}) / 4`)}` : undefined;
  const width = $isExpanded ? 'auto' : undefined;
  const height = $isExpanded ? 'auto' : undefined;
  const whiteSpace = $isWrapped ? undefined : 'nowrap';
  return styled.css(["clip:rect(1px,1px,1px,1px);margin:", ";width:1px;height:1px;line-height:", ";white-space:", ";", " > &&{clip:", ";width:", ";height:", ";}"], margin, lineHeight, whiteSpace, StyledNavButton, clip, width, height);
};
const StyledNavItemText = styled__default.default.span.attrs({
  'data-garden-id': COMPONENT_ID$9,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledNavItemText",
  componentId: "sc-13m84xl-0"
})(["position:absolute;order:1;overflow:hidden;", " > &&{position:", ";flex:", ";text-overflow:", ";}", ";", ";"], StyledNavButton, props => props.$isExpanded ? 'static' : undefined, props => props.$isExpanded ? 1 : undefined, props => props.$isExpanded ? 'ellipsis' : undefined, sizeStyles$3, reactTheming.componentStyles);

const COMPONENT_ID$8 = 'chrome.sheet';
const colorStyles$2 = _ref => {
  let {
    theme,
    $isOpen
  } = _ref;
  const backgroundColor = reactTheming.getColor({
    theme,
    variable: 'background.default'
  });
  const borderColor = $isOpen ? reactTheming.getColor({
    theme,
    variable: 'border.default'
  }) : 'transparent';
  return styled.css(["border-color:", ";background-color:", ";"], borderColor, backgroundColor);
};
const sizeStyles$2 = _ref2 => {
  let {
    theme,
    $isOpen,
    $placement,
    $size
  } = _ref2;
  const width = $isOpen ? $size : 0;
  const fontSize = theme.fontSizes.md;
  const lineHeight = reactTheming.getLineHeight(theme.space.base * 5, fontSize);
  const border = $isOpen ? theme.borders.sm : 'none';
  let borderProperty;
  if ($placement === 'start') {
    borderProperty = `border-${theme.rtl ? 'left' : 'right'}`;
  } else {
    borderProperty = `border-${theme.rtl ? 'right' : 'left'}`;
  }
  return styled.css(["box-sizing:border-box;width:", ";height:100%;", ":", ";line-height:", ";font-size:", ";"], width, borderProperty, border, lineHeight, fontSize);
};
const StyledSheet = styled__default.default.aside.attrs({
  'data-garden-id': COMPONENT_ID$8,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledSheet",
  componentId: "sc-dx8ijk-0"
})(["display:flex;order:1;transition:", ";overflow:hidden;", ";&:focus{outline:none;}", ";", ";"], props => props.$isAnimated && 'width 250ms ease-in-out', sizeStyles$2, colorStyles$2, reactTheming.componentStyles);

const COMPONENT_ID$7 = 'chrome.sheet_wrapper';
const transformStyles = _ref => {
  let {
    theme,
    $isAnimated,
    $isOpen,
    $placement
  } = _ref;
  const transition = $isAnimated ? 'transform 250ms ease-in-out' : undefined;
  let transform;
  if ($isOpen) {
    transform = 'translateX(0)';
  } else if ($placement === 'start') {
    transform = `translateX(${theme.rtl ? 100 : -100}%)`;
  } else {
    transform = `translateX(${theme.rtl ? -100 : 100}%)`;
  }
  return styled.css(["transform:", ";transition:", ";"], transform, transition);
};
const StyledSheetWrapper = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID$7,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledSheetWrapper",
  componentId: "sc-f6x9zb-0"
})(["display:flex;position:relative;flex-direction:column;min-width:", ";", ";", ";"], props => props.$size, transformStyles, reactTheming.componentStyles);

const COMPONENT_ID$6 = 'chrome.sheet_title';
const StyledSheetTitle = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID$6,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledSheetTitle",
  componentId: "sc-1gogk75-0"
})(["color:", ";font-weight:", ";", ";"], p => reactTheming.getColor({
  theme: p.theme,
  variable: 'foreground.default'
}), props => props.theme.fontWeights.semibold, reactTheming.componentStyles);

const COMPONENT_ID$5 = 'chrome.sheet_description';
const StyledSheetDescription = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID$5,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledSheetDescription",
  componentId: "sc-1puglb6-0"
})(["line-height:", ";color:", ";", ";"], p => reactTheming.getLineHeight(p.theme.space.base * 4, p.theme.fontSizes.md), p => reactTheming.getColor({
  theme: p.theme,
  variable: 'foreground.subtle'
}), reactTheming.componentStyles);

const COMPONENT_ID$4 = 'chrome.sheet_body';
const StyledSheetBody = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID$4,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledSheetBody",
  componentId: "sc-bt4eoj-0"
})(["flex:1;overflow-y:auto;padding:", "px;color-scheme:only ", ";", ";"], props => props.theme.space.base * 5, p => p.theme.colors.base, reactTheming.componentStyles);

const COMPONENT_ID$3 = 'chrome.sheet_close';
const positionStyles = _ref => {
  let {
    theme
  } = _ref;
  const top = `${theme.space.base * 2.5}px`;
  const position = `${theme.space.base * 2}px`;
  return styled.css(["top:", ";", ":", ";"], top, theme.rtl ? 'left' : 'right', position);
};
const StyledSheetClose = styled__default.default(reactButtons.IconButton).attrs({
  'data-garden-id': COMPONENT_ID$3,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledSheetClose",
  componentId: "sc-1ab02oq-0"
})(["position:absolute;", ";", ";"], positionStyles, reactTheming.componentStyles);

const COMPONENT_ID$2 = 'chrome.sheet_footer';
const colorStyles$1 = _ref => {
  let {
    theme
  } = _ref;
  const borderColor = reactTheming.getColor({
    theme,
    variable: 'border.subtle'
  });
  return styled.css(["border-top-color:", ";"], borderColor);
};
const sizeStyles$1 = _ref2 => {
  let {
    theme,
    $isCompact
  } = _ref2;
  const border = theme.borders.sm;
  const padding = `${theme.space.base * ($isCompact ? 2.5 : 5)}px`;
  return styled.css(["border-top:", ";padding:", ";"], border, padding);
};
const StyledSheetFooter = styled__default.default.footer.attrs({
  'data-garden-id': COMPONENT_ID$2,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledSheetFooter",
  componentId: "sc-2cktos-0"
})(["display:flex;flex-flow:row wrap;align-items:center;justify-content:", ";", ";", ";", ";"], props => props.$isCompact ? 'center' : 'flex-end', sizeStyles$1, colorStyles$1, reactTheming.componentStyles);

const COMPONENT_ID$1 = 'chrome.sheet_footer_item';
const StyledSheetFooterItem = styled__default.default.div.attrs({
  'data-garden-id': COMPONENT_ID$1,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledSheetFooterItem",
  componentId: "sc-r9ixh-0"
})(["", " ", ";"], props => `margin-${props.theme.rtl ? 'right' : 'left'}: ${props.theme.space.base * 5}px;`, reactTheming.componentStyles);

const COMPONENT_ID = 'chrome.sheet_header';
const colorStyles = _ref => {
  let {
    theme
  } = _ref;
  const borderColor = reactTheming.getColor({
    theme,
    variable: 'border.subtle'
  });
  return styled.css(["border-bottom-color:", ";"], borderColor);
};
const sizeStyles = _ref2 => {
  let {
    theme,
    $isCloseButtonPresent
  } = _ref2;
  const border = theme.borders.sm;
  let padding = `${theme.space.base * 5}px`;
  if ($isCloseButtonPresent) {
    const paddingSide = `${theme.space.base * 14}px`;
    padding = theme.rtl ? `${padding} ${padding} ${padding} ${paddingSide}` : `${padding} ${paddingSide} ${padding} ${padding}`;
  }
  return styled.css(["border-bottom:", ";padding:", ";"], border, padding);
};
const StyledSheetHeader = styled__default.default.header.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledSheetHeader",
  componentId: "sc-o2ry8i-0"
})(["", ";", ";", ";"], sizeStyles, colorStyles, reactTheming.componentStyles);

const HeaderItem = React__namespace.default.forwardRef((_ref, ref) => {
  let {
    hasLogo,
    isRound,
    maxX,
    maxY,
    product,
    ...other
  } = _ref;
  if (hasLogo) {
    return React__namespace.default.createElement(StyledLogoHeaderItem, Object.assign({
      ref: ref,
      $isRound: isRound,
      $maxX: maxX,
      $maxY: maxY,
      $product: product
    }, other));
  }
  return React__namespace.default.createElement(StyledHeaderItem, Object.assign({
    ref: ref,
    $isRound: isRound,
    $maxX: maxX,
    $maxY: maxY
  }, other));
});
HeaderItem.displayName = 'Header.Item';
HeaderItem.propTypes = {
  maxX: PropTypes__default.default.bool,
  maxY: PropTypes__default.default.bool,
  isRound: PropTypes__default.default.bool,
  product: PropTypes__default.default.oneOf(PRODUCTS),
  hasLogo: PropTypes__default.default.bool
};

const HeaderItemIcon = _ref => {
  let {
    children,
    ...props
  } = _ref;
  return React__namespace.default.createElement(StyledHeaderItemIcon, props, children);
};
HeaderItemIcon.displayName = 'Header.ItemIcon';

const HeaderItemText = React__namespace.default.forwardRef((_ref, ref) => {
  let {
    isClipped,
    ...other
  } = _ref;
  return React__namespace.default.createElement(StyledHeaderItemText, Object.assign({
    ref: ref,
    $isClipped: isClipped
  }, other));
});
HeaderItemText.displayName = 'Header.ItemText';
HeaderItemText.propTypes = {
  isClipped: PropTypes__default.default.bool
};

const HeaderItemWrapper = React__namespace.default.forwardRef((_ref, ref) => {
  let {
    isRound,
    maxX,
    maxY,
    ...other
  } = _ref;
  return React__namespace.default.createElement(StyledHeaderItemWrapper, Object.assign({
    ref: ref,
    $isRound: isRound,
    $maxX: maxX,
    $maxY: maxY
  }, other));
});
HeaderItemWrapper.displayName = 'Header.ItemWrapper';

const FooterItem$1 = React__namespace.default.forwardRef((props, ref) => React__namespace.default.createElement(StyledFooterItem, Object.assign({
  ref: ref
}, props)));
FooterItem$1.displayName = 'Footer.Item';

const NavContext = React__namespace.default.createContext({
  isExpanded: false
});
const useNavContext = () => {
  return React.useContext(NavContext);
};

const ChromeContext = React__namespace.default.createContext({
  hue: 'chromeHue'
});
const useChromeContext = () => {
  return React.useContext(ChromeContext);
};

const NavListContext = React__namespace.default.createContext(undefined);
const useNavListContext = () => {
  return React.useContext(NavListContext);
};

const NavItem = React__namespace.default.forwardRef((_ref, ref) => {
  let {
    hasLogo,
    hasBrandmark,
    product,
    isCurrent,
    ...other
  } = _ref;
  const {
    hue
  } = useChromeContext();
  const {
    isExpanded
  } = useNavContext();
  const navListContext = useNavListContext();
  const hasList = navListContext?.hasList;
  let retVal;
  if (hasLogo) {
    retVal = React__namespace.default.createElement(StyledLogoNavItem, Object.assign({
      ref: ref,
      $hue: hue,
      $product: product
    }, other));
  } else if (hasBrandmark) {
    retVal = React__namespace.default.createElement(StyledBrandmarkNavItem, Object.assign({
      ref: ref
    }, other));
  } else {
    retVal = React__namespace.default.createElement(StyledNavButton, Object.assign({
      tabIndex: 0,
      ref: ref,
      $isExpanded: isExpanded,
      $hue: hue,
      "aria-current": isCurrent || undefined
    }, other));
  }
  if (hasList) {
    retVal = React__namespace.default.createElement(StyledNavListItem, null, retVal);
  }
  return retVal;
});
NavItem.displayName = 'Nav.Item';
NavItem.propTypes = {
  product: PropTypes__default.default.oneOf(PRODUCTS),
  hasLogo: PropTypes__default.default.bool,
  hasBrandmark: PropTypes__default.default.bool
};

const NavItemIcon = _ref => {
  let {
    children,
    ...props
  } = _ref;
  return React__namespace.default.createElement(StyledNavItemIcon, props, children);
};
NavItemIcon.displayName = 'Nav.ItemIcon';

const NavItemText = React__namespace.default.forwardRef((_ref, ref) => {
  let {
    isWrapped,
    ...other
  } = _ref;
  const {
    isExpanded
  } = useNavContext();
  return React__namespace.default.createElement(StyledNavItemText, Object.assign({
    ref: ref,
    $isExpanded: isExpanded,
    $isWrapped: isWrapped
  }, other));
});
NavItemText.displayName = 'Nav.ItemText';
NavItemText.propTypes = {
  isWrapped: PropTypes__default.default.bool
};

const Chrome = React__namespace.default.forwardRef((_ref, ref) => {
  let {
    hue,
    isFluid,
    ...props
  } = _ref;
  const theme = React.useContext(styled.ThemeContext) || reactTheming.DEFAULT_THEME;
  const isLightMemoized = React.useMemo(() => {
    if (hue) {
      const backgroundColor = reactTheming.getColor({
        theme,
        hue
      });
      const LIGHT_COLOR = 'white';
      return polished.readableColor(backgroundColor, LIGHT_COLOR, undefined, false ) === LIGHT_COLOR;
    }
    return false;
  }, [hue, theme]);
  const isLight = hue ? isLightMemoized : undefined;
  const chromeContextValue = React.useMemo(() => ({
    hue: hue || 'chromeHue',
    isLight
  }), [hue, isLight]);
  const environment = reactTheming.useDocument(theme);
  React.useEffect(() => {
    if (environment && !isFluid) {
      const htmlElement = environment.querySelector('html');
      if (htmlElement) {
        const defaultHtmlPosition = htmlElement.style.position;
        htmlElement.style.position = 'fixed';
        return () => {
          htmlElement.style.position = defaultHtmlPosition;
        };
      }
    }
    return undefined;
  }, [environment, isFluid]);
  return React__namespace.default.createElement(ChromeContext.Provider, {
    value: chromeContextValue
  }, React__namespace.default.createElement(StyledChrome, Object.assign({
    ref: ref
  }, props)));
});
Chrome.displayName = 'Chrome';
Chrome.propTypes = {
  hue: PropTypes__default.default.string
};

const SkipNav = React__namespace.default.forwardRef((_ref, ref) => {
  let {
    targetId,
    zIndex = 1,
    children,
    ...props
  } = _ref;
  return React__namespace.default.createElement(StyledSkipNav, Object.assign({
    href: `#${targetId}`,
    $zIndex: zIndex,
    ref: ref
  }, props), React__namespace.default.createElement(StyledSkipNavIcon, null), children);
});
SkipNav.displayName = 'SkipNav';
SkipNav.propTypes = {
  targetId: PropTypes__default.default.string.isRequired,
  zIndex: PropTypes__default.default.number
};

const BodyContext = React__namespace.default.createContext(undefined);
const useBodyContext = () => {
  return React.useContext(BodyContext);
};

const Body$1 = React__namespace.default.forwardRef((props, ref) => {
  const [hasFooter, setHasFooter] = React.useState(false);
  const bodyContextValue = React.useMemo(() => ({
    hasFooter,
    setHasFooter
  }), [hasFooter, setHasFooter]);
  return React__namespace.default.createElement(BodyContext.Provider, {
    value: bodyContextValue
  }, React__namespace.default.createElement(StyledBody, Object.assign({
    ref: ref
  }, props)));
});
Body$1.displayName = 'Body';

const Content = React__namespace.default.forwardRef((props, ref) => {
  const {
    hasFooter
  } = useBodyContext() || {};
  return React__namespace.default.createElement(StyledContent, Object.assign({
    ref: ref,
    $hasFooter: hasFooter
  }, props));
});
Content.displayName = 'Content';

const Main = React__namespace.default.forwardRef((props, ref) => React__namespace.default.createElement(StyledMain, Object.assign({
  ref: ref
}, props)));
Main.displayName = 'Main';

const HeaderComponent = React__namespace.default.forwardRef((_ref, ref) => {
  let {
    isStandalone,
    ...other
  } = _ref;
  return React__namespace.default.createElement(StyledHeader, Object.assign({
    ref: ref,
    $isStandalone: isStandalone
  }, other));
});
HeaderComponent.displayName = 'Header';
HeaderComponent.propTypes = {
  isStandalone: PropTypes__default.default.bool
};
const Header$1 = HeaderComponent;
Header$1.Item = HeaderItem;
Header$1.ItemIcon = HeaderItemIcon;
Header$1.ItemText = HeaderItemText;
Header$1.ItemWrapper = HeaderItemWrapper;

const FooterComponent = React__namespace.default.forwardRef((props, ref) => {
  const {
    hasFooter,
    setHasFooter
  } = useBodyContext() || {};
  React.useEffect(() => {
    if (!hasFooter && setHasFooter) {
      setHasFooter(true);
    }
    return () => {
      if (hasFooter && setHasFooter) {
        setHasFooter(false);
      }
    };
  }, [hasFooter, setHasFooter]);
  return React__namespace.default.createElement(StyledFooter, Object.assign({
    ref: ref
  }, props));
});
FooterComponent.displayName = 'Footer';
const Footer$1 = FooterComponent;
Footer$1.Item = FooterItem$1;

const NavList = React__namespace.default.forwardRef((props, ref) => {
  const contextValue = React.useMemo(() => ({
    hasList: true
  }), []);
  return React__namespace.default.createElement(NavListContext.Provider, {
    value: contextValue
  }, React__namespace.default.createElement(StyledNavList, Object.assign({
    ref: ref
  }, props)));
});
NavList.displayName = 'Nav.List';

const NavComponent = React__namespace.default.forwardRef((_ref, ref) => {
  let {
    isExpanded,
    ...other
  } = _ref;
  const {
    hue,
    isLight
  } = useChromeContext();
  const navContextValue = React.useMemo(() => ({
    isExpanded: !!isExpanded
  }), [isExpanded]);
  return React__namespace.default.createElement(reactTheming.ThemeProvider, {
    theme: parentTheme => ({
      ...parentTheme,
      colors: {
        ...parentTheme.colors,
        base: isLight ? 'light' : 'dark'
      }
    })
  }, React__namespace.default.createElement(NavContext.Provider, {
    value: navContextValue
  }, React__namespace.default.createElement(StyledNav, Object.assign({
    ref: ref,
    $isExpanded: isExpanded,
    $hue: hue
  }, other))));
});
NavComponent.displayName = 'Nav';
NavComponent.propTypes = {
  isExpanded: PropTypes__default.default.bool
};
const Nav = NavComponent;
Nav.List = NavList;
Nav.Item = NavItem;
Nav.ItemIcon = NavItemIcon;
Nav.ItemText = NavItemText;

const SheetContext = React.createContext({
  setIsCloseButtonPresent() {}
});
const useSheetContext = () => {
  return React.useContext(SheetContext);
};

function useFocusableMount(_ref) {
  let {
    isMounted,
    focusOnMount,
    restoreFocus,
    targetRef
  } = _ref;
  const triggerRef = React.useRef();
  React.useEffect(() => {
    if (isMounted && focusOnMount && targetRef.current) {
      triggerRef.current = activeElement__default.default();
      targetRef.current.focus();
    }
  }, [isMounted, focusOnMount, targetRef]);
  React.useEffect(() => {
    if (!isMounted && restoreFocus && triggerRef.current) {
      triggerRef.current.focus();
    }
  }, [isMounted, restoreFocus, triggerRef]);
}

const SheetTitle = React.forwardRef((_ref, ref) => {
  let {
    id,
    ...props
  } = _ref;
  const {
    titleId
  } = useSheetContext();
  return React__namespace.default.createElement(StyledSheetTitle, Object.assign({
    id: id || titleId,
    ref: ref
  }, props));
});
SheetTitle.displayName = 'Sheet.Title';
const Title = SheetTitle;

const SheetDescription = React.forwardRef((_ref, ref) => {
  let {
    id,
    ...props
  } = _ref;
  const {
    descriptionId
  } = useSheetContext();
  return React__namespace.default.createElement(StyledSheetDescription, Object.assign({
    id: id || descriptionId,
    ref: ref
  }, props));
});
SheetDescription.displayName = 'Sheet.Description';
const Description = SheetDescription;

const SheetHeader = React.forwardRef((props, ref) => {
  const {
    isCloseButtonPresent
  } = useSheetContext();
  return React__namespace.default.createElement(StyledSheetHeader, Object.assign({
    ref: ref,
    $isCloseButtonPresent: isCloseButtonPresent
  }, props));
});
SheetHeader.displayName = 'Sheet.Header';
const Header = SheetHeader;

const SheetBody = React.forwardRef((props, ref) => {
  return React__namespace.default.createElement(StyledSheetBody, Object.assign({
    ref: ref
  }, props));
});
SheetBody.displayName = 'Sheet.Body';
const Body = SheetBody;

const SheetFooter = React.forwardRef((_ref, ref) => {
  let {
    isCompact,
    ...other
  } = _ref;
  return React__namespace.default.createElement(StyledSheetFooter, Object.assign({
    ref: ref,
    $isCompact: isCompact
  }, other));
});
SheetFooter.displayName = 'Sheet.Footer';
const Footer = SheetFooter;

const SheetFooterItem = React.forwardRef((props, ref) => {
  return React__namespace.default.createElement(StyledSheetFooterItem, Object.assign({
    ref: ref
  }, props));
});
SheetFooterItem.displayName = 'Sheet.FooterItem';
const FooterItem = SheetFooterItem;

var _path;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var SvgXStroke = function SvgXStroke(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    focusable: "false",
    viewBox: "0 0 16 16",
    "aria-hidden": "true"
  }, props), _path || (_path = /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    d: "M3 13L13 3m0 10L3 3"
  })));
};

const SheetClose = React.forwardRef((props, ref) => {
  const {
    setIsCloseButtonPresent
  } = useSheetContext();
  React.useEffect(() => {
    setIsCloseButtonPresent(true);
    return () => setIsCloseButtonPresent(false);
  }, [setIsCloseButtonPresent]);
  return React__namespace.default.createElement(StyledSheetClose, Object.assign({
    "aria-label": "Close Sheet",
    ref: ref
  }, props), React__namespace.default.createElement(SvgXStroke, null));
});
SheetClose.displayName = 'Sheet.Close';
const Close = SheetClose;

const SheetComponent = React__namespace.default.forwardRef((_ref, ref) => {
  let {
    id,
    isOpen,
    isAnimated = true,
    focusOnMount,
    restoreFocus,
    placement = 'end',
    size = '380px',
    children,
    ...props
  } = _ref;
  const sheetRef = React.useRef(null);
  const [isCloseButtonPresent, setIsCloseButtonPresent] = React.useState(false);
  const idPrefix = containerUtilities.useId(id);
  const titleId = `${idPrefix}--title`;
  const descriptionId = `${idPrefix}--description`;
  const sheetContext = React.useMemo(() => ({
    titleId,
    descriptionId,
    isCloseButtonPresent,
    setIsCloseButtonPresent
  }), [titleId, descriptionId, isCloseButtonPresent]);
  useFocusableMount({
    targetRef: sheetRef,
    isMounted: isOpen,
    focusOnMount,
    restoreFocus
  });
  return React__namespace.default.createElement(SheetContext.Provider, {
    value: sheetContext
  }, React__namespace.default.createElement(StyledSheet, Object.assign({
    inert: isOpen ? undefined : '',
    $isOpen: isOpen,
    $isAnimated: isAnimated,
    $placement: placement,
    $size: size,
    tabIndex: -1,
    id: idPrefix,
    "aria-labelledby": titleId,
    "aria-describedby": descriptionId,
    ref: reactMergeRefs.mergeRefs([sheetRef, ref])
  }, props), React__namespace.default.createElement(StyledSheetWrapper, {
    $isOpen: isOpen,
    $isAnimated: isAnimated,
    $placement: placement,
    $size: size
  }, children)));
});
SheetComponent.displayName = 'Sheet';
SheetComponent.propTypes = {
  id: PropTypes__default.default.string,
  isOpen: PropTypes__default.default.bool,
  isAnimated: PropTypes__default.default.bool,
  focusOnMount: PropTypes__default.default.bool,
  restoreFocus: PropTypes__default.default.bool,
  placement: PropTypes__default.default.oneOf(PLACEMENT),
  size: PropTypes__default.default.string
};
const Sheet = SheetComponent;
Sheet.Body = Body;
Sheet.Close = Close;
Sheet.Description = Description;
Sheet.Footer = Footer;
Sheet.FooterItem = FooterItem;
Sheet.Header = Header;
Sheet.Title = Title;

exports.Body = Body$1;
exports.Chrome = Chrome;
exports.Content = Content;
exports.Footer = Footer$1;
exports.FooterItem = FooterItem$1;
exports.Header = Header$1;
exports.HeaderItem = HeaderItem;
exports.HeaderItemIcon = HeaderItemIcon;
exports.HeaderItemText = HeaderItemText;
exports.HeaderItemWrapper = HeaderItemWrapper;
exports.Main = Main;
exports.Nav = Nav;
exports.NavItem = NavItem;
exports.NavItemIcon = NavItemIcon;
exports.NavItemText = NavItemText;
exports.PRODUCTS = PRODUCTS;
exports.Sheet = Sheet;
exports.SkipNav = SkipNav;
