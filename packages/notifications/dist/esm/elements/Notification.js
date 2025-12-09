/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import SvgInfoStroke from '../node_modules/@zendeskgarden/svg-icons/src/16/info-stroke.svg.js';
import { TYPE } from '../types/index.js';
import '../styled/content/StyledClose.js';
import '../styled/content/StyledParagraph.js';
import '../styled/content/StyledTitle.js';
import '../styled/StyledAlert.js';
import { StyledNotification } from '../styled/StyledNotification.js';
import '../styled/StyledWell.js';
import { StyledIcon } from '../styled/StyledIcon.js';
import '../styled/StyledBase.js';
import '../styled/global-alert/StyledGlobalAlert.js';
import '../styled/global-alert/StyledGlobalAlertButton.js';
import '../styled/global-alert/StyledGlobalAlertClose.js';
import '../styled/global-alert/StyledGlobalAlertContent.js';
import '../styled/global-alert/StyledGlobalAlertIcon.js';
import '../styled/global-alert/StyledGlobalAlertTitle.js';
import { validationIcons } from '../utils/icons.js';
import { Title } from './Title.js';
import { Paragraph } from './Paragraph.js';
import { Close } from './Close.js';

const NotificationComponent = forwardRef((_ref, ref) => {
  let {
    children,
    type,
    ...props
  } = _ref;
  const Icon = type ? validationIcons[type] : SvgInfoStroke;
  return React__default.createElement(StyledNotification, Object.assign({
    ref: ref,
    $type: type,
    $isFloating: true,
    role: "alert"
  }, props), !!type && React__default.createElement(StyledIcon, {
    $type: type
  }, React__default.createElement(Icon, null)), children);
});
NotificationComponent.displayName = 'Notification';
NotificationComponent.propTypes = {
  type: PropTypes.oneOf(TYPE)
};
const Notification = NotificationComponent;
Notification.Close = Close;
Notification.Paragraph = Paragraph;
Notification.Title = Title;

export { Notification, NotificationComponent };
