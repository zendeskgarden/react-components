/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { math } from 'polished';
import { componentStyles, getColor, focusStyles } from '@zendeskgarden/react-theming';
import { StyledBaseNavItem } from './StyledBaseNavItem.js';
import { StyledNavItemIcon } from './StyledNavItemIcon.js';
import { getNavWidth } from '../utils.js';

const COMPONENT_ID = 'chrome.nav_button';
const colorStyles = _ref => {
  let {
    theme,
    $hue
  } = _ref;
  const activeBackgroundColor = getColor({
    theme,
    dark: {
      hue: 'white'
    },
    light: {
      hue: 'black'
    },
    transparency: theme.opacity[100]
  });
  const currentBackgroundColor = $hue === 'chromeHue' ? getColor({
    theme,
    hue: $hue,
    shade: 700
  }) : getColor({
    theme,
    dark: {
      hue: 'white'
    },
    light: {
      hue: 'black'
    },
    transparency: theme.opacity[500]
  });
  const focusOutlineColor = getColor({
    theme,
    dark: {
      hue: 'white'
    },
    light: {
      hue: 'black'
    }
  });
  const focusOutlineOffset = `-${theme.borderWidths.md}`;
  const hoverBackgroundColor = getColor({
    theme,
    dark: {
      hue: 'black'
    },
    light: {
      hue: 'white'
    },
    transparency: theme.opacity[100]
  });
  return css(["opacity:", ";outline-color:transparent;background-color:transparent;color:inherit;&:hover{opacity:1;background-color:", ";}&:hover,&:focus{color:inherit;}", " &:active{background-color:", ";}&[aria-current='true']{opacity:1;background-color:", ";}"], theme.opacity[700], hoverBackgroundColor, focusStyles({
    theme,
    condition: false,
    styles: {
      opacity: 1,
      outlineColor: focusOutlineColor,
      outlineOffset: focusOutlineOffset
    }
  }), activeBackgroundColor, currentBackgroundColor);
};
const sizeStyles = _ref2 => {
  let {
    theme,
    $isExpanded
  } = _ref2;
  const iconMargin = $isExpanded ? `0 ${math(`(${getNavWidth(theme)} - ${theme.iconSizes.lg}) / 4`)}` : undefined;
  return css(["margin:0;border:none;box-sizing:border-box;min-width:0;font-size:inherit;", "{margin:", ";}"], StyledNavItemIcon, iconMargin);
};
const StyledNavButton = styled(StyledBaseNavItem).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3',
  as: 'button'
}).withConfig({
  displayName: "StyledNavButton",
  componentId: "sc-f5ux3-0"
})(["flex:1;justify-content:", ";cursor:pointer;text-align:", ";text-decoration:none;", ";&:hover,&:focus{text-decoration:none;}&[aria-current='true']{cursor:default;}", ";", ";"], props => props.$isExpanded && 'start', props => props.$isExpanded && 'inherit', sizeStyles, colorStyles, componentStyles);

export { StyledNavButton };
