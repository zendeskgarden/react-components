'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')


appendStyles({
  css: "@-webkit-keyframes rc-appear-d63854ff{from{opacity:0}to{opacity:1}}@keyframes rc-appear-d63854ff{from{opacity:0}to{opacity:1}}.rc-container-d63854ff{position:absolute;-webkit-animation-name:rc-appear-d63854ff;animation-name:rc-appear-d63854ff;-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-delay:.4s;animation-delay:.4s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;pointer-events:none;opacity:0}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"container":"rc-container-d63854ff","appear":"rc-appear-d63854ff"}
