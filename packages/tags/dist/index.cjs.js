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
var PropTypes__default = /*#__PURE__*/_interopDefault(PropTypes);
var styled__default = /*#__PURE__*/_interopDefault(styled);

const SIZE = ['small', 'medium', 'large'];

const COMPONENT_ID$2 = 'tags.avatar';
const StyledAvatar = styled__default.default(reactTheming.StyledBaseIcon).attrs({
  'data-garden-id': COMPONENT_ID$2,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledAvatar",
  componentId: "sc-3kdmgt-0"
})(["flex-shrink:0;font-size:0;", ";"], reactTheming.componentStyles);

const COMPONENT_ID$1 = 'tags.close';
const StyledClose = styled__default.default.button.attrs({
  'data-garden-id': COMPONENT_ID$1,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledClose",
  componentId: "sc-d6lrpn-0"
})(["display:flex;flex-shrink:0;align-items:center;justify-content:center;transition:opacity 0.25s ease-in-out;opacity:", ";border:0;background:transparent;cursor:pointer;padding:0;color:inherit;font-size:0;appearance:none;&:hover{opacity:", ";}&:focus{outline:none;}&:active{opacity:", ";}", ";"], props => props.theme.opacity[1000], props => props.theme.opacity[1100], props => props.theme.opacity[1200], reactTheming.componentStyles);

const COMPONENT_ID = 'tags.tag_view';
const colorStyles = ({
  theme,
  $hue
}) => {
  let backgroundColor;
  let foregroundColor;
  if ($hue) {
    foregroundColor = reactTheming.getColor({
      theme,
      variable: 'foreground.onEmphasis'
    });
    switch ($hue) {
      case 'grey':
      case 'neutralHue':
        backgroundColor = reactTheming.getColor({
          theme,
          variable: 'background.emphasis',
          dark: {
            offset: -300
          }
        });
        break;
      case 'blue':
      case 'primaryHue':
        backgroundColor = reactTheming.getColor({
          theme,
          variable: 'background.primaryEmphasis'
        });
        break;
      case 'red':
      case 'dangerHue':
        backgroundColor = reactTheming.getColor({
          theme,
          variable: 'background.dangerEmphasis'
        });
        break;
      case 'green':
      case 'successHue':
        backgroundColor = reactTheming.getColor({
          theme,
          variable: 'background.successEmphasis'
        });
        break;
      case 'yellow':
      case 'warningHue':
        backgroundColor = reactTheming.getColor({
          theme,
          hue: 'warningHue',
          shade: 400
        });
        if (theme.colors.base === 'light') {
          foregroundColor = reactTheming.getColor({
            theme,
            variable: 'foreground.warningEmphasis'
          });
        }
        break;
      case 'kale':
      case 'chromeHue':
        backgroundColor = reactTheming.getColor({
          theme,
          hue: 'chromeHue',
          dark: {
            shade: 500
          },
          light: {
            shade: 800
          }
        });
        break;
      default:
        {
          const lightTheme = {
            ...theme,
            colors: {
              ...theme.colors,
              base: 'light'
            }
          };
          const darkTheme = {
            ...theme,
            colors: {
              ...theme.colors,
              base: 'dark'
            }
          };
          const variable = 'foreground.onEmphasis';
          backgroundColor = reactTheming.getColor({
            theme,
            hue: $hue
          });
          foregroundColor = polished.readableColor(backgroundColor, reactTheming.getColor({
            theme: darkTheme,
            variable
          }), reactTheming.getColor({
            theme: lightTheme,
            variable
          }), false );
          break;
        }
    }
  } else {
    backgroundColor = reactTheming.getColor({
      theme,
      hue: 'neutralHue',
      dark: {
        shade: 800
      },
      light: {
        shade: 200
      }
    });
    foregroundColor = reactTheming.getColor({
      theme,
      variable: 'foreground.default'
    });
  }
  return styled.css(["background-color:", ";color:", ";&:hover{color:", ";}", ""], backgroundColor, foregroundColor, foregroundColor, reactTheming.focusStyles({
    theme,
    shadowWidth: 'sm',
    selector: '&:focus'
  }));
};
const sizeStyles = ({
  $isPill,
  $isRound,
  $size,
  theme
}) => {
  let borderRadius;
  let padding;
  let height;
  let fontSize;
  let minWidth;
  let avatarSize;
  if ($size === 'small') {
    borderRadius = theme.borderRadii.sm;
    padding = theme.space.base;
    height = theme.space.base * 4;
    fontSize = theme.fontSizes.xs;
    avatarSize = 0;
  } else if ($size === 'large') {
    borderRadius = theme.borderRadii.md;
    padding = theme.space.base * 3;
    height = theme.space.base * 8;
    fontSize = theme.fontSizes.sm;
    avatarSize = theme.space.base * 6;
  } else {
    borderRadius = theme.borderRadii.sm;
    padding = theme.space.base * 2;
    height = theme.space.base * 5;
    fontSize = theme.fontSizes.sm;
    avatarSize = theme.space.base * 4;
  }
  let avatarBorderRadius = $size === 'large' ? polished.math(`${borderRadius} - 1`) : borderRadius;
  const avatarMargin = (height - avatarSize) / 2;
  const avatarTextMargin = $isRound ? avatarMargin : avatarMargin * 2;
  if ($isRound) {
    borderRadius = '50%';
    padding = 0;
    minWidth = height;
    avatarBorderRadius = '50%';
  } else if ($isPill) {
    borderRadius = '100px';
    avatarBorderRadius = '50%';
    if ($size === 'small') {
      padding = theme.space.base * 1.5;
      minWidth = theme.space.base * 6;
    } else if ($size === 'large') {
      minWidth = theme.space.base * 12;
    } else {
      minWidth = theme.space.base * 7.5;
    }
  }
  return styled.css(["border-radius:", ";padding:0 ", "px;min-width:", ";height:", "px;line-height:", ";font-size:", ";& > *{width:100%;min-width:", ";}& ", "{margin-", ":-", "px;margin-", ":", "px;border-radius:", ";width:", "px;min-width:", "px;height:", "px;}& ", "{margin-", ":-", "px;border-radius:", ";width:", "px;height:", "px;}"], borderRadius, padding, minWidth ? `${minWidth}px` : `calc(${padding * 2}px + 1ch)`, height, reactTheming.getLineHeight(height, fontSize), fontSize, minWidth ? `${minWidth - padding * 2}px` : '1ch', StyledAvatar, theme.rtl ? 'right' : 'left', padding - avatarMargin, theme.rtl ? 'left' : 'right', avatarTextMargin, avatarBorderRadius, avatarSize, avatarSize, avatarSize, StyledClose, theme.rtl ? 'left' : 'right', padding, borderRadius, height, height);
};
const StyledTag = styled__default.default.div.attrs(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3',
  $size: props.$size ?? 'medium'
})).withConfig({
  displayName: "StyledTag",
  componentId: "sc-1jvbe03-0"
})(["display:inline-flex;flex-wrap:nowrap;align-items:center;justify-content:", ";transition:box-shadow 0.1s ease-in-out;box-sizing:border-box;border:0;max-width:100%;overflow:hidden;vertical-align:middle;text-decoration:none;white-space:nowrap;font-weight:", ";direction:", ";", ";&:hover{cursor:default;text-decoration:none;}&:link:hover,&:visited:hover{cursor:pointer;}&:any-link:hover{cursor:pointer;}", "{text-decoration:none;}", ";& > *{overflow:hidden;text-align:center;text-overflow:ellipsis;white-space:nowrap;}& b{font-weight:", ";}& ", "{display:", ";}& ", "{display:", ";}", ";"], props => props.$isRound && 'center', props => !props.$isRegular && props.theme.fontWeights.semibold, props => props.theme.rtl ? 'rtl' : 'ltr', props => sizeStyles(props), reactTheming.SELECTOR_FOCUS_VISIBLE, props => colorStyles(props), props => props.theme.fontWeights.semibold, StyledAvatar, props => (props.$isRound || props.$size === 'small') && 'none', StyledClose, props => props.$isRound && 'none', reactTheming.componentStyles);

