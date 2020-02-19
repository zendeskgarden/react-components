/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { Field, Label, Input, Hint } from '../..';

describe('Field', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLDivElement>();
    const { container } = render(<Field ref={ref} />);

    expect(container.firstChild).toBe(ref.current);
  });

  it('renders with expected ID attributes', () => {
    const { getByTestId } = render(
      <Field data-test-id="field" id="test">
        <Label data-test-id="label">Label</Label>
        <Hint data-test-id="hint">Hint</Hint>
        <Input data-test-id="input" />
      </Field>
    );

    const fieldNode = getByTestId('field');
    const fieldId = fieldNode.getAttribute('id');

    const hintNode = getByTestId('hint');
    const hintId = hintNode.getAttribute('id');

    const labelNode = getByTestId('label');
    const labelId = labelNode.getAttribute('id');
    const labelFor = labelNode.getAttribute('for');

    const inputNode = getByTestId('input');
    const inputId = inputNode.getAttribute('id');
    const inputLabeledBy = inputNode.getAttribute('aria-labelledby');
    const inputDescribedBy = inputNode.getAttribute('aria-describedby');

    expect(fieldId).toBe('test');
    expect(hintId!.startsWith(fieldId as string)).toBe(true);
    expect(hintId).toBe(inputDescribedBy);
    expect(labelId!.startsWith(fieldId as string)).toBe(true);
    expect(labelId).toBe(inputLabeledBy);
    expect(labelFor).toBe(inputId);
    expect(inputId!.startsWith(fieldId as string)).toBe(true);
  });
});
