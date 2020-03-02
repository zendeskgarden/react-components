/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { Dropdown, Trigger, Menu, NextItem } from '../../..';

describe('NextItem', () => {
  it('applies disabled properties correctly', () => {
    const { getByTestId } = render(
      <Dropdown isOpen>
        <Trigger>
          <button>Test</button>
        </Trigger>
        <Menu>
          <NextItem disabled data-test-id="next-item">
            Item 1
          </NextItem>
        </Menu>
      </Dropdown>
    );

    const nextItem = getByTestId('next-item');

    expect(nextItem).toHaveAttribute('aria-disabled', 'true');
  });

  it('applies additional properties correctly', () => {
    const { getByTestId } = render(
      <Dropdown isOpen>
        <Trigger>
          <button>Test</button>
        </Trigger>
        <Menu>
          <NextItem value="item-1" data-test-id="next-item">
            Item 1
          </NextItem>
        </Menu>
      </Dropdown>
    );
    const nextItem = getByTestId('next-item');

    expect(nextItem).toHaveAttribute('aria-expanded', 'true');
  });

  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLLIElement>();

    const { getByTestId } = render(
      <Dropdown isOpen>
        <Trigger>
          <button>Test</button>
        </Trigger>
        <Menu>
          <NextItem value="item-1" data-test-id="next-item" ref={ref}>
            Item 1
          </NextItem>
        </Menu>
      </Dropdown>
    );

    expect(getByTestId('next-item')).toBe(ref.current);
  });
});
