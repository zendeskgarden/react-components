'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-forms.js')

appendStyles({
  css: ".rc-stretched-d77e5388{-webkit-box-flex:1;-ms-flex:1;flex:1;width:100%}.rc-message-d77e5388{margin-top:8px}.rc-hint-d77e5388{margin-bottom:8px}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"stretched":"rc-stretched-d77e5388","txt":"rc-txt-d77e5388 rc-c-txt-fab13a26","message":"rc-message-d77e5388 rc-c-txt__message-fab13a26","input":"rc-input-d77e5388 rc-c-txt__input-fab13a26 rc-c-txt__input--select-fab13a26","is_focused":"rc-is_focused-d77e5388 rc-is-focused-fab13a26","label":"rc-label-d77e5388 rc-c-txt__label-fab13a26","hint":"rc-hint-d77e5388 rc-c-txt__hint-fab13a26","size_small":"rc-size_small-d77e5388 rc-c-txt--sm-fab13a26","success":"rc-success-d77e5388 rc-has-success-fab13a26","warning":"rc-warning-d77e5388 rc-has-warning-fab13a26","error":"rc-error-d77e5388 rc-has-error-fab13a26","rtl":"rc-rtl-d77e5388 rc-is-rtl-fab13a26","open":"rc-open-d77e5388 rc-is-open-fab13a26","disabled":"rc-disabled-d77e5388 rc-is-disabled-fab13a26"}
