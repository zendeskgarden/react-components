'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-forms.js')

appendStyles({
  css: ".rc-stretched-31133d79{-webkit-box-flex:1;-ms-flex:1;flex:1;width:100%}.rc-txt-31133d79:focus{outline:0}.rc-hint-31133d79{margin-bottom:8px}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"stretched":"rc-stretched-31133d79","txt":"rc-txt-31133d79 rc-c-txt-1ecc38ff","message":"rc-message-31133d79 rc-c-txt__message-1ecc38ff","input":"rc-input-31133d79 rc-c-txt__input-1ecc38ff rc-c-txt__input--select-1ecc38ff","label":"rc-label-31133d79 rc-c-txt__label-1ecc38ff","hint":"rc-hint-31133d79 rc-c-txt__hint-1ecc38ff","size_small":"rc-size_small-31133d79 rc-c-txt--sm-1ecc38ff","success":"rc-success-31133d79 rc-has-success-1ecc38ff","warning":"rc-warning-31133d79 rc-has-warning-1ecc38ff","error":"rc-error-31133d79 rc-has-error-1ecc38ff","rtl":"rc-rtl-31133d79 rc-is-rtl-1ecc38ff","open":"rc-open-31133d79 rc-is-open-1ecc38ff","focused":"rc-focused-31133d79 rc-is-focused-1ecc38ff","disabled":"rc-disabled-31133d79 rc-is-disabled-1ecc38ff"}