var _path;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var SvgXStroke = function SvgXStroke(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 12,
    height: 12,
    focusable: "false",
    viewBox: "0 0 12 12",
    "aria-hidden": "true"
  }, props), _path || (_path = /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    d: "M3 9l6-6m0 6L3 3"
  })));
};

const CloseComponent = React.forwardRef((props, ref) => {
  const ariaLabel = reactTheming.useText(CloseComponent, props, 'aria-label', 'Remove');
  return React__namespace.default.createElement(StyledClose, Object.assign({
    ref: ref,
    "aria-label": ariaLabel
  }, props, {
    type: "button",
    tabIndex: -1
  }), React__namespace.default.createElement(SvgXStroke, null));
});
CloseComponent.displayName = 'Tag.Close';
const Close = CloseComponent;

const AvatarComponent = props => React__namespace.default.createElement(StyledAvatar, props);
AvatarComponent.displayName = 'Tag.Avatar';
const Avatar = AvatarComponent;

const TagComponent = React.forwardRef(({
  isPill,
  isRound,
  isRegular,
  size = 'medium',
  hue,
  ...other
}, ref) => React__namespace.default.createElement(StyledTag, Object.assign({
  $hue: hue,
  $isPill: isPill,
  $isRegular: isRegular,
  $isRound: isRound,
  $size: size,
  ref: ref
}, other)));
TagComponent.displayName = 'Tag';
TagComponent.propTypes = {
  size: PropTypes__default.default.oneOf(SIZE),
  hue: PropTypes__default.default.string,
  isPill: PropTypes__default.default.bool,
  isRound: PropTypes__default.default.bool,
  isRegular: PropTypes__default.default.bool
};
const Tag = TagComponent;
Tag.Avatar = Avatar;
Tag.Close = Close;

exports.Tag = Tag;
