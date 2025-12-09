/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React, { useState, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useId } from '@zendeskgarden/container-utilities';
import usePaneProviderContext, { PaneProviderContext } from '../../utils/usePaneProviderContext.js';

const getPixelsPerFr = (totalFrs, totalDimension) => {
  return totalDimension / totalFrs;
};
const convertToPixels = (values, pixelsPerFr) => {
  return Object.entries(values).reduce((prev, _ref) => {
    let [key, value] = _ref;
    prev[key] = value * pixelsPerFr;
    return prev;
  }, {});
};
const PaneProvider = _ref2 => {
  let {
    id,
    totalPanesWidth,
    totalPanesHeight,
    defaultRowValues,
    defaultColumnValues,
    rowValues,
    columnValues,
    onChange,
    children
  } = _ref2;
  const isControlled = rowValues !== undefined && rowValues !== null && columnValues !== undefined && columnValues !== null;
  const [rowState, setRowState] = useState(defaultRowValues || {});
  const [columnState, setColumnState] = useState(defaultColumnValues || {});
  const rowsTrack = isControlled ? rowValues : rowState;
  const columnsTrack = isControlled ? columnValues : columnState;
  const setRowsTrack = useCallback(values => {
    if (isControlled && onChange) {
      return onChange(values(rowsTrack), columnsTrack);
    }
    return setRowState(values);
  }, [isControlled, onChange, setRowState, columnsTrack, rowsTrack]);
  const setColumnsTrack = useCallback(values => {
    if (isControlled && onChange) {
      return onChange(rowsTrack, values(columnsTrack));
    }
    return setColumnState(values);
  }, [isControlled, onChange, setColumnState, rowsTrack, columnsTrack]);
  const totalFractions = useMemo(() => ({
    rows: Object.values(rowsTrack).reduce((prev, value) => value + prev, 0),
    columns: Object.values(columnsTrack).reduce((prev, value) => value + prev, 0)
  }), [rowsTrack, columnsTrack]);
  const pixelsPerFr = useMemo(() => ({
    rows: getPixelsPerFr(totalFractions.rows, totalPanesHeight),
    columns: getPixelsPerFr(totalFractions.columns, totalPanesWidth)
  }), [totalFractions, totalPanesHeight, totalPanesWidth]);
  const layoutStateInPixels = useMemo(() => ({
    rows: convertToPixels(rowsTrack, pixelsPerFr.rows),
    columns: convertToPixels(columnsTrack, pixelsPerFr.columns)
  }), [rowsTrack, columnsTrack, pixelsPerFr]);
  const layoutIndices = useMemo(() => {
    const rowArray = Object.keys(rowsTrack);
    const columnArray = Object.keys(columnsTrack);
    const rows = rowArray.reduce((prev, key, index) => {
      prev[key] = index;
      return prev;
    }, {});
    const columns = columnArray.reduce((prev, key, index) => {
      prev[key] = index;
      return prev;
    }, {});
    return {
      rows,
      columns,
      rowArray,
      columnArray
    };
  }, [rowsTrack, columnsTrack]);
  const setRowValue = useCallback((isTop, splitterId, value) => {
    const {
      rows,
      rowArray
    } = layoutIndices;
    const stealFromTraversal = isTop ? -1 : 1;
    const addToTraversal = 0;
    setRowsTrack(state => {
      const oldValue = rowsTrack[splitterId];
      const stealFromIndex = rows[splitterId] + stealFromTraversal;
      const addToIndex = rows[splitterId] + addToTraversal;
      const stealFromKey = rowArray[stealFromIndex];
      const addToKey = rowArray[addToIndex];
      const difference = oldValue - value;
      const nextState = {
        ...state
      };
      nextState[addToKey] = rowsTrack[addToKey] - difference;
      nextState[stealFromKey] = rowsTrack[stealFromKey] + difference;
      return nextState;
    });
  }, [layoutIndices, rowsTrack, setRowsTrack]);
  const setColumnValue = useCallback((isStart, splitterId, value) => {
    const {
      columns,
      columnArray
    } = layoutIndices;
    const stealFromTraversal = isStart ? -1 : 1;
    const addToTraversal = 0;
    setColumnsTrack(state => {
      const stealFromIndex = columns[splitterId] + stealFromTraversal;
      const addToIndex = columns[splitterId] + addToTraversal;
      const oldValue = columnsTrack[splitterId];
      const stealFromKey = columnArray[stealFromIndex];
      const addToKey = columnArray[addToIndex];
      const difference = oldValue - value;
      const nextState = {
        ...state
      };
      nextState[addToKey] = columnsTrack[addToKey] - difference;
      nextState[stealFromKey] = columnsTrack[stealFromKey] + difference;
      return nextState;
    });
  }, [layoutIndices, columnsTrack, setColumnsTrack]);
  const getColumnValue = useCallback((splitterKey, isPixels) => {
    if (isPixels) {
      return layoutStateInPixels.columns[splitterKey];
    }
    return columnsTrack[splitterKey];
  }, [columnsTrack, layoutStateInPixels]);
  const getRowValue = useCallback((splitterKey, isPixels) => {
    if (isPixels) {
      return layoutStateInPixels.rows[splitterKey];
    }
    return rowsTrack[splitterKey];
  }, [rowsTrack, layoutStateInPixels]);
  const getGridTemplateColumns = useCallback(isPixels => {
    const {
      columnArray
    } = layoutIndices;
    if (isPixels) {
      return columnArray.map(col => `${layoutStateInPixels.columns[col]}px`).join(' ');
    }
    return columnArray.map(col => `${columnsTrack[col]}fr`).join(' ');
  }, [layoutIndices, columnsTrack, layoutStateInPixels]);
  const getGridTemplateRows = useCallback(isPixels => {
    const {
      rowArray
    } = layoutIndices;
    if (isPixels) {
      return rowArray.map(row => `${layoutStateInPixels.rows[row]}px`).join(' ');
    }
    return rowArray.map(row => `${rowsTrack[row]}fr`).join(' ');
  }, [layoutIndices, rowsTrack, layoutStateInPixels]);
  const providerId = useId(id);
  const parentPaneProviderContext = usePaneProviderContext();
  const paneProviderContext = useMemo(() => providerId ? {
    providerId,
    contextData: {
      ...parentPaneProviderContext.contextData,
      [providerId]: {
        columnState,
        rowState,
        setRowValue,
        setColumnValue,
        getRowValue,
        getColumnValue,
        totalPanesHeight,
        totalPanesWidth,
        pixelsPerFr
      }
    }
  } : {}, [providerId, parentPaneProviderContext, rowState, columnState, setRowValue, setColumnValue, getRowValue, getColumnValue, totalPanesHeight, totalPanesWidth, pixelsPerFr]);
  return React.createElement(PaneProviderContext.Provider, {
    value: paneProviderContext
  }, children?.({
    id: providerId,
    getRowValue,
    getColumnValue,
    getGridTemplateColumns,
    getGridTemplateRows
  }));
};
PaneProvider.displayName = 'PaneProvider';
PaneProvider.propTypes = {
  id: PropTypes.string,
  totalPanesWidth: PropTypes.number.isRequired,
  totalPanesHeight: PropTypes.number.isRequired,
  defaultRowValues: PropTypes.object,
  defaultColumnValues: PropTypes.object,
  rowValues: PropTypes.object,
  columnValues: PropTypes.object,
  onChange: PropTypes.func,
  children: PropTypes.func
};

export { PaneProvider };
