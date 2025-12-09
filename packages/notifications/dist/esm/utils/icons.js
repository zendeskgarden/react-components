/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import SvgAlertErrorStroke from '../node_modules/@zendeskgarden/svg-icons/src/16/alert-error-stroke.svg.js';
import SvgCheckCircleStroke from '../node_modules/@zendeskgarden/svg-icons/src/16/check-circle-stroke.svg.js';
import SvgAlertWarningStroke from '../node_modules/@zendeskgarden/svg-icons/src/16/alert-warning-stroke.svg.js';
import SvgInfoStroke from '../node_modules/@zendeskgarden/svg-icons/src/16/info-stroke.svg.js';

const validationIcons = {
  success: SvgCheckCircleStroke,
  error: SvgAlertErrorStroke,
  warning: SvgAlertWarningStroke,
  info: SvgInfoStroke
};
const validationTypes = {
  success: 'success',
  error: 'error',
  warning: 'warning',
  info: 'info'
};

export { validationIcons, validationTypes };
