/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import { StyledGlobalAlertButton } from '../../styled';
import { IGlobalAlertButtonProps } from '../../types';
import { useGlobalAlertContext } from '../../utils/useGlobalAlertContext';

/**
 * @extends ButtonHTMLAttributes<HTMLButtonElement>
 */
export const GlobalAlertButton = forwardRef<HTMLButtonElement, IGlobalAlertButtonProps>(
  ({ isBasic, ...props }, ref) => {
    const { type } = useGlobalAlertContext();

    return (
      <StyledGlobalAlertButton
        ref={ref}
        $alertType={type}
        {...props}
        size="small"
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
