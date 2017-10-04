import React from "react";
import classNames from "classnames";
import {
  defaultTableRowRenderer,
  defaultTableHeaderRowRenderer
} from "react-virtualized";

export const headerRowRenderer = (rowProps, tableProps, theme) => {
  const { dir } = tableProps;

  rowProps.className = classNames(
    rowProps.className,
    theme.table_row,
    theme.table_row_header
  );

  // Resolves inline styling react-virtualized applies for the scrollbar
  if (dir === "rtl") {
    rowProps.style.paddingLeft = rowProps.style.paddingRight;
    rowProps.style.paddingRight = 0;
  }

  // Remove default tabIndex applied by react-virtualized
  rowProps.columns = rowProps.columns.map(child =>
    React.cloneElement(child, {
      tabIndex: -1
    })
  );

  return defaultTableHeaderRowRenderer(rowProps);
};

export const rowRenderer = (
  rowProps,
  tableProps,
  state,
  theme,
  selectedMapping
) => {
  const { striped, isGroupRow, groupRowRenderer } = tableProps;
  const { index, rowData } = rowProps;
  const { focusedRow, isFocused } = state;
  let isValidGroupRow = isGroupRow && isGroupRow(index);

  rowProps.className = classNames(rowProps.className, theme.table_row, {
    [theme.table_row_focused]: isFocused && focusedRow === index,
    [theme.table_row_selected]: selectedMapping[rowData["id"]],
    [theme.table_row_zebra]: striped && !isValidGroupRow && index % 2 === 0
  });

  // Apply grouped-row styling if applicable
  if (isValidGroupRow) {
    let label, value;

    if (groupRowRenderer) {
      const groupRowValues = groupRowRenderer(rowProps);
      label = groupRowValues.label;
      value = groupRowValues.value;
    }

    rowProps.className = classNames(rowProps.className, theme.table_row_group);
    rowProps.columns = [
      <div key={`Row${rowProps.rowIndex}-Col0`} className={theme.cell}>
        {label}
        <span className={theme.cell_description}>
          {value}
        </span>
      </div>
    ];
  }

  return React.cloneElement(defaultTableRowRenderer(rowProps), {
    tabIndex: -1
  });
};

export const retrieveHeaderHeight = tableProps => {
  const { density } = tableProps;

  if (density === "cozy") {
    return 40;
  } else if (density === "airy") {
    return 72;
  } else {
    return 48;
  }
};

export const retrieveRowHeight = (rowProps, tableProps) => {
  const { index } = rowProps;
  const { density, isGroupRow } = tableProps;

  // Group rows are always the small sizing
  if (density === "cozy" || (isGroupRow && isGroupRow(index))) {
    return 32;
  } else if (density === "airy") {
    return 64;
  } else {
    return 40;
  }
};
