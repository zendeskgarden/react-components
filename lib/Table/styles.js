'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tables.js')

appendStyles({
  css: ".rc-table-be6bfd32{table-layout:auto}.rc-table_container-be6bfd32{width:100%;height:100%}.rc-grid-be6bfd32:focus{outline:0}.rc-table_row-be6bfd32{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.rc-cell-be6bfd32{display:inline-block}.rc-cell_min-be6bfd32{box-sizing:inherit}.rc-cell_description-be6bfd32{font-weight:600}.rc-cell_empty-be6bfd32{-ms-flex-preferred-size:0!important;flex-basis:0!important}.rc-rtl-be6bfd32 .rc-overflow_menu-be6bfd32,.rc-rtl-be6bfd32 .rc-overflow_menu-be6bfd32::after,.rc-rtl-be6bfd32 .rc-overflow_menu-be6bfd32::before{transition:none}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"table":"rc-table-be6bfd32 rc-c-table-cea11703","table_sm":"rc-table_sm-be6bfd32 rc-c-table--sm-cea11703","table_lg":"rc-table_lg-be6bfd32 rc-c-table--lg-cea11703","table_container":"rc-table_container-be6bfd32","rtl":"rc-rtl-be6bfd32 rc-is-rtl-cea11703","grid":"rc-grid-be6bfd32","table_row":"rc-table_row-be6bfd32 rc-c-table__row-cea11703","table_row_header":"rc-table_row_header-be6bfd32 rc-c-table__row--header-cea11703","table_row_group":"rc-table_row_group-be6bfd32 rc-c-table__row--group-cea11703","table_row_zebra":"rc-table_row_zebra-be6bfd32 rc-c-table__row--stripe-cea11703","table_row_focused":"rc-table_row_focused-be6bfd32 rc-is-focused-cea11703","table_row_selected":"rc-table_row_selected-be6bfd32 rc-is-selected-cea11703","cell":"rc-cell-be6bfd32 rc-c-table__row__cell-cea11703","cell_sortable":"rc-cell_sortable-be6bfd32 rc-c-table__row__cell__sortable-cea11703","cell_truncate":"rc-cell_truncate-be6bfd32 rc-c-table__row__cell--truncate-cea11703","cell_min":"rc-cell_min-be6bfd32 rc-c-table__row__cell--min-cea11703","cell_overflow":"rc-cell_overflow-be6bfd32 rc-c-table__row__cell--overflow-cea11703","cell_description":"rc-cell_description-be6bfd32","cell_empty":"rc-cell_empty-be6bfd32","overflow_menu":"rc-overflow_menu-be6bfd32 rc-c-table__row__cell__overflow-cea11703","is_focused":"rc-is_focused-be6bfd32 rc-is-focused-cea11703","is_active":"rc-is_active-be6bfd32 rc-is-active-cea11703","ascending":"rc-ascending-be6bfd32 rc-is-ascending-cea11703","descending":"rc-descending-be6bfd32 rc-is-descending-cea11703"}
