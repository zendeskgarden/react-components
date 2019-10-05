/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import AlertError from '@zendeskgarden/svg-icons/src/16/alert-error-stroke.svg';
import AlertWarning from '@zendeskgarden/svg-icons/src/16/alert-warning-stroke.svg';
import CheckCircle from '@zendeskgarden/svg-icons/src/16/check-circle-stroke.svg';
import VALIDATION from '../../utils/validation';

const MessageIcon = ({ children, validation, ...props }) => {
  let retVal;

  if (validation === VALIDATION.ERROR) {
    retVal = React.createElement(AlertError, props);
  } else if (validation === VALIDATION.SUCCESS) {
    retVal = React.createElement(CheckCircle, props);
  } else if (validation === VALIDATION.WARNING) {
    retVal = React.createElement(AlertWarning, props);
  } else {
    retVal = React.cloneElement(Children.only(children));
  }

  return retVal;
};

const COMPONENT_ID = 'forms.input_message_icon';

export const StyledMessageIcon = styled(MessageIcon).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  position: absolute;
  top: -1px;
  ${props => (props.theme.rtl ? 'right' : 'left')}: 0;
  width: ${props => props.theme.iconSizes.md};
  height: ${props => props.theme.iconSizes.md};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledMessageIcon.propTypes = {
  validation: PropTypes.oneOf([VALIDATION.SUCCESS, VALIDATION.WARNING, VALIDATION.ERROR]),
  theme: PropTypes.object
};

StyledMessageIcon.defaultProps = {
  theme: DEFAULT_THEME
};
