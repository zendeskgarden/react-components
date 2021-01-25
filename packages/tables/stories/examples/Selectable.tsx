/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import { Story } from '@storybook/react';
import {
  Table,
  Head,
  HeaderCell,
  HeaderRow,
  Caption,
  Body,
  Cell,
  Row
} from '@zendeskgarden/react-tables';
import { KEY_CODES } from '@zendeskgarden/container-utilities';
import { Field, Checkbox, Label } from '@zendeskgarden/react-forms';

interface IRow {
  id: string;
  selected: boolean;
  title: string;
}

const data: IRow[] = [];

for (let x = 0; x < 10; x++) {
  data.push({
    id: `row-${x}`,
    selected: false,
    title: `[${x + 1}] Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
  });
}

const StyledCaption = styled(Caption)`
  margin-bottom: ${props => props.theme.space.sm};
  line-height: ${props => props.theme.lineHeights.xl};
  font-size: ${props => props.theme.fontSizes.xl};
`;

/**
 * https://github.com/storybookjs/storybook/issues/13362
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Selectable: Story = ({ foo }) => {
  const [rows, setRows] = useState(data);
  const [shiftEnabled, setShiftEnabled] = useState(false);
  const [focusedRowIndex, setFocusedRowIndex] = useState<number | undefined>(undefined);

  const isSelectAllIndeterminate = useMemo(() => {
    const numSelectedRows = rows.reduce((accumulator, row) => {
      if (row.selected) {
        return accumulator + 1;
      }

      return accumulator;
    }, 0);

    return numSelectedRows > 0 && numSelectedRows < rows.length;
  }, [rows]);

  const isSelectAllChecked = useMemo(() => rows.every(row => row.selected), [rows]);

  return (
    <Table>
      <StyledCaption>Selectable Ticket View</StyledCaption>
      <Head>
        <HeaderRow>
          <HeaderCell isMinimum>
            <Field>
              <Checkbox
                indeterminate={isSelectAllIndeterminate}
                checked={isSelectAllChecked}
                onChange={e => {
                  if (e.target.checked) {
                    const updatedRows = rows.map(row => ({ ...row, selected: true }));

                    setRows(updatedRows);
                  } else {
                    const updatedRows = rows.map(row => ({ ...row, selected: false }));

                    setRows(updatedRows);
                  }
                }}
              >
                <Label hidden>Select all tickets</Label>
              </Checkbox>
            </Field>
          </HeaderCell>
          <HeaderCell scope="col">Long Truncated Title</HeaderCell>
        </HeaderRow>
      </Head>
      <Body>
        {rows.map((row, index) => (
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
                    const updatedRows = [...rows];

                    if (shiftEnabled && focusedRowIndex !== undefined) {
                      const startIndex = Math.min(focusedRowIndex, index);
                      const endIndex = Math.max(focusedRowIndex, index);

                      const isAllChecked = updatedRows
                        .slice(startIndex, endIndex + 1)
                        .every(r => r.selected);

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

                    setRows(updatedRows);
                    setFocusedRowIndex(index);
                  }}
                >
                  <Label hidden>Select ticket</Label>
                </Checkbox>
              </Field>
            </Cell>
            <Cell isTruncated title={row.title}>
              <span>{row.title}</span>
            </Cell>
          </Row>
        ))}
      </Body>
    </Table>
  );
};

Selectable.parameters = {
  docs: {
    description: {
      story: `
Table rows can be made selectable with the addition of a \`Checkbox\` component.

This example includes custom keyboard logic that allows users to
select/deselect multiple rows using the \`shift\` key.
      `
    }
  }
};
