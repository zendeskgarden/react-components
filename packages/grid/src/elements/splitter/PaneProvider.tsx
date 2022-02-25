/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import { SplitterContext } from '../../utils/useSplitterContext';
import { DIMENSIONS, UNITS, IPaneProvider } from '../../types';

const getPixelsPerFr = (totalFrs: number, totalDimension: number) => {
  return totalDimension / totalFrs;
};

const convertToPixels = (values: Record<string, number>, pixelsPerFr: number) => {
  return Object.entries(values).reduce((prev, [key, value]) => {
    prev[key] = value * pixelsPerFr;

    return prev;
  }, {} as Record<string, number>);
};

const PaneProviderComponent = ({
  totalPanesWidth,
  totalPanesHeight,
  defaultRowValues,
  defaultColumnValues,
  rowValues,
  columnValues,
  onChange,
  children
}: IPaneProvider) => {
  const isControlled =
    rowValues !== undefined &&
    rowValues !== null &&
    columnValues !== undefined &&
    columnValues !== null;
  const [rowState, setRowState] = useState<Record<string, number>>(defaultRowValues || {});
  const [columnState, setColumnState] = useState<Record<string, number>>(defaultColumnValues || {});
  const rowsTrack = isControlled ? rowValues : rowState;
  const columnsTrack = isControlled ? columnValues : columnState;

  const setRowsTrack = useCallback(
    (values: (state: Record<string, number>) => Record<string, number>) => {
      if (onChange) {
        return onChange(values(rowsTrack), columnsTrack);
      }

      return setRowState(values);
    },
    [onChange, setRowState, columnsTrack, rowsTrack]
  );

  const setColumnsTrack = useCallback(
    (values: (state: Record<string, number>) => Record<string, number>) => {
      if (onChange) {
        return onChange(rowsTrack, values(columnsTrack));
      }

      return setColumnState(values);
    },
    [onChange, setColumnState, rowsTrack, columnsTrack]
  );

  const totalFractions = useMemo(
    () => ({
      rows: Object.values(rowsTrack).reduce((prev, value) => value + prev, 0),
      columns: Object.values(columnsTrack).reduce((prev, value) => value + prev, 0)
    }),
    [rowsTrack, columnsTrack]
  );

  const pixelsPerFr = useMemo(
    () => ({
      rows: getPixelsPerFr(totalFractions.rows, totalPanesHeight),
      columns: getPixelsPerFr(totalFractions.columns, totalPanesWidth)
    }),
    [totalFractions, totalPanesHeight, totalPanesWidth]
  );

  const layoutStateInPixels = useMemo(
    () => ({
      rows: convertToPixels(rowsTrack, pixelsPerFr.rows),
      columns: convertToPixels(columnsTrack, pixelsPerFr.columns)
    }),
    [rowsTrack, columnsTrack, pixelsPerFr]
  );

  const layoutIndices = useMemo(() => {
    const rowArray = Object.keys(rowsTrack);
    const columnArray = Object.keys(columnsTrack);

    const rows = rowArray.reduce((prev, key, index) => {
      prev[key] = index;

      return prev;
    }, {} as Record<string, number>);

    const columns = columnArray.reduce((prev, key, index) => {
      prev[key] = index;

      return prev;
    }, {} as Record<string, number>);

    return {
      rows,
      columns,
      rowArray,
      columnArray
    };
  }, [rowsTrack, columnsTrack]);

  const setRowValue = useCallback(
    (isTop: boolean, id: string, value: number) => {
      const { rows, rowArray } = layoutIndices;
      const indexTraversal = isTop ? -1 : 1;

      setRowsTrack(state => {
        const oldValue = rowsTrack[id];
        const stealFromIndex = rows[id] + indexTraversal;

        const stealFromKey = rowArray[stealFromIndex];

        const difference = oldValue - value;

        const nextState = {
          ...state
        } as Record<string, number>;

        nextState[id] = value;
        nextState[stealFromKey] = rowsTrack[stealFromKey] + difference;

        return nextState;
      });
    },
    [layoutIndices, rowsTrack, setRowsTrack]
  );

  const setColumnValue = useCallback(
    (isStart: boolean, id: string, value: number) => {
      const { columns, columnArray } = layoutIndices;
      const indexTraversal = isStart ? -1 : 1;

      setColumnsTrack(state => {
        const oldValue = columnsTrack[id];
        const stealFromIndex = columns[id] + indexTraversal;

        const stealFromKey = columnArray[stealFromIndex];

        const difference = oldValue - value;

        const nextState = {
          ...state
        } as Record<string, number>;

        nextState[id] = value;
        nextState[stealFromKey] = columnsTrack[stealFromKey] + difference;

        return nextState;
      });
    },
    [layoutIndices, columnsTrack, setColumnsTrack]
  );

  const getLayoutValue = useCallback(
    (dimension: DIMENSIONS, key: string, units?: UNITS) => {
      switch (units) {
        case 'px':
          return layoutStateInPixels[dimension][key];
        case 'fr':
        default:
          return dimension === 'rows' ? rowsTrack[key] : columnsTrack[key];
      }
    },
    [columnsTrack, rowsTrack, layoutStateInPixels]
  );

  const getGridTemplateColumns = useCallback(
    (units?: UNITS) => {
      const { columnArray } = layoutIndices;

      switch (units) {
        case 'px':
          return columnArray.map(col => `${layoutStateInPixels.columns[col]}px`).join(' ');
        case 'fr':
        default:
          return columnArray.map(col => `${columnsTrack[col]}fr`).join(' ');
      }
    },
    [layoutIndices, columnsTrack, layoutStateInPixels]
  );

  const getGridTemplateRows = useCallback(
    (units?: UNITS) => {
      const { rowArray } = layoutIndices;

      switch (units) {
        case 'px':
          return rowArray.map(row => `${layoutStateInPixels.rows[row]}px`).join(' ');
        case 'fr':
        default:
          return rowArray.map(row => `${rowsTrack[row]}fr`).join(' ');
      }
    },
    [layoutIndices, rowsTrack, layoutStateInPixels]
  );

  const splitterContext = useMemo(
    () => ({
      columnState,
      rowState,
      setRowValue,
      setColumnValue,
      getLayoutValue,
      totalPanesHeight,
      totalPanesWidth,
      pixelsPerFr
    }),
    [
      rowState,
      columnState,
      setRowValue,
      setColumnValue,
      getLayoutValue,
      totalPanesHeight,
      totalPanesWidth,
      pixelsPerFr
    ]
  );

  return (
    <SplitterContext.Provider value={splitterContext}>
      {children?.({
        getLayoutValue,
        getGridTemplateColumns,
        getGridTemplateRows
      })}
    </SplitterContext.Provider>
  );
};

PaneProviderComponent.displayName = 'PaneProvider';

PaneProviderComponent.propTypes = {
  totalPanesWidth: PropTypes.number.isRequired,
  totalPanesHeight: PropTypes.number.isRequired,
  defaultRowValues: PropTypes.object,
  defaultColumnValues: PropTypes.object,
  rowValues: PropTypes.object,
  columnValues: PropTypes.object,
  onChange: PropTypes.func,
  children: PropTypes.func
};

/**
 * @extends IPaneProvider
 */
export const PaneProvider = PaneProviderComponent;
