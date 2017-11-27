'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-forms.js')

appendStyles({
  css: ".rc-stretched-aca44c5d{-webkit-box-flex:1;-ms-flex:1;flex:1;width:100%}.rc-message-aca44c5d{margin-top:8px}.rc-hint-aca44c5d{margin-bottom:8px}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"stretched":"rc-stretched-aca44c5d","txt":"rc-txt-aca44c5d rc-c-txt-71963a26","message":"rc-message-aca44c5d rc-c-txt__message-71963a26","input":"rc-input-aca44c5d rc-c-txt__input-71963a26 rc-c-txt__input--select-71963a26","is_focused":"rc-is_focused-aca44c5d rc-is-focused-71963a26","label":"rc-label-aca44c5d rc-c-txt__label-71963a26","hint":"rc-hint-aca44c5d rc-c-txt__hint-71963a26","size_small":"rc-size_small-aca44c5d rc-c-txt--sm-71963a26","success":"rc-success-aca44c5d rc-has-success-71963a26","warning":"rc-warning-aca44c5d rc-has-warning-71963a26","error":"rc-error-aca44c5d rc-has-error-71963a26","rtl":"rc-rtl-aca44c5d rc-is-rtl-71963a26","open":"rc-open-aca44c5d rc-is-open-71963a26","disabled":"rc-disabled-aca44c5d rc-is-disabled-71963a26"}
