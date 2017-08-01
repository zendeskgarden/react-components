'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-modals.js')

appendStyles({
  css: ".rc-backdrop-b4a103cd{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"backdrop":"rc-backdrop-b4a103cd rc-l-backdrop-9272ac42","dialog":"rc-dialog-b4a103cd rc-c-dialog-9272ac42","open":"rc-open-b4a103cd rc-is-open-9272ac42","rtl":"rc-rtl-b4a103cd rc-is-rtl-9272ac42","type_transparent":"rc-type_transparent-b4a103cd rc-l-backdrop--transparent-9272ac42","type_lightbox":"rc-type_lightbox-b4a103cd rc-l-backdrop--lightbox-9272ac42","header":"rc-header-b4a103cd rc-c-dialog__header-9272ac42","body":"rc-body-b4a103cd rc-c-dialog__body-9272ac42","footer":"rc-footer-b4a103cd rc-c-dialog__footer-9272ac42","close":"rc-close-b4a103cd rc-c-dialog__close-9272ac42","close_focused":"rc-close_focused-b4a103cd rc-is-focused-9272ac42"}
