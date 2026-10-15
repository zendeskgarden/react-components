/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createRef } from 'react';
import { css } from 'styled-components';

import { render } from '../../test/render';
import { StyledSortableButton } from '../../views/table/StyledSortableButton';
import { Head } from './Head';
import { HeaderRow } from './HeaderRow';
import { SortableCell } from './SortableCell';
import { Table } from './Table';

describe('SortableCell', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = createRef<HTMLButtonElement>();
    const { getByTestId } = render(
      <Table>
        <Head>
          <HeaderRow>
            <SortableCell data-test-id="sortable" ref={ref} />
          </HeaderRow>
        </Head>
      </Table>
    );

    expect(getByTestId('sortable')).toBe(ref.current);
  });

  it('renders a th and a button with their ids, which a prop cannot replace', () => {
    const { getByTestId } = render(
      <Table>
        <Head>
          <HeaderRow>
            <SortableCell data-test-id="sortable" data-garden-id="custom" type="submit" />
          </HeaderRow>
        </Head>
      </Table>
    );
    const button = getByTestId('sortable');
    const cell = button.parentElement!;

    expect(cell.nodeName).toBe('TH');
    expect(cell).toHaveAttribute('data-garden-id', 'tables.header_cell');
    expect(button).toHaveAttribute('data-garden-id', 'tables.sortable');
    expect(button).toHaveAttribute('type', 'button');
  });

  it('applies correct accessibility value when asc', () => {
    const { getByTestId } = render(
      <Table>
        <Head>
          <HeaderRow>
            <SortableCell data-test-id="sortable" sort="asc" />
          </HeaderRow>
        </Head>
      </Table>
    );

    expect(getByTestId('sortable').parentElement).toHaveAttribute('aria-sort', 'ascending');
  });

  it('applies correct accessibility value when desc', () => {
    const { getByTestId } = render(
      <Table>
        <Head>
          <HeaderRow>
            <SortableCell data-test-id="sortable" sort="desc" />
          </HeaderRow>
        </Head>
      </Table>
    );

    expect(getByTestId('sortable').parentElement).toHaveAttribute('aria-sort', 'descending');
  });

  it('handles truncation as expected', () => {
    const { getByTestId } = render(
      <Table>
        <Head>
          <HeaderRow>
            <SortableCell data-test-id="sortable" cellProps={{ isTruncated: true }} />
          </HeaderRow>
        </Head>
      </Table>
    );

    expect(getByTestId('sortable').parentElement).toHaveStyleRule('text-overflow', 'ellipsis', {
      modifier: css`
        ${StyledSortableButton}
      ` as any
    });
  });
});
