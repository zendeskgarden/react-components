/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { componentStyles, getColor } from '@zendeskgarden/react-theming';
import { math } from 'polished';
import { StyledTile } from './StyledTile.js';

const COMPONENT_ID$1 = 'forms.tile_icon';
const colorStyles = ({
  theme
}) => {
  const options = {
    theme,
    variable: 'foreground.subtle'
  };
  const color = getColor(options);
  const hoverColor = getColor({
    ...options,
    dark: {
      offset: -100
    },
    light: {
      offset: 100
    }
  });
  const activeColor = getColor({
    ...options,
    dark: {
      offset: -200
    },
    light: {
      offset: 200
    }
  });
  const checkedColor = getColor({
    theme,
    variable: 'foreground.onEmphasis'
  });
  const disabledColor = getColor({
    theme,
    variable: 'foreground.disabled'
  });
  return css(["color:", ";", ":hover &&{color:", ";}", ":active &&{color:", ";}", ":has(:checked) &&{color:", ";}", "[aria-disabled='true'] &&{color:", ";}"], color, StyledTile, hoverColor, StyledTile, activeColor, StyledTile, checkedColor, StyledTile, disabledColor);
};
const sizeStyles$1 = ({
  theme,
  $isCentered
}) => {
  const iconSize = math(`${theme.iconSizes.md} * 2`);
  let position;
  let top;
  let horizontal;
  if (!$isCentered) {
    position = 'absolute';
    top = `${theme.space.base * 6}px`;
    horizontal = `${theme.space.base * 5}px`;
  }
  return css(["position:", ";top:", ";", ":", ";line-height:0;& > *{width:", ";height:", ";}"], position, top, theme.rtl ? 'right' : 'left', horizontal, iconSize, iconSize);
};
const StyledTileIcon = styled.span.attrs({
  'data-garden-id': COMPONENT_ID$1,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledTileIcon",
  componentId: "sc-1wazhg4-0"
})(["display:block;transition:color 0.25s ease-in-out;text-align:center;", ";", ";", ";"], sizeStyles$1, colorStyles, componentStyles);

export { StyledTileIcon };
