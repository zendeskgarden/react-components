'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-forms.js')

appendStyles({
  css: ".rc-muted-20b12f96{font-weight:400}.rc-message-20b12f96{display:block}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"checkbox":"rc-checkbox-20b12f96 rc-c-chk-f2613a21","rtl":"rc-rtl-20b12f96 rc-is-rtl-f2613a21","indeterminate":"rc-indeterminate-20b12f96 rc-is-indeterminate-f2613a21","focused":"rc-focused-20b12f96 rc-is-focused-f2613a21","input":"rc-input-20b12f96 rc-c-chk__input-f2613a21","label":"rc-label-20b12f96 rc-c-chk__label-f2613a21","muted":"rc-muted-20b12f96","hint":"rc-hint-20b12f96 rc-c-chk__hint-f2613a21","disabled":"rc-disabled-20b12f96 rc-is-disabled-f2613a21","message":"rc-message-20b12f96 rc-c-chk__message-f2613a21","success":"rc-success-20b12f96 rc-has-success-f2613a21","warning":"rc-warning-20b12f96 rc-has-warning-f2613a21","error":"rc-error-20b12f96 rc-has-error-f2613a21","noLabel":"rc-noLabel-20b12f96 rc-c-chk--nolabel-f2613a21"}
