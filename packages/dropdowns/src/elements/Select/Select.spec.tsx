/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, fireEvent } from 'garden-test-utils';
import { Dropdown, Select, Field, Menu, Item, Label } from '../..';

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
  const user = userEvent.setup();

  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLDivElement>();

    const { getByTestId } = render(
      <Dropdown>
        <Field>
          <Select data-test-id="select" ref={ref}>
            Test
          </Select>
        </Field>
      </Dropdown>
    );

    expect(getByTestId('select')).toBe(ref.current);
  });

  it('focuses internal input when opened', async () => {
    const { getByTestId } = render(<ExampleSelect />);

    await user.click(getByTestId('select'));

    expect(document.activeElement!.nodeName).toBe('INPUT');
  });

  it('focuses select when closed', async () => {
    const { getByTestId } = render(<ExampleSelect />);
    const select = getByTestId('select');

    // Open dropdown
    await user.click(select);
    // Close dropdown
    await user.click(select);

    expect(document.activeElement).toStrictEqual(select);
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

    expect(getByTestId('select')).not.toHaveAttribute('tabindex');
  });

  it('applies correct styling if open', async () => {
    const { getByTestId } = render(
      <Dropdown>
        <Field>
          <Select data-test-id="select">Test</Select>
        </Field>
      </Dropdown>
    );

    const select = getByTestId('select');

    await user.click(select);

    expect(select).toHaveAttribute('data-test-is-focused', 'true');
    expect(select).toHaveAttribute('data-test-is-open', 'true');
  });

  it('applies correct styling if label is hovered', async () => {
    const { getByTestId } = render(
      <Dropdown>
        <Field>
          <Label data-test-id="label">Label</Label>
          <Select data-test-id="select">Test</Select>
        </Field>
      </Dropdown>
    );

    await user.hover(getByTestId('label'));

    expect(getByTestId('select')).toHaveAttribute('data-test-is-hovered', 'true');
  });

  it('applies correct styling when compact', () => {
    const { getByTestId } = render(
      <Dropdown>
        <Field>
          <Select isCompact>Test</Select>
        </Field>
      </Dropdown>
    );

    expect(getByTestId('select-icon')).toHaveStyleRule('width', '16px');
  });

  it('renders start icon if provided', () => {
    const { getByTestId } = render(
      <Dropdown>
        <Field>
          <Select start={<svg data-test-id="icon" />}>Test</Select>
        </Field>
      </Dropdown>
    );

    const icon = getByTestId('icon');

    expect(icon).toHaveStyleRule('width', '16px');
    expect(icon).toHaveStyleRule('height', '16px');
  });

  describe('Interaction', () => {
    it('opens on click', async () => {
      const { getByTestId } = render(<ExampleSelect />);
      const select = getByTestId('select');

      await user.click(select);

      expect(select).toHaveAttribute('data-test-is-open', 'true');
    });

    it('opens on down key and highlights first item', () => {
      const { getByTestId, getAllByTestId } = render(<ExampleSelect />);
      const select = getByTestId('select');

      fireEvent.keyDown(select, { key: 'ArrowDown', keyCode: 40 });
      expect(select).toHaveAttribute('data-test-is-open', 'true');

      const items = getAllByTestId('item');

      expect(items[0]).toHaveAttribute('aria-selected', 'true');
    });

    it('opens on down key and highlights last item', () => {
      const { getByTestId, getAllByTestId } = render(<ExampleSelect />);
      const select = getByTestId('select');

      fireEvent.keyDown(select, { key: 'ArrowUp', keyCode: 38 });
      expect(select).toHaveAttribute('data-test-is-open', 'true');

      const items = getAllByTestId('item');

      expect(items[items.length - 1]).toHaveAttribute('aria-selected', 'true');
    });

    it('closes on escape key', async () => {
      const { getByTestId } = render(<ExampleSelect />);
      const select = getByTestId('select');

      await user.click(select);
      expect(select).toHaveAttribute('data-test-is-open', 'true');

      await user.type(select, '{escape}');
      expect(select).not.toHaveClass('is-open');
    });
  });
});
