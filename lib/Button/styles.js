'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-buttons.js')

appendStyles({
  css: ".rc-stretched-9d46661f{-webkit-box-flex:1;-ms-flex:1;flex:1}.rc-group-9d46661f:focus{outline:0}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"active":"rc-active-9d46661f rc-is-active-ac69b1c","selected":"rc-selected-9d46661f rc-is-selected-ac69b1c","focused":"rc-focused-9d46661f rc-is-focused-ac69b1c","danger":"rc-danger-9d46661f rc-c-btn--danger-ac69b1c","rtl":"rc-rtl-9d46661f rc-is-rtl-ac69b1c","type_default":"rc-type_default-9d46661f rc-c-btn-ac69b1c","type_primary":"rc-type_primary-9d46661f rc-c-btn-ac69b1c rc-c-btn--primary-ac69b1c","type_basic":"rc-type_basic-9d46661f rc-c-btn-ac69b1c rc-c-btn--basic-ac69b1c","type_anchor":"rc-type_anchor-9d46661f rc-c-btn-ac69b1c rc-c-btn--anchor-ac69b1c","pill":"rc-pill-9d46661f rc-c-btn--pill-ac69b1c","size_medium":"rc-size_medium-9d46661f rc-c-btn--medium-ac69b1c","size_large":"rc-size_large-9d46661f rc-c-btn--large-ac69b1c","stretched":"rc-stretched-9d46661f rc-c-btn--full-ac69b1c","disabled":"rc-disabled-9d46661f rc-is-disabled-ac69b1c","group":"rc-group-9d46661f rc-l-btn-group-ac69b1c"}
