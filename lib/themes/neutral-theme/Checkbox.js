'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')


appendStyles({
  css: ".rc-checkbox-dbd415dd:not(.rc-disabled-dbd415dd) .rc-label-dbd415dd:active:after{border-color:#999!important}.rc-checkbox-dbd415dd.rc-focused-dbd415dd>.rc-label-dbd415dd::before{border-color:#999!important;-webkit-box-shadow:0 0 0 3px rgba(153,153,153,.4)!important;box-shadow:0 0 0 3px rgba(153,153,153,.4)!important}.rc-checkbox-dbd415dd:not(.rc-disabled-dbd415dd).rc-indeterminate-dbd415dd>.rc-label-dbd415dd::before{border-color:#999!important;background-color:#999!important}.rc-checkbox-dbd415dd:not(.rc-disabled-dbd415dd) .rc-input-dbd415dd:checked~.rc-label-dbd415dd:before{border-color:transparent!important;background-color:#999!important}.rc-checkbox-dbd415dd:not(.rc-disabled-dbd415dd) .rc-input-dbd415dd~.rc-label-dbd415dd:hover:before{border-color:#999!important}.rc-checkbox-dbd415dd:not(.rc-disabled-dbd415dd) .rc-input-dbd415dd:checked~.rc-label-dbd415dd:active:before{background-color:#999!important}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"checkbox":"rc-checkbox-dbd415dd","disabled":"rc-disabled-dbd415dd","label":"rc-label-dbd415dd","focused":"rc-focused-dbd415dd","indeterminate":"rc-indeterminate-dbd415dd","input":"rc-input-dbd415dd"}
