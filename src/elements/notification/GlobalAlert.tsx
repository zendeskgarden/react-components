/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import { forwardRef, useMemo } from 'react';

import { GlobalAlertProvider } from '../../context/notification/GlobalAlertContext';
import { ThemeProvider } from '../../theming/elements/ThemeProvider';
import { NOTIFICATION_TYPE, IGlobalAlertProps } from '../../types/elements';
import { validationIcons } from '../../utils/notification/icons';
import { StyledGlobalAlert } from '../../views/notification/StyledGlobalAlert';
import { StyledGlobalAlertIcon } from '../../views/notification/StyledGlobalAlertIcon';
import { COMPONENT_IDS } from '../utils';
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
    const Icon = validationIcons[type] as any;

    return (
      /* [1] */
      <ThemeProvider theme={theme => ({ ...theme, colors: { ...theme.colors, base: 'light' } })}>
        <GlobalAlertProvider value={useMemo(() => ({ type }), [type])}>
          {/* [2] */}
          {/* eslint-disable-next-line jsx-a11y/prefer-tag-over-role */}
          <StyledGlobalAlert
            ref={ref}
            role="status"
            $alertType={type}
            {...props}
            data-garden-id={COMPONENT_IDS['notifications.global_alert']}
            data-garden-version={PACKAGE_VERSION}
          >
            <StyledGlobalAlertIcon
              $alertType={type}
              data-garden-id={COMPONENT_IDS['notifications.global_alert.icon']}
              data-garden-version={PACKAGE_VERSION}
            >
              <Icon />
            </StyledGlobalAlertIcon>
            {props.children}
          </StyledGlobalAlert>
        </GlobalAlertProvider>
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
  type: PropTypes.oneOf(NOTIFICATION_TYPE).isRequired
};
