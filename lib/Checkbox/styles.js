'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-forms.js')

appendStyles({
  css: ".rc-muted-d634325f{font-weight:400}.rc-message-d634325f{display:block}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"checkbox":"rc-checkbox-d634325f rc-c-chk-8c523a1f","rtl":"rc-rtl-d634325f rc-is-rtl-8c523a1f","indeterminate":"rc-indeterminate-d634325f rc-is-indeterminate-8c523a1f","focused":"rc-focused-d634325f rc-is-focused-8c523a1f","input":"rc-input-d634325f rc-c-chk__input-8c523a1f","label":"rc-label-d634325f rc-c-chk__label-8c523a1f","muted":"rc-muted-d634325f","hint":"rc-hint-d634325f rc-c-chk__hint-8c523a1f","disabled":"rc-disabled-d634325f rc-is-disabled-8c523a1f","message":"rc-message-d634325f rc-c-chk__message-8c523a1f","success":"rc-success-d634325f rc-has-success-8c523a1f","warning":"rc-warning-d634325f rc-has-warning-8c523a1f","error":"rc-error-d634325f rc-has-error-8c523a1f","noLabel":"rc-noLabel-d634325f rc-c-chk--nolabel-8c523a1f"}
