/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, fireEvent } from 'garden-test-utils';
import { Dropdown, Field, Select, Trigger, Menu, Item, NextItem } from '../';

const ExampleMenu = () => (
  <Dropdown>
    <Trigger>
      <button data-test-id="trigger">Test</button>
    </Trigger>
    <Menu data-test-id="menu" placement="top">
      <Item value="item-1" data-test-id="item">
        Item 1
      </Item>
      <NextItem value="previous-item" data-test-id="item">
        Next Item
      </NextItem>
      <Item value="item-2" data-test-id="item">
        Item 2
      </Item>
      <Item value="item-3" data-test-id="item">
        Item 3
      </Item>
    </Menu>
  </Dropdown>
);

describe('Menu', () => {
  it('applies hidden styling if closed', () => {
    const { getByTestId } = render(<ExampleMenu />);

    expect(getByTestId('menu').style.display).toBe('none');
  });

  it('removes hidden styling if open', () => {
    const { getByTestId } = render(<ExampleMenu />);

    fireEvent.click(getByTestId('trigger'));

    expect(getByTestId('menu').style.display).toBe('');
  });

  it('applies custom width if full-width element is included in Dropdown', () => {
    const { getByTestId } = render(
      <Dropdown>
        <Field>
          <Select data-test-id="select">Example</Select>
        </Field>
        <Menu data-test-id="menu" placement="top">
          <Item value="item-1" data-test-id="item">
            Item 1
          </Item>
        </Menu>
      </Dropdown>
    );

    fireEvent.click(getByTestId('select'));

    // Width is 0px due to JSDom abstractions
    expect(getByTestId('menu').style.width).toBe('0px');
  });
});
