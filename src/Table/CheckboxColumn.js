import React from "react";
import classNames from "classnames";
import { Column } from "react-virtualized";

import Checkbox from "../Checkbox";

export default function(
  childProps,
  tableProps,
  key,
  theme,
  selectedMapping,
  onHeaderSelection
) {
  const { data, isRowDisabled, isGroupRow } = tableProps;
  const {
    onSelection,
    allowSelectAll = true,
    headerClassName,
    className,
    ...otherProps
  } = childProps;

  if (!onSelection) {
    return;
  }

  const numSelectedRows = Object.keys(selectedMapping).length;

  let dataLength;
  if (!isGroupRow) {
    dataLength = data.length;
  } else {
    dataLength = 0;
    for (let x = 0; x < data.length; x++) {
      if (!isGroupRow(x)) {
        dataLength++;
      }
    }
  }

  const allRowsSelected = numSelectedRows === dataLength;

  // eslint-disable-next-line react/prop-types
  const headerRenderer = ({ dataKey }) => {
    return (
      <Checkbox
        checked={allRowsSelected}
        indeterminate={numSelectedRows > 0 && !allRowsSelected}
        onChange={checked => {
          const newlySelectedRows = [];

          if (checked) {
            for (let x = 0; x < data.length; x++) {
              if (!(isGroupRow && isGroupRow(x))) {
                newlySelectedRows.push(data[x][dataKey]);
              }
            }
          }

          onSelection(newlySelectedRows);
          onHeaderSelection();
        }}
      />
    );
  };

  const cellRenderer = cellProps => {
    const { rowData, dataKey } = cellProps;
    const isChecked = selectedMapping[rowData[dataKey]];

    return (
      <Checkbox
        checked={isChecked || false}
        disabled={isRowDisabled && isRowDisabled(cellProps.rowIndex)}
        tabIndex={-1}
        onChange={checked => {
          if (checked) {
            selectedMapping[rowData[dataKey]] = true;
          } else {
            delete selectedMapping[rowData[dataKey]];
          }

          const selectedData = [];
          for (const key in selectedMapping) {
            selectedData.push(key);
          }
          onSelection(selectedData);
        }}
      />
    );
  };

  return (
    <Column
      key={key}
      width={30}
      headerClassName={classNames(theme.cell, theme.cell_min, headerClassName)}
      className={classNames(theme.cell, className, theme.cell_checkbox)}
      headerRenderer={allowSelectAll ? headerRenderer : () => ""}
      cellRenderer={cellRenderer}
      disableSort
      {...otherProps}
    />
  );
}
