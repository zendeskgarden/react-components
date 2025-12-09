/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { forwardRef } from 'react';
import PropTypes from 'prop-types';
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
import '../../styled/global-alert/StyledGlobalAlertClose.js';
import '../../styled/global-alert/StyledGlobalAlertContent.js';
import '../../styled/global-alert/StyledGlobalAlertIcon.js';
import { StyledGlobalAlertTitle } from '../../styled/global-alert/StyledGlobalAlertTitle.js';
import { useGlobalAlertContext } from '../../utils/useGlobalAlertContext.js';

const GlobalAlertTitle = forwardRef(({
  isRegular,
  ...props
}, ref) => {
  const {
    type
  } = useGlobalAlertContext();
  return React__default.createElement(StyledGlobalAlertTitle, Object.assign({
    $alertType: type,
    $isRegular: isRegular,
    ref: ref
  }, props));
});
GlobalAlertTitle.displayName = 'GlobalAlert.Title';
GlobalAlertTitle.propTypes = {
  isRegular: PropTypes.bool
};

export { GlobalAlertTitle };
