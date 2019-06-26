/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, fireEvent } from 'garden-test-utils';
import { Dropdown, Field, Select, Trigger, Menu, Item, NextItem } from '..';

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

    expect(getByTestId('menu').parentElement!.parentElement!.style.visibility).toBe('hidden');
  });

  it('removes hidden styling if open', () => {
    const { getByTestId } = render(<ExampleMenu />);

    fireEvent.click(getByTestId('trigger'));

    expect(getByTestId('menu').parentElement!.parentElement!.style.visibility).toBe('');
  });

  it('applies custom width if full-width element is included in Dropdown', () => {
    Element.prototype.getBoundingClientRect = jest.fn(() => {
      return {
        width: 100,
        height: 100,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
      };
    });

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

    expect(getByTestId('menu').style.width).toBe('100px');
  });
});
