/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createRef } from 'react';

import { render } from '../../test/render';
import { Checkbox } from './Checkbox';
import { Field } from './Field';
import { Hint } from './Hint';
import { Radio } from './Radio';
import { Toggle } from './Toggle';

describe('Hint', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = createRef<HTMLDivElement>();
    const { getByTestId } = render(
      <Field>
        <Hint data-test-id="hint" ref={ref}>
          Test
        </Hint>
      </Field>
    );

    expect(getByTestId('hint')).toBe(ref.current);
  });

  it('renders input hint within a Field component', () => {
    const { getByTestId } = render(
      <Field>
        <Hint data-test-id="hint">Test</Hint>
      </Field>
    );

    expect(getByTestId('hint')).toHaveAttribute('data-garden-id', 'forms.input_hint');
  });

  it('renders checkbox hint if within a Checkbox component', () => {
    const { getByTestId } = render(
      <Field>
        <Checkbox>
          <Hint data-test-id="hint">Test</Hint>
        </Checkbox>
      </Field>
    );

    expect(getByTestId('hint')).toHaveAttribute('data-garden-id', 'forms.checkbox_hint');
  });

  it('renders toggle hint if within a Toggle component', () => {
    const { getByTestId } = render(
      <Field>
        <Toggle>
          <Hint data-test-id="hint">Test</Hint>
        </Toggle>
      </Field>
    );

    expect(getByTestId('hint')).toHaveAttribute('data-garden-id', 'forms.toggle_hint');
  });

  it('renders radio hint if within a Radio component', () => {
    const { getByTestId } = render(
      <Field>
        <Radio>
          <Hint data-test-id="hint">Test</Hint>
        </Radio>
      </Field>
    );

    expect(getByTestId('hint')).toHaveAttribute('data-garden-id', 'forms.radio_hint');
  });

  it('renders radio hint if within a Radio component without Field component', () => {
    const { getByTestId } = render(
      <Radio>
        <Hint data-test-id="hint">Test</Hint>
      </Radio>
    );

    expect(getByTestId('hint')).toHaveAttribute('data-garden-id', 'forms.radio_hint');
  });

  it('does not let props override the garden attributes', () => {
    const { getByTestId } = render(
      <>
        <Field>
          <Hint data-test-id="input-hint" data-garden-id="custom" data-garden-version="0.0.0">
            Hint
          </Hint>
        </Field>
        <Field>
          <Radio>
            <Hint data-test-id="radio-hint" data-garden-id="custom" data-garden-version="0.0.0">
              Hint
            </Hint>
          </Radio>
        </Field>
      </>
    );

    expect(getByTestId('input-hint')).toHaveAttribute('data-garden-id', 'forms.input_hint');
    expect(getByTestId('input-hint')).toHaveAttribute('data-garden-version', PACKAGE_VERSION);
    expect(getByTestId('radio-hint')).toHaveAttribute('data-garden-id', 'forms.radio_hint');
    expect(getByTestId('radio-hint')).toHaveAttribute('data-garden-version', PACKAGE_VERSION);
  });
});
