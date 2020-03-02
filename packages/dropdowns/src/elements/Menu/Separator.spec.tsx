/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { Dropdown, Trigger, Menu, Item, Separator } from '../../';

describe('Separator', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLLIElement>();

    const { getByTestId } = render(
      <Dropdown isOpen>
        <Trigger>
          <button>Test</button>
        </Trigger>
        <Menu>
          <Item value="item-1">Item 1</Item>
          <Separator data-test-id="separator" ref={ref} />
          <Item value="item-2">Item 2</Item>
        </Menu>
      </Dropdown>
    );

    expect(getByTestId('separator')).toBe(ref.current);
  });
});
