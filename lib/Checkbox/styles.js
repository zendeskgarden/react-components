'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-forms.js')

appendStyles({
  css: ".rc-muted-b79632aa{font-weight:400}.rc-message-b79632aa{display:block}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"checkbox":"rc-checkbox-b79632aa rc-c-chk-a8533a4f","rtl":"rc-rtl-b79632aa rc-is-rtl-a8533a4f","indeterminate":"rc-indeterminate-b79632aa rc-is-indeterminate-a8533a4f","focused":"rc-focused-b79632aa rc-is-focused-a8533a4f","input":"rc-input-b79632aa rc-c-chk__input-a8533a4f","label":"rc-label-b79632aa rc-c-chk__label-a8533a4f","muted":"rc-muted-b79632aa","hint":"rc-hint-b79632aa rc-c-chk__hint-a8533a4f","disabled":"rc-disabled-b79632aa rc-is-disabled-a8533a4f","message":"rc-message-b79632aa rc-c-chk__message-a8533a4f","success":"rc-success-b79632aa rc-has-success-a8533a4f","warning":"rc-warning-b79632aa rc-has-warning-a8533a4f","error":"rc-error-b79632aa rc-has-error-a8533a4f","noLabel":"rc-noLabel-b79632aa rc-c-chk--nolabel-a8533a4f"}
