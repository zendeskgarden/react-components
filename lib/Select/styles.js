'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-forms.js')

appendStyles({
  css: ".rc-stretched-838b556f{-webkit-box-flex:1;-ms-flex:1;flex:1;width:100%}.rc-message-838b556f{margin-top:8px}.rc-input-838b556f{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.rc-hint-838b556f{margin-bottom:8px}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"stretched":"rc-stretched-838b556f","txt":"rc-txt-838b556f rc-c-txt-60d13a28","message":"rc-message-838b556f rc-c-txt__message-60d13a28","input":"rc-input-838b556f rc-c-txt__input-60d13a28 rc-c-txt__input--select-60d13a28","is_focused":"rc-is_focused-838b556f rc-is-focused-60d13a28","label":"rc-label-838b556f rc-c-txt__label-60d13a28","hint":"rc-hint-838b556f rc-c-txt__hint-60d13a28","size_small":"rc-size_small-838b556f rc-c-txt--sm-60d13a28","success":"rc-success-838b556f rc-has-success-60d13a28","warning":"rc-warning-838b556f rc-has-warning-60d13a28","error":"rc-error-838b556f rc-has-error-60d13a28","rtl":"rc-rtl-838b556f rc-is-rtl-60d13a28","open":"rc-open-838b556f rc-is-open-60d13a28","disabled":"rc-disabled-838b556f rc-is-disabled-60d13a28"}
