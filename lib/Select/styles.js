'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-forms.js')

appendStyles({
  css: ".rc-stretched-a2d53a5{-webkit-box-flex:1;-ms-flex:1;flex:1;width:100%}.rc-message-a2d53a5{margin-top:8px}.rc-hint-a2d53a5{margin-bottom:8px}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"stretched":"rc-stretched-a2d53a5","txt":"rc-txt-a2d53a5 rc-c-txt-adc33a27","message":"rc-message-a2d53a5 rc-c-txt__message-adc33a27","input":"rc-input-a2d53a5 rc-c-txt__input-adc33a27 rc-c-txt__input--select-adc33a27","is_focused":"rc-is_focused-a2d53a5 rc-is-focused-adc33a27","label":"rc-label-a2d53a5 rc-c-txt__label-adc33a27","hint":"rc-hint-a2d53a5 rc-c-txt__hint-adc33a27","size_small":"rc-size_small-a2d53a5 rc-c-txt--sm-adc33a27","success":"rc-success-a2d53a5 rc-has-success-adc33a27","warning":"rc-warning-a2d53a5 rc-has-warning-adc33a27","error":"rc-error-a2d53a5 rc-has-error-adc33a27","rtl":"rc-rtl-a2d53a5 rc-is-rtl-adc33a27","open":"rc-open-a2d53a5 rc-is-open-adc33a27","disabled":"rc-disabled-a2d53a5 rc-is-disabled-adc33a27"}
