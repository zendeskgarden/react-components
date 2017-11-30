'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-forms.js')

appendStyles({
  css: ".rc-stretched-bb04e5e{-webkit-box-flex:1;-ms-flex:1;flex:1;width:100%}.rc-message-bb04e5e{margin-top:8px}.rc-hint-bb04e5e{margin-bottom:8px}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"stretched":"rc-stretched-bb04e5e","txt":"rc-txt-bb04e5e rc-c-txt-f2633a21","message":"rc-message-bb04e5e rc-c-txt__message-f2633a21","input":"rc-input-bb04e5e rc-c-txt__input-f2633a21 rc-c-txt__input--select-f2633a21","is_focused":"rc-is_focused-bb04e5e rc-is-focused-f2633a21","label":"rc-label-bb04e5e rc-c-txt__label-f2633a21","hint":"rc-hint-bb04e5e rc-c-txt__hint-f2633a21","size_small":"rc-size_small-bb04e5e rc-c-txt--sm-f2633a21","success":"rc-success-bb04e5e rc-has-success-f2633a21","warning":"rc-warning-bb04e5e rc-has-warning-f2633a21","error":"rc-error-bb04e5e rc-has-error-f2633a21","rtl":"rc-rtl-bb04e5e rc-is-rtl-f2633a21","open":"rc-open-bb04e5e rc-is-open-f2633a21","disabled":"rc-disabled-bb04e5e rc-is-disabled-f2633a21"}
