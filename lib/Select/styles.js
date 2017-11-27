'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-forms.js')

appendStyles({
  css: ".rc-stretched-ed854e4f{-webkit-box-flex:1;-ms-flex:1;flex:1;width:100%}.rc-message-ed854e4f{margin-top:8px}.rc-hint-ed854e4f{margin-bottom:8px}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"stretched":"rc-stretched-ed854e4f","txt":"rc-txt-ed854e4f rc-c-txt-3f623a20","message":"rc-message-ed854e4f rc-c-txt__message-3f623a20","input":"rc-input-ed854e4f rc-c-txt__input-3f623a20 rc-c-txt__input--select-3f623a20","is_focused":"rc-is_focused-ed854e4f rc-is-focused-3f623a20","label":"rc-label-ed854e4f rc-c-txt__label-3f623a20","hint":"rc-hint-ed854e4f rc-c-txt__hint-3f623a20","size_small":"rc-size_small-ed854e4f rc-c-txt--sm-3f623a20","success":"rc-success-ed854e4f rc-has-success-3f623a20","warning":"rc-warning-ed854e4f rc-has-warning-3f623a20","error":"rc-error-ed854e4f rc-has-error-3f623a20","rtl":"rc-rtl-ed854e4f rc-is-rtl-3f623a20","open":"rc-open-ed854e4f rc-is-open-3f623a20","disabled":"rc-disabled-ed854e4f rc-is-disabled-3f623a20"}
