/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, fireEvent } from 'garden-test-utils';
import { Dropdown, Trigger, Menu, Item } from '../..';

const ExampleMenu = () => (
  <Dropdown>
    <Trigger>
      <button data-test-id="trigger">Test</button>
    </Trigger>
    <Menu data-test-id="menu">
      <Item value="item-1" data-test-id="item">
        Item 1
      </Item>
      <Item value="item-2" data-test-id="item">
        Item 2
      </Item>
      <Item value="item-3" data-test-id="item">
        Item 3
      </Item>
    </Menu>
  </Dropdown>
);

describe('Trigger', () => {
  const user = userEvent.setup();

  it('focuses internal input when opened', async () => {
    const { getByTestId } = render(<ExampleMenu />);

    await user.click(getByTestId('trigger'));

    expect(document.activeElement!.nodeName).toBe('INPUT');
  });

  it('focuses trigger when closed', async () => {
    const { getByTestId } = render(<ExampleMenu />);
    const trigger = getByTestId('trigger');

    // Open dropdown
    await user.click(trigger);
    // Close dropdown
    await user.click(trigger);

    expect(document.activeElement).toStrictEqual(trigger);
  });

  it('remove invalid aria-labelledby', () => {
    const { getByTestId } = render(<ExampleMenu />);
    const trigger = getByTestId('trigger');

    expect(trigger).not.toHaveAttribute('aria-labelledby');
  });

  describe('Interaction', () => {
    it('opens on click', async () => {
      const { getByTestId } = render(<ExampleMenu />);
      const trigger = getByTestId('trigger');

      await user.click(trigger);

      expect(trigger).toHaveAttribute('aria-expanded', 'true');
    });

    it('opens on down key and highlights first item', () => {
      const { getByTestId, getAllByTestId } = render(<ExampleMenu />);
      const trigger = getByTestId('trigger');

      fireEvent.keyDown(trigger, { key: 'ArrowDown', keyCode: 40 });
      expect(trigger).toHaveAttribute('aria-expanded', 'true');

      const items = getAllByTestId('item');

      expect(items[0]).toHaveAttribute('data-test-is-focused', 'true');
    });

    it('opens on down key and highlights last item', () => {
      const { getByTestId, getAllByTestId } = render(<ExampleMenu />);
      const trigger = getByTestId('trigger');

      fireEvent.keyDown(trigger, { key: 'ArrowUp', keyCode: 38 });
      expect(trigger).toHaveAttribute('aria-expanded', 'true');

      const items = getAllByTestId('item');

      expect(items[items.length - 1]).toHaveAttribute('data-test-is-focused', 'true');
    });

    it('closes on escape key', async () => {
      const { getByTestId } = render(<ExampleMenu />);
      const trigger = getByTestId('trigger');

      await user.click(trigger);
      expect(trigger).toHaveAttribute('aria-expanded', 'true');

      await user.type(trigger, '{escape}');
      expect(trigger).toHaveAttribute('aria-expanded', 'false');
    });
  });
});
