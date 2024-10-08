/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { UnorderedList } from '../elements/lists/UnorderedList';
import useUnorderedListContext from './useUnorderedListContext';

describe('useUnorderedListContext', () => {
  const UnorderedListContextConsumer = () => {
    const context = useUnorderedListContext();

    return <div>{!!context && 'it works'}</div>;
  };

  it('throws if called outside of UnorderedList component', () => {
    const originalError = console.error;

    console.error = jest.fn();

    const Example = () => <UnorderedListContextConsumer />;

    expect(() => {
      render(<Example />);
    }).toThrow();

    console.error = originalError;
  });

  it('does not throw if called within UnorderedList component', () => {
    const Example = () => (
      <UnorderedList>
        <UnorderedListContextConsumer />
      </UnorderedList>
    );

    expect(() => {
      render(<Example />);
    }).not.toThrow();
  });
});
