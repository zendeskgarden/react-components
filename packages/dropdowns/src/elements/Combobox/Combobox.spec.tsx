/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import userEvent from '@testing-library/user-event';
import { PALETTE } from '@zendeskgarden/react-theming';
import { render } from 'garden-test-utils';
import { Dropdown, Field, Menu, Item, Label, Combobox } from '../..';

const ref = React.createRef<HTMLDivElement>();
const ExampleCombobox = () => (
  <Dropdown>
    <Field>
      <Label data-test-id="label">Label</Label>
      <Combobox
        data-test-id="combobox"
        start={<svg data-test-id="start-icon" />}
        end={<svg data-test-id="end-icon" />}
        ref={ref}
      />
    </Field>
    <Menu data-test-id="menu" />
  </Dropdown>
);

describe('Combobox', () => {
  it('passes ref to underlying DOM element', () => {
    const { getByTestId } = render(<ExampleCombobox />);

    expect(getByTestId('combobox')).toBe(ref.current);
  });

  it('applies correct styling on label hover', () => {
    const { getByTestId } = render(<ExampleCombobox />);
    const label = getByTestId('label');
    const combobox = getByTestId('combobox');

    userEvent.hover(label);

    expect(combobox).toHaveStyleRule('border-color', PALETTE.blue[600], { modifier: ':hover' });
  });

  it('focuses input on label click', () => {
    const { getByTestId, getByRole } = render(<ExampleCombobox />);
    const label = getByTestId('label');
    const combobox = getByRole('combobox');

    userEvent.click(label);

    expect(combobox).toHaveFocus();
  });

  it('renders icons if provided', () => {
    const { getByTestId } = render(<ExampleCombobox />);

    const startIcon = getByTestId('start-icon');
    const endIcon = getByTestId('end-icon');

    expect(startIcon).toHaveStyleRule('width', '16px');
    expect(startIcon).toHaveStyleRule('height', '16px');
    expect(endIcon).toHaveStyleRule('width', '16px');
    expect(endIcon).toHaveStyleRule('height', '16px');
  });

  describe('Interaction', () => {
    it('remains closed on click', () => {
      const { getByTestId } = render(<ExampleCombobox />);
      const combobox = getByTestId('combobox');

      userEvent.click(combobox);

      expect(combobox).toHaveAttribute('aria-expanded', 'false');
      expect(combobox).not.toHaveAttribute('aria-owns');
    });

    it('remains closed on arrow', () => {
      const { getByTestId } = render(<ExampleCombobox />);
      const combobox = getByTestId('combobox');

      userEvent.type(combobox.querySelector('input')!, '{arrowdown}');
      expect(combobox).toHaveAttribute('aria-expanded', 'false');
      expect(combobox).not.toHaveAttribute('aria-owns');
      userEvent.type(combobox.querySelector('input')!, '{arrowup}');
      expect(combobox).toHaveAttribute('aria-expanded', 'false');
      expect(combobox).not.toHaveAttribute('aria-owns');
    });

    it('remains closed on enter', () => {
      const { getByTestId } = render(<ExampleCombobox />);
      const combobox = getByTestId('combobox');
      const input = combobox.querySelector('input')!;

      userEvent.type(input, '{enter}');

      expect(combobox).toHaveAttribute('aria-expanded', 'false');
      expect(combobox).not.toHaveAttribute('aria-owns');
    });

    it('opens on text entry', () => {
      const { getByTestId } = render(<ExampleCombobox />);
      const combobox = getByTestId('combobox');
      const input = combobox.querySelector('input')!;

      userEvent.type(input, 'test');
      expect(combobox).toHaveAttribute('aria-expanded', 'true');
      expect(combobox).toHaveAttribute('aria-owns');
    });

    it('selects first item on down arrow', () => {
      const { getByTestId, getAllByTestId } = render(
        <Dropdown isOpen>
          <Field>
            <Combobox data-test-id="combobox" />
          </Field>
          <Menu>
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
      const combobox = getByTestId('combobox');
      const items = getAllByTestId('item');

      userEvent.type(combobox, '{arrowdown}');

      expect(items[0]).toHaveAttribute('aria-selected', 'true');
    });

    it('selects last item on up arrow', () => {
      const { getByTestId, getAllByTestId } = render(
        <Dropdown isOpen>
          <Field>
            <Combobox data-test-id="combobox" />
          </Field>
          <Menu>
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
      const combobox = getByTestId('combobox');
      const items = getAllByTestId('item');

      userEvent.type(combobox, '{arrowup}');

      expect(items[items.length - 1]).toHaveAttribute('aria-selected', 'true');
    });

    it('closes on text removal', () => {
      const { getByTestId } = render(<ExampleCombobox />);
      const combobox = getByTestId('combobox');
      const input = combobox.querySelector('input')!;

      userEvent.type(input, '{space}');
      expect(combobox).toHaveAttribute('aria-expanded', 'true');
      expect(combobox).toHaveAttribute('aria-owns');
      userEvent.type(input, '{backspace}');
      expect(combobox).toHaveAttribute('aria-expanded', 'false');
      expect(combobox).not.toHaveAttribute('aria-owns');
    });

    it('closes on escape', () => {
      const { getByTestId } = render(<ExampleCombobox />);
      const combobox = getByTestId('combobox');
      const input = combobox.querySelector('input')!;

      userEvent.type(input, 'test');
      expect(combobox).toHaveAttribute('aria-expanded', 'true');
      expect(combobox).toHaveAttribute('aria-owns');
      userEvent.type(input, '{escape}');
      expect(combobox).toHaveAttribute('aria-expanded', 'false');
      expect(combobox).not.toHaveAttribute('aria-owns');
    });
  });

  describe('Functionality', () => {
    it('calls "onSelect" once when enter key is pressed', () => {
      const onSelectSpy = jest.fn();
      const { getByTestId } = render(
        <Dropdown isOpen onSelect={onSelectSpy}>
          <Field>
            <Combobox data-test-id="combobox" />
          </Field>
          <Menu>
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
      const combobox = getByTestId('combobox');

      userEvent.type(combobox, '{arrowup}');
      userEvent.type(combobox, '{enter}');

      expect(onSelectSpy).toHaveBeenCalledTimes(1);
    });
  });
});
