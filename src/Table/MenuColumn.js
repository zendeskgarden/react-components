/* eslint-disable react/prop-types */

import React from "react";
import classNames from "classnames";
import { Column as RVColumn } from "react-virtualized";

import OverflowMenu from "./OverflowMenu";

const MenuColumn = ({ columnProps, tableState, key, theme }) => {
  const {
    headerClassName,
    className,
    headerMenuItems,
    rowMenuItems,
    ...otherColumnProps
  } = columnProps;

  const headerRenderer = rowProps => {
    return (
      headerMenuItems &&
      <OverflowMenu isFocusable theme={theme}>
        {headerMenuItems(rowProps)}
      </OverflowMenu>
    );
  };

  const cellRenderer = rowProps => {
    const { rowIndex } = rowProps;
    const { focusedRow } = tableState;

    return (
      rowMenuItems &&
      <OverflowMenu isFocusable={rowIndex === focusedRow} theme={theme}>
        {rowMenuItems(rowProps)}
      </OverflowMenu>
    );
  };

  return (
    <RVColumn
      key={key}
      width={30}
      dataKey=""
      headerClassName={classNames(
        theme.cell,
        theme.cell_overflow,
        headerClassName
      )}
      className={classNames(theme.cell, theme.cell_overflow, className, {
        [theme.cell_empty]: !rowMenuItems
      })}
      headerRenderer={headerRenderer}
      cellRenderer={cellRenderer}
      {...otherColumnProps}
    />
  );
};

export default MenuColumn;
