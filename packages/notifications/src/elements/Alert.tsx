/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { StyledAlert, IStyledAlertProps } from '../styled';
import { ARRAY_VALIDATION_TYPE } from '../utils/types';

/**
 * Supports all `<div>` props
 */
export const Alert = React.forwardRef<
  HTMLDivElement,
  IStyledAlertProps & HTMLAttributes<HTMLDivElement>
>((props, ref) => <StyledAlert ref={ref} {...props} />);

Alert.propTypes = {
  type: PropTypes.oneOf(ARRAY_VALIDATION_TYPE)
};
