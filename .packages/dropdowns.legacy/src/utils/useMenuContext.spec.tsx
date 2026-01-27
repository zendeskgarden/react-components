/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { render } from 'garden-test-utils';
import React from 'react';

import { Dropdown } from '../elements/Dropdown/Dropdown';
import { Menu } from '../elements/Menu/Menu';
import useMenuContext from './useMenuContext';

describe('useMenuContext', () => {
  const MenuContextConsumer = () => {
    const context = useMenuContext();

    return <div>{!!context && 'it worked'}</div>;
  };

  it('throws if called outside of Menu component', () => {
    const originalError = console.error;

    console.error = jest.fn();

    const Example = () => <MenuContextConsumer />;

    expect(() => {
      render(<Example />);
    }).toThrow();

    console.error = originalError;
  });

  it('does not throw if called within Dropdown component', () => {
    const Example = () => (
      <Dropdown isOpen>
        <Menu>
          <MenuContextConsumer />
        </Menu>
      </Dropdown>
    );

    expect(() => {
      render(<Example />);
    }).not.toThrow();
  });
});
