/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { math, readableColor } from 'polished';
import { SELECTOR_FOCUS_VISIBLE, componentStyles, getLineHeight, getColor, focusStyles } from '@zendeskgarden/react-theming';
import { StyledAvatar } from './StyledAvatar.js';
import { StyledClose } from './StyledClose.js';

const COMPONENT_ID = 'tags.tag_view';
const colorStyles = ({
  theme,
  $hue
}) => {
  let backgroundColor;
  let foregroundColor;
  if ($hue) {
    foregroundColor = getColor({
      theme,
      variable: 'foreground.onEmphasis'
    });
    switch ($hue) {
      case 'grey':
      case 'neutralHue':
        backgroundColor = getColor({
          theme,
          variable: 'background.emphasis',
          dark: {
            offset: -300
          }
        });
        break;
      case 'blue':
      case 'primaryHue':
        backgroundColor = getColor({
          theme,
          variable: 'background.primaryEmphasis'
        });
        break;
      case 'red':
      case 'dangerHue':
        backgroundColor = getColor({
          theme,
          variable: 'background.dangerEmphasis'
        });
        break;
      case 'green':
      case 'successHue':
        backgroundColor = getColor({
          theme,
          variable: 'background.successEmphasis'
        });
        break;
      case 'yellow':
      case 'warningHue':
        backgroundColor = getColor({
          theme,
          hue: 'warningHue',
          shade: 400
        });
        if (theme.colors.base === 'light') {
          foregroundColor = getColor({
            theme,
            variable: 'foreground.warningEmphasis'
          });
        }
        break;
      case 'kale':
      case 'chromeHue':
        backgroundColor = getColor({
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
          backgroundColor = getColor({
            theme,
            hue: $hue
          });
          foregroundColor = readableColor(backgroundColor, getColor({
            theme: darkTheme,
            variable
          }), getColor({
            theme: lightTheme,
            variable
          }), false );
          break;
        }
    }
  } else {
    backgroundColor = getColor({
      theme,
      hue: 'neutralHue',
      dark: {
        shade: 800
      },
      light: {
        shade: 200
      }
    });
    foregroundColor = getColor({
      theme,
      variable: 'foreground.default'
    });
  }
  return css(["background-color:", ";color:", ";&:hover{color:", ";}", ""], backgroundColor, foregroundColor, foregroundColor, focusStyles({
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
  let avatarBorderRadius = $size === 'large' ? math(`${borderRadius} - 1`) : borderRadius;
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
  return css(["border-radius:", ";padding:0 ", "px;min-width:", ";height:", "px;line-height:", ";font-size:", ";& > *{width:100%;min-width:", ";}& ", "{margin-", ":-", "px;margin-", ":", "px;border-radius:", ";width:", "px;min-width:", "px;height:", "px;}& ", "{margin-", ":-", "px;border-radius:", ";width:", "px;height:", "px;}"], borderRadius, padding, minWidth ? `${minWidth}px` : `calc(${padding * 2}px + 1ch)`, height, getLineHeight(height, fontSize), fontSize, minWidth ? `${minWidth - padding * 2}px` : '1ch', StyledAvatar, theme.rtl ? 'right' : 'left', padding - avatarMargin, theme.rtl ? 'left' : 'right', avatarTextMargin, avatarBorderRadius, avatarSize, avatarSize, avatarSize, StyledClose, theme.rtl ? 'left' : 'right', padding, borderRadius, height, height);
};
const StyledTag = styled.div.attrs(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3',
  $size: props.$size ?? 'medium'
})).withConfig({
  displayName: "StyledTag",
  componentId: "sc-1jvbe03-0"
})(["display:inline-flex;flex-wrap:nowrap;align-items:center;justify-content:", ";transition:box-shadow 0.1s ease-in-out;box-sizing:border-box;border:0;max-width:100%;overflow:hidden;vertical-align:middle;text-decoration:none;white-space:nowrap;font-weight:", ";direction:", ";", ";&:hover{cursor:default;text-decoration:none;}&:link:hover,&:visited:hover{cursor:pointer;}&:any-link:hover{cursor:pointer;}", "{text-decoration:none;}", ";& > *{overflow:hidden;text-align:center;text-overflow:ellipsis;white-space:nowrap;}& b{font-weight:", ";}& ", "{display:", ";}& ", "{display:", ";}", ";"], props => props.$isRound && 'center', props => !props.$isRegular && props.theme.fontWeights.semibold, props => props.theme.rtl ? 'rtl' : 'ltr', props => sizeStyles(props), SELECTOR_FOCUS_VISIBLE, props => colorStyles(props), props => props.theme.fontWeights.semibold, StyledAvatar, props => (props.$isRound || props.$size === 'small') && 'none', StyledClose, props => props.$isRound && 'none', componentStyles);

export { StyledTag };
