/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { Field, Checkbox, Radio, Toggle, Message } from '../..';
import { VALIDATION } from '../../types';

describe('Message', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLDivElement>();
    const { getByTestId } = render(
      <Field>
        <Message data-test-id="message" ref={ref}>
          Test
        </Message>
      </Field>
    );

    expect(getByTestId('message')).toBe(ref.current);
  });

  it('renders input message within a Field component', () => {
    const { getByTestId, getByRole } = render(
      <Field>
        <Message data-test-id="message">Test</Message>
      </Field>
    );

    expect(getByTestId('message')).toHaveAttribute('data-garden-id', 'forms.input_message');
    expect(getByRole('alert')).toBe(getByTestId('message'));
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

  it('renders radio message if within a Radio component without Field component', () => {
    const { getByTestId } = render(
      <Radio>
        <Message data-test-id="message">Test</Message>
      </Radio>
    );

    expect(getByTestId('message')).toHaveAttribute('data-garden-id', 'forms.radio_message');
  });

  describe('Validation', () => {
    it('renders expected component for each validation type', () => {
      VALIDATION.forEach(validation => {
        const text = `This is ${validation} text`;
        const { getByText } = render(
          <Field>
            <Message validation={validation}>{text}</Message>
          </Field>
        );

        expect(getByText(text).firstChild!.nodeName).toBe('svg');
        expect(getByText(text).firstChild).toHaveAttribute('aria-label', validation);
      });
    });

    it('renders SVG child element with a validation label', () => {
      const validation = VALIDATION[0];
      const validationLabel = `great ${validation}`;
      const text = `This is ${validation} text`;
      const { getByText } = render(
        <Field>
          <Message validation={validation} validationLabel={validationLabel}>
            {text}
          </Message>
        </Field>
      );

      expect(getByText(text).firstChild!.nodeName).toBe('svg');
      expect(getByText(text).firstChild).toHaveAttribute('aria-label', validationLabel);
    });
  });
});
