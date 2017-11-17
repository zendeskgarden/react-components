'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-forms.js')

appendStyles({
  css: ".rc-stretched-65ba156f{-webkit-box-flex:1;-ms-flex:1;flex:1;width:100%}.rc-hint-65ba156f{margin-bottom:8px}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"stretched":"rc-stretched-65ba156f","txt":"rc-txt-65ba156f rc-c-txt-85523a51","message":"rc-message-65ba156f rc-c-txt__message-85523a51","input":"rc-input-65ba156f rc-c-txt__input-85523a51 rc-c-txt__input--select-85523a51","label":"rc-label-65ba156f rc-c-txt__label-85523a51","hint":"rc-hint-65ba156f rc-c-txt__hint-85523a51","size_small":"rc-size_small-65ba156f rc-c-txt--sm-85523a51","success":"rc-success-65ba156f rc-has-success-85523a51","warning":"rc-warning-65ba156f rc-has-warning-85523a51","error":"rc-error-65ba156f rc-has-error-85523a51","rtl":"rc-rtl-65ba156f rc-is-rtl-85523a51","open":"rc-open-65ba156f rc-is-open-85523a51","disabled":"rc-disabled-65ba156f rc-is-disabled-85523a51"}
