/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { Checkbox } from './Checkbox';
import { Field } from './common/Field';

describe('Checkbox', () => {
  it('is rendered as an input of type checkbox', () => {
    const { getByTestId } = render(
      <Field>
        <Checkbox data-test-id="checkbox" />
      </Field>
    );
    const checkbox = getByTestId('checkbox');

    expect(checkbox.nodeName).toBe('INPUT');
    expect(checkbox).toHaveAttribute('type', 'checkbox');
  });

  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLInputElement>();
    const { getByTestId } = render(
      <Field>
        <Checkbox data-test-id="checkbox" ref={ref} />
      </Field>
    );

    expect(getByTestId('checkbox')).toBe(ref.current);
  });

  it('sets the indeterminate state on the underlying checkbox node', () => {
    const { getByTestId } = render(
      <Field>
        <Checkbox data-test-id="checkbox" indeterminate />
      </Field>
    );

    expect((getByTestId('checkbox') as any).indeterminate).toBe(true);
  });
});
