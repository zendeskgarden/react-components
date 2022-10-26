/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef } from 'react';

import { IGlobalAlertTitleProps } from '../../types';
import { StyledGlobalAlertTitle } from '../../styled';

export const GlobalAlertTitle = forwardRef<HTMLDivElement, IGlobalAlertTitleProps>((props, ref) => {
  return <StyledGlobalAlertTitle ref={ref} {...props} />;
});

GlobalAlertTitle.displayName = 'GlobalAlert.Title';
