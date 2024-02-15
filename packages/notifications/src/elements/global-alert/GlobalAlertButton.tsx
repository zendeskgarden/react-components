/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { IGlobalAlertButtonProps } from '../../types';
import { StyledGlobalAlertButton } from '../../styled';
import { useGlobalAlertContext } from './utility';

/**
 * @extends ButtonHTMLAttributes<HTMLButtonElement>
 */
export const GlobalAlertButton = forwardRef<HTMLButtonElement, IGlobalAlertButtonProps>(
  ({ isBasic, ...props }, ref) => {
    const { type } = useGlobalAlertContext();

    return (
      <StyledGlobalAlertButton
        ref={ref}
        alertType={type}
        {...props}
        isPrimary={!isBasic}
        isBasic={isBasic}
      />
    );
  }
);

GlobalAlertButton.displayName = 'GlobalAlert.Button';

GlobalAlertButton.propTypes = {
  isBasic: PropTypes.bool
};
