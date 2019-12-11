/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';

import { Table } from './Table';
import { Head } from './Head';
import { HeaderRow } from './HeaderRow';
import { SortableCell } from './SortableCell';

describe('SortableCell', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLButtonElement>();
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

  it('applies default styling', () => {
    const { getByTestId } = render(
      <Table>
        <Head>
          <HeaderRow>
            <SortableCell data-test-id="sortable" />
          </HeaderRow>
        </Head>
      </Table>
    );

    expect(getByTestId('sortable')).toHaveClass('c-table__row__cell__sortable');
  });

  it('applies focused styling if provided', () => {
    const { getByTestId } = render(
      <Table>
        <Head>
          <HeaderRow>
            <SortableCell data-test-id="sortable" isFocused />
          </HeaderRow>
        </Head>
      </Table>
    );

    expect(getByTestId('sortable')).toHaveClass('is-focused');
  });

  it('applies active styling if provided', () => {
    const { getByTestId } = render(
      <Table>
        <Head>
          <HeaderRow>
            <SortableCell data-test-id="sortable" isActive />
          </HeaderRow>
        </Head>
      </Table>
    );

    expect(getByTestId('sortable')).toHaveClass('is-active');
  });

  describe('sorting', () => {
    it('applies ascending props when applied', () => {
      const { getByTestId } = render(
        <Table>
          <Head>
            <HeaderRow>
              <SortableCell data-test-id="sortable" sort="asc" />
            </HeaderRow>
          </Head>
        </Table>
      );

      expect(getByTestId('sortable')).toHaveClass('is-ascending');
    });

    it('applies descending props when applied', () => {
      const { getByTestId } = render(
        <Table>
          <Head>
            <HeaderRow>
              <SortableCell data-test-id="sortable" sort="desc" />
            </HeaderRow>
          </Head>
        </Table>
      );

      expect(getByTestId('sortable')).toHaveClass('is-descending');
    });
  });
});
