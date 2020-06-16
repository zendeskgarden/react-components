/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';

import { Table } from './Table';
import { Body } from './Body';
import { Row } from './Row';
import { Cell } from './Cell';

describe('Cell', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLTableCellElement>();
    const { getByTestId } = render(
      <Table>
        <Body>
          <Row>
            <Cell data-test-id="cell" ref={ref} />
          </Row>
        </Body>
      </Table>
    );

    expect(getByTestId('cell')).toBe(ref.current);
  });

  it('applies isMinimum styling', () => {
    const { getByTestId } = render(
      <Table>
        <Body>
          <Row>
            <Cell data-test-id="cell" isMinimum />
          </Row>
        </Body>
      </Table>
    );

    expect(getByTestId('cell')).toHaveStyle(`
      box-sizing: content-box;
      width: 1em;
    `);
  });

  it('applies isTruncated styling', () => {
    const { getByTestId } = render(
      <Table>
        <Body>
          <Row>
            <Cell data-test-id="cell" isTruncated />
          </Row>
        </Body>
      </Table>
    );

    expect(getByTestId('cell')).toHaveStyle(`
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    `);
  });

  it('applies hasOverflow styling', () => {
    const { getByTestId } = render(
      <Table>
        <Body>
          <Row>
            <Cell data-test-id="cell" hasOverflow />
          </Row>
        </Body>
      </Table>
    );

    expect(getByTestId('cell')).toHaveStyle(`
      width: 2em;
      height: inherit;
    `);
  });

  it('applies RTL styling', () => {
    const { getByTestId } = renderRtl(
      <Table>
        <Body>
          <Row>
            <Cell hasOverflow data-test-id="cell" />
          </Row>
        </Body>
      </Table>
    );

    expect(getByTestId('cell')).toHaveStyle(`
      padding: 0 0 0 4px;
    `);
  });
});
