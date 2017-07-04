'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')


appendStyles({
  css: ".rc-toggle-4ea6d066:not(.rc-disabled-4ea6d066) .rc-label-4ea6d066:active:before{border-color:#e64e65!important}.rc-toggle-4ea6d066.rc-focused-4ea6d066>.rc-label-4ea6d066::before{border-color:#e64e65!important;box-shadow:0 0 0 3px rgba(230,78,101,.4)!important}.rc-toggle-4ea6d066:not(.rc-disabled-4ea6d066) .rc-input-4ea6d066:checked~.rc-label-4ea6d066:before{background-color:#e64e65!important}.rc-toggle-4ea6d066:not(.rc-disabled-4ea6d066) .rc-input-4ea6d066:checked~.rc-label-4ea6d066:active:before{background-color:#e64e65!important}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"toggle":"rc-toggle-4ea6d066","disabled":"rc-disabled-4ea6d066","label":"rc-label-4ea6d066","focused":"rc-focused-4ea6d066","input":"rc-input-4ea6d066"}
