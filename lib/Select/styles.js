'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-forms.js')

appendStyles({
  css: ".rc-stretched-a91a511a{-webkit-box-flex:1;-ms-flex:1;flex:1;width:100%}.rc-message-a91a511a{margin-top:8px}.rc-hint-a91a511a{margin-bottom:8px}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"stretched":"rc-stretched-a91a511a","txt":"rc-txt-a91a511a rc-c-txt-f25f3a21","message":"rc-message-a91a511a rc-c-txt__message-f25f3a21","input":"rc-input-a91a511a rc-c-txt__input-f25f3a21 rc-c-txt__input--select-f25f3a21","is_focused":"rc-is_focused-a91a511a rc-is-focused-f25f3a21","label":"rc-label-a91a511a rc-c-txt__label-f25f3a21","hint":"rc-hint-a91a511a rc-c-txt__hint-f25f3a21","size_small":"rc-size_small-a91a511a rc-c-txt--sm-f25f3a21","success":"rc-success-a91a511a rc-has-success-f25f3a21","warning":"rc-warning-a91a511a rc-has-warning-f25f3a21","error":"rc-error-a91a511a rc-has-error-f25f3a21","rtl":"rc-rtl-a91a511a rc-is-rtl-f25f3a21","open":"rc-open-a91a511a rc-is-open-f25f3a21","disabled":"rc-disabled-a91a511a rc-is-disabled-f25f3a21"}
