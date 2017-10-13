import _extends from "babel-runtime/helpers/extends";
import _objectWithoutProperties from "babel-runtime/helpers/objectWithoutProperties";
/* eslint-disable react/prop-types */

import React from "react";
import classNames from "classnames";
import { Column as RVColumn } from "react-virtualized";

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
      otherColumnProps = _objectWithoutProperties(columnProps, ["headerClassName", "className", "headerRenderer", "truncate"]);

  return React.createElement(RVColumn, _extends({
    key: key,
    headerClassName: classNames(theme.cell, headerClassName, key),
    className: classNames(theme.cell, (_classNames = {}, _classNames[theme.cell_truncate] = truncate === undefined || truncate, _classNames), className),
    headerRenderer: // eslint-disable-next-line react/prop-types
    function headerRenderer(_ref2) {
      var label = _ref2.label,
          dataKey = _ref2.dataKey,
          disableSort = _ref2.disableSort;

      var isSortable = onSort && !disableSort;
      var isAscending = dataKey === sortBy && sortDirection === "ASC";
      var isDescending = dataKey === sortBy && sortDirection === "DESC";

      if (isSortable) {
        var _classNames2;

        return React.createElement(
          "button",
          {
            tabIndex: 0,
            className: classNames(theme.cell_sortable, (_classNames2 = {}, _classNames2[theme.ascending] = isAscending, _classNames2[theme.descending] = isDescending, _classNames2))
          },
          label
        );
      }

      return React.createElement(
        "span",
        null,
        label
      );
    }
  }, otherColumnProps));
};

export default Column;