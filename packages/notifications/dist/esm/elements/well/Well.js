/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default from 'react';
import PropTypes from 'prop-types';
import '../../styled/content/StyledClose.js';
import '../../styled/content/StyledParagraph.js';
import '../../styled/content/StyledTitle.js';
import '../../styled/StyledAlert.js';
import '../../styled/StyledNotification.js';
import { StyledWell } from '../../styled/StyledWell.js';
import '../../styled/StyledIcon.js';
import '../../styled/StyledBase.js';
import '../../styled/global-alert/StyledGlobalAlert.js';
import '../../styled/global-alert/StyledGlobalAlertButton.js';
import '../../styled/global-alert/StyledGlobalAlertClose.js';
import '../../styled/global-alert/StyledGlobalAlertContent.js';
import '../../styled/global-alert/StyledGlobalAlertIcon.js';
import '../../styled/global-alert/StyledGlobalAlertTitle.js';
import { Title } from '../Title.js';
import { Paragraph } from '../Paragraph.js';

const WellComponent = React__default.forwardRef((_ref, ref) => {
  let {
    isFloating,
    isRecessed,
    ...props
  } = _ref;
  return React__default.createElement(StyledWell, Object.assign({
    ref: ref,
    $isFloating: isFloating,
    $isRecessed: isRecessed
  }, props));
});
WellComponent.displayName = 'Well';
WellComponent.propTypes = {
  isRecessed: PropTypes.bool,
  isFloating: PropTypes.bool
};
const Well = WellComponent;
Well.Paragraph = Paragraph;
Well.Title = Title;

export { Well, WellComponent };
