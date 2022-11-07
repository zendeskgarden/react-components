/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useGlobalAlertContext } from './utility';
import { IGlobalAlertTitleProps } from '../../types';
import { StyledGlobalAlertTitle } from '../../styled';

export const GlobalAlertTitle = forwardRef<HTMLDivElement, IGlobalAlertTitleProps>((props, ref) => {
  const { type } = useGlobalAlertContext();

  return <StyledGlobalAlertTitle type={type} ref={ref} {...props} />;
});

GlobalAlertTitle.displayName = 'GlobalAlert.Title';

GlobalAlertTitle.propTypes = {
  isRegular: PropTypes.bool
};
