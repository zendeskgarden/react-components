/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { render, screen } from 'garden-test-utils';
import React from 'react';

import { Fieldset, Field, Checkbox, Radio, Toggle, Label } from '../..';

describe('Label', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLLabelElement>();
    const { getByTestId } = render(
      <Field>
        <Label data-test-id="label" ref={ref}>
          Test
        </Label>
      </Field>
    );

    expect(getByTestId('label')).toBe(ref.current);
  });

  it('renders input label within a Field component', () => {
    const { getByTestId } = render(
      <Field>
        <Label data-test-id="label">Test</Label>
      </Field>
    );

    expect(getByTestId('label')).toHaveAttribute('data-garden-id', 'forms.input_label');
  });

  it('renders checkbox label if within a Checkbox component', () => {
    const { getByTestId } = render(
      <Field>
        <Checkbox>
          <Label data-test-id="label">Test</Label>
        </Checkbox>
      </Field>
    );

    expect(getByTestId('label')).toHaveAttribute('data-garden-id', 'forms.checkbox_label');
  });

  it('renders toggle label if within a Toggle component', () => {
    const { getByTestId } = render(
      <Field>
        <Toggle>
          <Label data-test-id="label">Test</Label>
        </Toggle>
      </Field>
    );

    expect(getByTestId('label')).toHaveAttribute('data-garden-id', 'forms.toggle_label');
  });

  it('renders radio label if within a Radio component', () => {
    const { getByTestId } = render(
      <Field>
        <Radio>
          <Label data-test-id="label">Test</Label>
        </Radio>
      </Field>
    );

    expect(getByTestId('label')).toHaveAttribute('data-garden-id', 'forms.radio_label');
  });

  it('renders regular label if within a Fieldset component', () => {
    render(
      <Fieldset>
        <Field>
          <Radio>
            <Label>Test</Label>
          </Radio>
        </Field>
      </Fieldset>
    );

    const label = screen.getByText('Test');

    expect(label).toHaveStyleRule('font-weight', DEFAULT_THEME.fontWeights.regular.toString());
  });
});
