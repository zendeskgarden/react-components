'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-forms.js')

appendStyles({
  css: ".rc-stretched-6cf53a4{-webkit-box-flex:1;-ms-flex:1;flex:1;width:100%}.rc-message-6cf53a4{margin-top:8px}.rc-hint-6cf53a4{margin-bottom:8px}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"stretched":"rc-stretched-6cf53a4","txt":"rc-txt-6cf53a4 rc-c-txt-fab33a26","message":"rc-message-6cf53a4 rc-c-txt__message-fab33a26","input":"rc-input-6cf53a4 rc-c-txt__input-fab33a26 rc-c-txt__input--select-fab33a26","is_focused":"rc-is_focused-6cf53a4 rc-is-focused-fab33a26","label":"rc-label-6cf53a4 rc-c-txt__label-fab33a26","hint":"rc-hint-6cf53a4 rc-c-txt__hint-fab33a26","size_small":"rc-size_small-6cf53a4 rc-c-txt--sm-fab33a26","success":"rc-success-6cf53a4 rc-has-success-fab33a26","warning":"rc-warning-6cf53a4 rc-has-warning-fab33a26","error":"rc-error-6cf53a4 rc-has-error-fab33a26","rtl":"rc-rtl-6cf53a4 rc-is-rtl-fab33a26","open":"rc-open-6cf53a4 rc-is-open-fab33a26","disabled":"rc-disabled-6cf53a4 rc-is-disabled-fab33a26"}
