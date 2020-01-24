/* eslint-disable no-console */
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, fireEvent } from 'garden-test-utils';
import { Dropdown, Trigger, Menu, Item } from '../../..';

describe('Item', () => {
  it('throws error if value is not provided', () => {
    const originalError = console.error;

    console.error = jest.fn();

    const Example = () => (
      <Dropdown>
        <Trigger>
          <button>Test</button>
        </Trigger>
        <Menu>
          <Item>Item 1</Item>
        </Menu>
      </Dropdown>
    );

    expect(() => {
      render(<Example />);
    }).toThrow('All Item components require a `value` prop');

    console.error = originalError;
  });

  it('does not throw if value is not provided while item is disabled', () => {
    const originalError = console.error;

    console.error = jest.fn();

    const Example = () => (
      <Dropdown>
        <Trigger>
          <button>Test</button>
        </Trigger>
        <Menu>
          <Item disabled>Item 1</Item>
        </Menu>
      </Dropdown>
    );

    expect(() => {
      render(<Example />);
    }).not.toThrow();

    console.error = originalError;
  });

  it('highlights first selected index on open', () => {
    const { getByTestId, getAllByTestId } = render(
      <Dropdown selectedItem="item-2">
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
        </Menu>
      </Dropdown>
    );

    fireEvent.click(getByTestId('trigger'));
    expect(getAllByTestId('item')[1]).toHaveAttribute('aria-selected', 'true');
  });

  describe('States', () => {
    it('applies focus treatment if item is currently highlighted', () => {
      const { getByTestId, getAllByTestId } = render(
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
      const trigger = getByTestId('trigger');

      fireEvent.click(trigger);
      fireEvent.keyDown(trigger, { key: 'ArrowDown', keyCode: '40' });
      expect(getAllByTestId('item')[0]).toHaveAttribute('data-garden-is-focused', 'true');
    });

    describe('Single selection', () => {
      it('applies selected treatment if single item is selected and value is not an object', () => {
        const { getByTestId, getAllByTestId } = render(
          <Dropdown selectedItem="item-1">
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
            </Menu>
          </Dropdown>
        );

        fireEvent.click(getByTestId('trigger'));
        expect(getAllByTestId('item')[0]).toHaveAttribute('data-garden-is-selected', 'true');
      });

      it('applies selected treatment if single item is selected and value is an object', () => {
        const { getByTestId, getAllByTestId } = render(
          <Dropdown
            selectedItem={{ id: 'item-1' }}
            downshiftProps={{ itemToString: (item: any) => item && item.id }}
          >
            <Trigger>
              <button data-test-id="trigger">Test</button>
            </Trigger>
            <Menu data-test-id="menu">
              <Item value={{ id: 'item-1' }} data-test-id="item">
                Item 1
              </Item>
              <Item value={{ id: 'item-2' }} data-test-id="item">
                Item 2
              </Item>
            </Menu>
          </Dropdown>
        );

        fireEvent.click(getByTestId('trigger'));
        expect(getAllByTestId('item')[0]).toHaveAttribute('data-garden-is-selected', 'true');
      });
    });

    describe('Multi selection', () => {
      it('applies selected treatment if single item is selected and value is not an object', () => {
        const { getByTestId, getAllByTestId } = render(
          <Dropdown selectedItems={['item-1', 'item-2']}>
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

        fireEvent.click(getByTestId('trigger'));
        const items = getAllByTestId('item');

        expect(items[0]).toHaveAttribute('data-garden-is-selected', 'true');
        expect(items[1]).toHaveAttribute('data-garden-is-selected', 'true');
        expect(items[2]).toHaveAttribute('data-garden-is-selected', 'false');
      });

      it('applies selected treatment if single item is selected and value is an object', () => {
        const { getByTestId, getAllByTestId } = render(
          <Dropdown
            selectedItems={[{ id: 'item-1' }, { id: 'item-2' }]}
            downshiftProps={{ itemToString: (item: any) => item && item.id }}
          >
            <Trigger>
              <button data-test-id="trigger">Test</button>
            </Trigger>
            <Menu data-test-id="menu">
              <Item value={{ id: 'item-1' }} data-test-id="item">
                Item 1
              </Item>
              <Item value={{ id: 'item-2' }} data-test-id="item">
                Item 2
              </Item>
              <Item value={{ id: 'item-3' }} data-test-id="item">
                Item 3
              </Item>
            </Menu>
          </Dropdown>
        );

        fireEvent.click(getByTestId('trigger'));
        const items = getAllByTestId('item');

        expect(items[0]).toHaveAttribute('data-garden-is-selected', 'true');
        expect(items[1]).toHaveAttribute('data-garden-is-selected', 'true');
        expect(items[2]).toHaveAttribute('data-garden-is-selected', 'false');
      });
    });
  });
});
