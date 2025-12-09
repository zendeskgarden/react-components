/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default from 'react';
import PropTypes from 'prop-types';
import { TYPE } from '../../types/index.js';
import '../../styled/content/StyledClose.js';
import '../../styled/content/StyledParagraph.js';
import '../../styled/content/StyledTitle.js';
import { StyledAlert } from '../../styled/StyledAlert.js';
import '../../styled/StyledNotification.js';
import '../../styled/StyledWell.js';
import { StyledIcon } from '../../styled/StyledIcon.js';
import '../../styled/StyledBase.js';
import '../../styled/global-alert/StyledGlobalAlert.js';
import '../../styled/global-alert/StyledGlobalAlertButton.js';
import '../../styled/global-alert/StyledGlobalAlertClose.js';
import '../../styled/global-alert/StyledGlobalAlertContent.js';
import '../../styled/global-alert/StyledGlobalAlertIcon.js';
import '../../styled/global-alert/StyledGlobalAlertTitle.js';
import { validationIcons } from '../../utils/icons.js';
import { NotificationsContext } from '../../utils/useNotificationsContext.js';
import { Title } from './Title.js';
import { Paragraph } from './Paragraph.js';
import { Close } from './Close.js';

const AlertComponent = React__default.forwardRef(({
  role,
  type,
  ...props
}, ref) => {
  const Icon = validationIcons[type];
  return React__default.createElement(NotificationsContext.Provider, {
    value: type
  }, React__default.createElement(StyledAlert, Object.assign({
    ref: ref,
    $type: type,
    role: role === undefined ? 'alert' : role
  }, props), React__default.createElement(StyledIcon, {
    $type: type
  }, React__default.createElement(Icon, null)), props.children));
});
AlertComponent.displayName = 'Alert';
AlertComponent.propTypes = {
  type: PropTypes.oneOf(TYPE).isRequired
};
const Alert = AlertComponent;
Alert.Close = Close;
Alert.Paragraph = Paragraph;
Alert.Title = Title;

export { Alert, AlertComponent };
