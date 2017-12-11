'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-forms.js')

appendStyles({
  css: ".rc-stretched-dd2a5131{-webkit-box-flex:1;-ms-flex:1;flex:1;width:100%}.rc-message-dd2a5131{margin-top:8px}.rc-hint-dd2a5131{margin-bottom:8px}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"stretched":"rc-stretched-dd2a5131","txt":"rc-txt-dd2a5131 rc-c-txt-13dd3a29","message":"rc-message-dd2a5131 rc-c-txt__message-13dd3a29","input":"rc-input-dd2a5131 rc-c-txt__input-13dd3a29 rc-c-txt__input--select-13dd3a29","is_focused":"rc-is_focused-dd2a5131 rc-is-focused-13dd3a29","label":"rc-label-dd2a5131 rc-c-txt__label-13dd3a29","hint":"rc-hint-dd2a5131 rc-c-txt__hint-13dd3a29","size_small":"rc-size_small-dd2a5131 rc-c-txt--sm-13dd3a29","success":"rc-success-dd2a5131 rc-has-success-13dd3a29","warning":"rc-warning-dd2a5131 rc-has-warning-13dd3a29","error":"rc-error-dd2a5131 rc-has-error-13dd3a29","rtl":"rc-rtl-dd2a5131 rc-is-rtl-13dd3a29","open":"rc-open-dd2a5131 rc-is-open-13dd3a29","disabled":"rc-disabled-dd2a5131 rc-is-disabled-13dd3a29"}
