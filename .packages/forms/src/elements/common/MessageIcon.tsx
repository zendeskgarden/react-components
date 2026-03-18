/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import ErrorIcon from '@zendeskgarden/svg-icons/src/16/alert-error-stroke.svg';
import WarningIcon from '@zendeskgarden/svg-icons/src/16/alert-warning-stroke.svg';
import SuccessIcon from '@zendeskgarden/svg-icons/src/16/check-circle-stroke.svg';
import PropTypes from 'prop-types';
import React, { FC, PropsWithChildren } from 'react';

import { StyledMessageIcon } from '../../styled';
import { IMessageIconProps, VALIDATION } from '../../types';

export const MessageIcon: FC<PropsWithChildren<IMessageIconProps>> = ({
  validation,
  children,
  ...props
}) => (
  /* eslint-disable-next-line jsx-a11y/prefer-tag-over-role */
  <StyledMessageIcon aria-hidden={false} role="img" {...props}>
    {validation
      ? {
          error: <ErrorIcon />,
          success: <SuccessIcon />,
          warning: <WarningIcon />
        }[validation]
      : children}
  </StyledMessageIcon>
);

MessageIcon.displayName = 'Field.MessageIcon';

MessageIcon.propTypes = {
  validation: PropTypes.oneOf(VALIDATION)
};
