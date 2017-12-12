'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')


appendStyles({
  css: "@-webkit-keyframes rc-appear-ab7854d5{from{opacity:0}to{opacity:1}}@keyframes rc-appear-ab7854d5{from{opacity:0}to{opacity:1}}.rc-container-ab7854d5{position:absolute;-webkit-animation-name:rc-appear-ab7854d5;animation-name:rc-appear-ab7854d5;-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-delay:.4s;animation-delay:.4s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;pointer-events:none;opacity:0}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"container":"rc-container-ab7854d5","appear":"rc-appear-ab7854d5"}
