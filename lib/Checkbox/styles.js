'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-forms.js')

appendStyles({
  css: ".rc-muted-e3d42fd3{font-weight:400}.rc-message-e3d42fd3{display:block}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"checkbox":"rc-checkbox-e3d42fd3 rc-c-chk-5b613a50","rtl":"rc-rtl-e3d42fd3 rc-is-rtl-5b613a50","indeterminate":"rc-indeterminate-e3d42fd3 rc-is-indeterminate-5b613a50","focused":"rc-focused-e3d42fd3 rc-is-focused-5b613a50","input":"rc-input-e3d42fd3 rc-c-chk__input-5b613a50","label":"rc-label-e3d42fd3 rc-c-chk__label-5b613a50","muted":"rc-muted-e3d42fd3","hint":"rc-hint-e3d42fd3 rc-c-chk__hint-5b613a50","disabled":"rc-disabled-e3d42fd3 rc-is-disabled-5b613a50","message":"rc-message-e3d42fd3 rc-c-chk__message-5b613a50","success":"rc-success-e3d42fd3 rc-has-success-5b613a50","warning":"rc-warning-e3d42fd3 rc-has-warning-5b613a50","error":"rc-error-e3d42fd3 rc-has-error-5b613a50","noLabel":"rc-noLabel-e3d42fd3 rc-c-chk--nolabel-5b613a50"}
