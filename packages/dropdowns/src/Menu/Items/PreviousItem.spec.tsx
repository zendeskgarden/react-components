/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { Dropdown, Trigger, Menu, PreviousItem } from '../..';

describe('PreviousItem', () => {
  it('applies disabled properties correctly', () => {
    const { getByTestId } = render(
      <Dropdown>
        <Trigger>
          <button>Test</button>
        </Trigger>
        <Menu>
          <PreviousItem disabled data-test-id="previous-item">
            Item 1
          </PreviousItem>
        </Menu>
      </Dropdown>
    );

    const previousItem = getByTestId('previous-item');

    expect(previousItem).toHaveAttribute('disabled');
    expect(previousItem).not.toHaveAttribute('aria-expanded');
    expect(previousItem).toHaveClass('is-disabled');
  });

  it('applies additional properties correctly', () => {
    const { getByTestId } = render(
      <Dropdown>
        <Trigger>
          <button>Test</button>
        </Trigger>
        <Menu>
          <PreviousItem value="item-1" data-test-id="previous-item">
            Item 1
          </PreviousItem>
        </Menu>
      </Dropdown>
    );
    const previousItem = getByTestId('previous-item');

    expect(previousItem).toHaveAttribute('aria-expanded', 'true');
  });
});
