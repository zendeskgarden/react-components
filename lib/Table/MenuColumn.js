"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _reactVirtualized = require("react-virtualized");

var _OverflowMenu = require("./OverflowMenu");

var _OverflowMenu2 = _interopRequireDefault(_OverflowMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable react/prop-types */

var MenuColumn = function MenuColumn(_ref) {
  var _classNames;

  var columnProps = _ref.columnProps,
      tableState = _ref.tableState,
      tableProps = _ref.tableProps,
      key = _ref.key,
      theme = _ref.theme,
      onRowFocus = _ref.onRowFocus;
  var dir = tableProps.dir,
      density = tableProps.density;
  var headerClassName = columnProps.headerClassName,
      className = columnProps.className,
      headerMenuItems = columnProps.headerMenuItems,
      rowMenuItems = columnProps.rowMenuItems,
      headerMenuMaxHeight = columnProps.headerMenuMaxHeight,
      rowMenuMaxHeight = columnProps.rowMenuMaxHeight,
      shouldHeaderMenuClose = columnProps.shouldHeaderMenuClose,
      shouldBodyMenuClose = columnProps.shouldBodyMenuClose,
      otherColumnProps = (0, _objectWithoutProperties3.default)(columnProps, ["headerClassName", "className", "headerMenuItems", "rowMenuItems", "headerMenuMaxHeight", "rowMenuMaxHeight", "shouldHeaderMenuClose", "shouldBodyMenuClose"]);

  // Default density menu margins

  var headerMenuMargin = -8;
  var bodyMenuMargin = -4;

  if (density === "airy") {
    headerMenuMargin = -20;
    bodyMenuMargin = -16;
  } else if (density === "cozy") {
    headerMenuMargin = -4;
    bodyMenuMargin = -2;
  }

  var headerRenderer = function headerRenderer(rowProps) {
    return headerMenuItems && _react2.default.createElement(
      _OverflowMenu2.default,
      {
        isFocusable: true,
        theme: theme,
        dir: dir,
        marginTop: headerMenuMargin,
        marginBottom: headerMenuMargin,
        maxHeight: headerMenuMaxHeight,
        shouldClose: shouldHeaderMenuClose
      },
      headerMenuItems(rowProps)
    );
  };

  var cellRenderer = function cellRenderer(rowProps) {
    var rowIndex = rowProps.rowIndex;
    var focusedRow = tableState.focusedRow;


    return rowMenuItems && _react2.default.createElement(
      _OverflowMenu2.default,
      {
        isFocusable: rowIndex === focusedRow,
        theme: theme,
        dir: dir,
        onOpen: function onOpen() {
          return onRowFocus(rowIndex, true);
        },
        onClose: function onClose() {
          return onRowFocus(rowIndex, true);
        },
        marginTop: bodyMenuMargin,
        marginBottom: bodyMenuMargin,
        maxHeight: rowMenuMaxHeight,
        shouldClose: shouldBodyMenuClose
      },
      rowMenuItems(rowProps)
    );
  };

  return _react2.default.createElement(_reactVirtualized.Column, (0, _extends3.default)({
    key: key,
    width: 30,
    minWidth: 30,
    dataKey: "",
    headerClassName: (0, _classnames2.default)(theme.cell, theme.cell_overflow, headerClassName),
    className: (0, _classnames2.default)(theme.cell, theme.cell_overflow, className, (_classNames = {}, _classNames[theme.cell_empty] = !rowMenuItems, _classNames)),
    headerRenderer: headerRenderer,
    cellRenderer: cellRenderer
  }, otherColumnProps));
};

exports.default = MenuColumn;