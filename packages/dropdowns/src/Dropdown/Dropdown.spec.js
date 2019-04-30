/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl, fireEvent } from 'garden-test-utils';
import { Dropdown, Trigger, Menu, Item, NextItem, PreviousItem } from '../';

const ExampleDropdown = props => (
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
    it('selects item on TAB key', () => {
      const onSelectSpy = jest.fn();
      const { container, getByTestId } = render(<ExampleDropdown onSelect={onSelectSpy} />);

      const trigger = getByTestId('trigger');
      const input = container.querySelector('input');

      fireEvent.click(trigger);
      fireEvent.keyDown(input, { key: 'ArrowDown', keyCode: 40 });
      fireEvent.keyDown(input, { key: 'Tab', keyCode: 9 });

      expect(onSelectSpy.mock.calls[0][0]).toBe('previous-item');
    });

    it('selects previous item on left arrow key in LTR mode', () => {
      const onSelectSpy = jest.fn();
      const { container, getByTestId } = render(<ExampleDropdown onSelect={onSelectSpy} />);

      const trigger = getByTestId('trigger');
      const input = container.querySelector('input');

      fireEvent.click(trigger);
      fireEvent.keyDown(input, { key: 'ArrowDown', keyCode: 40 });
      fireEvent.keyDown(input, { key: 'ArrowDown', keyCode: 40 });
      fireEvent.keyDown(input, { key: 'ArrowLeft', keyCode: 37 });

      expect(onSelectSpy.mock.calls[0][0]).toBe('previous-item');
    });

    it('selects previous item on right arrow key in RTL mode', () => {
      const onSelectSpy = jest.fn();
      const { container, getByTestId } = renderRtl(<ExampleDropdown onSelect={onSelectSpy} />);

      const trigger = getByTestId('trigger');
      const input = container.querySelector('input');

      fireEvent.click(trigger);
      fireEvent.keyDown(input, { key: 'ArrowDown', keyCode: 40 });
      fireEvent.keyDown(input, { key: 'ArrowDown', keyCode: 40 });
      fireEvent.keyDown(input, { key: 'ArrowRight', keyCode: 39 });

      expect(onSelectSpy.mock.calls[0][0]).toBe('previous-item');
    });

    it('selects next item on right arrow key in LTR mode', () => {
      const onSelectSpy = jest.fn();
      const { container, getByTestId } = render(<ExampleDropdown onSelect={onSelectSpy} />);

      const trigger = getByTestId('trigger');
      const input = container.querySelector('input');

      fireEvent.click(trigger);
      fireEvent.keyDown(input, { key: 'ArrowDown', keyCode: 40 });
      fireEvent.keyDown(input, { key: 'ArrowDown', keyCode: 40 });
      fireEvent.keyDown(input, { key: 'ArrowDown', keyCode: 40 });
      fireEvent.keyDown(input, { key: 'ArrowDown', keyCode: 40 });
      fireEvent.keyDown(input, { key: 'ArrowRight', keyCode: 39 });

      expect(onSelectSpy.mock.calls[0][0]).toBe('next-item-1');
    });

    it('selects next item on left arrow key in RTL mode', () => {
      const onSelectSpy = jest.fn();
      const { container, getByTestId } = renderRtl(<ExampleDropdown onSelect={onSelectSpy} />);

      const trigger = getByTestId('trigger');
      const input = container.querySelector('input');

      fireEvent.click(trigger);
      fireEvent.keyDown(input, { key: 'ArrowDown', keyCode: 40 });
      fireEvent.keyDown(input, { key: 'ArrowDown', keyCode: 40 });
      fireEvent.keyDown(input, { key: 'ArrowDown', keyCode: 40 });
      fireEvent.keyDown(input, { key: 'ArrowDown', keyCode: 40 });
      fireEvent.keyDown(input, { key: 'ArrowLeft', keyCode: 37 });

      expect(onSelectSpy.mock.calls[0][0]).toBe('next-item-1');
    });

    it('opens dropdown on SPACE key', () => {
      const onSelectSpy = jest.fn();
      const { container, getByTestId } = render(<ExampleDropdown onSelect={onSelectSpy} />);

      const trigger = getByTestId('trigger');
      const input = container.querySelector('input');

      fireEvent.keyDown(input, { key: ' ', keyCode: 32 });
      expect(trigger).toHaveAttribute('aria-expanded', 'true');
    });

    it('opens dropdown on ENTER key', () => {
      const onSelectSpy = jest.fn();
      const { container, getByTestId } = render(<ExampleDropdown onSelect={onSelectSpy} />);

      const trigger = getByTestId('trigger');
      const input = container.querySelector('input');

      fireEvent.keyDown(input, { key: 'Enter', keyCode: 13 });
      expect(trigger).toHaveAttribute('aria-expanded', 'true');
    });
  });

  describe('Event handlers', () => {
    it('calls onOpen handler if controlled', () => {
      const onOpenSpy = jest.fn();
      const { getByTestId } = render(<ExampleDropdown isOpen={false} onOpen={onOpenSpy} />);

      fireEvent.click(getByTestId('trigger'));
      expect(onOpenSpy.mock.calls[0][0]).toBe(true);
    });

    it('calls onSelect handler correctly if controlled with single value', () => {
      const onSelectSpy = jest.fn();
      const { getByTestId, getAllByTestId } = render(
        <ExampleDropdown selectedItem="item-1" onSelect={onSelectSpy} />
      );

      fireEvent.click(getByTestId('trigger'));
      fireEvent.click(getAllByTestId('item')[0]);
      expect(onSelectSpy.mock.calls[0][0]).toBe('previous-item');
    });

    it('calls onSelect handler correctly if controlled with multiple values and is not selected', () => {
      const onSelectSpy = jest.fn();
      const { getByTestId, getAllByTestId } = render(
        <ExampleDropdown selectedItems={['item-1', 'item-2']} onSelect={onSelectSpy} />
      );

      fireEvent.click(getByTestId('trigger'));
      fireEvent.click(getAllByTestId('item')[0]);
      expect(onSelectSpy.mock.calls[0][0]).toEqual(['item-1', 'item-2', 'previous-item']);
    });

    it('calls onSelect handler correctly if controlled with multiple values and is selected', () => {
      const onSelectSpy = jest.fn();
      const { getByTestId, getAllByTestId } = render(
        <ExampleDropdown
          selectedItems={['item-1', 'item-2', 'previous-item']}
          onSelect={onSelectSpy}
        />
      );

      fireEvent.click(getByTestId('trigger'));
      fireEvent.click(getAllByTestId('item')[0]);
      expect(onSelectSpy.mock.calls[0][0]).toEqual(['item-1', 'item-2']);
    });

    it('calls onHighlight handler if controlled', () => {
      const onHighlightSpy = jest.fn();
      const { getByTestId, getAllByTestId } = render(
        <ExampleDropdown selectedItem="item-1" highlightedIndex={0} onHighlight={onHighlightSpy} />
      );

      fireEvent.click(getByTestId('trigger'));
      fireEvent.click(getAllByTestId('item')[0]);
      expect(onHighlightSpy.mock.calls[0][0]).toBe(1);
    });

    it('calls onInputValueChange handler if controlled', () => {
      const onInputValueChangeSpy = jest.fn();
      const { container, getAllByTestId } = render(
        <ExampleDropdown inputValue="test" onInputValueChange={onInputValueChangeSpy} />
      );

      fireEvent.change(container.querySelector('input'), { target: { value: 'test1' } });
      fireEvent.click(getAllByTestId('item')[0]);
      expect(onInputValueChangeSpy.mock.calls[0][0]).toBe('test1');
    });
  });
});
