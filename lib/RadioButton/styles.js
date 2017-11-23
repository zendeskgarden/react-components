'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-forms.js')

appendStyles({
  css: ".rc-muted-72f12c84{font-weight:400}.rc-message-72f12c84{display:block}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"checkbox":"rc-checkbox-72f12c84 rc-c-chk-a56d3a22","radio":"rc-radio-72f12c84 rc-c-chk--radio-a56d3a22","input":"rc-input-72f12c84 rc-c-chk__input-a56d3a22","label":"rc-label-72f12c84 rc-c-chk__label-a56d3a22","rtl":"rc-rtl-72f12c84 rc-is-rtl-a56d3a22","focused":"rc-focused-72f12c84 rc-is-focused-a56d3a22","muted":"rc-muted-72f12c84","hint":"rc-hint-72f12c84 rc-c-chk__hint-a56d3a22","disabled":"rc-disabled-72f12c84 rc-is-disabled-a56d3a22","message":"rc-message-72f12c84 rc-c-chk__message-a56d3a22","success":"rc-success-72f12c84 rc-has-success-a56d3a22","warning":"rc-warning-72f12c84 rc-has-warning-a56d3a22","error":"rc-error-72f12c84 rc-has-error-a56d3a22","noLabel":"rc-noLabel-72f12c84 rc-c-chk--nolabel-a56d3a22"}
