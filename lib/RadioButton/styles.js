'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-forms.js')

appendStyles({
  css: ".rc-muted-c2cb2abb{font-weight:400}.rc-message-c2cb2abb{display:block}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"checkbox":"rc-checkbox-c2cb2abb rc-c-chk-747c3a53","radio":"rc-radio-c2cb2abb rc-c-chk--radio-747c3a53","input":"rc-input-c2cb2abb rc-c-chk__input-747c3a53","label":"rc-label-c2cb2abb rc-c-chk__label-747c3a53","rtl":"rc-rtl-c2cb2abb rc-is-rtl-747c3a53","focused":"rc-focused-c2cb2abb rc-is-focused-747c3a53","muted":"rc-muted-c2cb2abb","hint":"rc-hint-c2cb2abb rc-c-chk__hint-747c3a53","disabled":"rc-disabled-c2cb2abb rc-is-disabled-747c3a53","message":"rc-message-c2cb2abb rc-c-chk__message-747c3a53","success":"rc-success-c2cb2abb rc-has-success-747c3a53","warning":"rc-warning-c2cb2abb rc-has-warning-747c3a53","error":"rc-error-c2cb2abb rc-has-error-747c3a53","noLabel":"rc-noLabel-c2cb2abb rc-c-chk--nolabel-747c3a53"}
