'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-forms.js')

appendStyles({
  css: ".rc-stretched-e57c3083{-webkit-box-flex:1;-ms-flex:1;flex:1;width:100%}.rc-txt-e57c3083:focus{outline:0}.rc-hint-e57c3083{margin-bottom:8px}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"stretched":"rc-stretched-e57c3083","txt":"rc-txt-e57c3083 rc-c-txt-14477708","message":"rc-message-e57c3083 rc-c-txt__message-14477708","input":"rc-input-e57c3083 rc-c-txt__input-14477708 rc-c-txt__input--select-14477708","label":"rc-label-e57c3083 rc-c-txt__label-14477708","hint":"rc-hint-e57c3083 rc-c-txt__hint-14477708","size_small":"rc-size_small-e57c3083 rc-c-txt--sm-14477708","success":"rc-success-e57c3083 rc-has-success-14477708","warning":"rc-warning-e57c3083 rc-has-warning-14477708","error":"rc-error-e57c3083 rc-has-error-14477708","rtl":"rc-rtl-e57c3083 rc-is-rtl-14477708","open":"rc-open-e57c3083 rc-is-open-14477708","focused":"rc-focused-e57c3083 rc-is-focused-14477708","disabled":"rc-disabled-e57c3083 rc-is-disabled-14477708"}
