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

  describe('accessibility', () => {
    const renderCell = (props = {}, text = 'Updated date') =>
      render(
        <Table>
          <Head>
            <HeaderRow>
              <SortableCell {...props}>{text}</SortableCell>
            </HeaderRow>
          </Head>
        </Table>
      );

    it('keeps the plain column name when unsorted', () => {
      const { getByRole } = renderCell();

      expect(getByRole('button')).toHaveAccessibleName('Updated date');
    });

    it('always conveys that the button sorts, via aria-roledescription', () => {
      const unsorted = renderCell();

      expect(unsorted.getByRole('button')).toHaveAttribute('aria-roledescription', 'sort button');
      unsorted.unmount();

      const asc = renderCell({ sort: 'asc' });

      expect(asc.getByRole('button')).toHaveAttribute('aria-roledescription', 'sort button');
      asc.unmount();

      const desc = renderCell({ sort: 'desc' });

      expect(desc.getByRole('button')).toHaveAttribute('aria-roledescription', 'sort button');
    });

    it('adds the sort state to the button name when ascending', () => {
      const { getByRole } = renderCell({ sort: 'asc' });

      expect(getByRole('button')).toHaveAccessibleName('Updated date sorted ascending');
    });

    it('adds the sort state to the button name when descending', () => {
      const { getByRole } = renderCell({ sort: 'desc' });

      expect(getByRole('button')).toHaveAccessibleName('Updated date sorted descending');
    });

    it('labels only one icon, so the state is announced once', () => {
      const { getAllByRole } = renderCell({ sort: 'asc' });

      expect(getAllByRole('img')).toHaveLength(1);
    });

    it('does not expose an image when unsorted', () => {
      const { queryByRole } = renderCell();

      expect(queryByRole('img')).not.toBeInTheDocument();
    });

    it('applies customized text', () => {
      const props = {
        roleDescription: 'botón de ordenar',
        sortLabels: { ascending: 'orden ascendente', descending: 'orden descendente' }
      };
      const unsorted = renderCell(props, 'Fecha');

      expect(unsorted.getByRole('button')).toHaveAttribute(
        'aria-roledescription',
        'botón de ordenar'
      );
      expect(unsorted.getByRole('button')).toHaveAccessibleName('Fecha');
      unsorted.unmount();

      const asc = renderCell({ ...props, sort: 'asc' }, 'Fecha');

      expect(asc.getByRole('button')).toHaveAccessibleName('Fecha orden ascendente');
      asc.unmount();

      const desc = renderCell({ ...props, sort: 'desc' }, 'Fecha');

      expect(desc.getByRole('button')).toHaveAccessibleName('Fecha orden descendente');
    });

    it('does not pass roleDescription or sortLabels to the DOM', () => {
      const { getByRole } = renderCell({
        roleDescription: 'sort button',
        sortLabels: { ascending: 'asc' }
      });
      const button = getByRole('button');

      expect(button).not.toHaveAttribute('roledescription');
      expect(button).not.toHaveAttribute('sortlabels');
    });

    it('lets an explicit aria-roledescription win', () => {
      const { getByRole } = renderCell({ 'aria-roledescription': 'custom' });

      expect(getByRole('button')).toHaveAttribute('aria-roledescription', 'custom');
    });

    it('requires a non-empty customized text value', () => {
      const spy = jest.spyOn(console, 'error').mockImplementation(() => undefined);

      expect(() => renderCell({ roleDescription: '' })).toThrow();
      expect(() => renderCell({ sort: 'asc', sortLabels: { ascending: '' } })).toThrow();

      spy.mockRestore();
    });
  });
});
