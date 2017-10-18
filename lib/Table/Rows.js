"use strict";

exports.__esModule = true;
exports.retrieveRowHeight = exports.retrieveHeaderHeight = exports.rowRenderer = exports.headerRowRenderer = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _reactVirtualized = require("react-virtualized");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var headerRowRenderer = exports.headerRowRenderer = function headerRowRenderer(rowProps, tableProps, theme) {
  var dir = tableProps.dir;


  rowProps.className = (0, _classnames2.default)(rowProps.className, theme.table_row, theme.table_row_header);

  // Resolves inline styling react-virtualized applies for the scrollbar
  if (dir === "rtl") {
    rowProps.style.paddingLeft = rowProps.style.paddingRight;
    rowProps.style.paddingRight = 0;
  }

  // Remove default tabIndex applied by react-virtualized
  rowProps.columns = rowProps.columns.map(function (child) {
    return _react2.default.cloneElement(child, {
      tabIndex: -1
    });
  });

  return (0, _reactVirtualized.defaultTableHeaderRowRenderer)(rowProps);
};

var rowRenderer = exports.rowRenderer = function rowRenderer(rowProps, tableProps, state, theme, selectedMapping) {
  var _classNames;

  var striped = tableProps.striped,
      isGroupRow = tableProps.isGroupRow,
      groupRowRenderer = tableProps.groupRowRenderer;
  var index = rowProps.index,
      rowData = rowProps.rowData;
  var focusedRow = state.focusedRow,
      isFocused = state.isFocused;

  var isValidGroupRow = isGroupRow && isGroupRow(index);

  rowProps.className = (0, _classnames2.default)(rowProps.className, theme.table_row, (_classNames = {}, _classNames[theme.table_row_focused] = isFocused && focusedRow === index, _classNames[theme.table_row_selected] = selectedMapping[rowData["id"]], _classNames[theme.table_row_zebra] = striped && !isValidGroupRow && index % 2 === 0, _classNames));

  // Apply grouped-row styling if applicable
  if (isValidGroupRow) {
    var label = void 0,
        value = void 0;

    if (groupRowRenderer) {
      var groupRowValues = groupRowRenderer(rowProps);
      label = groupRowValues.label;
      value = groupRowValues.value;
    }

    rowProps.className = (0, _classnames2.default)(rowProps.className, theme.table_row_group);
    rowProps.columns = [_react2.default.createElement(
      "div",
      { key: "Row" + rowProps.rowIndex + "-Col0", className: theme.cell },
      label,
      "\xA0",
      _react2.default.createElement(
        "span",
        { className: theme.cell_description },
        value
      )
    )];
  }

  return _react2.default.cloneElement((0, _reactVirtualized.defaultTableRowRenderer)(rowProps), {
    tabIndex: -1
  });
};

var retrieveHeaderHeight = exports.retrieveHeaderHeight = function retrieveHeaderHeight(tableProps) {
  var density = tableProps.density;


  if (density === "cozy") {
    return 40;
  } else if (density === "airy") {
    return 72;
  } else {
    return 48;
  }
};

var retrieveRowHeight = exports.retrieveRowHeight = function retrieveRowHeight(rowProps, tableProps) {
  var index = rowProps.index;
  var density = tableProps.density,
      isGroupRow = tableProps.isGroupRow;

  // Group rows are always the small sizing

  if (density === "cozy" || isGroupRow && isGroupRow(index)) {
    return 32;
  } else if (density === "airy") {
    return 64;
  } else {
    return 40;
  }
};