'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-buttons.js')

appendStyles({
  css: ".rc-stretched-32e62a7{-webkit-box-flex:1;-ms-flex:1;flex:1}.rc-group-32e62a7:focus{outline:0}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"active":"rc-active-32e62a7 rc-is-active-c3bb628","selected":"rc-selected-32e62a7 rc-is-selected-c3bb628","focused":"rc-focused-32e62a7 rc-is-focused-c3bb628","danger":"rc-danger-32e62a7 rc-c-btn--danger-c3bb628","rtl":"rc-rtl-32e62a7 rc-is-rtl-c3bb628","type_default":"rc-type_default-32e62a7 rc-c-btn-c3bb628","type_primary":"rc-type_primary-32e62a7 rc-c-btn-c3bb628 rc-c-btn--primary-c3bb628","type_basic":"rc-type_basic-32e62a7 rc-c-btn-c3bb628 rc-c-btn--basic-c3bb628","type_anchor":"rc-type_anchor-32e62a7 rc-c-btn-c3bb628 rc-c-btn--anchor-c3bb628","pill":"rc-pill-32e62a7 rc-c-btn--pill-c3bb628","size_medium":"rc-size_medium-32e62a7 rc-c-btn--medium-c3bb628","size_large":"rc-size_large-32e62a7 rc-c-btn--large-c3bb628","stretched":"rc-stretched-32e62a7 rc-c-btn--full-c3bb628","disabled":"rc-disabled-32e62a7 rc-is-disabled-c3bb628","group":"rc-group-32e62a7 rc-l-btn-group-c3bb628"}
