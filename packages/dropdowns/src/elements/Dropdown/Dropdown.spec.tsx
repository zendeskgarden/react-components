/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, renderRtl, fireEvent } from 'garden-test-utils';
import { Dropdown, Trigger, Menu, Item, NextItem, PreviousItem } from '../..';
import { IDropdownProps } from './Dropdown';

const ExampleDropdown = (props: IDropdownProps) => (
  <Dropdown {...props}>
    <Trigger>
      <button data-test-id="trigger">Trigger</button>
    </Trigger>
    <Menu data-test-id="menu">
      <PreviousItem data-test-id="item" value="previous-item">
        Previous Item
      </PreviousItem>
      <Item data-test-id="item" value="item-1">
        Item 1
      </Item>
      <Item data-test-id="item" value="item-2">
        Item 2
      </Item>
      <NextItem data-test-id="item" value="next-item-1">
        Next Item 1
      </NextItem>
      <NextItem data-test-id="item" value="next-item-2">
        Next Item 2
      </NextItem>
    </Menu>
  </Dropdown>
);

describe('Dropdown', () => {
  describe('Custom keyboard nav', () => {
    it('selects previous item on left arrow key in LTR mode', () => {
      const onSelectSpy = jest.fn();
      const { container, getByTestId } = render(<ExampleDropdown onSelect={onSelectSpy} />);

      const trigger = getByTestId('trigger');
      const input = container.querySelector('input');

      userEvent.click(trigger);
      fireEvent.keyDown(input!, { key: 'ArrowDown', keyCode: 40 });
      fireEvent.keyDown(input!, { key: 'ArrowDown', keyCode: 40 });
      fireEvent.keyDown(input!, { key: 'ArrowLeft', keyCode: 37 });

      expect(onSelectSpy.mock.calls[0][0]).toBe('previous-item');
    });

    it('selects previous item on right arrow key in RTL mode', () => {
      const onSelectSpy = jest.fn();
      const { container, getByTestId } = renderRtl(<ExampleDropdown onSelect={onSelectSpy} />);

      const trigger = getByTestId('trigger');
      const input = container.querySelector('input');

      userEvent.click(trigger);
      fireEvent.keyDown(input!, { key: 'ArrowDown', keyCode: 40 });
      fireEvent.keyDown(input!, { key: 'ArrowDown', keyCode: 40 });
      fireEvent.keyDown(input!, { key: 'ArrowRight', keyCode: 39 });

      expect(onSelectSpy.mock.calls[0][0]).toBe('previous-item');
    });

    it('selects next item on right arrow key in LTR mode', () => {
      const onSelectSpy = jest.fn();
      const { container, getByTestId } = render(<ExampleDropdown onSelect={onSelectSpy} />);

      const trigger = getByTestId('trigger');
      const input = container.querySelector('input');

      userEvent.click(trigger);
      fireEvent.keyDown(input!, { key: 'ArrowDown', keyCode: 40 });
      fireEvent.keyDown(input!, { key: 'ArrowDown', keyCode: 40 });
      fireEvent.keyDown(input!, { key: 'ArrowDown', keyCode: 40 });
      fireEvent.keyDown(input!, { key: 'ArrowDown', keyCode: 40 });
      fireEvent.keyDown(input!, { key: 'ArrowRight', keyCode: 39 });

      expect(onSelectSpy.mock.calls[0][0]).toBe('next-item-1');
    });

    it('selects next item on left arrow key in RTL mode', () => {
      const onSelectSpy = jest.fn();
      const { container, getByTestId } = renderRtl(<ExampleDropdown onSelect={onSelectSpy} />);

      const trigger = getByTestId('trigger');
      const input = container.querySelector('input');

      userEvent.click(trigger);
      fireEvent.keyDown(input!, { key: 'ArrowDown', keyCode: 40 });
      fireEvent.keyDown(input!, { key: 'ArrowDown', keyCode: 40 });
      fireEvent.keyDown(input!, { key: 'ArrowDown', keyCode: 40 });
      fireEvent.keyDown(input!, { key: 'ArrowDown', keyCode: 40 });
      fireEvent.keyDown(input!, { key: 'ArrowLeft', keyCode: 37 });

      expect(onSelectSpy.mock.calls[0][0]).toBe('next-item-1');
    });

    it('selects next item when provided value is an object', () => {
      const onSelectSpy = jest.fn();
      const { container, getByTestId } = render(
        <Dropdown
          onSelect={onSelectSpy}
          downshiftProps={{ itemToString: (item: { value: string }) => (item ? item.value : '') }}
        >
          <Trigger>
            <button data-test-id="trigger">Trigger</button>
          </Trigger>
          <Menu data-test-id="menu">
            <Item value={{ value: 'item-1' }}>Item 1</Item>
            <NextItem value={{ value: 'next-item-1' }}>Next Item 1</NextItem>
            <NextItem value={{ value: 'next-item-2' }}>Next Item 2</NextItem>
          </Menu>
        </Dropdown>
      );

      const trigger = getByTestId('trigger');
      const input = container.querySelector('input');

      userEvent.click(trigger);
      fireEvent.keyDown(input!, { key: 'ArrowDown', keyCode: 40 });
      fireEvent.keyDown(input!, { key: 'ArrowDown', keyCode: 40 });
      fireEvent.keyDown(input!, { key: 'ArrowRight', keyCode: 39 });

      expect(onSelectSpy.mock.calls[0][0]).toStrictEqual({ value: 'next-item-1' });
    });

    it('opens dropdown on SPACE key', () => {
      const onSelectSpy = jest.fn();
      const { container, getByTestId } = render(<ExampleDropdown onSelect={onSelectSpy} />);

      const trigger = getByTestId('trigger');
      const input = container.querySelector('input');

      userEvent.type(input!, '{space}');
      expect(trigger).toHaveAttribute('aria-expanded', 'true');
    });

    it('opens dropdown on ENTER key', () => {
      const onSelectSpy = jest.fn();
      const { container, getByTestId } = render(<ExampleDropdown onSelect={onSelectSpy} />);

      const trigger = getByTestId('trigger');
      const input = container.querySelector('input');

      userEvent.type(input!, '{enter}');
      expect(trigger).toHaveAttribute('aria-expanded', 'true');
    });
  });

  describe('Event handlers', () => {
    it('calls onOpen handler if controlled', () => {
      const onStateChangeSpy = jest.fn();
      const { getByTestId } = render(
        <ExampleDropdown isOpen={false} onStateChange={onStateChangeSpy} />
      );

      userEvent.click(getByTestId('trigger'));
      expect(onStateChangeSpy.mock.calls[0][0]).toMatchObject({ isOpen: true });
    });

    it('calls onSelect handler correctly if controlled with single value', () => {
      const onSelectSpy = jest.fn();
      const { getByTestId, getAllByTestId } = render(
        <ExampleDropdown selectedItem="item-1" onSelect={onSelectSpy} />
      );

      userEvent.click(getByTestId('trigger'));
      fireEvent.click(getAllByTestId('item')[0]);
      expect(onSelectSpy.mock.calls[0][0]).toBe('previous-item');
    });

    it('calls onSelect handler correctly if controlled with multiple values and is not selected', () => {
      const onSelectSpy = jest.fn();
      const { getByTestId, getAllByTestId } = render(
        <ExampleDropdown selectedItems={['item-1', 'item-2']} onSelect={onSelectSpy} />
      );

      userEvent.click(getByTestId('trigger'));
      fireEvent.click(getAllByTestId('item')[0]);
      expect(onSelectSpy.mock.calls[0][0]).toStrictEqual(['item-1', 'item-2', 'previous-item']);
    });

    it('calls onSelect handler correctly if controlled with multiple values and is selected', () => {
      const onSelectSpy = jest.fn();
      const { getByTestId, getAllByTestId } = render(
        <ExampleDropdown
          selectedItems={['item-1', 'item-2', 'previous-item']}
          onSelect={onSelectSpy}
        />
      );

      userEvent.click(getByTestId('trigger'));
      fireEvent.click(getAllByTestId('item')[0]);
      expect(onSelectSpy.mock.calls[0][0]).toStrictEqual(['item-1', 'item-2']);
    });

    it('calls onHighlight handler if controlled', () => {
      const onStateChangeSpy = jest.fn();
      const { container, getByTestId } = render(
        <ExampleDropdown
          selectedItem="item-1"
          downshiftProps={{ defaultHighlightedIndex: 1 }}
          onStateChange={onStateChangeSpy}
        />
      );

      userEvent.click(getByTestId('trigger'));
      fireEvent.keyDown(container.querySelector('input')!, { key: 'ArrowDown', keyCode: 40 });

      expect(onStateChangeSpy.mock.calls[1][0]).toMatchObject({ highlightedIndex: 2 });
    });

    it('calls onStateChange with inputValue if controlled', () => {
      const onStateChangeSpy = jest.fn();
      const { container } = render(
        <ExampleDropdown inputValue="test" onStateChange={onStateChangeSpy} />
      );

      container.querySelector('input')!.readOnly = false;

      userEvent.type(container.querySelector('input')!, 't');

      expect(onStateChangeSpy).toHaveBeenCalledTimes(1);
      expect(onStateChangeSpy.mock.calls[0][0]).toMatchObject({ inputValue: 't' });
    });

    it('calls onInputValueChange with input value when open', () => {
      const onInputValueChangeSpy = jest.fn();

      const { container } = render(
        <ExampleDropdown isOpen onInputValueChange={onInputValueChangeSpy} />
      );

      container.querySelector('input')!.readOnly = false;
      userEvent.type(container.querySelector('input')!, 't');

      expect(onInputValueChangeSpy.mock.calls[0][0]).toBe('t');
    });
  });
});
