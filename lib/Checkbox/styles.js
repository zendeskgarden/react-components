'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-forms.js')

appendStyles({
  css: ".rc-muted-24622da5{font-weight:400}.rc-message-24622da5{display:block}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"checkbox":"rc-checkbox-24622da5 rc-c-chk-38603a52","rtl":"rc-rtl-24622da5 rc-is-rtl-38603a52","indeterminate":"rc-indeterminate-24622da5 rc-is-indeterminate-38603a52","focused":"rc-focused-24622da5 rc-is-focused-38603a52","input":"rc-input-24622da5 rc-c-chk__input-38603a52","label":"rc-label-24622da5 rc-c-chk__label-38603a52","muted":"rc-muted-24622da5","hint":"rc-hint-24622da5 rc-c-chk__hint-38603a52","disabled":"rc-disabled-24622da5 rc-is-disabled-38603a52","message":"rc-message-24622da5 rc-c-chk__message-38603a52","success":"rc-success-24622da5 rc-has-success-38603a52","warning":"rc-warning-24622da5 rc-has-warning-38603a52","error":"rc-error-24622da5 rc-has-error-38603a52","noLabel":"rc-noLabel-24622da5 rc-c-chk--nolabel-38603a52"}
