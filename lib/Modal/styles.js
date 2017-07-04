'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-modals.js')

appendStyles({
  css: ".rc-backdrop-e9c10614{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"backdrop":"rc-backdrop-e9c10614 rc-l-backdrop-4ae91f09","dialog":"rc-dialog-e9c10614 rc-c-dialog-4ae91f09","open":"rc-open-e9c10614 rc-is-open-4ae91f09","rtl":"rc-rtl-e9c10614 rc-is-rtl-4ae91f09","type_transparent":"rc-type_transparent-e9c10614 rc-l-backdrop--transparent-4ae91f09","type_lightbox":"rc-type_lightbox-e9c10614 rc-l-backdrop--lightbox-4ae91f09","header":"rc-header-e9c10614 rc-c-dialog__header-4ae91f09","body":"rc-body-e9c10614 rc-c-dialog__body-4ae91f09","footer":"rc-footer-e9c10614 rc-c-dialog__footer-4ae91f09","close":"rc-close-e9c10614 rc-c-dialog__close-4ae91f09","close_focused":"rc-close_focused-e9c10614 rc-is-focused-4ae91f09"}
