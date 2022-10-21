/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, fireEvent } from 'garden-test-utils';
import { Dropdown, Trigger, Menu, MediaItem } from '../../..';

describe('MediaItem', () => {
  const user = userEvent.setup();

  it('behaves as Item', async () => {
    const onSelectSpy = jest.fn();

    const { getByTestId } = render(
      <Dropdown onSelect={onSelectSpy}>
        <Trigger>
          <button data-test-id="trigger">Test</button>
        </Trigger>
        <Menu>
          <MediaItem value="media-item" data-test-id="media-item">
            Add Item
          </MediaItem>
        </Menu>
      </Dropdown>
    );

    await user.click(getByTestId('trigger'));
    fireEvent.click(getByTestId('media-item'));

    expect(onSelectSpy.mock.calls[0][0]).toBe('media-item');
  });

  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLLIElement>();

    const { getByTestId } = render(
      <Dropdown isOpen>
        <Trigger>
          <button>Test</button>
        </Trigger>
        <Menu>
          <MediaItem value="item-1" data-test-id="media-item" ref={ref}>
            Item 1
          </MediaItem>
        </Menu>
      </Dropdown>
    );

    expect(getByTestId('media-item')).toBe(ref.current);
  });
});
