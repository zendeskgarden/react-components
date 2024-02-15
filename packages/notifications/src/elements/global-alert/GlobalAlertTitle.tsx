/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { IGlobalAlertTitleProps } from '../../types';
import { StyledGlobalAlertTitle } from '../../styled';
import { useGlobalAlertContext } from './utility';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const GlobalAlertTitle = forwardRef<HTMLDivElement, IGlobalAlertTitleProps>((props, ref) => {
  const { type } = useGlobalAlertContext();

  return <StyledGlobalAlertTitle alertType={type} ref={ref} {...props} />;
});

GlobalAlertTitle.displayName = 'GlobalAlert.Title';

GlobalAlertTitle.propTypes = {
  isRegular: PropTypes.bool
};
