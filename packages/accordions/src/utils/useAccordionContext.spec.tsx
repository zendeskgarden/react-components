/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { Accordion } from '../elements/accordion/Accordion';
import { useAccordionContext } from './useAccordionContext';

describe('useAccordionContext', () => {
  const AccordionContextConsumer = () => {
    const context = useAccordionContext();

    return <div>{context && 'it worked'}</div>;
  };

  it('throws if called outside of Accordion component', () => {
    const originalError = console.error;

    console.error = jest.fn();

    const Example = () => <AccordionContextConsumer />;

    expect(() => {
      render(<Example />);
    }).toThrow();

    console.error = originalError;
  });

  it('does not throw if called within Accordion component', () => {
    const Example = () => (
      <Accordion level={3}>
        <AccordionContextConsumer />
      </Accordion>
    );

    expect(() => {
      render(<Example />);
    }).not.toThrow();
  });
});
