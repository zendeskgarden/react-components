'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-forms.js')

appendStyles({
  css: ".rc-stretched-fcab557b{-webkit-box-flex:1;-ms-flex:1;flex:1;width:100%}.rc-message-fcab557b{margin-top:8px}.rc-input-fcab557b{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.rc-hint-fcab557b{margin-bottom:8px}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"stretched":"rc-stretched-fcab557b","txt":"rc-txt-fcab557b rc-c-txt-5b613a50","message":"rc-message-fcab557b rc-c-txt__message-5b613a50","input":"rc-input-fcab557b rc-c-txt__input-5b613a50 rc-c-txt__input--select-5b613a50","is_focused":"rc-is_focused-fcab557b rc-is-focused-5b613a50","label":"rc-label-fcab557b rc-c-txt__label-5b613a50","hint":"rc-hint-fcab557b rc-c-txt__hint-5b613a50","size_small":"rc-size_small-fcab557b rc-c-txt--sm-5b613a50","success":"rc-success-fcab557b rc-has-success-5b613a50","warning":"rc-warning-fcab557b rc-has-warning-5b613a50","error":"rc-error-fcab557b rc-has-error-5b613a50","rtl":"rc-rtl-fcab557b rc-is-rtl-5b613a50","open":"rc-open-fcab557b rc-is-open-5b613a50","disabled":"rc-disabled-fcab557b rc-is-disabled-5b613a50"}
