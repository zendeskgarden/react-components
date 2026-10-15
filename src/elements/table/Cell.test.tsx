/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { hideVisually } from 'polished';
import { createRef } from 'react';

import { RTL_THEME, render } from '../../test/render';
import { Body } from './Body';
import { Cell } from './Cell';
import { Row } from './Row';
import { Table } from './Table';

describe('Cell', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = createRef<HTMLTableCellElement>();
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
    const { getByTestId } = render(
      <Table>
        <Body>
          <Row>
            <Cell hasOverflow data-test-id="cell" />
          </Row>
        </Body>
      </Table>,
      {
        theme: RTL_THEME
      }
    );

    expect(getByTestId('cell')).toHaveStyle(`
      padding: 0 0 0 4px;
    `);
  });

  it('applies visually hidden styling', () => {
    const { getByTestId } = render(
      <Table>
        <Body>
          <Row>
            <Cell data-test-id="cell" hidden>
              Foo
            </Cell>
          </Row>
        </Body>
      </Table>
    );

    const hidden = getByTestId('cell').firstChild;

    // jsdom drops the `border` and `clip` values, so compare the stylesheet rules
    for (const [property, value] of Object.entries(hideVisually())) {
      expect(hidden).toHaveStyleRule(
        property.replace(/[A-Z]/gu, letter => `-${letter.toLowerCase()}`),
        String(value)
      );
    }
  });
});
