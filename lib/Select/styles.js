'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-forms.js')

appendStyles({
  css: ".rc-stretched-dfbd4e43{-webkit-box-flex:1;-ms-flex:1;flex:1;width:100%}.rc-message-dfbd4e43{margin-top:8px}.rc-hint-dfbd4e43{margin-bottom:8px}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"stretched":"rc-stretched-dfbd4e43","txt":"rc-txt-dfbd4e43 rc-c-txt-a5713a22","message":"rc-message-dfbd4e43 rc-c-txt__message-a5713a22","input":"rc-input-dfbd4e43 rc-c-txt__input-a5713a22 rc-c-txt__input--select-a5713a22","is_focused":"rc-is_focused-dfbd4e43 rc-is-focused-a5713a22","label":"rc-label-dfbd4e43 rc-c-txt__label-a5713a22","hint":"rc-hint-dfbd4e43 rc-c-txt__hint-a5713a22","size_small":"rc-size_small-dfbd4e43 rc-c-txt--sm-a5713a22","success":"rc-success-dfbd4e43 rc-has-success-a5713a22","warning":"rc-warning-dfbd4e43 rc-has-warning-a5713a22","error":"rc-error-dfbd4e43 rc-has-error-a5713a22","rtl":"rc-rtl-dfbd4e43 rc-is-rtl-a5713a22","open":"rc-open-dfbd4e43 rc-is-open-a5713a22","disabled":"rc-disabled-dfbd4e43 rc-is-disabled-a5713a22"}
