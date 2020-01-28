/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { Dropdown, Trigger, Menu, HeaderItem } from '../../..';

describe('HeaderItem', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLLIElement>();

    const { getByTestId } = render(
      <Dropdown>
        <Trigger>
          <button data-test-id="trigger">Test</button>
        </Trigger>
        <Menu>
          <HeaderItem data-test-id="header-item" ref={ref}>
            Header Item
          </HeaderItem>
        </Menu>
      </Dropdown>
    );

    expect(getByTestId('header-item')).toBe(ref.current);
  });
});
