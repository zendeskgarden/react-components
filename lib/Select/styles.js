'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-forms.js')

appendStyles({
  css: ".rc-stretched-be434e33{-webkit-box-flex:1;-ms-flex:1;flex:1;width:100%}.rc-message-be434e33{margin-top:8px}.rc-hint-be434e33{margin-bottom:8px}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"stretched":"rc-stretched-be434e33","txt":"rc-txt-be434e33 rc-c-txt-3f603a20","message":"rc-message-be434e33 rc-c-txt__message-3f603a20","input":"rc-input-be434e33 rc-c-txt__input-3f603a20 rc-c-txt__input--select-3f603a20","is_focused":"rc-is_focused-be434e33 rc-is-focused-3f603a20","label":"rc-label-be434e33 rc-c-txt__label-3f603a20","hint":"rc-hint-be434e33 rc-c-txt__hint-3f603a20","size_small":"rc-size_small-be434e33 rc-c-txt--sm-3f603a20","success":"rc-success-be434e33 rc-has-success-3f603a20","warning":"rc-warning-be434e33 rc-has-warning-3f603a20","error":"rc-error-be434e33 rc-has-error-3f603a20","rtl":"rc-rtl-be434e33 rc-is-rtl-3f603a20","open":"rc-open-be434e33 rc-is-open-3f603a20","disabled":"rc-disabled-be434e33 rc-is-disabled-3f603a20"}
