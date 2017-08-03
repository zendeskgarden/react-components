'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-forms.js')

appendStyles({
  css: ".rc-stretched-87f42f6a{-webkit-box-flex:1;-ms-flex:1;flex:1;width:100%}.rc-txt-87f42f6a:focus{outline:0}.rc-hint-87f42f6a{margin-top:10px}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"stretched":"rc-stretched-87f42f6a","txt":"rc-txt-87f42f6a rc-c-txt-14477708","message":"rc-message-87f42f6a rc-c-txt__message-14477708","input":"rc-input-87f42f6a rc-c-txt__input-14477708 rc-c-txt__input--select-14477708","label":"rc-label-87f42f6a rc-c-txt__label-14477708","hint":"rc-hint-87f42f6a rc-c-txt__hint-14477708","size_small":"rc-size_small-87f42f6a rc-c-txt--sm-14477708","success":"rc-success-87f42f6a rc-has-success-14477708","warning":"rc-warning-87f42f6a rc-has-warning-14477708","error":"rc-error-87f42f6a rc-has-error-14477708","rtl":"rc-rtl-87f42f6a rc-is-rtl-14477708","open":"rc-open-87f42f6a rc-is-open-14477708","focused":"rc-focused-87f42f6a rc-is-focused-14477708","disabled":"rc-disabled-87f42f6a rc-is-disabled-14477708"}
