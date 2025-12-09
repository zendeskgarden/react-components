/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { componentStyles, getColor } from '@zendeskgarden/react-theming';
import { TYPE } from '../types/index.js';
import { StyledTitle } from './content/StyledTitle.js';
import { StyledBase } from './StyledBase.js';
import { validationTypes } from '../utils/icons.js';

const COMPONENT_ID = 'notifications.notification';
const colorStyles = props => {
  const {
    $type,
    theme
  } = props;
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
      variable = 'foreground.default';
      break;
  }
  const color = variable ? getColor({
    variable,
    theme
  }) : 'inherit';
  return css(["", "{color:", ";}"], StyledTitle, color);
};
const StyledNotification = styled(StyledBase).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledNotification",
  componentId: "sc-uf6jh-0"
})(["", " ", ";"], colorStyles, componentStyles);
StyledNotification.propTypes = {
  $type: PropTypes.oneOf(TYPE)
};

export { StyledNotification };
