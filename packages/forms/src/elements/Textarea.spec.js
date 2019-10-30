/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import Textarea from './Textarea';
import Field from './common/Field';

describe('Textarea', () => {
  it('is rendered as a textarea', () => {
    const { getByTestId } = render(
      <Field>
        <Textarea data-test-id="textarea" />
      </Field>
    );

    expect(getByTestId('textarea').nodeName).toBe('TEXTAREA');
  });

  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef();
    const { getByTestId } = render(
      <Field>
        <Textarea data-test-id="textarea" ref={ref} />
      </Field>
    );

    expect(getByTestId('textarea')).toBe(ref.current);
  });

  it('throws if rendered without a Field parent', () => {
    /* eslint-disable no-console */
    const consoleError = console.error;

    try {
      console.error = jest.fn();
      expect(() => render(<Textarea />)).toThrow();
    } finally {
      console.error = consoleError;
    }
  });
});
