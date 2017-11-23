'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-forms.js')

appendStyles({
  css: ".rc-stretched-7e4b4c07{-webkit-box-flex:1;-ms-flex:1;flex:1;width:100%}.rc-message-7e4b4c07{margin-top:8px}.rc-hint-7e4b4c07{margin-bottom:8px}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"stretched":"rc-stretched-7e4b4c07","txt":"rc-txt-7e4b4c07 rc-c-txt-b893a24","message":"rc-message-7e4b4c07 rc-c-txt__message-b893a24","input":"rc-input-7e4b4c07 rc-c-txt__input-b893a24 rc-c-txt__input--select-b893a24","is_focused":"rc-is_focused-7e4b4c07 rc-is-focused-b893a24","label":"rc-label-7e4b4c07 rc-c-txt__label-b893a24","hint":"rc-hint-7e4b4c07 rc-c-txt__hint-b893a24","size_small":"rc-size_small-7e4b4c07 rc-c-txt--sm-b893a24","success":"rc-success-7e4b4c07 rc-has-success-b893a24","warning":"rc-warning-7e4b4c07 rc-has-warning-b893a24","error":"rc-error-7e4b4c07 rc-has-error-b893a24","rtl":"rc-rtl-7e4b4c07 rc-is-rtl-b893a24","open":"rc-open-7e4b4c07 rc-is-open-b893a24","disabled":"rc-disabled-7e4b4c07 rc-is-disabled-b893a24"}
