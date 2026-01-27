/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { render } from 'garden-test-utils';
import React from 'react';

import { OrderedList } from '../elements/lists/OrderedList';
import useOrderedListContext from './useOrderedListContext';

describe('useOrderedListContext', () => {
  const OrderedListContextConsumer = () => {
    const context = useOrderedListContext();

    return <div>{!!context && 'it works'}</div>;
  };

  it('throws if called outside of OrderedList component', () => {
    const originalError = console.error;

    console.error = jest.fn();

    const Example = () => <OrderedListContextConsumer />;

    expect(() => {
      render(<Example />);
    }).toThrow();

    console.error = originalError;
  });

  it('does not throw if called within OrderedList component', () => {
    const Example = () => (
      <OrderedList>
        <OrderedListContextConsumer />
      </OrderedList>
    );

    expect(() => {
      render(<Example />);
    }).not.toThrow();
  });
});
