/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { Accordion } from '../elements/accordion/Accordion';
import { useHeaderContext } from './useHeaderContext';

describe('useHeaderContext', () => {
  const HeaderContextConsumer = () => {
    const context = useHeaderContext();

    return <div>{!!context && 'it worked'}</div>;
  };

  it('throws if called outside of Accordion.Header component', () => {
    const originalError = console.error;

    console.error = jest.fn();

    const Example = () => <HeaderContextConsumer />;

    expect(() => {
      render(<Example />);
    }).toThrow();

    console.error = originalError;
  });

  it('does not throw if called within Accordion.Header component', () => {
    const Example = () => (
      <Accordion level={3}>
        <Accordion.Section>
          <Accordion.Header>
            <HeaderContextConsumer />
          </Accordion.Header>
        </Accordion.Section>
      </Accordion>
    );

    expect(() => {
      render(<Example />);
    }).not.toThrow();
  });
});
