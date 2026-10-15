/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createRef } from 'react';

import { render } from '../../test/render';
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

    expect(getByTestId('head')).toHaveStyleRule('position', 'sticky');
    expect(getByTestId('head')).toHaveStyleRule('top', '0');
    expect(getByTestId('head')).toHaveStyleRule('z-index', '1');
    expect(getByTestId('head')).toHaveStyleRule('border-bottom-color', 'transparent', {
      modifier: `&>${StyledHeaderRow}:last-child`
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
});
