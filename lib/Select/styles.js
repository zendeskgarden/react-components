'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-forms.js')

appendStyles({
  css: ".rc-stretched-da545142{-webkit-box-flex:1;-ms-flex:1;flex:1;width:100%}.rc-message-da545142{margin-top:8px}.rc-hint-da545142{margin-bottom:8px}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"stretched":"rc-stretched-da545142","txt":"rc-txt-da545142 rc-c-txt-8c523a1f","message":"rc-message-da545142 rc-c-txt__message-8c523a1f","input":"rc-input-da545142 rc-c-txt__input-8c523a1f rc-c-txt__input--select-8c523a1f","is_focused":"rc-is_focused-da545142 rc-is-focused-8c523a1f","label":"rc-label-da545142 rc-c-txt__label-8c523a1f","hint":"rc-hint-da545142 rc-c-txt__hint-8c523a1f","size_small":"rc-size_small-da545142 rc-c-txt--sm-8c523a1f","success":"rc-success-da545142 rc-has-success-8c523a1f","warning":"rc-warning-da545142 rc-has-warning-8c523a1f","error":"rc-error-da545142 rc-has-error-8c523a1f","rtl":"rc-rtl-da545142 rc-is-rtl-8c523a1f","open":"rc-open-da545142 rc-is-open-8c523a1f","disabled":"rc-disabled-da545142 rc-is-disabled-8c523a1f"}
