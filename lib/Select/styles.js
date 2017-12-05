'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-forms.js')

appendStyles({
  css: ".rc-stretched-f0e4e5f{-webkit-box-flex:1;-ms-flex:1;flex:1;width:100%}.rc-message-f0e4e5f{margin-top:8px}.rc-hint-f0e4e5f{margin-bottom:8px}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"stretched":"rc-stretched-f0e4e5f","txt":"rc-txt-f0e4e5f rc-c-txt-a5733a22","message":"rc-message-f0e4e5f rc-c-txt__message-a5733a22","input":"rc-input-f0e4e5f rc-c-txt__input-a5733a22 rc-c-txt__input--select-a5733a22","is_focused":"rc-is_focused-f0e4e5f rc-is-focused-a5733a22","label":"rc-label-f0e4e5f rc-c-txt__label-a5733a22","hint":"rc-hint-f0e4e5f rc-c-txt__hint-a5733a22","size_small":"rc-size_small-f0e4e5f rc-c-txt--sm-a5733a22","success":"rc-success-f0e4e5f rc-has-success-a5733a22","warning":"rc-warning-f0e4e5f rc-has-warning-a5733a22","error":"rc-error-f0e4e5f rc-has-error-a5733a22","rtl":"rc-rtl-f0e4e5f rc-is-rtl-a5733a22","open":"rc-open-f0e4e5f rc-is-open-a5733a22","disabled":"rc-disabled-f0e4e5f rc-is-disabled-a5733a22"}
