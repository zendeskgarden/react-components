/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import { Dropdown, Trigger, Menu, MediaItem, MediaBody, MediaFigure } from '../../..';

describe('MediaFigure', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLImageElement>();

    const { getByTestId } = render(
      <Dropdown isOpen>
        <Trigger>
          <button>Test</button>
        </Trigger>
        <Menu>
          <MediaItem value="image">
            <MediaFigure>
              <img ref={ref} data-test-id="media-figure" src="test.png" alt="test" />
            </MediaFigure>
            <MediaBody>Image Media Item</MediaBody>
          </MediaItem>
        </Menu>
      </Dropdown>
    );

    expect(getByTestId('media-figure')).toBe(ref.current);
  });

  it('renders correct RTL styles', () => {
    const ref = React.createRef<HTMLImageElement>();

    const { getByTestId } = renderRtl(
      <Dropdown isOpen>
        <Trigger>
          <button>Test</button>
        </Trigger>
        <Menu>
          <MediaItem value="image">
            <MediaFigure>
              <img ref={ref} data-test-id="media-figure" src="test.png" alt="test" />
            </MediaFigure>
            <MediaBody>Image Media Item</MediaBody>
          </MediaItem>
        </Menu>
      </Dropdown>
    );

    expect(getByTestId('media-figure')).toHaveStyle(`
      float: right;
    `);
  });
});
