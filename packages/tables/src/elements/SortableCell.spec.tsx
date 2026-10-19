/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { css } from 'styled-components';
import { render } from 'garden-test-utils';

import { Table } from './Table';
import { Head } from './Head';
import { HeaderRow } from './HeaderRow';
import { SortableCell } from './SortableCell';
import { StyledSortableButton } from '../styled';

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

  describe('accessible name', () => {
    it('conveys sortability when unsorted', () => {
      const { getByRole } = render(
        <Table>
          <Head>
            <HeaderRow>
              <SortableCell>Updated date</SortableCell>
            </HeaderRow>
          </Head>
        </Table>
      );

      expect(getByRole('button')).toHaveAccessibleName('Updated date sortable');
    });

    it('conveys the sort state when ascending', () => {
      const { getByRole } = render(
        <Table>
          <Head>
            <HeaderRow>
              <SortableCell sort="asc">Updated date</SortableCell>
            </HeaderRow>
          </Head>
        </Table>
      );

      expect(getByRole('button')).toHaveAccessibleName('Updated date sorted ascending');
    });

    it('conveys the sort state when descending', () => {
      const { getByRole } = render(
        <Table>
          <Head>
            <HeaderRow>
              <SortableCell sort="desc">Updated date</SortableCell>
            </HeaderRow>
          </Head>
        </Table>
      );

      expect(getByRole('button')).toHaveAccessibleName('Updated date sorted descending');
    });

    it('applies customized text for each state', () => {
      const sortLabels = {
        unsorted: 'ordenable',
        ascending: 'orden ascendente',
        descending: 'orden descendente'
      };
      const { getAllByRole } = render(
        <Table>
          <Head>
            <HeaderRow>
              <SortableCell sortLabels={sortLabels}>Fecha</SortableCell>
              <SortableCell sort="asc" sortLabels={sortLabels}>
                Fecha
              </SortableCell>
              <SortableCell sort="desc" sortLabels={sortLabels}>
                Fecha
              </SortableCell>
            </HeaderRow>
          </Head>
        </Table>
      );
      const [unsorted, ascending, descending] = getAllByRole('button');

      expect(unsorted).toHaveAccessibleName('Fecha ordenable');
      expect(ascending).toHaveAccessibleName('Fecha orden ascendente');
      expect(descending).toHaveAccessibleName('Fecha orden descendente');
    });

    it('does not pass sortLabels to the DOM', () => {
      const { getByRole } = render(
        <Table>
          <Head>
            <HeaderRow>
              <SortableCell sortLabels={{ unsorted: 'sortable' }}>Updated date</SortableCell>
            </HeaderRow>
          </Head>
        </Table>
      );

      expect(getByRole('button')).not.toHaveAttribute('sortLabels');
      expect(getByRole('button')).not.toHaveAttribute('sortlabels');
    });

    it('requires a non-empty customized text value', () => {
      const spy = jest.spyOn(console, 'error').mockImplementation(() => undefined);

      expect(() =>
        render(
          <Table>
            <Head>
              <HeaderRow>
                <SortableCell sortLabels={{ unsorted: '' }}>Updated date</SortableCell>
              </HeaderRow>
            </Head>
          </Table>
        )
      ).toThrow();

      spy.mockRestore();
    });
  });
});
