'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')


appendStyles({
  css: ".rc-checkbox-adb502a4.rc-focused-adb502a4>.rc-label-adb502a4::before{border-color:#e64e65!important;box-shadow:0 0 0 3px rgba(230,78,101,.4)!important}.rc-checkbox-adb502a4:not(.rc-disabled-adb502a4) .rc-label-adb502a4:active:before{border-color:#e64e65!important}.rc-checkbox-adb502a4 .rc-input-adb502a4:checked~.rc-label-adb502a4:before{border-color:transparent!important;background-color:#e64e65!important}.rc-checkbox-adb502a4:not(.rc-disabled-adb502a4) .rc-input-adb502a4~.rc-label-adb502a4:hover:before{border-color:#e64e65!important}.rc-checkbox-adb502a4:not(.rc-disabled-adb502a4) .rc-input-adb502a4:checked~.rc-label-adb502a4:active:before{background-color:#e64e65!important}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"checkbox":"rc-checkbox-adb502a4","focused":"rc-focused-adb502a4","label":"rc-label-adb502a4","disabled":"rc-disabled-adb502a4","input":"rc-input-adb502a4"}
