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
import { Cell } from './Cell';

describe('Cell', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLTableCellElement>();
    const { getByTestId } = render(
      <Table>
        <Body>
          <Row>
            <Cell data-test-id="cell" ref={ref} />
          </Row>
        </Body>
      </Table>
    );

    expect(getByTestId('cell')).toBe(ref.current);
  });
});
