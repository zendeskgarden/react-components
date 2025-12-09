/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { componentStyles, getColor } from '@zendeskgarden/react-theming';
import { StyledButton, COMPONENT_ID as COMPONENT_ID$1, getHeight } from './StyledButton.js';
import { StyledIcon } from './StyledIcon.js';

const COMPONENT_ID = 'buttons.icon_button';
const iconColorStyles = _ref => {
  let {
    theme
  } = _ref;
  const options = {
    theme,
    variable: 'foreground.subtle'
  };
  const baseColor = getColor(options);
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
  return css(["color:", ";&:hover{color:", ";}&:active,&[aria-pressed='true'],&[aria-pressed='mixed']{color:", ";}"], baseColor, hoverColor, activeColor);
};
const iconButtonStyles = props => {
  const width = getHeight(props);
  return css(["border:", ";padding:0;width:", ";min-width:", ";", ";&:disabled{background-color:", ";}"], props.$isBasic && 'none', width, width, props.$isBasic && !(props.$isPrimary || props.$isDanger || props.disabled) && iconColorStyles(props), !props.$isPrimary && 'transparent');
};
const iconStyles = props => {
  const size = props.theme.iconSizes.md;
  return css(["width:", ";height:", ";& > svg{transition:opacity 0.15s ease-in-out;}"], size, size);
};
const StyledIconButton = styled(StyledButton).attrs(props => {
  const externalId = props['data-garden-id'];
  return {
    'data-garden-id': externalId && externalId !== COMPONENT_ID$1 ? externalId : COMPONENT_ID,
    'data-garden-version': '9.12.3'
  };
}).withConfig({
  displayName: "StyledIconButton",
  componentId: "sc-1t0ughp-0"
})(["", ";& ", "{", "}", ";"], iconButtonStyles, StyledIcon, iconStyles, componentStyles);

export { COMPONENT_ID, StyledIconButton };
