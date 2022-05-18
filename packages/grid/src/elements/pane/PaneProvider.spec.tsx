/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useCallback, useState } from 'react';
import { render, fireEvent } from 'garden-test-utils';
import { Splitter } from './components/Splitter';
import { Pane } from './Pane';
import { PaneProvider } from './PaneProvider';
import { Content } from './components/Content';
import { IPaneProviderProps } from '../../types';

interface IExtendedMouseEvent extends MouseEventInit {
  offsetX?: number;
  offsetY?: number;
  pageX?: number;
  pageY?: number;
  x?: number;
  y?: number;
}

// JSDom doesn't support the newer MouseEvent properties such as pageX or pageY
// Therefore we add ExtendedMouseEvent that extends the base MouseEvent
class ExtendedMouseEvent extends MouseEvent implements MouseEventInit {
  constructor(type: string, values: IExtendedMouseEvent) {
    const { pageX, pageY, offsetX, offsetY, x, y, ...mouseValues } = values;

    super(type, mouseValues);

    Object.assign(this, {
      offsetX: offsetX || 0,
      offsetY: offsetY || 0,
      pageX: pageX || 0,
      pageY: pageY || 0,
      x: x || 0,
      y: y || 0
    });
  }
}

const UncontrolledTestSplitter = () => {
  return (
    <PaneProvider
      totalPanesWidth={1000}
      totalPanesHeight={500}
      defaultColumnValues={{ a: 1, b: 1 }}
      defaultRowValues={{ c: 1, d: 1 }}
    >
      {({ getGridTemplateColumns, getGridTemplateRows }) => (
        <div
          style={{
            direction: 'ltr',
            display: 'grid',
            width: '1000px',
            height: '500px',
            gridTemplateRows: getGridTemplateRows(),
            gridTemplateColumns: getGridTemplateColumns()
          }}
        >
          <Pane>
            <Content>Pane 1</Content>
            <Splitter data-test-id="pane-1-end" layoutKey="a" min={0} max={2} orientation="end" />
            <Splitter
              data-test-id="pane-1-bottom"
              layoutKey="c"
              min={0}
              max={2}
              orientation="bottom"
            />
          </Pane>
          <Pane>
            <Content>Pane 2</Content>
            <Splitter
              data-test-id="pane-2-start"
              layoutKey="b"
              min={0}
              max={2}
              orientation="start"
            />
            <Splitter
              data-test-id="pane-2-bottom"
              layoutKey="c"
              min={0}
              max={2}
              orientation="bottom"
            />
          </Pane>
          <Pane>
            <Content>Pane 3</Content>
            <Splitter data-test-id="pane-3-end" layoutKey="a" min={0} max={2} orientation="end" />
            <Splitter data-test-id="pane-3-top" layoutKey="d" min={0} max={2} orientation="top" />
          </Pane>
          <Pane>
            <Content>Pane 4</Content>
            <Splitter
              data-test-id="pane-4-start"
              layoutKey="b"
              min={0}
              max={2}
              orientation="start"
            />
            <Splitter data-test-id="pane-4-top" layoutKey="d" min={0} max={2} orientation="top" />
          </Pane>
        </div>
      )}
    </PaneProvider>
  );
};

const ControlledTestSplitter = ({
  columnValues,
  rowValues,
  onChange
}: Pick<IPaneProviderProps, 'columnValues' | 'rowValues' | 'onChange'>) => {
  return (
    <PaneProvider
      totalPanesWidth={1000}
      totalPanesHeight={500}
      columnValues={columnValues}
      rowValues={rowValues}
      onChange={onChange}
    >
      {({ getGridTemplateColumns, getGridTemplateRows }) => (
        <div
          style={{
            direction: 'ltr',
            display: 'grid',
            width: '1000px',
            height: '500px',
            gridTemplateRows: getGridTemplateRows(),
            gridTemplateColumns: getGridTemplateColumns()
          }}
        >
          <Pane>
            <Content>Pane 1</Content>
            <Splitter data-test-id="pane-1-end" layoutKey="a" min={0} max={2} orientation="end" />
            <Splitter
              data-test-id="pane-1-bottom"
              layoutKey="c"
              min={0}
              max={2}
              orientation="bottom"
            />
          </Pane>
          <Pane>
            <Content>Pane 2</Content>
            <Splitter
              data-test-id="pane-2-start"
              layoutKey="b"
              min={0}
              max={2}
              orientation="start"
            />
            <Splitter
              data-test-id="pane-2-bottom"
              layoutKey="c"
              min={0}
              max={2}
              orientation="bottom"
            />
          </Pane>
          <Pane>
            <Content>Pane 3</Content>
            <Splitter data-test-id="pane-3-end" layoutKey="a" min={0} max={2} orientation="end" />
            <Splitter data-test-id="pane-3-top" layoutKey="d" min={0} max={2} orientation="top" />
          </Pane>
          <Pane>
            <Content>Pane 4</Content>
            <Splitter
              data-test-id="pane-4-start"
              layoutKey="b"
              min={0}
              max={2}
              orientation="start"
            />
            <Splitter data-test-id="pane-4-top" layoutKey="d" min={0} max={2} orientation="top" />
          </Pane>
        </div>
      )}
    </PaneProvider>
  );
};

