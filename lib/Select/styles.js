'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-forms.js')

appendStyles({
  css: ".rc-stretched-91d514c{-webkit-box-flex:1;-ms-flex:1;flex:1;width:100%}.rc-message-91d514c{margin-top:8px}.rc-hint-91d514c{margin-bottom:8px}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"stretched":"rc-stretched-91d514c","txt":"rc-txt-91d514c rc-c-txt-60cf3a28","message":"rc-message-91d514c rc-c-txt__message-60cf3a28","input":"rc-input-91d514c rc-c-txt__input-60cf3a28 rc-c-txt__input--select-60cf3a28","is_focused":"rc-is_focused-91d514c rc-is-focused-60cf3a28","label":"rc-label-91d514c rc-c-txt__label-60cf3a28","hint":"rc-hint-91d514c rc-c-txt__hint-60cf3a28","size_small":"rc-size_small-91d514c rc-c-txt--sm-60cf3a28","success":"rc-success-91d514c rc-has-success-60cf3a28","warning":"rc-warning-91d514c rc-has-warning-60cf3a28","error":"rc-error-91d514c rc-has-error-60cf3a28","rtl":"rc-rtl-91d514c rc-is-rtl-60cf3a28","open":"rc-open-91d514c rc-is-open-60cf3a28","disabled":"rc-disabled-91d514c rc-is-disabled-60cf3a28"}
