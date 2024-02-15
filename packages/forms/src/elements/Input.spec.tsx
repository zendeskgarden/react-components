/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import userEvent from '@testing-library/user-event';
import { render } from 'garden-test-utils';
import { Input } from './Input';
import { Field } from './common/Field';

describe('Input', () => {
  const user = userEvent.setup();

  it('is rendered as an input', () => {
    const { getByTestId } = render(
      <Field>
        <Input data-test-id="input" />
      </Field>
    );

    expect(getByTestId('input').nodeName).toBe('INPUT');
  });

  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLInputElement>();
    const { getByTestId } = render(
      <Field>
        <Input data-test-id="input" ref={ref} />
      </Field>
    );

    expect(getByTestId('input')).toBe(ref.current);
  });

  it('selects readonly text', async () => {
    const value = 'testing';
    const { getByTestId } = render(
      <Field>
        <Input data-test-id="input" readOnly value={value} />
      </Field>
    );
    const input = getByTestId('input') as HTMLInputElement;

    await user.click(input);

    expect(input.selectionStart).toBe(0);
    expect(input.selectionEnd).toBe(value.length);
  });
});
