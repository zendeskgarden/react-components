/* eslint-disable react/prop-types */

import React from "react";
import classNames from "classnames";
import { Column as RVColumn } from "react-virtualized";

import Checkbox from "../Checkbox";

const CheckboxColumn = ({
  childProps,
  tableProps,
  key,
  theme,
  selectedMapping,
  onHeaderSelection
}) => {
  const { data, isRowDisabled, isGroupRow } = tableProps;
  const {
    onSelection,
    allowSelectAll = true,
    headerClassName,
    className,
    ...otherProps
  } = childProps;

  if (!onSelection) {
    throw new Error("onSelection is required for CheckboxColumns.");
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
          let newlySelectedRows = [];

          if (checked) {
            newlySelectedRows = data.reduce((acc, item, x) => {
              if (!(isGroupRow && isGroupRow(x))) {
                acc.push(data[x][dataKey]);
              }

              return acc;
            }, []);
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
    <RVColumn
      key={key}
      width={30}
      headerClassName={classNames(theme.cell, theme.cell_min, headerClassName)}
      className={classNames(theme.cell, theme.cell_min, className)}
      headerRenderer={allowSelectAll ? headerRenderer : () => ""}
      cellRenderer={cellRenderer}
      disableSort
      {...otherProps}
    />
  );
};

export default CheckboxColumn;
