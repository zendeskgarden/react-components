/* eslint-disable react/prop-types */

import React from "react";
import classNames from "classnames";
import { Column as RVColumn } from "react-virtualized";

import OverflowMenu from "./OverflowMenu";

const MenuColumn = ({
  columnProps,
  tableState,
  tableProps,
  key,
  theme,
  onRowFocus
}) => {
  const { dir, density } = tableProps;
  const {
    headerClassName,
    className,
    headerMenuItems,
    rowMenuItems,
    headerMenuMaxHeight,
    rowMenuMaxHeight,
    shouldHeaderMenuClose,
    shouldBodyMenuClose,
    ...otherColumnProps
  } = columnProps;

  // Default density menu margins
  let headerMenuMargin = -8;
  let bodyMenuMargin = -4;

  if (density === "airy") {
    headerMenuMargin = -20;
    bodyMenuMargin = -16;
  } else if (density === "cozy") {
    headerMenuMargin = -4;
    bodyMenuMargin = -2;
  }

  const headerRenderer = rowProps => {
    return (
      headerMenuItems &&
      <OverflowMenu
        isFocusable
        theme={theme}
        dir={dir}
        marginTop={headerMenuMargin}
        marginBottom={headerMenuMargin}
        maxHeight={headerMenuMaxHeight}
        shouldClose={shouldHeaderMenuClose}
      >
        {headerMenuItems(rowProps)}
      </OverflowMenu>
    );
  };

  const cellRenderer = rowProps => {
    const { rowIndex } = rowProps;
    const { focusedRow } = tableState;

    return (
      rowMenuItems &&
      <OverflowMenu
        isFocusable={rowIndex === focusedRow}
        theme={theme}
        dir={dir}
        onOpen={() => onRowFocus(rowIndex, true)}
        onClose={() => onRowFocus(rowIndex, true)}
        marginTop={bodyMenuMargin}
        marginBottom={bodyMenuMargin}
        maxHeight={rowMenuMaxHeight}
        shouldClose={shouldBodyMenuClose}
      >
        {rowMenuItems(rowProps)}
      </OverflowMenu>
    );
  };

  return (
    <RVColumn
      key={key}
      width={30}
      minWidth={30}
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
