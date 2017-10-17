'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')


appendStyles({
  css: ".rc-toggle-af971518:not(.rc-disabled-af971518) .rc-label-af971518:active:before{border-color:#333!important}.rc-toggle-af971518.rc-focused-af971518>.rc-label-af971518::before{border-color:#333!important;-webkit-box-shadow:0 0 0 3px rgba(51,51,51,.4)!important;box-shadow:0 0 0 3px rgba(51,51,51,.4)!important}.rc-toggle-af971518:not(.rc-disabled-af971518) .rc-input-af971518:checked~.rc-label-af971518:before{background-color:#333!important}.rc-toggle-af971518:not(.rc-disabled-af971518) .rc-input-af971518:checked~.rc-label-af971518:active:before{background-color:#333!important}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"toggle":"rc-toggle-af971518","disabled":"rc-disabled-af971518","label":"rc-label-af971518","focused":"rc-focused-af971518","input":"rc-input-af971518"}
