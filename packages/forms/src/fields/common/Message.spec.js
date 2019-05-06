/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { FieldProvider, Checkbox, Radio, Toggle, Message } from '../../';

describe('Hint', () => {
  it('renders text label by default', () => {
    const { getByTestId } = render(
      <FieldProvider>
        <Message data-test-id="message">Test</Message>
      </FieldProvider>
    );

    expect(getByTestId('message')).toHaveAttribute('data-garden-id', 'forms.text_message');
  });

  it('renders checkbox message if within a Checkbox component', () => {
    const { getByTestId } = render(
      <FieldProvider>
        <Checkbox>
          <Message data-test-id="message">Test</Message>
        </Checkbox>
      </FieldProvider>
    );

    expect(getByTestId('message')).toHaveAttribute('data-garden-id', 'forms.checkbox_message');
  });

  it('renders toggle message if within a Toggle component', () => {
    const { getByTestId } = render(
      <FieldProvider>
        <Toggle>
          <Message data-test-id="message">Test</Message>
        </Toggle>
      </FieldProvider>
    );

    expect(getByTestId('message')).toHaveAttribute('data-garden-id', 'forms.toggle_message');
  });

  it('renders radio message if within a Radio component', () => {
    const { getByTestId } = render(
      <FieldProvider>
        <Radio>
          <Message data-test-id="message">Test</Message>
        </Radio>
      </FieldProvider>
    );

    expect(getByTestId('message')).toHaveAttribute('data-garden-id', 'forms.radio_message');
  });
});
