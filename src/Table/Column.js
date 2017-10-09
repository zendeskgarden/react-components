/* eslint-disable react/prop-types */

import React from "react";
import classNames from "classnames";
import { Column as RVColumn } from "react-virtualized";

const Column = ({ columnProps, tableProps, key, theme }) => {
  const { onSort, sortBy, sortDirection } = tableProps;
  const {
    headerClassName,
    className,
    // eslint-disable-next-line no-unused-vars
    headerRenderer,
    truncate,
    ...otherColumnProps
  } = columnProps;

  return (
    <RVColumn
      key={key}
      headerClassName={classNames(theme.cell, headerClassName, key)}
      className={classNames(
        theme.cell,
        {
          [theme.cell_truncate]: truncate === undefined || truncate
        },
        className
      )}
      headerRenderer={// eslint-disable-next-line react/prop-types
      ({ label, dataKey, disableSort }) => {
        const isSortable = onSort && !disableSort;

        return (
          <span
            tabIndex={isSortable ? 0 : -1}
            className={classNames({
              [theme.cell_sortable]: isSortable,
              [theme.ascending]: dataKey === sortBy && sortDirection === "ASC",
              [theme.descending]: dataKey === sortBy && sortDirection === "DESC"
            })}
          >
            {label}
          </span>
        );
      }}
      {...otherColumnProps}
    />
  );
};

export default Column;
