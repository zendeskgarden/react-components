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
import { StyledGlobalAlertButton } from '../../styled/global-alert/StyledGlobalAlertButton.js';
import '../../styled/global-alert/StyledGlobalAlertClose.js';
import '../../styled/global-alert/StyledGlobalAlertContent.js';
import '../../styled/global-alert/StyledGlobalAlertIcon.js';
import '../../styled/global-alert/StyledGlobalAlertTitle.js';
import { useGlobalAlertContext } from '../../utils/useGlobalAlertContext.js';

const GlobalAlertButton = forwardRef((_ref, ref) => {
  let {
    isBasic,
    ...props
  } = _ref;
  const {
    type
  } = useGlobalAlertContext();
  return React__default.createElement(StyledGlobalAlertButton, Object.assign({
    ref: ref,
    $alertType: type
  }, props, {
    size: "small",
    isPrimary: !isBasic,
    isBasic: isBasic
  }));
});
GlobalAlertButton.displayName = 'GlobalAlert.Button';
GlobalAlertButton.propTypes = {
  isBasic: PropTypes.bool
};

export { GlobalAlertButton };
