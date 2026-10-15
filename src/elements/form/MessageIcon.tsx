/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import SuccessIcon from '@zendeskgarden/svg-icons/src/check-circle-stroke.svg';
import ErrorIcon from '@zendeskgarden/svg-icons/src/exclamation-circle-stroke.svg';
import WarningIcon from '@zendeskgarden/svg-icons/src/exclamation-triangle-stroke.svg';
import PropTypes from 'prop-types';
import { FC, PropsWithChildren } from 'react';

import { IMessageIconProps, VALIDATION } from '../../types/elements';
import { StyledMessageIcon } from '../../views/form/StyledMessageIcon';
import { COMPONENT_IDS } from '../utils';

export const MessageIcon: FC<PropsWithChildren<IMessageIconProps>> = ({
  validation,
  children,
  ...props
}) => (
  /* eslint-disable-next-line jsx-a11y/prefer-tag-over-role */
  <StyledMessageIcon
    aria-hidden={false}
    role="img"
    {...props}
    data-garden-id={COMPONENT_IDS['forms.input_message_icon']}
    data-garden-version={PACKAGE_VERSION}
  >
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
