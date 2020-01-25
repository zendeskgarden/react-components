/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, fireEvent } from 'garden-test-utils';
import { Dropdown, Autocomplete, Field, Menu, Item, Label } from '../..';

const ExampleAutocomplete = () => (
  <Dropdown>
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
  it('focuses internal input when opened', () => {
    const { getByTestId } = render(<ExampleAutocomplete />);

    fireEvent.click(getByTestId('autocomplete'));

    expect(document.activeElement!.nodeName).toBe('INPUT');
  });

  it('closes on input blur', () => {
    const { getByTestId } = render(<ExampleAutocomplete />);

    const autocomplete = getByTestId('autocomplete');
    const input = autocomplete.querySelector('input');

    fireEvent.focus(input!);
    expect(autocomplete).toHaveClass('is-focused');
    fireEvent.blur(input!);
    expect(autocomplete).not.toHaveClass('is-focused');
  });

  it('applies correct styling if open', () => {
    const { getByTestId } = render(
      <Dropdown>
        <Field>
          <Autocomplete data-test-id="autocomplete">Test</Autocomplete>
        </Field>
      </Dropdown>
    );

    const autocomplete = getByTestId('autocomplete');

    fireEvent.click(autocomplete);

    expect(autocomplete).toHaveClass('is-focused');
    expect(autocomplete).toHaveClass('is-open');
  });

  it('applies correct styling if label is hovered', () => {
    const { getByTestId } = render(
      <Dropdown>
        <Field>
          <Label data-test-id="label">Label</Label>
          <Autocomplete data-test-id="autocomplete">Test</Autocomplete>
        </Field>
      </Dropdown>
    );

    fireEvent.mouseEnter(getByTestId('label'));

    expect(getByTestId('autocomplete')).toHaveClass('is-hovered');
  });

  describe('Interaction', () => {
    it('opens on click', () => {
      const { getByTestId } = render(<ExampleAutocomplete />);
      const autocomplete = getByTestId('autocomplete');

      fireEvent.click(autocomplete);

      expect(autocomplete).toHaveClass('is-open');
    });

    it('opens on down key and highlights first item', () => {
      const { getByTestId, getAllByTestId } = render(<ExampleAutocomplete />);
      const autocomplete = getByTestId('autocomplete');

      fireEvent.keyDown(autocomplete, { key: 'ArrowDown', keyCode: 40 });
      expect(autocomplete).toHaveClass('is-open');

      const items = getAllByTestId('item');

      expect(items[0]).toHaveAttribute('aria-selected', 'true');
    });

    it('opens on up key and highlights last item', () => {
      const { getByTestId, getAllByTestId } = render(<ExampleAutocomplete />);
      const autocomplete = getByTestId('autocomplete');

      fireEvent.keyDown(autocomplete, { key: 'ArrowUp', keyCode: 38 });
      expect(autocomplete).toHaveClass('is-open');

      const items = getAllByTestId('item');

      expect(items[items.length - 1]).toHaveAttribute('aria-selected', 'true');
    });

    it('closes on escape key', () => {
      const { getByTestId } = render(<ExampleAutocomplete />);
      const autocomplete = getByTestId('autocomplete');

      fireEvent.click(autocomplete);
      expect(autocomplete).toHaveClass('is-open');

      fireEvent.keyDown(autocomplete.querySelector('input')!, { key: 'Escape', keyCode: 27 });
      expect(autocomplete).not.toHaveClass('is-open');
    });
  });
});
