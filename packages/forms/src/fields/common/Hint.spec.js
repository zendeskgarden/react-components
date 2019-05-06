/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { FieldProvider, Checkbox, Radio, Toggle, Hint } from '../../';

describe('Hint', () => {
  it('renders text hint by default', () => {
    const { getByTestId } = render(
      <FieldProvider>
        <Hint data-test-id="hint">Test</Hint>
      </FieldProvider>
    );

    expect(getByTestId('hint')).toHaveAttribute('data-garden-id', 'forms.text_hint');
  });

  it('renders checkbox hint if within a Checkbox component', () => {
    const { getByTestId } = render(
      <FieldProvider>
        <Checkbox>
          <Hint data-test-id="hint">Test</Hint>
        </Checkbox>
      </FieldProvider>
    );

    expect(getByTestId('hint')).toHaveAttribute('data-garden-id', 'forms.checkbox_hint');
  });

  it('renders toggle hint if within a Toggle component', () => {
    const { getByTestId } = render(
      <FieldProvider>
        <Toggle>
          <Hint data-test-id="hint">Test</Hint>
        </Toggle>
      </FieldProvider>
    );

    expect(getByTestId('hint')).toHaveAttribute('data-garden-id', 'forms.toggle_hint');
  });

  it('renders radio hint if within a Radio component', () => {
    const { getByTestId } = render(
      <FieldProvider>
        <Radio>
          <Hint data-test-id="hint">Test</Hint>
        </Radio>
      </FieldProvider>
    );

    expect(getByTestId('hint')).toHaveAttribute('data-garden-id', 'forms.radio_hint');
  });
});
