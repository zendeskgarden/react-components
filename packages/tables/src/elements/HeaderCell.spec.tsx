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
import { HeaderCell } from './HeaderCell';

describe('HeaderCell', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLTableHeaderCellElement>();
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
});
