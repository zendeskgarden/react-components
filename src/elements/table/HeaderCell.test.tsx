/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { hideVisually } from 'polished';
import { createRef } from 'react';

import { RTL_THEME, render } from '../../test/render';
import { Head } from './Head';
import { HeaderCell } from './HeaderCell';
import { HeaderRow } from './HeaderRow';
import { Table } from './Table';

describe('HeaderCell', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = createRef<HTMLTableHeaderCellElement>();
    const { getByTestId } = render(
      <Table>
        <Head>
          <HeaderRow>
            <HeaderCell data-test-id="headerCell" ref={ref} />
          </HeaderRow>
        </Head>
      </Table>
    );

    expect(getByTestId('headerCell')).toBe(ref.current);
  });

  it('renders a th with the header cell id, which a prop cannot replace', () => {
    const { getByTestId } = render(
      <Table>
        <Head>
          <HeaderRow>
            <HeaderCell data-test-id="headerCell" data-garden-id="custom" />
          </HeaderRow>
        </Head>
      </Table>
    );

    expect(getByTestId('headerCell').nodeName).toBe('TH');
    expect(getByTestId('headerCell')).toHaveAttribute('data-garden-id', 'tables.header_cell');
  });

  it('renders RTL styling', () => {
    const { getByTestId } = render(
      <Table>
        <Head>
          <HeaderRow>
            <HeaderCell data-test-id="headerCell" />
          </HeaderRow>
        </Head>
      </Table>,
      {
        theme: RTL_THEME
      }
    );

    expect(getByTestId('headerCell')).toHaveStyleRule('text-align', 'right');
  });

  it('renders hasOverflow styling', () => {
    const { getByTestId } = render(
      <Table>
        <Head>
          <HeaderRow>
            <HeaderCell data-test-id="headerCell" hasOverflow />
          </HeaderRow>
        </Head>
      </Table>
    );

    expect(getByTestId('headerCell')).not.toHaveStyleRule('text-align');
  });

  it('renders truncated styling', () => {
    const { getByTestId } = render(
      <Table>
        <Head>
          <HeaderRow>
            <HeaderCell data-test-id="headerCell" isTruncated />
          </HeaderRow>
        </Head>
      </Table>
    );

    expect(getByTestId('headerCell')).toHaveStyleRule('text-overflow', 'ellipsis');
  });

  it('applies visually hidden styling', () => {
    const { getByTestId } = render(
      <Table>
        <Head>
          <HeaderRow>
            <HeaderCell data-test-id="headerCell" hidden>
              Foo
            </HeaderCell>
          </HeaderRow>
        </Head>
      </Table>
    );

    const hidden = getByTestId('headerCell').firstChild;

    // jsdom drops the `border` and `clip` values, so compare the stylesheet rules
    for (const [property, value] of Object.entries(hideVisually())) {
      expect(hidden).toHaveStyleRule(
        property.replace(/[A-Z]/gu, letter => `-${letter.toLowerCase()}`),
        String(value)
      );
    }
  });
});
