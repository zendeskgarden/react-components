/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import Dropdown from '../elements/Dropdown/Dropdown';
import Menu from '../elements/Menu/Menu';
import { Item } from '../elements/Menu/Items/Item';
import useItemContext from './useItemContext';

describe('useItemContext', () => {
  const ItemContextConsumer = () => {
    const context = useItemContext();

    return <div>{context && 'it worked'}</div>;
  };

  it('throws if called outside of Item component', () => {
    /* eslint-disable no-console */
    const originalError = console.error;

    console.error = jest.fn();

    const Example = () => <ItemContextConsumer />;

    expect(() => {
      render(<Example />);
    }).toThrow();

    console.error = originalError;
  });

  it('does not throw if called within Item component', () => {
    const Example = () => (
      <Dropdown>
        <Menu>
          <Item value="test">
            <ItemContextConsumer />
          </Item>
        </Menu>
      </Dropdown>
    );

    expect(() => {
      render(<Example />);
    }).not.toThrow();
  });
});
