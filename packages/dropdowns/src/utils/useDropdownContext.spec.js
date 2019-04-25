/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import Dropdown from '../Dropdown/Dropdown';
import useDropdownContext from '../utils/useDropdownContext';

describe('useDropdownContext', () => {
  const DropdownContextConsumer = () => {
    const context = useDropdownContext();

    return <div>{context && 'it worked'}</div>;
  };

  it('throws if called outside of Dropdown component', () => {
    console.error = jest.fn(); // eslint-disable-line no-console
    const Example = () => <DropdownContextConsumer />;

    expect(() => {
      render(<Example />);
    }).toThrow();
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
