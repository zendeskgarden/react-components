/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import Input from './Input';
import Field from './common/Field';
import Label from './common/Label';

describe('Input', () => {
  it('is rendered as an input', () => {
    const { getByTestId } = render(
      <Field>
        <Input data-test-id="input" />
      </Field>
    );

    expect(getByTestId('input').nodeName).toBe('INPUT');
  });

  it('receives correct accessibility attributes', () => {
    const { getByTestId } = render(
      <Field>
        <Label data-test-id="label">Label</Label>
        <Input data-test-id="input" />
      </Field>
    );

    const labelNode = getByTestId('label');
    const labelId = labelNode.getAttribute('id');
    const labelFor = labelNode.getAttribute('for');

    const inputNode = getByTestId('input');
    const inputId = inputNode.getAttribute('id');
    const inputLabeledBy = inputNode.getAttribute('aria-labelledby');

    expect(labelId).toBe(inputLabeledBy);
    expect(labelFor).toBe(inputId);
  });
});
