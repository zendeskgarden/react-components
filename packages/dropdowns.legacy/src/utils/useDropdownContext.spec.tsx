/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { Dropdown } from '../elements/Dropdown/Dropdown';
import useDropdownContext from './useDropdownContext';

describe('useDropdownContext', () => {
  const DropdownContextConsumer = () => {
    const context = useDropdownContext();

    return <div>{!!context && 'it worked'}</div>;
  };

  it('throws if called outside of Dropdown component', () => {
    const originalError = console.error;

    console.error = jest.fn();

    const Example = () => <DropdownContextConsumer />;

    expect(() => {
      render(<Example />);
    }).toThrow();

    console.error = originalError;
  });

  it('does not throw if called within Dropdown component', () => {
    const Example = () => (
      <Dropdown>
        <DropdownContextConsumer />
      </Dropdown>
    );

    expect(() => {
      render(<Example />);
    }).not.toThrow();
  });
});