describe('PaneProvider', () => {
  beforeAll(() => {
    Object.defineProperty(document.body, 'clientWidth', {
      writable: true,
      value: 1000
    });
    Object.defineProperty(document.body, 'clientHeight', {
      writable: true,
      value: 500
    });
  });
  it('returns render prop function', () => {
    const renderProp = jest.fn();

    render(
      <PaneProvider
        totalPanesWidth={500}
        totalPanesHeight={500}
        defaultColumnValues={{ a: 1, b: 1 }}
        defaultRowValues={{ c: 1, d: 1 }}
      >
        {renderProp}
      </PaneProvider>
    );

    expect(renderProp.mock.calls[0]).toMatchInlineSnapshot(`
      Array [
        Object {
          "getColumnValue": [Function],
          "getGridTemplateColumns": [Function],
          "getGridTemplateRows": [Function],
          "getRowValue": [Function],
        },
      ]
    `);
  });

  describe('getLayoutValue', () => {
    it('returns column px value', () => {
      let _getColumnValue: any;

      render(
        <PaneProvider
          totalPanesWidth={500}
          totalPanesHeight={500}
          defaultColumnValues={{ a: 1, b: 1 }}
          defaultRowValues={{ c: 1, d: 1 }}
        >
          {({ getColumnValue }) => {
            _getColumnValue = getColumnValue;

            return null;
          }}
        </PaneProvider>
      );

      expect(_getColumnValue('a', true)).toBe(250);
    });
    it('returns row px value', () => {
      let _getRowValue: any;

      render(
        <PaneProvider
          totalPanesWidth={500}
          totalPanesHeight={500}
          defaultColumnValues={{ a: 1, b: 1 }}
          defaultRowValues={{ c: 1, d: 1 }}
        >
          {({ getRowValue }) => {
            _getRowValue = getRowValue;

            return null;
          }}
        </PaneProvider>
      );

      expect(_getRowValue('c', true)).toBe(250);
    });
    it('returns columns fr value', () => {
      let _getColumnValue: any;

      render(
        <PaneProvider
          totalPanesWidth={500}
          totalPanesHeight={500}
          defaultColumnValues={{ a: 1, b: 1 }}
          defaultRowValues={{ c: 1, d: 1 }}
        >
          {({ getColumnValue }) => {
            _getColumnValue = getColumnValue;

            return null;
          }}
        </PaneProvider>
      );

      expect(_getColumnValue('a', false)).toBe(1);
    });
    it('returns rows fr value', () => {
      let _getRowValue: any;

      render(
        <PaneProvider
          totalPanesWidth={500}
          totalPanesHeight={500}
          defaultColumnValues={{ a: 1, b: 1 }}
          defaultRowValues={{ c: 1, d: 1 }}
        >
          {({ getRowValue }) => {
            _getRowValue = getRowValue;

            return null;
          }}
        </PaneProvider>
      );

      expect(_getRowValue('c', false)).toBe(1);
    });
  });

  describe('getGridTemplateRows', () => {
    it('returns px value', () => {
      let _getGridTemplateRows: any;

      render(
        <PaneProvider
          totalPanesWidth={500}
          totalPanesHeight={500}
          defaultColumnValues={{ a: 1, b: 2 }}
          defaultRowValues={{ c: 3, d: 4 }}
        >
          {({ getGridTemplateRows }) => {
            _getGridTemplateRows = getGridTemplateRows;

            return null;
          }}
        </PaneProvider>
      );

      expect(_getGridTemplateRows(true)).toBe('214.28571428571428px 285.7142857142857px');
    });
    it('returns fr value', () => {
      let _getGridTemplateRows: any;

      render(
        <PaneProvider
          totalPanesWidth={500}
          totalPanesHeight={500}
          defaultColumnValues={{ a: 1, b: 2 }}
          defaultRowValues={{ c: 3, d: 4 }}
        >
          {({ getGridTemplateRows }) => {
            _getGridTemplateRows = getGridTemplateRows;

            return null;
          }}
        </PaneProvider>
      );

      expect(_getGridTemplateRows()).toBe('3fr 4fr');
    });
  });

  describe('getGridTemplateColumns', () => {
    it('returns px value', () => {
      let _getGridTemplateColumns: any;

      render(
        <PaneProvider
          totalPanesWidth={500}
          totalPanesHeight={500}
          defaultColumnValues={{ a: 1, b: 2 }}
          defaultRowValues={{ c: 3, d: 4 }}
        >
          {({ getGridTemplateColumns }) => {
            _getGridTemplateColumns = getGridTemplateColumns;

            return null;
          }}
        </PaneProvider>
      );

      expect(_getGridTemplateColumns(true)).toBe('166.66666666666666px 333.3333333333333px');
    });
    it('returns fr value', () => {
      let _getGridTemplateColumns: any;

      render(
        <PaneProvider
          totalPanesWidth={500}
          totalPanesHeight={500}
          defaultColumnValues={{ a: 1, b: 2 }}
          defaultRowValues={{ c: 3, d: 4 }}
        >
          {({ getGridTemplateColumns }) => {
            _getGridTemplateColumns = getGridTemplateColumns;

            return null;
          }}
        </PaneProvider>
      );

      expect(_getGridTemplateColumns()).toBe('1fr 2fr');
    });
  });

  it('accepts an undefined child and returns empty', () => {
    const { container } = render(
      <PaneProvider
        totalPanesWidth={500}
        totalPanesHeight={500}
        defaultColumnValues={{ a: 1, b: 1 }}
        defaultRowValues={{ c: 1, d: 1 }}
      />
    );

    expect(container).toMatchInlineSnapshot(`<div />`);
  });

  describe('uncontrolled', () => {
    it('moves column based splitter', () => {
      const { getByTestId } = render(<UncontrolledTestSplitter />);

      const separator = getByTestId('pane-1-end');
      const separatorComplement = getByTestId('pane-2-start');

      separator.getBoundingClientRect = () => ({
        bottom: 0,
        height: 0,
        left: 500,
        right: window.document.body.clientWidth - 500,
        top: 0,
        width: 0,
        x: 0,
        y: 0,
        toJSON: () => undefined
      });
      separatorComplement.getBoundingClientRect = () => ({
        bottom: 0,
        height: 0,
        left: 500,
        right: window.document.body.clientWidth - 500,
        top: 0,
        width: 0,
        x: 0,
        y: 0,
        toJSON: () => undefined
      });

      fireEvent.mouseDown(separator);
      fireEvent(document, new ExtendedMouseEvent('mousemove', { pageX: 200 }));
      fireEvent.mouseUp(document);

      expect(separator).toHaveAttribute('aria-valuenow', '200');
      expect(separatorComplement).toHaveAttribute('aria-valuenow', '800');
    });

    it('moves row based splitter', () => {
      const { getByTestId } = render(<UncontrolledTestSplitter />);

      const separator = getByTestId('pane-1-bottom');
      const separatorComplement = getByTestId('pane-3-top');

      separator.getBoundingClientRect = () => ({
        bottom: window.document.body.clientHeight - 250,
        height: 0,
        left: 0,
        right: 0,
        top: 250,
        width: 0,
        x: 0,
        y: 0,
        toJSON: () => undefined
      });
      separatorComplement.getBoundingClientRect = () => ({
        bottom: window.document.body.clientHeight - 250,
        height: 0,
        left: 0,
        right: 0,
        top: 250,
        width: 0,
        x: 0,
        y: 0,
        toJSON: () => undefined
      });

      fireEvent.mouseDown(separator);
      fireEvent(document, new ExtendedMouseEvent('mousemove', { pageY: 50 }));
      fireEvent.mouseUp(document);

      expect(separator).toHaveAttribute('aria-valuenow', '49.999999999999986');
      expect(separatorComplement).toHaveAttribute('aria-valuenow', '450');
    });
    it('moves column start based splitter', () => {
      const { getByTestId } = render(<UncontrolledTestSplitter />);

      const separator = getByTestId('pane-2-start');
      const separatorComplement = getByTestId('pane-1-end');

      separator.getBoundingClientRect = () => ({
        bottom: 0,
        height: 0,
        left: 500,
        right: window.document.body.clientWidth - 500,
        top: 0,
        width: 0,
        x: 0,
        y: 0,
        toJSON: () => undefined
      });
      separatorComplement.getBoundingClientRect = () => ({
        bottom: 0,
        height: 0,
        left: 500,
        right: window.document.body.clientWidth - 500,
        top: 0,
        width: 0,
        x: 0,
        y: 0,
        toJSON: () => undefined
      });

      fireEvent.mouseDown(separator);
      fireEvent(document, new ExtendedMouseEvent('mousemove', { pageX: 600 }));
      fireEvent.mouseUp(document);

      expect(separator).toHaveAttribute('aria-valuenow', '400');
      expect(separatorComplement).toHaveAttribute('aria-valuenow', '600');
    });
    it('moves row top based splitter', () => {
      const { getByTestId } = render(<UncontrolledTestSplitter />);

      const separator = getByTestId('pane-3-top');
      const separatorComplement = getByTestId('pane-1-bottom');

      separator.getBoundingClientRect = () => ({
        bottom: window.document.body.clientHeight - 250,
        top: 250,
        height: 0,
        left: 0,
        right: 0,
        width: 0,
        x: 0,
        y: 0,
        toJSON: () => undefined
      });
      separatorComplement.getBoundingClientRect = () => ({
        bottom: window.document.body.clientHeight - 250,
        top: 250,
        left: 0,
        right: 0,
        height: 0,
        width: 0,
        x: 0,
        y: 0,
        toJSON: () => undefined
      });

      fireEvent.mouseDown(separator);
      fireEvent(document, new ExtendedMouseEvent('mousemove', { pageY: 400 }));
      fireEvent.mouseUp(document);

      expect(separator).toHaveAttribute('aria-valuenow', '100');
      expect(separatorComplement).toHaveAttribute('aria-valuenow', '400');
    });
  });

  describe('controlled', () => {
    it('moves column based splitter', () => {
      let _rowValues: any;
      let _columnValues: any;

      const element = React.createElement(() => {
        const [columnValues, setColumnValues] = useState<Record<string, number>>({ a: 1, b: 1 });
        const [rowValues, setRowValues] = useState<Record<string, number>>({ c: 1, d: 1 });
        const onChange = useCallback(
          (rows: Record<string, number>, cols: Record<string, number>) => {
            setRowValues(rows);
            setColumnValues(cols);
          },
          [setRowValues, setColumnValues]
        );

        _rowValues = rowValues;
        _columnValues = columnValues;

        return (
          <ControlledTestSplitter
            rowValues={rowValues}
            columnValues={columnValues}
            onChange={onChange}
          />
        );
      });

      const { getByTestId } = render(element);

      const separator = getByTestId('pane-1-end');

      separator.getBoundingClientRect = () => ({
        bottom: 0,
        height: 0,
        left: 500,
        right: window.document.body.clientWidth - 500,
        top: 0,
        width: 0,
        x: 0,
        y: 0,
        toJSON: () => undefined
      });

      fireEvent.mouseDown(separator);
      fireEvent(document, new ExtendedMouseEvent('mousemove', { pageX: 250 }));
      fireEvent.mouseUp(document);

      expect(_rowValues).toMatchInlineSnapshot(`
        Object {
          "c": 1,
          "d": 1,
        }
      `);
      expect(_columnValues).toMatchInlineSnapshot(`
        Object {
          "a": 0.5,
          "b": 1.5,
        }
      `);
    });

    it('moves row based splitter', () => {
      let _rowValues: any;
      let _columnValues: any;

      const element = React.createElement(() => {
        const [columnValues, setColumnValues] = useState<Record<string, number>>({ a: 1, b: 1 });
        const [rowValues, setRowValues] = useState<Record<string, number>>({ c: 1, d: 1 });
        const onChange = useCallback(
          (rows: Record<string, number>, cols: Record<string, number>) => {
            setRowValues(rows);
            setColumnValues(cols);
          },
          [setRowValues, setColumnValues]
        );

        _rowValues = rowValues;
        _columnValues = columnValues;

        return (
          <ControlledTestSplitter
            rowValues={rowValues}
            columnValues={columnValues}
            onChange={onChange}
          />
        );
      });

      const { getByTestId } = render(element);

      const separator = getByTestId('pane-1-bottom');

      separator.getBoundingClientRect = () => ({
        bottom: window.document.body.clientHeight - 250,
        height: 0,
        left: 0,
        right: 0,
        top: 250,
        width: 0,
        x: 0,
        y: 0,
        toJSON: () => undefined
      });

      fireEvent.mouseDown(separator);
      fireEvent(document, new ExtendedMouseEvent('mousemove', { pageY: 50 }));
      fireEvent.mouseUp(document);

      expect(_rowValues).toMatchInlineSnapshot(`
        Object {
          "c": 0.19999999999999996,
          "d": 1.8,
        }
      `);
      expect(_columnValues).toMatchInlineSnapshot(`
        Object {
          "a": 1,
          "b": 1,
        }
      `);
    });
  });
});
