/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { StyledBaseIcon, componentStyles, getColor } from '@zendeskgarden/react-theming';
import { validationTypes } from '../utils/icons.js';

const COMPONENT_ID = 'notifications.icon';
const sizeStyles = _ref => {
  let {
    theme: {
      rtl,
      space
    }
  } = _ref;
  return css(["right:", ";left:", ";margin-top:", "px;"], rtl && `${space.base * 4}px`, !rtl && `${space.base * 4}px`, space.base / 2);
};
const colorStyles = _ref2 => {
  let {
    theme,
    $type
  } = _ref2;
  let variable;
  switch ($type) {
    case validationTypes.success:
      variable = 'foreground.success';
      break;
    case validationTypes.error:
      variable = 'foreground.danger';
      break;
    case validationTypes.warning:
      variable = 'foreground.warning';
      break;
    case validationTypes.info:
      variable = 'foreground.subtle';
      break;
    default:
      variable = 'foreground.default';
      break;
  }
  const color = getColor({
    variable,
    theme
  });
  return css(["color:", ";"], color);
};
const StyledIcon = styled(StyledBaseIcon).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledIcon",
  componentId: "sc-msklws-0"
})(["position:absolute;", " ", " ", ""], sizeStyles, colorStyles, componentStyles);

export { StyledIcon };
