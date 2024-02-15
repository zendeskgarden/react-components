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
import { SplitterButton } from './components/SplitterButton';
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
            <Splitter data-test-id="pane-1-end" layoutKey="a" min={0} max={2} orientation="end">
              <SplitterButton label="toggle pane-1-end-a" />
            </Splitter>
            <Splitter
              data-test-id="pane-1-bottom"
              layoutKey="c"
              min={0}
              max={2}
              orientation="bottom"
            >
              <SplitterButton label="toggle pane-1-bottom-c" />
            </Splitter>
          </Pane>
          <Pane>
            <Content>Pane 2</Content>
            <Splitter data-test-id="pane-2-start" layoutKey="b" min={0} max={2} orientation="start">
              <SplitterButton label="toggle pane-2-start-b" placement="end" />
            </Splitter>
            <Splitter
              data-test-id="pane-2-bottom"
              layoutKey="c"
              min={0}
              max={2}
              orientation="bottom"
            >
              <SplitterButton label="toggle pane-2-bottom-c" placement="start" />
            </Splitter>
          </Pane>
          <Pane>
            <Content>Pane 3</Content>
            <Splitter data-test-id="pane-3-end" layoutKey="a" min={0} max={2} orientation="end">
              <SplitterButton label="toggle pane-3-end-a" placement="end" />
            </Splitter>
            <Splitter data-test-id="pane-3-top" layoutKey="d" min={0} max={2} orientation="top">
              <SplitterButton label="toggle pane-3-top-d" placement="end" />
            </Splitter>
          </Pane>
          <Pane>
            <Content>Pane 4</Content>
            <Splitter data-test-id="pane-4-start" layoutKey="b" min={0} max={2} orientation="start">
              <SplitterButton label="toggle pane-4-start-b" placement="center" />
            </Splitter>
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

