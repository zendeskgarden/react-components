/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { forwardRef } from 'react';
import { useText } from '@zendeskgarden/react-theming';
import SvgXStroke from '../../node_modules/@zendeskgarden/svg-icons/src/16/x-stroke.svg.js';
import '../../styled/content/StyledClose.js';
import '../../styled/content/StyledParagraph.js';
import '../../styled/content/StyledTitle.js';
import '../../styled/StyledAlert.js';
import '../../styled/StyledNotification.js';
import '../../styled/StyledWell.js';
import '../../styled/StyledIcon.js';
import '../../styled/StyledBase.js';
import '../../styled/global-alert/StyledGlobalAlert.js';
import '../../styled/global-alert/StyledGlobalAlertButton.js';
import { StyledGlobalAlertClose } from '../../styled/global-alert/StyledGlobalAlertClose.js';
import '../../styled/global-alert/StyledGlobalAlertContent.js';
import '../../styled/global-alert/StyledGlobalAlertIcon.js';
import '../../styled/global-alert/StyledGlobalAlertTitle.js';
import { useGlobalAlertContext } from '../../utils/useGlobalAlertContext.js';

const GlobalAlertClose = forwardRef((props, ref) => {
  const {
    type
  } = useGlobalAlertContext();
  const label = useText(GlobalAlertClose, props, 'aria-label', 'Close');
  return React__default.createElement(StyledGlobalAlertClose, Object.assign({
    ref: ref,
    $alertType: type
  }, props, {
    size: "small"
  }), React__default.createElement(SvgXStroke, {
    role: "img",
    "aria-label": label
  }));
});
GlobalAlertClose.displayName = 'GlobalAlert.Close';

export { GlobalAlertClose };
