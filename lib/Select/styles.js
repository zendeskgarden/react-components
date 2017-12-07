'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-forms.js')

appendStyles({
  css: ".rc-stretched-33a95164{-webkit-box-flex:1;-ms-flex:1;flex:1;width:100%}.rc-message-33a95164{margin-top:8px}.rc-hint-33a95164{margin-bottom:8px}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"stretched":"rc-stretched-33a95164","txt":"rc-txt-33a95164 rc-c-txt-be943a25","message":"rc-message-33a95164 rc-c-txt__message-be943a25","input":"rc-input-33a95164 rc-c-txt__input-be943a25 rc-c-txt__input--select-be943a25","is_focused":"rc-is_focused-33a95164 rc-is-focused-be943a25","label":"rc-label-33a95164 rc-c-txt__label-be943a25","hint":"rc-hint-33a95164 rc-c-txt__hint-be943a25","size_small":"rc-size_small-33a95164 rc-c-txt--sm-be943a25","success":"rc-success-33a95164 rc-has-success-be943a25","warning":"rc-warning-33a95164 rc-has-warning-be943a25","error":"rc-error-33a95164 rc-has-error-be943a25","rtl":"rc-rtl-33a95164 rc-is-rtl-be943a25","open":"rc-open-33a95164 rc-is-open-be943a25","disabled":"rc-disabled-33a95164 rc-is-disabled-be943a25"}
