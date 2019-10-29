/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { Field, Checkbox, Radio, Toggle, Message } from '../../';

describe('Message', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef();
    const { getByTestId } = render(
      <Field>
        <Message data-test-id="message" ref={ref}>
          Test
        </Message>
      </Field>
    );

    expect(getByTestId('message')).toBe(ref.current);
  });

  it('throws if rendered without a Field parent', () => {
    /* eslint-disable no-console */
    const consoleError = console.error;

    try {
      console.error = jest.fn();
      expect(() => render(<Message />)).toThrow();
    } finally {
      console.error = consoleError;
    }
  });

  it('renders input message within a Field component', () => {
    const { getByTestId } = render(
      <Field>
        <Message data-test-id="message">Test</Message>
      </Field>
    );

    expect(getByTestId('message')).toHaveAttribute('data-garden-id', 'forms.input_message');
  });

  it('renders checkbox message if within a Checkbox component', () => {
    const { getByTestId } = render(
      <Field>
        <Checkbox>
          <Message data-test-id="message">Test</Message>
        </Checkbox>
      </Field>
    );

    expect(getByTestId('message')).toHaveAttribute('data-garden-id', 'forms.checkbox_message');
  });

  it('renders toggle message if within a Toggle component', () => {
    const { getByTestId } = render(
      <Field>
        <Toggle>
          <Message data-test-id="message">Test</Message>
        </Toggle>
      </Field>
    );

    expect(getByTestId('message')).toHaveAttribute('data-garden-id', 'forms.toggle_message');
  });

  it('renders radio message if within a Radio component', () => {
    const { getByTestId } = render(
      <Field>
        <Radio>
          <Message data-test-id="message">Test</Message>
        </Radio>
      </Field>
    );

    expect(getByTestId('message')).toHaveAttribute('data-garden-id', 'forms.radio_message');
  });

  describe('Validation', () => {
    ['success', 'warning', 'error'].forEach(validation => {
      it(`renders expected ${validation} component`, () => {
        const { getByTestId } = render(
          <Field>
            <Message data-test-id="message" validation={validation}>
              Test
            </Message>
          </Field>
        );

        expect(getByTestId('message').firstChild.nodeName).toBe('svg');
      });
    });
  });
});
