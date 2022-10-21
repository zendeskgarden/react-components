/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, fireEvent } from 'garden-test-utils';
import { Dropdown, Autocomplete, Field, Menu, Item, Label, IDropdownProps } from '../..';

const ExampleAutocomplete = ({
  onStateChange
}: {
  onStateChange?: IDropdownProps['onStateChange'];
}) => (
  <Dropdown onStateChange={onStateChange}>
    <Field>
      <Autocomplete data-test-id="autocomplete">Test</Autocomplete>
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

describe('Autocomplete', () => {
  const user = userEvent.setup();

  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLDivElement>();

    const { getByTestId } = render(
      <Dropdown>
        <Field>
          <Autocomplete data-test-id="autocomplete" ref={ref}>
            Test
          </Autocomplete>
        </Field>
      </Dropdown>
    );

    expect(getByTestId('autocomplete')).toBe(ref.current);
  });

  it('focuses internal input when opened', async () => {
    const { getByTestId } = render(<ExampleAutocomplete />);

    await user.click(getByTestId('autocomplete'));

    expect(document.activeElement!.nodeName).toBe('INPUT');
  });

  it('closes on input blur', async () => {
    const { getByTestId } = render(<ExampleAutocomplete />);

    const autocomplete = getByTestId('autocomplete');

    await user.tab();
    expect(autocomplete).toHaveAttribute('data-test-is-focused', 'true');
    await user.tab();
    expect(autocomplete).toHaveAttribute('data-test-is-focused', 'false');
  });

  it('applies correct styling if open', async () => {
    const { getByTestId } = render(
      <Dropdown>
        <Field>
          <Autocomplete data-test-id="autocomplete">Test</Autocomplete>
        </Field>
      </Dropdown>
    );

    const autocomplete = getByTestId('autocomplete');

    await user.click(autocomplete);

    expect(autocomplete).toHaveAttribute('data-test-is-focused', 'true');
    expect(autocomplete).toHaveAttribute('data-test-is-open', 'true');
  });

  it('applies correct styling if label is hovered', async () => {
    const { getByTestId } = render(
      <Dropdown>
        <Field>
          <Label data-test-id="label">Label</Label>
          <Autocomplete data-test-id="autocomplete">Test</Autocomplete>
        </Field>
      </Dropdown>
    );

    await user.hover(getByTestId('label'));

    expect(getByTestId('autocomplete')).toHaveAttribute('data-test-is-hovered', 'true');
  });

  it('renders start icon if provided', () => {
    const { getByTestId } = render(
      <Dropdown>
        <Field>
          <Autocomplete start={<svg data-test-id="icon" />}>Test</Autocomplete>
        </Field>
      </Dropdown>
    );

    const icon = getByTestId('icon');

    expect(icon).toHaveStyleRule('width', '16px');
    expect(icon).toHaveStyleRule('height', '16px');
  });

  describe('Interaction', () => {
    it('opens on click', async () => {
      const { getByTestId } = render(<ExampleAutocomplete />);
      const autocomplete = getByTestId('autocomplete');

      await user.click(autocomplete);

      expect(autocomplete).toHaveAttribute('data-test-is-open', 'true');
    });

    it('opens on down key and highlights first item', () => {
      const { getByTestId, getAllByTestId } = render(<ExampleAutocomplete />);
      const autocomplete = getByTestId('autocomplete');

      fireEvent.keyDown(autocomplete, { key: 'ArrowDown', keyCode: 40 });
      expect(autocomplete).toHaveAttribute('data-test-is-open', 'true');

      const items = getAllByTestId('item');

      expect(items[0]).toHaveAttribute('aria-selected', 'true');
    });

    it('opens on up key and highlights last item', () => {
      const { getByTestId, getAllByTestId } = render(<ExampleAutocomplete />);
      const autocomplete = getByTestId('autocomplete');

      fireEvent.keyDown(autocomplete, { key: 'ArrowUp', keyCode: 38 });
      expect(autocomplete).toHaveAttribute('data-test-is-open', 'true');

      const items = getAllByTestId('item');

      expect(items[items.length - 1]).toHaveAttribute('aria-selected', 'true');
    });

    it('closes on escape key', async () => {
      const { getByTestId } = render(<ExampleAutocomplete />);
      const autocomplete = getByTestId('autocomplete');

      await user.click(autocomplete);
      expect(autocomplete).toHaveAttribute('data-test-is-open', 'true');

      await user.type(autocomplete.querySelector('input')!, '{escape}');
      expect(autocomplete).not.toHaveClass('is-open');
    });
  });

  describe('Functionality', () => {
    it('calls onStateChange once for "__autocomplete_keydown_enter__" when enter key is pressed', async () => {
      const onStateChange = jest.fn();
      const { getByTestId, getAllByTestId, getByRole } = render(
        <ExampleAutocomplete onStateChange={onStateChange} />
      );
      const input = getByRole('combobox');
      const autocomplete = getByTestId('autocomplete');

      await user.type(input, '{enter}');

      expect(autocomplete).toHaveAttribute('data-test-is-open', 'true');

      await user.type(input, '{arrowdown}');

      const items = getAllByTestId('item');

      expect(items[0]).toHaveAttribute('aria-selected', 'true');

      await user.type(input, '{enter}');

      const stateChangeTypes = onStateChange.mock.calls.map(([change]) => change.type);

      expect(onStateChange).toHaveBeenCalledTimes(3);
      // eslint-disable-next-line jest/prefer-strict-equal
      expect(stateChangeTypes).toEqual([
        '__autocomplete_click_button__',
        '__autocomplete_keydown_arrow_down__',
        '__autocomplete_keydown_enter__'
      ]);
    });
  });
});
