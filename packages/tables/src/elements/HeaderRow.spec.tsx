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

describe('HeaderRow', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLTableRowElement>();
    const { getByTestId } = render(
      <Table>
        <Head>
          <HeaderRow data-test-id="headerRow" ref={ref} />
        </Head>
      </Table>
    );

    expect(getByTestId('headerRow')).toBe(ref.current);
  });

  describe('Size', () => {
    it('renders small size styling', () => {
      const { getByTestId } = render(
        <Table size="small">
          <Head>
            <HeaderRow data-test-id="headerRow" />
          </Head>
        </Table>
      );

      expect(getByTestId('headerRow')).toHaveStyleRule('height', '40px');
    });

    it('renders large size styling', () => {
      const { getByTestId } = render(
        <Table size="large">
          <Head>
            <HeaderRow data-test-id="headerRow" />
          </Head>
        </Table>
      );

      expect(getByTestId('headerRow')).toHaveStyleRule('height', '72px');
    });
  });
});
