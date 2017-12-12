'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-buttons.js')

appendStyles({
  css: ".rc-stretched-1fbb62dc{-webkit-box-flex:1;-ms-flex:1;flex:1}.rc-group-1fbb62dc:focus{outline:0}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"active":"rc-active-1fbb62dc rc-is-active-e700b627","selected":"rc-selected-1fbb62dc rc-is-selected-e700b627","focused":"rc-focused-1fbb62dc rc-is-focused-e700b627","danger":"rc-danger-1fbb62dc rc-c-btn--danger-e700b627","rtl":"rc-rtl-1fbb62dc rc-is-rtl-e700b627","type_default":"rc-type_default-1fbb62dc rc-c-btn-e700b627","type_primary":"rc-type_primary-1fbb62dc rc-c-btn-e700b627 rc-c-btn--primary-e700b627","type_basic":"rc-type_basic-1fbb62dc rc-c-btn-e700b627 rc-c-btn--basic-e700b627","type_anchor":"rc-type_anchor-1fbb62dc rc-c-btn-e700b627 rc-c-btn--anchor-e700b627","pill":"rc-pill-1fbb62dc rc-c-btn--pill-e700b627","size_medium":"rc-size_medium-1fbb62dc rc-c-btn--medium-e700b627","size_large":"rc-size_large-1fbb62dc rc-c-btn--large-e700b627","stretched":"rc-stretched-1fbb62dc rc-c-btn--full-e700b627","disabled":"rc-disabled-1fbb62dc rc-is-disabled-e700b627","group":"rc-group-1fbb62dc rc-l-btn-group-e700b627"}
