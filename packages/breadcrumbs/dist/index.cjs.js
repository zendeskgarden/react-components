/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
'use strict';

var React = require('react');
var containerBreadcrumb = require('@zendeskgarden/container-breadcrumb');
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
var styled__default = /*#__PURE__*/_interopDefault(styled);

var _path;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var SvgChevronRightStroke = function SvgChevronRightStroke(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 12,
    height: 12,
    focusable: "false",
    viewBox: "0 0 12 12",
    "aria-hidden": "true"
  }, props), _path || (_path = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M3.646 10.354a.5.5 0 01-.057-.638l.057-.07L7.293 6 3.646 2.354a.5.5 0 01-.057-.638l.057-.07a.5.5 0 01.638-.057l.07.057 4 4a.5.5 0 01.057.638l-.057.07-4 4a.5.5 0 01-.708 0z"
  })));
};

const COMPONENT_ID$1 = 'breadcrumbs.list';
const StyledBreadcrumb = styled__default.default.ol.attrs({
  'data-garden-id': COMPONENT_ID$1,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledBreadcrumb",
  componentId: "sc-11jrinn-0"
})(["display:flex;margin:0;padding:0;list-style:none;font-size:", ";direction:", ";", ";"], props => props.theme.fontSizes.md, props => props.theme.rtl && 'rtl', reactTheming.componentStyles);

const StyledChevronIcon = styled__default.default(reactTheming.StyledBaseIcon).withConfig({
  displayName: "StyledChevronIcon",
  componentId: "sc-9r9qrm-0"
})(["transform:", ";margin:0 ", ";color:", ";"], p => p.theme.rtl && `rotate(180deg);`, p => polished.em(p.theme.space.base, p.theme.fontSizes.md), p => reactTheming.getColor({
  variable: 'foreground.subtle',
  theme: p.theme
}));

const COMPONENT_ID = 'breadcrumbs.item';
const sizeStyles = _ref => {
  let {
    theme
  } = _ref;
  return styled.css(["line-height:", ";white-space:nowrap;& > :link,& > :visited{white-space:inherit;}"], reactTheming.getLineHeight(theme.space.base * 5, theme.fontSizes.md));
};
const colorStyles = _ref2 => {
  let {
    $isCurrent,
    theme
  } = _ref2;
  return styled.css(["color:", ";", ""], $isCurrent ? reactTheming.getColor({
    variable: 'foreground.subtle',
    theme
  }) : 'inherit', $isCurrent && `
      & > :link,
      & > :visited,
      & > :link:hover,
      & > :visited:hover,
      & > :link:focus,
      & > :visited:focus {
        color: inherit; /* [1] */
      }
    `);
};
const StyledBreadcrumbItem = styled__default.default.li.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledBreadcrumbItem",
  componentId: "sc-r0suq7-0"
})(["font-size:inherit;", " ", ";", ";"], sizeStyles, colorStyles, reactTheming.componentStyles);

const StyledCenteredBreadcrumbItem = styled__default.default(StyledBreadcrumbItem).attrs({
  'aria-hidden': true
}).withConfig({
  displayName: "StyledCenteredBreadcrumbItem",
  componentId: "sc-1ces9y2-0"
})(["display:flex;align-items:center;"]);

const Breadcrumb = React.forwardRef((props, ref) => {
  const {
    getContainerProps,
    getCurrentPageProps
  } = containerBreadcrumb.useBreadcrumb();
  const totalChildren = React.Children.count(props.children);
  const mappedChildren = React.Children.map(props.children, (child, index) => {
    const isLastItem = index === totalChildren - 1;
    if (isLastItem) {
      return React__namespace.default.createElement(StyledBreadcrumbItem, {
        $isCurrent: true
      }, React.cloneElement(child, getCurrentPageProps()));
    }
    return React__namespace.default.createElement(React__namespace.default.Fragment, null, React__namespace.default.createElement(StyledBreadcrumbItem, null, child), React__namespace.default.createElement(StyledCenteredBreadcrumbItem, null, React__namespace.default.createElement(StyledChevronIcon, null, React__namespace.default.createElement(SvgChevronRightStroke, null))));
  });
  const ariaLabel = reactTheming.useText(Breadcrumb, props, 'aria-label', 'Breadcrumbs');
  return React__namespace.default.createElement("nav", getContainerProps({
    ...props,
    ref,
    role: null,
    'aria-label': ariaLabel
  }), React__namespace.default.createElement(StyledBreadcrumb, null, mappedChildren));
});
Breadcrumb.displayName = 'Breadcrumb';

exports.Breadcrumb = Breadcrumb;
