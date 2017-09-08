'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-forms.js')

appendStyles({
  css: ".rc-stretched-f74b3ae7{-webkit-box-flex:1;-ms-flex:1;flex:1;width:100%}.rc-txt-f74b3ae7:focus{outline:0}.rc-hint-f74b3ae7{margin-bottom:8px}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"stretched":"rc-stretched-f74b3ae7","txt":"rc-txt-f74b3ae7 rc-c-txt-f73a35ef","message":"rc-message-f74b3ae7 rc-c-txt__message-f73a35ef","input":"rc-input-f74b3ae7 rc-c-txt__input-f73a35ef rc-c-txt__input--select-f73a35ef","label":"rc-label-f74b3ae7 rc-c-txt__label-f73a35ef","hint":"rc-hint-f74b3ae7 rc-c-txt__hint-f73a35ef","size_small":"rc-size_small-f74b3ae7 rc-c-txt--sm-f73a35ef","success":"rc-success-f74b3ae7 rc-has-success-f73a35ef","warning":"rc-warning-f74b3ae7 rc-has-warning-f73a35ef","error":"rc-error-f74b3ae7 rc-has-error-f73a35ef","rtl":"rc-rtl-f74b3ae7 rc-is-rtl-f73a35ef","open":"rc-open-f74b3ae7 rc-is-open-f73a35ef","focused":"rc-focused-f74b3ae7 rc-is-focused-f73a35ef","disabled":"rc-disabled-f74b3ae7 rc-is-disabled-f73a35ef"}
