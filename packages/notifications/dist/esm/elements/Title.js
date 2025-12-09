/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default from 'react';
import '../styled/content/StyledClose.js';
import '../styled/content/StyledParagraph.js';
import { StyledTitle } from '../styled/content/StyledTitle.js';
import '../styled/StyledAlert.js';
import '../styled/StyledNotification.js';
import '../styled/StyledWell.js';
import '../styled/StyledIcon.js';
import '../styled/StyledBase.js';
import '../styled/global-alert/StyledGlobalAlert.js';
import '../styled/global-alert/StyledGlobalAlertButton.js';
import '../styled/global-alert/StyledGlobalAlertClose.js';
import '../styled/global-alert/StyledGlobalAlertContent.js';
import '../styled/global-alert/StyledGlobalAlertIcon.js';
import '../styled/global-alert/StyledGlobalAlertTitle.js';

const Title = React__default.forwardRef((_ref, ref) => {
  let {
    isRegular,
    ...props
  } = _ref;
  return React__default.createElement(StyledTitle, Object.assign({
    ref: ref,
    $isRegular: isRegular
  }, props));
});
Title.displayName = 'Notification.Title';

export { Title };
