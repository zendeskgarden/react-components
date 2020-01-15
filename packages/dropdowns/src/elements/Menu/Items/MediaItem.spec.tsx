/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, fireEvent } from 'garden-test-utils';
import { Dropdown, Trigger, Menu, MediaItem } from '../../..';

describe('MediaItem', () => {
  it('behaves as Item', () => {
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

    fireEvent.click(getByTestId('trigger'));
    fireEvent.click(getByTestId('media-item'));

    expect(onSelectSpy.mock.calls[0][0]).toBe('media-item');
  });
});
