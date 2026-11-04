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
import { StyledHeaderCell } from '../../views/table/StyledHeaderCell';
import { StyledHeaderRow } from '../../views/table/StyledHeaderRow';
import { Head } from './Head';
import { HeaderRow } from './HeaderRow';
import { Table } from './Table';

describe('Head', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = createRef<HTMLTableSectionElement>();
    const { getByTestId } = render(
      <Table>
        <Head data-test-id="head" ref={ref} />
      </Table>
    );

    expect(getByTestId('head')).toBe(ref.current);
  });

  it('renders the expected element and id', () => {
    const { getByTestId } = render(
      <Table>
        <Head data-test-id="head" />
      </Table>
    );

    expect(getByTestId('head').nodeName).toBe('THEAD');
    expect(getByTestId('head')).toHaveAttribute('data-garden-id', 'tables.head');
  });

  it('renders sticky styling', () => {
    const { getByTestId } = render(
      <Table>
        <Head data-test-id="head" isSticky>
          <HeaderRow />
        </Head>
      </Table>
    );

    const head = getByTestId('head');

    expect(head).toHaveStyleRule('position', 'sticky');
    expect(head).toHaveStyleRule('top', '0');
    expect(head).toHaveStyleRule('z-index', '2');
  });

  it.each([
    ['LTR', DEFAULT_THEME, '-8px', '8px'],
    ['RTL', RTL_THEME, '8px', '-8px']
  ])('hides scrolled rows under the gap and the corners in %s', (_, theme, start, end) => {
    const { getByTestId } = render(
      <Table>
        <Head data-test-id="head" isSticky>
          <HeaderRow />
        </Head>
      </Table>,
      { theme }
    );
    const head = getByTestId('head');
    const color = getColor({ variable: 'background.default', theme });
    const gap = `0 ${theme.space.xxs} 0 ${color}`;
    const startShadows = `${start} 0 0 ${color},${start} ${theme.space.xxs} 0 ${color}`;
    const endShadows = `${end} 0 0 ${color},${end} ${theme.space.xxs} 0 ${color}`;
    /* stylelint-disable */
    /* prettier-ignore */
    const cells = css`&>${StyledHeaderRow}>${StyledHeaderCell}`;
    /* prettier-ignore */
    const firstCell = css`&>${StyledHeaderRow}>${StyledHeaderCell}:first-child`;
    /* prettier-ignore */
    const lastCell = css`&>${StyledHeaderRow}>${StyledHeaderCell}:last-child`;
    /* stylelint-enable */

    expect(head).toHaveStyleRule('box-shadow', gap, { modifier: cells as any });
    expect(head).toHaveStyleRule('box-shadow', `${gap},${startShadows}`, {
      modifier: firstCell as any
    });
    expect(head).toHaveStyleRule('box-shadow', `${gap},${endShadows}`, {
      modifier: lastCell as any
    });
  });

  it('does not render sticky styling by default', () => {
    const { getByTestId } = render(
      <Table>
        <Head data-test-id="head" />
      </Table>
    );

    expect(getByTestId('head')).not.toHaveStyleRule('position', 'sticky');
  });

  it('separates the header from the body', () => {
    const { getByTestId } = render(
      <Table>
        <Head data-test-id="head" />
      </Table>
    );

    expect(getByTestId('head')).toHaveStyleRule('display', 'table-row', { modifier: '::after' });
    expect(getByTestId('head')).toHaveStyleRule('height', DEFAULT_THEME.space.xxs, {
      modifier: '::after'
    });
  });
});
