/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import List from './List';
import useListContext from './useListContext';

describe('useListContext', () => {
  const ListContextConsumer = () => {
    const context = useListContext();

    return <div>{context && 'it works'}</div>;
  };

  it('throws if called outside of List component', () => {
    /* eslint-disable no-console */
    const originalError = console.error;

    console.error = jest.fn();

    const Example = () => <ListContextConsumer />;

    expect(() => {
      render(<Example />);
    }).toThrow();

    console.error = originalError;
  });

  it('does not throw if called within List component', () => {
    const Example = () => (
      <List>
        <ListContextConsumer />
      </List>
    );

    expect(() => {
      render(<Example />);
    }).not.toThrow();
  });
});
