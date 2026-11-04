/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createRef } from 'react';

import { render } from '../../test/render';
import DEFAULT_THEME from '../../theming/elements/theme';
import { getColor } from '../../theming/utils/getColor';
import { Body } from './Body';
import { GroupRow } from './GroupRow';
import { Table } from './Table';

describe('GroupRow', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = createRef<HTMLTableRowElement>();
    const { getByTestId } = render(
      <Table>
        <Body>
          <GroupRow data-test-id="groupRow" ref={ref} />
        </Body>
      </Table>
    );

    expect(getByTestId('groupRow')).toBe(ref.current);
  });

  it('paints rounded cells, not the row', () => {
    const { getByTestId } = render(
      <Table>
        <Body>
          <GroupRow data-test-id="groupRow" />
        </Body>
      </Table>
    );
    const groupRow = getByTestId('groupRow');

    expect(groupRow).not.toHaveStyleRule('background-color', expect.anything());
    expect(groupRow).toHaveStyleRule(
      'background-color',
      getColor({ variable: 'background.subtle', theme: DEFAULT_THEME }),
      { modifier: '>:is(td, th)' }
    );
    expect(groupRow).toHaveStyleRule('border-start-start-radius', DEFAULT_THEME.borderRadii.md, {
      modifier: '>:first-child'
    });
    expect(groupRow).toHaveStyleRule('border-end-end-radius', DEFAULT_THEME.borderRadii.md, {
      modifier: '>:last-child'
    });
  });
});
