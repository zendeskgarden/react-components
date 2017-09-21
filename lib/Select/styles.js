'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-forms.js')

appendStyles({
  css: ".rc-stretched-fc7d3ae7{-webkit-box-flex:1;-ms-flex:1;flex:1;width:100%}.rc-txt-fc7d3ae7:focus{outline:0}.rc-hint-fc7d3ae7{margin-bottom:8px}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"stretched":"rc-stretched-fc7d3ae7","txt":"rc-txt-fc7d3ae7 rc-c-txt-b87a4fa7","message":"rc-message-fc7d3ae7 rc-c-txt__message-b87a4fa7","input":"rc-input-fc7d3ae7 rc-c-txt__input-b87a4fa7 rc-c-txt__input--select-b87a4fa7","label":"rc-label-fc7d3ae7 rc-c-txt__label-b87a4fa7","hint":"rc-hint-fc7d3ae7 rc-c-txt__hint-b87a4fa7","size_small":"rc-size_small-fc7d3ae7 rc-c-txt--sm-b87a4fa7","success":"rc-success-fc7d3ae7 rc-has-success-b87a4fa7","warning":"rc-warning-fc7d3ae7 rc-has-warning-b87a4fa7","error":"rc-error-fc7d3ae7 rc-has-error-b87a4fa7","rtl":"rc-rtl-fc7d3ae7 rc-is-rtl-b87a4fa7","open":"rc-open-fc7d3ae7 rc-is-open-b87a4fa7","focused":"rc-focused-fc7d3ae7 rc-is-focused-b87a4fa7","disabled":"rc-disabled-fc7d3ae7 rc-is-disabled-b87a4fa7"}
