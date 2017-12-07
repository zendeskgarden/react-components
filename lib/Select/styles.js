'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-forms.js')

appendStyles({
  css: ".rc-stretched-48ee4e7f{-webkit-box-flex:1;-ms-flex:1;flex:1;width:100%}.rc-message-48ee4e7f{margin-top:8px}.rc-hint-48ee4e7f{margin-bottom:8px}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"stretched":"rc-stretched-48ee4e7f","txt":"rc-txt-48ee4e7f rc-c-txt-47b23a25","message":"rc-message-48ee4e7f rc-c-txt__message-47b23a25","input":"rc-input-48ee4e7f rc-c-txt__input-47b23a25 rc-c-txt__input--select-47b23a25","is_focused":"rc-is_focused-48ee4e7f rc-is-focused-47b23a25","label":"rc-label-48ee4e7f rc-c-txt__label-47b23a25","hint":"rc-hint-48ee4e7f rc-c-txt__hint-47b23a25","size_small":"rc-size_small-48ee4e7f rc-c-txt--sm-47b23a25","success":"rc-success-48ee4e7f rc-has-success-47b23a25","warning":"rc-warning-48ee4e7f rc-has-warning-47b23a25","error":"rc-error-48ee4e7f rc-has-error-47b23a25","rtl":"rc-rtl-48ee4e7f rc-is-rtl-47b23a25","open":"rc-open-48ee4e7f rc-is-open-47b23a25","disabled":"rc-disabled-48ee4e7f rc-is-disabled-47b23a25"}
