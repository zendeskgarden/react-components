'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-forms.js')

appendStyles({
  css: ".rc-stretched-7d3650ff{-webkit-box-flex:1;-ms-flex:1;flex:1;width:100%}.rc-message-7d3650ff{margin-top:8px}.rc-hint-7d3650ff{margin-bottom:8px}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"stretched":"rc-stretched-7d3650ff","txt":"rc-txt-7d3650ff rc-c-txt-a56d3a22","message":"rc-message-7d3650ff rc-c-txt__message-a56d3a22","input":"rc-input-7d3650ff rc-c-txt__input-a56d3a22 rc-c-txt__input--select-a56d3a22","is_focused":"rc-is_focused-7d3650ff rc-is-focused-a56d3a22","label":"rc-label-7d3650ff rc-c-txt__label-a56d3a22","hint":"rc-hint-7d3650ff rc-c-txt__hint-a56d3a22","size_small":"rc-size_small-7d3650ff rc-c-txt--sm-a56d3a22","success":"rc-success-7d3650ff rc-has-success-a56d3a22","warning":"rc-warning-7d3650ff rc-has-warning-a56d3a22","error":"rc-error-7d3650ff rc-has-error-a56d3a22","rtl":"rc-rtl-7d3650ff rc-is-rtl-a56d3a22","open":"rc-open-7d3650ff rc-is-open-a56d3a22","disabled":"rc-disabled-7d3650ff rc-is-disabled-a56d3a22"}
