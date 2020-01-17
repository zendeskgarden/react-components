/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { Toggle } from './Toggle';
import { Field } from './common/Field';

describe('Toggle', () => {
  it('is rendered as an input of type checkbox', () => {
    const { getByTestId } = render(
      <Field>
        <Toggle data-test-id="toggle" />
      </Field>
    );
    const toggle = getByTestId('toggle');

    expect(toggle.nodeName).toBe('INPUT');
    expect(toggle).toHaveAttribute('type', 'checkbox');
  });

  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLInputElement>();
    const { getByTestId } = render(
      <Field>
        <Toggle data-test-id="toggle" ref={ref} />
      </Field>
    );

    expect(getByTestId('toggle')).toBe(ref.current);
  });

  it('throws if rendered without a Field parent', () => {
    /* eslint-disable no-console */
    const consoleError = console.error;

    try {
      console.error = jest.fn();
      expect(() => render(<Toggle />)).toThrow();
    } finally {
      console.error = consoleError;
    }
  });
});
