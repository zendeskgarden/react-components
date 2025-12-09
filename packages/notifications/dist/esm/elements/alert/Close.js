/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default from 'react';
import { StyledClose } from '../../styled/content/StyledClose.js';
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
import '../../styled/global-alert/StyledGlobalAlertTitle.js';
import { useNotificationsContext } from '../../utils/useNotificationsContext.js';
import { useText } from '@zendeskgarden/react-theming';
import SvgXStroke from '../../node_modules/@zendeskgarden/svg-icons/src/16/x-stroke.svg.js';

const Close$1 = React__default.forwardRef((props, ref) => {
  const ariaLabel = useText(Close$1, props, 'aria-label', 'Close');
  const type = useNotificationsContext();
  return React__default.createElement(StyledClose, Object.assign({
    ref: ref,
    $type: type,
    "aria-label": ariaLabel
  }, props, {
    focusInset: true,
    size: "small"
  }), React__default.createElement(SvgXStroke, null));
});
Close$1.displayName = 'Alert.Close';

export { Close$1 as Close };
