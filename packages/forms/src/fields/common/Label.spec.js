/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { FieldProvider, Checkbox, Radio, Toggle, Label } from '../../';

describe('Hint', () => {
  it('renders text label by default', () => {
    const { getByTestId } = render(
      <FieldProvider>
        <Label data-test-id="label">Test</Label>
      </FieldProvider>
    );

    expect(getByTestId('label')).toHaveAttribute('data-garden-id', 'forms.text_label');
  });

  it('renders checkbox label if within a Checkbox component', () => {
    const { getByTestId } = render(
      <FieldProvider>
        <Checkbox>
          <Label data-test-id="label">Test</Label>
        </Checkbox>
      </FieldProvider>
    );

    expect(getByTestId('label')).toHaveAttribute('data-garden-id', 'forms.checkbox_label');
  });

  it('renders toggle label if within a Toggle component', () => {
    const { getByTestId } = render(
      <FieldProvider>
        <Toggle>
          <Label data-test-id="label">Test</Label>
        </Toggle>
      </FieldProvider>
    );

    expect(getByTestId('label')).toHaveAttribute('data-garden-id', 'forms.toggle_label');
  });

  it('renders radio label if within a Radio component', () => {
    const { getByTestId } = render(
      <FieldProvider>
        <Radio>
          <Label data-test-id="label">Test</Label>
        </Radio>
      </FieldProvider>
    );

    expect(getByTestId('label')).toHaveAttribute('data-garden-id', 'forms.radio_label');
  });
});
