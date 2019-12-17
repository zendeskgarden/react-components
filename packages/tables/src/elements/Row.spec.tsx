/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';

import { Table } from './Table';
import { Body } from './Body';
import { Row } from './Row';

describe('Row', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLTableRowElement>();
    const { getByTestId } = render(
      <Table>
        <Body>
          <Row data-test-id="row" ref={ref} />
        </Body>
      </Table>
    );

    expect(getByTestId('row')).toBe(ref.current);
  });
});
