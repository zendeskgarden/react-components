import _extends from "babel-runtime/helpers/extends";
import _Object$keys from "babel-runtime/core-js/object/keys";
import _objectWithoutProperties from "babel-runtime/helpers/objectWithoutProperties";
/* eslint-disable react/prop-types */

import React from "react";
import classNames from "classnames";
import { Column as RVColumn } from "react-virtualized";

import Checkbox from "../Checkbox";

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
      otherProps = _objectWithoutProperties(childProps, ["onSelection", "allowSelectAll", "headerClassName", "className"]);

  if (!onSelection) {
    throw new Error("onSelection is required for CheckboxColumns.");
  }

  var numSelectedRows = _Object$keys(selectedMapping).length;

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

    return React.createElement(Checkbox, {
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

    return React.createElement(Checkbox, {
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

  return React.createElement(RVColumn, _extends({
    key: key,
    width: 30,
    headerClassName: classNames(theme.cell, theme.cell_min, headerClassName),
    className: classNames(theme.cell, className, theme.cell_checkbox),
    headerRenderer: allowSelectAll ? headerRenderer : function () {
      return "";
    },
    cellRenderer: cellRenderer,
    disableSort: true
  }, otherProps));
};

export default CheckboxColumn;