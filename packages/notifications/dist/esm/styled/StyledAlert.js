/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { componentStyles, getColor } from '@zendeskgarden/react-theming';
import { StyledTitle } from './content/StyledTitle.js';
import { StyledBase } from './StyledBase.js';
import { validationTypes } from '../utils/icons.js';

const COMPONENT_ID = 'notifications.alert';
const colorStyles = props => {
  const {
    $type,
    theme
  } = props;
  let variable;
  switch ($type) {
    case validationTypes.success:
      variable = 'foreground.successEmphasis';
      break;
    case validationTypes.error:
      variable = 'foreground.dangerEmphasis';
      break;
    case validationTypes.warning:
      variable = 'foreground.warningEmphasis';
      break;
    case validationTypes.info:
      variable = 'foreground.default';
      break;
  }
  const color = variable ? getColor({
    variable,
    theme
  }) : undefined;
  return css(["", "{color:", ";}"], StyledTitle, color);
};
const StyledAlert = styled(StyledBase).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledAlert",
  componentId: "sc-fyn8jp-0"
})(["", " ", ";"], colorStyles, componentStyles);

export { StyledAlert };
