'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-forms.js')

appendStyles({
  css: ".rc-stretched-5efd563a{-webkit-box-flex:1;-ms-flex:1;flex:1;width:100%}.rc-message-5efd563a{margin-top:8px}.rc-hint-5efd563a{margin-bottom:8px}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"stretched":"rc-stretched-5efd563a","txt":"rc-txt-5efd563a rc-c-txt-c6dc3a2a","message":"rc-message-5efd563a rc-c-txt__message-c6dc3a2a","input":"rc-input-5efd563a rc-c-txt__input-c6dc3a2a rc-c-txt__input--select-c6dc3a2a","is_focused":"rc-is_focused-5efd563a rc-is-focused-c6dc3a2a","label":"rc-label-5efd563a rc-c-txt__label-c6dc3a2a","hint":"rc-hint-5efd563a rc-c-txt__hint-c6dc3a2a","size_small":"rc-size_small-5efd563a rc-c-txt--sm-c6dc3a2a","success":"rc-success-5efd563a rc-has-success-c6dc3a2a","warning":"rc-warning-5efd563a rc-has-warning-c6dc3a2a","error":"rc-error-5efd563a rc-has-error-c6dc3a2a","rtl":"rc-rtl-5efd563a rc-is-rtl-c6dc3a2a","open":"rc-open-5efd563a rc-is-open-c6dc3a2a","disabled":"rc-disabled-5efd563a rc-is-disabled-c6dc3a2a"}
