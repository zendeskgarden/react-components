"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _reactVirtualized = require("react-virtualized");

var _Checkbox = require("../Checkbox");

var _Checkbox2 = _interopRequireDefault(_Checkbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable react/prop-types */

var CheckboxColumn = function CheckboxColumn(_ref) {
  var childProps = _ref.childProps,
      tableProps = _ref.tableProps,
      key = _ref.key,
      theme = _ref.theme,
      selectedMapping = _ref.selectedMapping,
      onHeaderSelection = _ref.onHeaderSelection;
  var data = tableProps.data,
      isRowDisabled = tableProps.isRowDisabled,
      isGroupRow = tableProps.isGroupRow;
  var onSelection = childProps.onSelection,
      _childProps$allowSele = childProps.allowSelectAll,
      allowSelectAll = _childProps$allowSele === undefined ? true : _childProps$allowSele,
      headerClassName = childProps.headerClassName,
      className = childProps.className,
      otherProps = (0, _objectWithoutProperties3.default)(childProps, ["onSelection", "allowSelectAll", "headerClassName", "className"]);


  if (!onSelection) {
    throw new Error("onSelection is required for CheckboxColumns.");
  }

  var numSelectedRows = (0, _keys2.default)(selectedMapping).length;

  var dataLength = void 0;
  if (!isGroupRow) {
    dataLength = data.length;
  } else {
    dataLength = 0;
    for (var x = 0; x < data.length; x++) {
      if (!isGroupRow(x)) {
        dataLength++;
      }
    }
  }

  var allRowsSelected = numSelectedRows === dataLength;

  // eslint-disable-next-line react/prop-types
  var headerRenderer = function headerRenderer(_ref2) {
    var dataKey = _ref2.dataKey;

    return _react2.default.createElement(_Checkbox2.default, {
      checked: allRowsSelected,
      indeterminate: numSelectedRows > 0 && !allRowsSelected,
      onChange: function onChange(checked) {
        var newlySelectedRows = [];

        if (checked) {
          newlySelectedRows = data.reduce(function (acc, item, x) {
            if (!(isGroupRow && isGroupRow(x))) {
              acc.push(data[x][dataKey]);
            }

            return acc;
          }, []);
        }

        onSelection(newlySelectedRows);
        onHeaderSelection();
      }
    });
  };

  var cellRenderer = function cellRenderer(cellProps) {
    var rowData = cellProps.rowData,
        dataKey = cellProps.dataKey;

    var isChecked = selectedMapping[rowData[dataKey]];

    return _react2.default.createElement(_Checkbox2.default, {
      checked: isChecked || false,
      disabled: isRowDisabled && isRowDisabled(cellProps.rowIndex),
      tabIndex: -1,
      onChange: function onChange(checked) {
        if (checked) {
          selectedMapping[rowData[dataKey]] = true;
        } else {
          delete selectedMapping[rowData[dataKey]];
        }

        var selectedData = [];
        for (var _key in selectedMapping) {
          selectedData.push(_key);
        }
        onSelection(selectedData);
      }
    });
  };

  return _react2.default.createElement(_reactVirtualized.Column, (0, _extends3.default)({
    key: key,
    width: 30,
    headerClassName: (0, _classnames2.default)(theme.cell, theme.cell_min, headerClassName),
    className: (0, _classnames2.default)(theme.cell, theme.cell_min, className),
    headerRenderer: allowSelectAll ? headerRenderer : function () {
      return "";
    },
    cellRenderer: cellRenderer,
    disableSort: true
  }, otherProps));
};

exports.default = CheckboxColumn;