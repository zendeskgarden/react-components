/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import { useGlobalAlertContext } from '../../hooks/notification/useGlobalAlertContext';
import { IGlobalAlertTitleProps } from '../../types/elements';
import { StyledGlobalAlertTitle } from '../../views/notification/StyledGlobalAlertTitle';
import { COMPONENT_IDS } from '../utils';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const GlobalAlertTitle = forwardRef<HTMLDivElement, IGlobalAlertTitleProps>(
  ({ isRegular, ...props }, ref) => {
    const { type } = useGlobalAlertContext();

    return (
      <StyledGlobalAlertTitle
        $alertType={type}
        $isRegular={isRegular}
        ref={ref}
        {...props}
        data-garden-id={COMPONENT_IDS['notifications.global_alert.title']}
        data-garden-version={PACKAGE_VERSION}
      />
    );
  }
);

GlobalAlertTitle.displayName = 'GlobalAlert.Title';

GlobalAlertTitle.propTypes = {
  isRegular: PropTypes.bool
};
