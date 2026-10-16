/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import { useGlobalAlertContext } from '../../hooks/notification/useGlobalAlertContext';
import { IGlobalAlertButtonProps } from '../../types/elements';
import { StyledGlobalAlertButton } from '../../views/notification/StyledGlobalAlertButton';
import { COMPONENT_IDS } from '../utils';

/**
 * @extends ButtonHTMLAttributes<HTMLButtonElement>
 */
export const GlobalAlertButton = forwardRef<HTMLButtonElement, IGlobalAlertButtonProps>(
  ({ isBasic, ...props }, ref) => {
    const { type } = useGlobalAlertContext();

    return (
      <StyledGlobalAlertButton
        ref={ref}
        type="button"
        $alertType={type}
        {...props}
        $isBasic={isBasic}
        $isPrimary={!isBasic}
        $size="small"
        data-garden-id={COMPONENT_IDS['notifications.global_alert.button']}
        data-garden-version={PACKAGE_VERSION}
      />
    );
  }
);

GlobalAlertButton.displayName = 'GlobalAlert.Button';

GlobalAlertButton.propTypes = {
  isBasic: PropTypes.bool
};
