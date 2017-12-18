'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-forms.js')

appendStyles({
  css: ".rc-stretched-64c95848{-webkit-box-flex:1;-ms-flex:1;flex:1;width:100%}.rc-message-64c95848{margin-top:8px}.rc-input-64c95848{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.rc-hint-64c95848{margin-bottom:8px}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"stretched":"rc-stretched-64c95848","txt":"rc-txt-64c95848 rc-c-txt-13df3a29","message":"rc-message-64c95848 rc-c-txt__message-13df3a29","input":"rc-input-64c95848 rc-c-txt__input-13df3a29 rc-c-txt__input--select-13df3a29","is_focused":"rc-is_focused-64c95848 rc-is-focused-13df3a29","label":"rc-label-64c95848 rc-c-txt__label-13df3a29","hint":"rc-hint-64c95848 rc-c-txt__hint-13df3a29","size_small":"rc-size_small-64c95848 rc-c-txt--sm-13df3a29","success":"rc-success-64c95848 rc-has-success-13df3a29","warning":"rc-warning-64c95848 rc-has-warning-13df3a29","error":"rc-error-64c95848 rc-has-error-13df3a29","rtl":"rc-rtl-64c95848 rc-is-rtl-13df3a29","open":"rc-open-64c95848 rc-is-open-13df3a29","disabled":"rc-disabled-64c95848 rc-is-disabled-13df3a29"}
