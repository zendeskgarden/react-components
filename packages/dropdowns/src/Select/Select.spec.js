/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, fireEvent } from 'garden-test-utils';
import { Dropdown, Select, Field, Menu, Item, Label } from '../';

const ExampleSelect = () => (
  <Dropdown>
    <Field>
      <Select data-test-id="select">Test</Select>
    </Field>
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

describe('Select', () => {
  it('focuses internal input when opened', () => {
    const { getByTestId } = render(<ExampleSelect />);

    fireEvent.click(getByTestId('select'));

    expect(document.activeElement.nodeName).toBe('INPUT');
  });

  it('focuses select when closed', () => {
    const { getByTestId } = render(<ExampleSelect />);
    const select = getByTestId('select');

    // Open dropdown
    fireEvent.click(select);
    // Close dropdown
    fireEvent.click(select);

    expect(document.activeElement).toEqual(select);
  });

  it('removes Select from tab order if disabled', () => {
    const { getByTestId } = render(
      <Dropdown>
        <Field>
          <Select data-test-id="select" disabled>
            Test
          </Select>
        </Field>
      </Dropdown>
    );

    expect(getByTestId('select')).toHaveAttribute('tabindex', '-1');
  });

  it('applies correct styling if open', () => {
    const { getByTestId } = render(
      <Dropdown>
        <Field>
          <Select data-test-id="select">Test</Select>
        </Field>
      </Dropdown>
    );

    const select = getByTestId('select');

    fireEvent.click(select);

    expect(select).toHaveClass('is-focused');
    expect(select).toHaveClass('is-open');
  });

  it('applies correct styling if label is hovered', () => {
    const { getByTestId } = render(
      <Dropdown>
        <Field>
          <Label data-test-id="label">Label</Label>
          <Select data-test-id="select">Test</Select>
        </Field>
      </Dropdown>
    );

    fireEvent.mouseEnter(getByTestId('label'));

    expect(getByTestId('select')).toHaveClass('is-hovered');
  });

  describe('Interaction', () => {
    it('opens on click', () => {
      const { getByTestId } = render(<ExampleSelect />);
      const select = getByTestId('select');

      fireEvent.click(select);

      expect(select).toHaveClass('is-open');
    });

    it('opens on down key and highlights first item', () => {
      const { getByTestId, getAllByTestId } = render(<ExampleSelect />);
      const select = getByTestId('select');

      fireEvent.keyDown(select, { key: 'ArrowDown', keyCode: 40 });
      expect(select).toHaveClass('is-open');

      const items = getAllByTestId('item');

      expect(items[0]).toHaveAttribute('aria-selected', 'true');
    });

    it('opens on down key and highlights last item', () => {
      const { getByTestId, getAllByTestId } = render(<ExampleSelect />);
      const select = getByTestId('select');

      fireEvent.keyDown(select, { key: 'ArrowUp', keyCode: 38 });
      expect(select).toHaveClass('is-open');

      const items = getAllByTestId('item');

      expect(items[items.length - 1]).toHaveAttribute('aria-selected', 'true');
    });

    it('closes on escape key', () => {
      const { getByTestId } = render(<ExampleSelect />);
      const select = getByTestId('select');

      fireEvent.click(select);
      expect(select).toHaveClass('is-open');

      fireEvent.keyDown(select, { key: 'Escape', keyCode: 27 });
      expect(select).not.toHaveClass('is-open');
    });
  });
});
