/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createRef } from 'react';
import { css } from 'styled-components';

import { render, RTL_THEME } from '../../test/render';
import DEFAULT_THEME from '../../theming/elements/theme';
import { getColor } from '../../theming/utils/getColor';
import {
  StyledSortableButton,
  StyledSortableFillIconWrapper,
  StyledSortArrowTop,
  StyledSortArrowBottom
} from '../../views/table/StyledSortableButton';
import { Head } from './Head';
import { HeaderCell } from './HeaderCell';
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

  it.each([
    ['small', '6px'],
    ['medium', '10px'],
    ['large', '22px']
  ] as const)('applies the %s table size to the vertical padding', (size, padding) => {
    const { getByTestId } = render(
      <Table size={size}>
        <Head>
          <HeaderRow>
            <SortableCell data-test-id="sortable" />
            <HeaderCell data-test-id="header" />
          </HeaderRow>
        </Head>
      </Table>
    );
    const sortableCell = getByTestId('sortable').parentElement;

    expect(sortableCell).toHaveStyleRule('padding-top', padding);
    expect(sortableCell).toHaveStyleRule('padding-bottom', padding);
    expect(getByTestId('header')).toHaveStyleRule('padding-top', padding);
    expect(getByTestId('header')).toHaveStyleRule('padding-bottom', padding);
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

  describe('sort icons', () => {
    const renderSortable = (sort?: 'asc' | 'desc', rtl = false) =>
      render(
        <Table>
          <Head>
            <HeaderRow>
              <SortableCell data-test-id="sortable" sort={sort}>
                Label
              </SortableCell>
            </HeaderRow>
          </Head>
        </Table>,
        rtl ? { theme: RTL_THEME } : undefined
      );

    it('sizes the icon wrappers to iconSizes.md', () => {
      const { getByTestId } = renderSortable();
      const wrappers = getByTestId('sortable').querySelectorAll(':scope > div');

      expect(wrappers).toHaveLength(2);
      wrappers.forEach(wrapper => {
        expect(wrapper).toHaveStyleRule('width', DEFAULT_THEME.iconSizes.md);
      });
    });

    it.each([
      ['LTR', 'padding-right', false],
      ['RTL', 'padding-left', true]
    ] as const)('reserves %s end padding for the icon', (_, property, rtl) => {
      const { getByTestId } = renderSortable(undefined, rtl);
      const padding = DEFAULT_THEME.space.base + parseInt(DEFAULT_THEME.iconSizes.md, 10);

      expect(getByTestId('sortable')).toHaveStyleRule(property, `${padding}px`);
    });

    it('renders two clipped copies of the fill icon', () => {
      const { getByTestId } = renderSortable('asc');
      const fillWrapper = getByTestId('sortable').querySelectorAll(':scope > div')[1];
      const arrows = fillWrapper.querySelectorAll('svg');

      expect(arrows).toHaveLength(2);
      expect(arrows[0]).toHaveStyleRule('clip-path', 'inset(0 0 50% 0)');
      expect(arrows[1]).toHaveStyleRule('clip-path', 'inset(50% 0 0 0)');
    });

    it.each([
      ['asc' as const, true, false],
      ['desc' as const, false, true]
    ])('dims the inactive arrow when %s', (sort, topActive, bottomActive) => {
      const { getByTestId } = renderSortable(sort);
      const button = getByTestId('sortable');
      const fgActive = getColor({ theme: DEFAULT_THEME, variable: 'foreground.subtle' });
      const fgInactive = getColor({
        theme: DEFAULT_THEME,
        variable: 'foreground.subtle',
        transparency: DEFAULT_THEME.opacity[200]
      });

      expect(button).toHaveStyleRule('color', topActive ? fgActive : fgInactive, {
        modifier: css`
          ${StyledSortableFillIconWrapper} ${StyledSortArrowTop}
        ` as any
      });
      expect(button).toHaveStyleRule('color', bottomActive ? fgActive : fgInactive, {
        modifier: css`
          ${StyledSortableFillIconWrapper} ${StyledSortArrowBottom}
        ` as any
      });
    });

    it('keeps both arrows active when unsorted', () => {
      const { getByTestId } = renderSortable();
      const button = getByTestId('sortable');
      const fgActive = getColor({ theme: DEFAULT_THEME, variable: 'foreground.subtle' });

      expect(button).toHaveStyleRule('color', fgActive, {
        modifier: css`
          ${StyledSortableFillIconWrapper} ${StyledSortArrowTop}
        ` as any
      });
      expect(button).toHaveStyleRule('color', fgActive, {
        modifier: css`
          ${StyledSortableFillIconWrapper} ${StyledSortArrowBottom}
        ` as any
      });
    });
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
