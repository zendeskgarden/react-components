'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-forms.js')

appendStyles({
  css: ".rc-stretched-15b93af5{-webkit-box-flex:1;-ms-flex:1;flex:1;width:100%}.rc-txt-15b93af5:focus{outline:0}.rc-hint-15b93af5{margin-bottom:8px}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"stretched":"rc-stretched-15b93af5","txt":"rc-txt-15b93af5 rc-c-txt-a9a84dc7","message":"rc-message-15b93af5 rc-c-txt__message-a9a84dc7","input":"rc-input-15b93af5 rc-c-txt__input-a9a84dc7 rc-c-txt__input--select-a9a84dc7","label":"rc-label-15b93af5 rc-c-txt__label-a9a84dc7","hint":"rc-hint-15b93af5 rc-c-txt__hint-a9a84dc7","size_small":"rc-size_small-15b93af5 rc-c-txt--sm-a9a84dc7","success":"rc-success-15b93af5 rc-has-success-a9a84dc7","warning":"rc-warning-15b93af5 rc-has-warning-a9a84dc7","error":"rc-error-15b93af5 rc-has-error-a9a84dc7","rtl":"rc-rtl-15b93af5 rc-is-rtl-a9a84dc7","open":"rc-open-15b93af5 rc-is-open-a9a84dc7","focused":"rc-focused-15b93af5 rc-is-focused-a9a84dc7","disabled":"rc-disabled-15b93af5 rc-is-disabled-a9a84dc7"}
