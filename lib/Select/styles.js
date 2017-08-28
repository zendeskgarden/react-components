'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-forms.js')

appendStyles({
  css: ".rc-stretched-ef5934c7{-webkit-box-flex:1;-ms-flex:1;flex:1;width:100%}.rc-txt-ef5934c7:focus{outline:0}.rc-hint-ef5934c7{margin-bottom:8px}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"stretched":"rc-stretched-ef5934c7","txt":"rc-txt-ef5934c7 rc-c-txt-42ea0008","message":"rc-message-ef5934c7 rc-c-txt__message-42ea0008","input":"rc-input-ef5934c7 rc-c-txt__input-42ea0008 rc-c-txt__input--select-42ea0008","label":"rc-label-ef5934c7 rc-c-txt__label-42ea0008","hint":"rc-hint-ef5934c7 rc-c-txt__hint-42ea0008","size_small":"rc-size_small-ef5934c7 rc-c-txt--sm-42ea0008","success":"rc-success-ef5934c7 rc-has-success-42ea0008","warning":"rc-warning-ef5934c7 rc-has-warning-42ea0008","error":"rc-error-ef5934c7 rc-has-error-42ea0008","rtl":"rc-rtl-ef5934c7 rc-is-rtl-42ea0008","open":"rc-open-ef5934c7 rc-is-open-42ea0008","focused":"rc-focused-ef5934c7 rc-is-focused-42ea0008","disabled":"rc-disabled-ef5934c7 rc-is-disabled-42ea0008"}
