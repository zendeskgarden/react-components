/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { componentStyles, getColor } from '@zendeskgarden/react-theming';
import { validationTypes } from '../../utils/icons.js';
import { IconButton } from '@zendeskgarden/react-buttons';

const COMPONENT_ID$d = 'notifications.close';
const colorStyles$a = ({
  theme,
  $type
}) => {
  let variable;
  switch ($type) {
    case validationTypes.warning:
      variable = 'foreground.warning';
      break;
    case validationTypes.error:
      variable = 'foreground.danger';
      break;
    case validationTypes.success:
      variable = 'foreground.success';
      break;
    default:
      variable = 'foreground.subtle';
      break;
  }
  const color = getColor({
    variable,
    theme
  });
  const hoverColor = getColor({
    variable,
    light: {
      offset: 100
    },
    dark: {
      offset: -100
    },
    theme
  });
  const activeColor = getColor({
    variable,
    light: {
      offset: 200
    },
    dark: {
      offset: -200
    },
    theme
  });
  return css(["color:", ";&:hover{background-color:transparent;color:", ";}&:active{background-color:transparent;color:", ";}"], color, hoverColor, activeColor);
};
const StyledClose = styled(IconButton).attrs({
  'data-garden-id': COMPONENT_ID$d,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledClose",
  componentId: "sc-1mr9nx1-0"
})(["position:absolute;top:", "px;right:", ";left:", ";", " ", ";"], props => props.theme.space.base, p => !p.theme.rtl && `${p.theme.space.base}px`, p => p.theme.rtl && `${p.theme.space.base}px`, colorStyles$a, componentStyles);

export { StyledClose };
