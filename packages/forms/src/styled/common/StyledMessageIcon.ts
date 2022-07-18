/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import React, { Children } from 'react';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import AlertError from '@zendeskgarden/svg-icons/src/16/alert-error-stroke.svg';
import AlertWarning from '@zendeskgarden/svg-icons/src/16/alert-warning-stroke.svg';
import CheckCircle from '@zendeskgarden/svg-icons/src/16/check-circle-stroke.svg';
import { Validation } from '../../types';

const MessageIcon: React.FC<IStyledMessageIconProps> = ({ children, validation, ...props }) => {
  let retVal;

  if (validation === 'error') {
    retVal = React.createElement(AlertError, props);
  } else if (validation === 'success') {
    retVal = React.createElement(CheckCircle, props);
  } else if (validation === 'warning') {
    retVal = React.createElement(AlertWarning, props);
  } else {
    retVal = React.cloneElement(Children.only(children as any));
  }

  return retVal;
};

const COMPONENT_ID = 'forms.input_message_icon';

interface IStyledMessageIconProps {
  validation?: Validation;
}

export const StyledMessageIcon = styled(MessageIcon).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  'aria-hidden': null
})<IStyledMessageIconProps>`
  width: ${props => props.theme.iconSizes.md};
  height: ${props => props.theme.iconSizes.md};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledMessageIcon.defaultProps = {
  theme: DEFAULT_THEME
};
