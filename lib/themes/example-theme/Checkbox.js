'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')


appendStyles({
  css: ".rc-checkbox-d9963bfe:not(.rc-disabled-d9963bfe) .rc-label-d9963bfe:active:after{border-color:#e64e65!important}.rc-checkbox-d9963bfe.rc-focused-d9963bfe>.rc-label-d9963bfe::before{border-color:#e64e65!important;box-shadow:0 0 0 3px rgba(230,78,101,.4)!important}.rc-checkbox-d9963bfe.rc-indeterminate-d9963bfe>.rc-label-d9963bfe::before{border-color:#e64e65!important;background-color:#e64e65!important}.rc-checkbox-d9963bfe:not(.rc-disabled-d9963bfe) .rc-input-d9963bfe:checked~.rc-label-d9963bfe:before{border-color:transparent!important;background-color:#e64e65!important}.rc-checkbox-d9963bfe:not(.rc-disabled-d9963bfe) .rc-input-d9963bfe~.rc-label-d9963bfe:hover:before{border-color:#e64e65!important}.rc-checkbox-d9963bfe:not(.rc-disabled-d9963bfe) .rc-input-d9963bfe:checked~.rc-label-d9963bfe:active:before{background-color:#e64e65!important}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"checkbox":"rc-checkbox-d9963bfe","disabled":"rc-disabled-d9963bfe","label":"rc-label-d9963bfe","focused":"rc-focused-d9963bfe","indeterminate":"rc-indeterminate-d9963bfe","input":"rc-input-d9963bfe"}
