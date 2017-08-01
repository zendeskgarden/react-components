'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-forms.js')

appendStyles({
  css: ".rc-stretched-dc31b27{width:100%;-webkit-box-flex:1;-ms-flex:1;flex:1}.rc-txt-dc31b27:focus{outline:0}.rc-hint-dc31b27{margin-top:10px}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"stretched":"rc-stretched-dc31b27","txt":"rc-txt-dc31b27 rc-c-txt-14477708","message":"rc-message-dc31b27 rc-c-txt__message-14477708","input":"rc-input-dc31b27 rc-c-txt__input-14477708 rc-c-txt__input--select-14477708","label":"rc-label-dc31b27 rc-c-txt__label-14477708","hint":"rc-hint-dc31b27 rc-c-txt__hint-14477708","success":"rc-success-dc31b27 rc-has-success-14477708","warning":"rc-warning-dc31b27 rc-has-warning-14477708","error":"rc-error-dc31b27 rc-has-error-14477708","rtl":"rc-rtl-dc31b27 rc-is-rtl-14477708","open":"rc-open-dc31b27 rc-is-open-14477708","focused":"rc-focused-dc31b27 rc-is-focused-14477708","disabled":"rc-disabled-dc31b27 rc-is-disabled-14477708"}
