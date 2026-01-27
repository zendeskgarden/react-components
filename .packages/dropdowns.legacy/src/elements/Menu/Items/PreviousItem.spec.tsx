/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import userEvent from '@testing-library/user-event';
import { render } from 'garden-test-utils';
import React from 'react';

import { Dropdown, Trigger, Menu, PreviousItem } from '../../..';

describe('PreviousItem', () => {
  const user = userEvent.setup();

  it('applies disabled properties correctly', () => {
    const { getByTestId } = render(
      <Dropdown isOpen>
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

    expect(previousItem).toHaveAttribute('aria-disabled', 'true');
  });

  it('applies additional properties correctly', () => {
    const { getByTestId } = render(
      <Dropdown isOpen>
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

  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLLIElement>();

    const { getByTestId } = render(
      <Dropdown isOpen>
        <Trigger>
          <button>Test</button>
        </Trigger>
        <Menu>
          <PreviousItem value="item-1" data-test-id="previous-item" ref={ref}>
            Item 1
          </PreviousItem>
        </Menu>
      </Dropdown>
    );

    expect(getByTestId('previous-item')).toBe(ref.current);
  });

  it('does not contain a select icon when selected', async () => {
    const { getByTestId, container } = render(
      <Dropdown selectedItem="previous-item">
        <Trigger>
          <button data-test-id="trigger">Test</button>
        </Trigger>
        <Menu>
          <PreviousItem value="previous-item">Previous Item</PreviousItem>
        </Menu>
      </Dropdown>
    );

    await user.click(getByTestId('trigger'));

    expect(container.querySelectorAll('svg')).toHaveLength(1);
  });
});
