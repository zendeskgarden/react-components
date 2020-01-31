/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, fireEvent } from 'garden-test-utils';
import { Dropdown, Trigger, Menu, AddItem } from '../../..';

describe('AddItem', () => {
  it('behaves as Item', () => {
    const onSelectSpy = jest.fn();

    const { getByTestId } = render(
      <Dropdown onSelect={onSelectSpy}>
        <Trigger>
          <button data-test-id="trigger">Test</button>
        </Trigger>
        <Menu>
          <AddItem value="add-item" data-test-id="add-item">
            Add Item
          </AddItem>
        </Menu>
      </Dropdown>
    );

    fireEvent.click(getByTestId('trigger'));
    fireEvent.click(getByTestId('add-item'));

    expect(onSelectSpy.mock.calls[0][0]).toBe('add-item');
  });

  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLDivElement>();

    const { getByTestId } = render(
      <Dropdown>
        <Trigger>
          <button>Test</button>
        </Trigger>
        <Menu>
          <AddItem value="add-item" data-test-id="add-item" ref={ref}>
            Add Item
          </AddItem>
        </Menu>
      </Dropdown>
    );

    expect(getByTestId('add-item')).toBe(ref.current);
  });
});
