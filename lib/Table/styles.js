'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tables.js')

appendStyles({
  css: ".rc-table-ee93fdfc{table-layout:auto}.rc-table_container-ee93fdfc{width:100%;height:100%}.rc-grid-ee93fdfc:focus{outline:0}.rc-table_row-ee93fdfc{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.rc-cell-ee93fdfc{display:inline-block}.rc-cell_min-ee93fdfc{box-sizing:inherit}.rc-cell_description-ee93fdfc{font-weight:600}.rc-cell_empty-ee93fdfc{-ms-flex-preferred-size:0!important;flex-basis:0!important}.rc-rtl-ee93fdfc .rc-overflow_menu-ee93fdfc,.rc-rtl-ee93fdfc .rc-overflow_menu-ee93fdfc::after,.rc-rtl-ee93fdfc .rc-overflow_menu-ee93fdfc::before{transition:none}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"table":"rc-table-ee93fdfc rc-c-table-6fb1172d","table_sm":"rc-table_sm-ee93fdfc rc-c-table--sm-6fb1172d","table_lg":"rc-table_lg-ee93fdfc rc-c-table--lg-6fb1172d","table_container":"rc-table_container-ee93fdfc","rtl":"rc-rtl-ee93fdfc rc-is-rtl-6fb1172d","grid":"rc-grid-ee93fdfc","table_row":"rc-table_row-ee93fdfc rc-c-table__row-6fb1172d","table_row_header":"rc-table_row_header-ee93fdfc rc-c-table__row--header-6fb1172d","table_row_group":"rc-table_row_group-ee93fdfc rc-c-table__row--group-6fb1172d","table_row_zebra":"rc-table_row_zebra-ee93fdfc rc-c-table__row--stripe-6fb1172d","table_row_focused":"rc-table_row_focused-ee93fdfc rc-is-focused-6fb1172d","table_row_selected":"rc-table_row_selected-ee93fdfc rc-is-selected-6fb1172d","cell":"rc-cell-ee93fdfc rc-c-table__row__cell-6fb1172d","cell_sortable":"rc-cell_sortable-ee93fdfc rc-c-table__row__cell__sortable-6fb1172d","cell_truncate":"rc-cell_truncate-ee93fdfc rc-c-table__row__cell--truncate-6fb1172d","cell_min":"rc-cell_min-ee93fdfc rc-c-table__row__cell--min-6fb1172d","cell_overflow":"rc-cell_overflow-ee93fdfc rc-c-table__row__cell--overflow-6fb1172d","cell_description":"rc-cell_description-ee93fdfc","cell_empty":"rc-cell_empty-ee93fdfc","overflow_menu":"rc-overflow_menu-ee93fdfc rc-c-table__row__cell__overflow-6fb1172d","is_focused":"rc-is_focused-ee93fdfc rc-is-focused-6fb1172d","is_active":"rc-is_active-ee93fdfc rc-is-active-6fb1172d","ascending":"rc-ascending-ee93fdfc rc-is-ascending-6fb1172d","descending":"rc-descending-ee93fdfc rc-is-descending-6fb1172d"}
