/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import {
  Body,
  Cell,
  Head,
  HeaderCell,
  HeaderRow,
  Row,
  Table as GardenTable,
  ITableProps
} from '@zendeskgarden/react-tables';
import { KEY_CODES } from '@zendeskgarden/container-utilities';
import { Field, Checkbox, Label } from '@zendeskgarden/react-forms';

interface IRowData {
  id: string;
  fruit: string;
  sun: string;
  soil: string;
  selected: boolean;
}

const rowData: IRowData[] = Array.from(Array(10)).map((row, index) => ({
  id: `row-${index}`,
  fruit: `Fruit #${index}`,
  sun: 'Full sun',
  soil: 'Well draining',
  selected: false
}));

const isSelectAllIndeterminate = (rows: IRowData[]) => {
  const numSelectedRows = rows.reduce((accumulator, row) => {
    if (row.selected) {
      return accumulator + 1;
    }

    return accumulator;
  }, 0);

  return numSelectedRows > 0 && numSelectedRows < rows.length;
};

const isSelectAllChecked = (rows: IRowData[]) => rows.every(row => row.selected);

export const Table = (props: ITableProps) => {
  const [data, setData] = useState(rowData);
  const [shiftEnabled, setShiftEnabled] = useState(false);
  const [focusedRowIndex, setFocusedRowIndex] = useState<number | undefined>(undefined);

  return (
    <GardenTable {...props}>
      <Head>
        <HeaderRow>
          <HeaderCell isMinimum>
            <Field>
              <Checkbox
                indeterminate={isSelectAllIndeterminate(data)}
                checked={isSelectAllChecked(data)}
                onChange={e => {
                  if (e.target.checked) {
                    const updatedRows = data.map(row => ({ ...row, selected: true }));

                    setData(updatedRows);
                  } else {
                    const updatedRows = data.map(row => ({ ...row, selected: false }));

                    setData(updatedRows);
                  }
                }}
              >
                <Label hidden>Select all tickets</Label>
              </Checkbox>
            </Field>
          </HeaderCell>
          <HeaderCell>Fruit</HeaderCell>
          <HeaderCell>Sun exposure</HeaderCell>
          <HeaderCell>Soil type</HeaderCell>
        </HeaderRow>
      </Head>
      <Body>
        {data.map((row, index) => (
          <Row key={row.id} isSelected={row.selected}>
            <Cell isMinimum>
              <Field>
                <Checkbox
                  checked={row.selected}
                  onKeyDown={e => {
                    if (e.keyCode === KEY_CODES.SHIFT) {
                      setShiftEnabled(true);
                    }
                  }}
                  onKeyUp={() => {
                    setShiftEnabled(false);
                  }}
                  onChange={e => {
                    const updatedRows = [...data];

                    if (shiftEnabled && focusedRowIndex !== undefined) {
                      const startIndex = Math.min(focusedRowIndex, index);
                      const endIndex = Math.max(focusedRowIndex, index);

                      const isAllChecked = updatedRows
                        .slice(startIndex, endIndex + 1)
                        .every(slicedRow => slicedRow.selected);

                      for (let x = startIndex; x <= endIndex; x++) {
                        if (x === index && isAllChecked) {
                          updatedRows[x].selected = true;
                          continue;
                        }

                        updatedRows[x].selected = !isAllChecked;
                      }
                    } else if (e.target.checked) {
                      updatedRows[index].selected = true;
                    } else {
                      updatedRows[index].selected = false;
                    }

                    setData(updatedRows);
                    setFocusedRowIndex(index);
                  }}
                >
                  <Label hidden>Select ticket for {row.fruit}</Label>
                </Checkbox>
              </Field>
            </Cell>
            <Cell>{row.fruit}</Cell>
            <Cell>{row.sun}</Cell>
            <Cell>{row.soil}</Cell>
          </Row>
        ))}
      </Body>
    </GardenTable>
  );
};
