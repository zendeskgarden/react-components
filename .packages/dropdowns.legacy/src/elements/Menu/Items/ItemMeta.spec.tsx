/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { render } from 'garden-test-utils';
import React from 'react';

import { Dropdown, Trigger, Menu, MediaItem, MediaBody, ItemMeta } from '../../..';

describe('ItemMeta', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLDivElement>();

    const { getByTestId } = render(
      <Dropdown isOpen>
        <Trigger>
          <button data-test-id="trigger">Test</button>
        </Trigger>
        <Menu>
          <MediaItem value="image">
            <MediaBody>
              Image Media Item
              <ItemMeta data-test-id="item-meta" ref={ref}>
                Meta info
              </ItemMeta>
            </MediaBody>
          </MediaItem>
        </Menu>
      </Dropdown>
    );

    expect(getByTestId('item-meta')).toBe(ref.current);
  });
});
