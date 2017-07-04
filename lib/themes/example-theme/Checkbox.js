'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')


appendStyles({
  css: ".rc-checkbox-ac0c0785:not(.rc-disabled-ac0c0785) .rc-label-ac0c0785:active:after{border-color:#e64e65!important}.rc-checkbox-ac0c0785.rc-focused-ac0c0785>.rc-label-ac0c0785::before{border-color:#e64e65!important;box-shadow:0 0 0 3px rgba(230,78,101,.4)!important}.rc-checkbox-ac0c0785:not(.rc-disabled-ac0c0785) .rc-input-ac0c0785:checked~.rc-label-ac0c0785:before{border-color:transparent!important;background-color:#e64e65!important}.rc-checkbox-ac0c0785:not(.rc-disabled-ac0c0785) .rc-input-ac0c0785~.rc-label-ac0c0785:hover:before{border-color:#e64e65!important}.rc-checkbox-ac0c0785:not(.rc-disabled-ac0c0785) .rc-input-ac0c0785:checked~.rc-label-ac0c0785:active:before{background-color:#e64e65!important}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"checkbox":"rc-checkbox-ac0c0785","disabled":"rc-disabled-ac0c0785","label":"rc-label-ac0c0785","focused":"rc-focused-ac0c0785","input":"rc-input-ac0c0785"}
