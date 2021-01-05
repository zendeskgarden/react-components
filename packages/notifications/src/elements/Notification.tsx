/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import InfoStrokeIcon from '@zendeskgarden/svg-icons/src/16/info-stroke.svg';
import { StyledNotification, IStyledNotificationProps, StyledIcon } from '../styled';
import { ARRAY_VALIDATION_TYPE } from '../utils/types';
import { validationIcons, validationHues } from '../utils/icons';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Notification = React.forwardRef<
  HTMLDivElement,
  IStyledNotificationProps & HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const Icon = props.type ? validationIcons[props.type] : InfoStrokeIcon;
  const hue = props.type && validationHues[props.type];

  return (
    <StyledNotification ref={ref} type={props.type} isFloating {...props}>
      {props.type && (
        <StyledIcon hue={hue}>
          <Icon />
        </StyledIcon>
      )}

      {props.children}
    </StyledNotification>
  );
});

Notification.displayName = 'Notification';

Notification.propTypes = {
  type: PropTypes.oneOf(ARRAY_VALIDATION_TYPE)
};