const NestedTestSplitter = ({
  parent,
  child
}: {
  parent: Pick<IPaneProviderProps, 'columnValues' | 'rowValues' | 'onChange'>;
  child: Pick<IPaneProviderProps, 'columnValues' | 'rowValues' | 'onChange'>;
}) => {
  const parentHandleOnChange = parent.onChange;
  const childHandleOnChange = child.onChange;

  return (
    <PaneProvider
      id="column-layout"
      totalPanesWidth={1000}
      totalPanesHeight={500}
      columnValues={parent.columnValues}
      rowValues={parent.rowValues}
      onChange={parentHandleOnChange}
    >
      {({
        getGridTemplateColumns: getParentGridTemplateColumns,
        getGridTemplateRows: getParentGridTemplateRows
      }) => (
        <div
          style={{
            direction: 'ltr',
            display: 'grid',
            width: '1000px',
            height: '500px',
            gridTemplateRows: getParentGridTemplateRows(),
            gridTemplateColumns: getParentGridTemplateColumns()
          }}
        >
          <Pane>
            <Content>
              <PaneProvider
                totalPanesWidth={500}
                totalPanesHeight={500}
                columnValues={child.columnValues}
                rowValues={child.rowValues}
                onChange={childHandleOnChange}
              >
                {({
                  getGridTemplateColumns: getChildGridTemplateColumns,
                  getGridTemplateRows: getChildGridTemplateRows
                }) => (
                  <div
                    style={{
                      direction: 'ltr',
                      display: 'grid',
                      width: '100%',
                      height: '500px',
                      gridTemplateRows: getChildGridTemplateRows(),
                      gridTemplateColumns: getChildGridTemplateColumns()
                    }}
                  >
                    <Pane>
                      <Content>Nested Pane 1</Content>
                      <Splitter
                        data-test-id="nested-pane-1-bottom"
                        layoutKey="nested-a"
                        min={0}
                        max={2}
                        orientation="bottom"
                      />
                      <Splitter
                        data-test-id="nested-pane-1-end"
                        providerId="column-layout"
                        layoutKey="nested-b"
                        min={0}
                        max={2}
                        orientation="end"
                      />
                    </Pane>
                    <Pane>
                      <Content>Nested Pane 2</Content>
                    </Pane>
                  </div>
                )}
              </PaneProvider>
            </Content>
          </Pane>
          <Pane>
            <Content>Pane 2</Content>
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
        id="named-layout"
        totalPanesWidth={500}
        totalPanesHeight={500}
        defaultColumnValues={{ a: 1, b: 1 }}
        defaultRowValues={{ c: 1, d: 1 }}
      >
        {renderProp}
      </PaneProvider>
    );

    expect(renderProp.mock.calls[0]).toMatchInlineSnapshot(`
      [
        {
          "getColumnValue": [Function],
          "getGridTemplateColumns": [Function],
          "getGridTemplateRows": [Function],
          "getRowValue": [Function],
          "id": "named-layout",
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

      expect(separator).toHaveAttribute('aria-valuenow', '20');
      expect(separatorComplement).toHaveAttribute('aria-valuenow', '80');
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

      expect(separator).toHaveAttribute('aria-valuenow', '9.999999999999998');
      expect(separatorComplement).toHaveAttribute('aria-valuenow', '90');
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

      expect(separator).toHaveAttribute('aria-valuenow', '40');
      expect(separatorComplement).toHaveAttribute('aria-valuenow', '60');
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

      expect(separator).toHaveAttribute('aria-valuenow', '20');
      expect(separatorComplement).toHaveAttribute('aria-valuenow', '80');
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
        {
          "c": 1,
          "d": 1,
        }
      `);
      expect(_columnValues).toMatchInlineSnapshot(`
        {
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
        {
          "c": 0.19999999999999996,
          "d": 1.8,
        }
      `);
      expect(_columnValues).toMatchInlineSnapshot(`
        {
          "a": 1,
          "b": 1,
        }
      `);
    });
  });
  describe('nested splitter', () => {
    it('should resize the parent layout from inside a child layout', () => {
      let _parentColumnValues: any;
      let _childRowValues: any;

      const element = React.createElement(() => {
        const [parentColumnValues, setParentColumnValues] = useState<Record<string, number>>({
          'nested-b': 1,
          a: 1
        });
        const [childRowValues, setChildRowValues] = useState<Record<string, number>>({
          'nested-a': 1,
          b: 1
        });

        const onParentChange = useCallback(
          (rows: Record<string, number>, cols: Record<string, number>) => {
            setParentColumnValues(cols);
          },
          [setParentColumnValues]
        );
        const onChildChange = useCallback(
          (rows: Record<string, number>) => {
            setChildRowValues(rows);
          },
          [setChildRowValues]
        );

        _parentColumnValues = parentColumnValues;
        _childRowValues = childRowValues;

        return (
          <NestedTestSplitter
            parent={{
              rowValues: {},
              columnValues: parentColumnValues,
              onChange: onParentChange
            }}
            child={{
              rowValues: childRowValues,
              columnValues: {},
              onChange: onChildChange
            }}
          />
        );
      });

      const { getByTestId } = render(element);

      const childSeparator = getByTestId('nested-pane-1-bottom');
      const parentSeparator = getByTestId('nested-pane-1-end');

      childSeparator.getBoundingClientRect = () => ({
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

      fireEvent.mouseDown(childSeparator);
      fireEvent(document, new ExtendedMouseEvent('mousemove', { pageY: 150 }));
      fireEvent.mouseUp(document);

      parentSeparator.getBoundingClientRect = () => ({
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

      fireEvent.mouseDown(parentSeparator);
      fireEvent(document, new ExtendedMouseEvent('mousemove', { pageX: 600 }));
      fireEvent.mouseUp(document);

      expect(_childRowValues).toMatchInlineSnapshot(`
        {
          "b": 1.4,
          "nested-a": 0.6,
        }
      `);
      expect(_parentColumnValues).toMatchInlineSnapshot(`
        {
          "a": 0.8,
          "nested-b": 1.2,
        }
      `);
    });
  });
  describe('splitter button', () => {
    it('collapses column based splitter', () => {
      const { getByTestId, getByLabelText } = render(<UncontrolledTestSplitter />);

      const separator = getByTestId('pane-1-end');
      const button = getByLabelText('toggle pane-1-end-a');

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

      fireEvent.click(button);

      expect(separator).toHaveAttribute('aria-valuenow', '0');
    });
    it('expands column based splitter', () => {
      const { getByTestId, getByLabelText } = render(<UncontrolledTestSplitter />);

      const separator = getByTestId('pane-1-end');
      const button = getByLabelText('toggle pane-1-end-a');

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

      fireEvent.click(button);
      fireEvent.click(button);

      expect(separator).toHaveAttribute('aria-valuenow', '100');
    });
    it('collapses row based splitter', () => {
      const { getByTestId, getByLabelText } = render(<UncontrolledTestSplitter />);

      const separator = getByTestId('pane-1-bottom');
      const button = getByLabelText('toggle pane-1-bottom-c');

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

      fireEvent.click(button);

      expect(separator).toHaveAttribute('aria-valuenow', '0');
    });
    it('expands row based splitter', () => {
      const { getByTestId, getByLabelText } = render(<UncontrolledTestSplitter />);

      const separator = getByTestId('pane-1-bottom');
      const button = getByLabelText('toggle pane-1-bottom-c');

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

      fireEvent.click(button);
      fireEvent.click(button);

      expect(separator).toHaveAttribute('aria-valuenow', '100');
    });
  });
});
