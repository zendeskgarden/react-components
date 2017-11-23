'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-forms.js')

appendStyles({
  css: ".rc-muted-5f302d09{font-weight:400}.rc-message-5f302d09{display:block}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"checkbox":"rc-checkbox-5f302d09 rc-c-chk-be883a25","radio":"rc-radio-5f302d09 rc-c-chk--radio-be883a25","input":"rc-input-5f302d09 rc-c-chk__input-be883a25","label":"rc-label-5f302d09 rc-c-chk__label-be883a25","rtl":"rc-rtl-5f302d09 rc-is-rtl-be883a25","focused":"rc-focused-5f302d09 rc-is-focused-be883a25","muted":"rc-muted-5f302d09","hint":"rc-hint-5f302d09 rc-c-chk__hint-be883a25","disabled":"rc-disabled-5f302d09 rc-is-disabled-be883a25","message":"rc-message-5f302d09 rc-c-chk__message-be883a25","success":"rc-success-5f302d09 rc-has-success-be883a25","warning":"rc-warning-5f302d09 rc-has-warning-be883a25","error":"rc-error-5f302d09 rc-has-error-be883a25","noLabel":"rc-noLabel-5f302d09 rc-c-chk--nolabel-be883a25"}
