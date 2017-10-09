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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Column = function Column(_ref) {
  var _classNames;

  var columnProps = _ref.columnProps,
      tableProps = _ref.tableProps,
      key = _ref.key,
      theme = _ref.theme;
  var onSort = tableProps.onSort,
      sortBy = tableProps.sortBy,
      sortDirection = tableProps.sortDirection;
  var headerClassName = columnProps.headerClassName,
      className = columnProps.className,
      headerRenderer = columnProps.headerRenderer,
      truncate = columnProps.truncate,
      otherColumnProps = (0, _objectWithoutProperties3.default)(columnProps, ["headerClassName", "className", "headerRenderer", "truncate"]);


  return _react2.default.createElement(_reactVirtualized.Column, (0, _extends3.default)({
    key: key,
    headerClassName: (0, _classnames2.default)(theme.cell, headerClassName, key),
    className: (0, _classnames2.default)(theme.cell, (_classNames = {}, _classNames[theme.cell_truncate] = truncate === undefined || truncate, _classNames), className),
    headerRenderer: // eslint-disable-next-line react/prop-types
    function headerRenderer(_ref2) {
      var _classNames2;

      var label = _ref2.label,
          dataKey = _ref2.dataKey,
          disableSort = _ref2.disableSort;

      var isSortable = onSort && !disableSort;

      return _react2.default.createElement(
        "span",
        {
          tabIndex: isSortable ? 0 : -1,
          className: (0, _classnames2.default)((_classNames2 = {}, _classNames2[theme.cell_sortable] = isSortable, _classNames2[theme.ascending] = dataKey === sortBy && sortDirection === "ASC", _classNames2[theme.descending] = dataKey === sortBy && sortDirection === "DESC", _classNames2))
        },
        label
      );
    }
  }, otherColumnProps));
}; /* eslint-disable react/prop-types */

exports.default = Column;