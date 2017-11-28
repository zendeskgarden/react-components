'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-forms.js')

appendStyles({
  css: ".rc-stretched-dc5f4e42{-webkit-box-flex:1;-ms-flex:1;flex:1;width:100%}.rc-message-dc5f4e42{margin-top:8px}.rc-hint-dc5f4e42{margin-bottom:8px}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"stretched":"rc-stretched-dc5f4e42","txt":"rc-txt-dc5f4e42 rc-c-txt-f2613a21","message":"rc-message-dc5f4e42 rc-c-txt__message-f2613a21","input":"rc-input-dc5f4e42 rc-c-txt__input-f2613a21 rc-c-txt__input--select-f2613a21","is_focused":"rc-is_focused-dc5f4e42 rc-is-focused-f2613a21","label":"rc-label-dc5f4e42 rc-c-txt__label-f2613a21","hint":"rc-hint-dc5f4e42 rc-c-txt__hint-f2613a21","size_small":"rc-size_small-dc5f4e42 rc-c-txt--sm-f2613a21","success":"rc-success-dc5f4e42 rc-has-success-f2613a21","warning":"rc-warning-dc5f4e42 rc-has-warning-f2613a21","error":"rc-error-dc5f4e42 rc-has-error-f2613a21","rtl":"rc-rtl-dc5f4e42 rc-is-rtl-f2613a21","open":"rc-open-dc5f4e42 rc-is-open-f2613a21","disabled":"rc-disabled-dc5f4e42 rc-is-disabled-f2613a21"}
