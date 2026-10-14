/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createRef } from 'react';

import { render } from '../../test/render';
import { Field } from './Field';
import { Select } from './Select';

describe('Select', () => {
  it('is rendered as a select', () => {
    const { getByTestId } = render(
      <Field>
        <Select data-test-id="select" />
      </Field>
    );

    expect(getByTestId('select').nodeName).toBe('SELECT');
  });

  it('passes ref to underlying DOM element', () => {
    const ref = createRef<HTMLSelectElement>();
    const { getByTestId } = render(
      <Field>
        <Select data-test-id="select" ref={ref} />
      </Field>
    );

    expect(getByTestId('select')).toBe(ref.current);
  });
});
