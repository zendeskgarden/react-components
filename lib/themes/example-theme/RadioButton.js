'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')


appendStyles({
  css: ".rc-checkbox-23451721.rc-focused-23451721>.rc-label-23451721::before{border-color:#eb4962!important;box-shadow:0 0 0 3px rgba(235,73,98,.4)!important}.rc-checkbox-23451721:not(.rc-disabled-23451721) .rc-label-23451721:active:before{border-color:#eb4962!important}.rc-checkbox-23451721 .rc-input-23451721:checked~.rc-label-23451721:before{border-color:transparent!important;background-color:#eb4962!important}.rc-checkbox-23451721:not(.rc-disabled-23451721) .rc-input-23451721~.rc-label-23451721:hover:before{border-color:#eb4962!important}.rc-checkbox-23451721:not(.rc-disabled-23451721) .rc-input-23451721:checked~.rc-label-23451721:active:before{background-color:#eb4962!important}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"checkbox":"rc-checkbox-23451721","focused":"rc-focused-23451721","label":"rc-label-23451721","disabled":"rc-disabled-23451721","input":"rc-input-23451721"}
