/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { Radio } from './Radio';
import { Field } from './common/Field';

describe('Radio', () => {
  it('is rendered as an input of type radio', () => {
    const { getByTestId } = render(
      <Field>
        <Radio data-test-id="radio" />
      </Field>
    );
    const radio = getByTestId('radio');

    expect(radio.nodeName).toBe('INPUT');
    expect(radio).toHaveAttribute('type', 'radio');
  });

  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLInputElement>();
    const { getByTestId } = render(
      <Field>
        <Radio data-test-id="radio" ref={ref} />
      </Field>
    );

    expect(getByTestId('radio')).toBe(ref.current);
  });
});
