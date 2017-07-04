'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-forms.js')

appendStyles({
  css: ".rc-stretched-ed8e2986{width:100%;-webkit-box-flex:1;-ms-flex:1;flex:1}.rc-txt-ed8e2986:focus{outline:0}.rc-hint-ed8e2986{margin-top:10px}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"stretched":"rc-stretched-ed8e2986","txt":"rc-txt-ed8e2986 rc-c-txt-deb9ebb4","message":"rc-message-ed8e2986 rc-c-txt__message-deb9ebb4","input":"rc-input-ed8e2986 rc-c-txt__input-deb9ebb4 rc-c-txt__input--select-deb9ebb4","label":"rc-label-ed8e2986 rc-c-txt__label-deb9ebb4","hint":"rc-hint-ed8e2986 rc-c-txt__hint-deb9ebb4","success":"rc-success-ed8e2986 rc-has-success-deb9ebb4","warning":"rc-warning-ed8e2986 rc-has-warning-deb9ebb4","error":"rc-error-ed8e2986 rc-has-error-deb9ebb4","rtl":"rc-rtl-ed8e2986 rc-is-rtl-deb9ebb4","open":"rc-open-ed8e2986 rc-is-open-deb9ebb4","focused":"rc-focused-ed8e2986 rc-is-focused-deb9ebb4","disabled":"rc-disabled-ed8e2986 rc-is-disabled-deb9ebb4"}
