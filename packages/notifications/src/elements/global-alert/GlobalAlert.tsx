/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, useMemo } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@zendeskgarden/react-theming';
import InfoIcon from '@zendeskgarden/svg-icons/src/16/info-stroke.svg';
import ErrorIcon from '@zendeskgarden/svg-icons/src/16/alert-error-stroke.svg';
import WarningIcon from '@zendeskgarden/svg-icons/src/16/alert-warning-stroke.svg';
import SuccessIcon from '@zendeskgarden/svg-icons/src/16/check-circle-stroke.svg';

import { TYPE, IGlobalAlertProps } from '../../types';
import { StyledGlobalAlert, StyledGlobalAlertIcon } from '../../styled';
import { GlobalAlertContext } from '../../utils/useGlobalAlertContext';
import { GlobalAlertButton } from './GlobalAlertButton';
import { GlobalAlertClose } from './GlobalAlertClose';
import { GlobalAlertContent } from './GlobalAlertContent';
import { GlobalAlertTitle } from './GlobalAlertTitle';

/**
 * 1. Global Alert always renders with light theme colors
 * 2. role='status' on `div` is valid WAI-ARIA usage in this context.
 *    https://www.w3.org/TR/wai-aria-1.1/#status
 */

const GlobalAlertComponent = forwardRef<HTMLDivElement, IGlobalAlertProps>(
  ({ type, ...props }, ref) => {
    const icon = {
      success: <SuccessIcon />,
      error: <ErrorIcon />,
      warning: <WarningIcon />,
      info: <InfoIcon />
    }[type];

    return (
      /* [1] */
      <ThemeProvider theme={theme => ({ ...theme, colors: { ...theme.colors, base: 'light' } })}>
        <GlobalAlertContext.Provider value={useMemo(() => ({ type }), [type])}>
          {/* [2] */}
          {/* eslint-disable-next-line jsx-a11y/prefer-tag-over-role */}
          <StyledGlobalAlert ref={ref} role="status" $alertType={type} {...props}>
            <StyledGlobalAlertIcon $alertType={type}>{icon}</StyledGlobalAlertIcon>
            {props.children}
          </StyledGlobalAlert>
        </GlobalAlertContext.Provider>
      </ThemeProvider>
    );
  }
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
