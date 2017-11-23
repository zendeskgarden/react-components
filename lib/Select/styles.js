'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-forms.js')

appendStyles({
  css: ".rc-stretched-b1504ec2{-webkit-box-flex:1;-ms-flex:1;flex:1;width:100%}.rc-message-b1504ec2{margin-top:8px}.rc-hint-b1504ec2{margin-bottom:8px}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"stretched":"rc-stretched-b1504ec2","txt":"rc-txt-b1504ec2 rc-c-txt-587b3a23","message":"rc-message-b1504ec2 rc-c-txt__message-587b3a23","input":"rc-input-b1504ec2 rc-c-txt__input-587b3a23 rc-c-txt__input--select-587b3a23","is_focused":"rc-is_focused-b1504ec2 rc-is-focused-587b3a23","label":"rc-label-b1504ec2 rc-c-txt__label-587b3a23","hint":"rc-hint-b1504ec2 rc-c-txt__hint-587b3a23","size_small":"rc-size_small-b1504ec2 rc-c-txt--sm-587b3a23","success":"rc-success-b1504ec2 rc-has-success-587b3a23","warning":"rc-warning-b1504ec2 rc-has-warning-587b3a23","error":"rc-error-b1504ec2 rc-has-error-587b3a23","rtl":"rc-rtl-b1504ec2 rc-is-rtl-587b3a23","open":"rc-open-b1504ec2 rc-is-open-587b3a23","disabled":"rc-disabled-b1504ec2 rc-is-disabled-587b3a23"}
