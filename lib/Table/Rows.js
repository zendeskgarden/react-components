import React from "react";
import classNames from "classnames";
import { defaultTableRowRenderer, defaultTableHeaderRowRenderer } from "react-virtualized";

export var headerRowRenderer = function headerRowRenderer(rowProps, tableProps, theme) {
  var dir = tableProps.dir;


  rowProps.className = classNames(rowProps.className, theme.table_row, theme.table_row_header);

  // Resolves inline styling react-virtualized applies for the scrollbar
  if (dir === "rtl") {
    rowProps.style.paddingLeft = rowProps.style.paddingRight;
    rowProps.style.paddingRight = 0;
  }

  // Remove default tabIndex applied by react-virtualized
  rowProps.columns = rowProps.columns.map(function (child) {
    return React.cloneElement(child, {
      tabIndex: -1
    });
  });

  return defaultTableHeaderRowRenderer(rowProps);
};

export var rowRenderer = function rowRenderer(rowProps, tableProps, state, theme, selectedMapping) {
  var _classNames;

  var striped = tableProps.striped,
      isGroupRow = tableProps.isGroupRow,
      groupRowRenderer = tableProps.groupRowRenderer;
  var index = rowProps.index,
      rowData = rowProps.rowData;
  var focusedRow = state.focusedRow,
      isFocused = state.isFocused;

  var isValidGroupRow = isGroupRow && isGroupRow(index);

  rowProps.className = classNames(rowProps.className, theme.table_row, (_classNames = {}, _classNames[theme.table_row_focused] = isFocused && focusedRow === index, _classNames[theme.table_row_selected] = selectedMapping[rowData["id"]], _classNames[theme.table_row_zebra] = striped && !isValidGroupRow && index % 2 === 0, _classNames));

  // Apply grouped-row styling if applicable
  if (isValidGroupRow) {
    var label = void 0,
        value = void 0;

    if (groupRowRenderer) {
      var groupRowValues = groupRowRenderer(rowProps);
      label = groupRowValues.label;
      value = groupRowValues.value;
    }

    rowProps.className = classNames(rowProps.className, theme.table_row_group);
    rowProps.columns = [React.createElement(
      "div",
      { key: "Row" + rowProps.rowIndex + "-Col0", className: theme.cell },
      label,
      "\xA0",
      React.createElement(
        "span",
        { className: theme.cell_description },
        value
      )
    )];
  }

  return React.cloneElement(defaultTableRowRenderer(rowProps), {
    tabIndex: -1
  });
};

export var retrieveHeaderHeight = function retrieveHeaderHeight(tableProps) {
  var density = tableProps.density;


  if (density === "cozy") {
    return 40;
  } else if (density === "airy") {
    return 72;
  } else {
    return 48;
  }
};

export var retrieveRowHeight = function retrieveRowHeight(rowProps, tableProps) {
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