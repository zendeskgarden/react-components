/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { Dropdown, Trigger, Menu, MediaItem, MediaBody } from '../../..';

describe('MediaBody', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLDivElement>();

    const { getByTestId } = render(
      <Dropdown isOpen>
        <Trigger>
          <button>Test</button>
        </Trigger>
        <Menu>
          <MediaItem value="image">
            <MediaBody data-test-id="media-body" ref={ref}>
              Image Media Item
            </MediaBody>
          </MediaItem>
        </Menu>
      </Dropdown>
    );

    expect(getByTestId('media-body')).toBe(ref.current);
  });
});
