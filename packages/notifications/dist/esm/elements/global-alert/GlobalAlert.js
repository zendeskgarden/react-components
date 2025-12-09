/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { forwardRef, useMemo } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@zendeskgarden/react-theming';
import SvgInfoStroke from '../../node_modules/@zendeskgarden/svg-icons/src/16/info-stroke.svg.js';
import SvgAlertErrorStroke from '../../node_modules/@zendeskgarden/svg-icons/src/16/alert-error-stroke.svg.js';
import SvgAlertWarningStroke from '../../node_modules/@zendeskgarden/svg-icons/src/16/alert-warning-stroke.svg.js';
import SvgCheckCircleStroke from '../../node_modules/@zendeskgarden/svg-icons/src/16/check-circle-stroke.svg.js';
import { TYPE } from '../../types/index.js';
import '../../styled/content/StyledClose.js';
import '../../styled/content/StyledParagraph.js';
import '../../styled/content/StyledTitle.js';
import '../../styled/StyledAlert.js';
import '../../styled/StyledNotification.js';
import '../../styled/StyledWell.js';
import '../../styled/StyledIcon.js';
import '../../styled/StyledBase.js';
import { StyledGlobalAlert } from '../../styled/global-alert/StyledGlobalAlert.js';
import '../../styled/global-alert/StyledGlobalAlertButton.js';
import '../../styled/global-alert/StyledGlobalAlertClose.js';
import '../../styled/global-alert/StyledGlobalAlertContent.js';
import { StyledGlobalAlertIcon } from '../../styled/global-alert/StyledGlobalAlertIcon.js';
import '../../styled/global-alert/StyledGlobalAlertTitle.js';
import { GlobalAlertContext } from '../../utils/useGlobalAlertContext.js';
import { GlobalAlertButton } from './GlobalAlertButton.js';
import { GlobalAlertClose } from './GlobalAlertClose.js';
import { GlobalAlertContent } from './GlobalAlertContent.js';
import { GlobalAlertTitle } from './GlobalAlertTitle.js';

const GlobalAlertComponent = forwardRef(({
  type,
  ...props
}, ref) => {
  const icon = {
    success: React__default.createElement(SvgCheckCircleStroke, null),
    error: React__default.createElement(SvgAlertErrorStroke, null),
    warning: React__default.createElement(SvgAlertWarningStroke, null),
    info: React__default.createElement(SvgInfoStroke, null)
  }[type];
  return  React__default.createElement(ThemeProvider, {
    theme: theme => ({
      ...theme,
      colors: {
        ...theme.colors,
        base: 'light'
      }
    })
  }, React__default.createElement(GlobalAlertContext.Provider, {
    value: useMemo(() => ({
      type
    }), [type])
  }, React__default.createElement(StyledGlobalAlert, Object.assign({
    ref: ref,
    role: "status",
    $alertType: type
  }, props), React__default.createElement(StyledGlobalAlertIcon, {
    $alertType: type
  }, icon), props.children)));
});
GlobalAlertComponent.displayName = 'GlobalAlert';
const GlobalAlert = GlobalAlertComponent;
GlobalAlert.Button = GlobalAlertButton;
GlobalAlert.Close = GlobalAlertClose;
GlobalAlert.Content = GlobalAlertContent;
GlobalAlert.Title = GlobalAlertTitle;
GlobalAlert.propTypes = {
  type: PropTypes.oneOf(TYPE).isRequired
};

export { GlobalAlert };
