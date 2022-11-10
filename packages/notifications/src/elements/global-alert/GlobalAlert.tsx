/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, useMemo } from 'react';
import PropTypes from 'prop-types';
import InfoIcon from '@zendeskgarden/svg-icons/src/16/info-stroke.svg';
import ErrorIcon from '@zendeskgarden/svg-icons/src/16/alert-error-stroke.svg';
import WarningIcon from '@zendeskgarden/svg-icons/src/16/alert-warning-stroke.svg';
import SuccessIcon from '@zendeskgarden/svg-icons/src/16/check-circle-stroke.svg';

import { TYPE, IGlobalAlertProps } from '../../types';
import { StyledGlobalAlert, StyledGlobalAlertIcon } from '../../styled';
import { GlobalAlertContext } from './utility';
import { GlobalAlertButton } from './GlobalAlertButton';
import { GlobalAlertClose } from './GlobalAlertClose';
import { GlobalAlertContent } from './GlobalAlertContent';
import { GlobalAlertTitle } from './GlobalAlertTitle';

const GlobalAlertComponent = forwardRef<HTMLDivElement, IGlobalAlertProps>(
  ({ type, ...props }, ref) => (
    <GlobalAlertContext.Provider value={useMemo(() => ({ type }), [type])}>
      <StyledGlobalAlert ref={ref} role="status" alertType={type} {...props}>
        {
          {
            success: (
              <StyledGlobalAlertIcon>
                <SuccessIcon />
              </StyledGlobalAlertIcon>
            ),
            error: (
              <StyledGlobalAlertIcon>
                <ErrorIcon />
              </StyledGlobalAlertIcon>
            ),
            warning: (
              <StyledGlobalAlertIcon>
                <WarningIcon />
              </StyledGlobalAlertIcon>
            ),
            info: (
              <StyledGlobalAlertIcon>
                <InfoIcon />
              </StyledGlobalAlertIcon>
            )
          }[type]
        }
        {props.children}
      </StyledGlobalAlert>
    </GlobalAlertContext.Provider>
  )
);

GlobalAlertComponent.displayName = 'GlobalAlert';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const GlobalAlert = GlobalAlertComponent as typeof GlobalAlertComponent & {
  Button: typeof GlobalAlertButton;
  Close: typeof GlobalAlertClose;
  Content: typeof GlobalAlertContent;
  Title: typeof GlobalAlertTitle;
};

GlobalAlert.Button = GlobalAlertButton;
GlobalAlert.Close = GlobalAlertClose;
GlobalAlert.Content = GlobalAlertContent;
GlobalAlert.Title = GlobalAlertTitle;

GlobalAlert.propTypes = {
  type: PropTypes.oneOf(TYPE).isRequired
};
