/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createRef } from 'react';

import { render } from '../../test/render';
import { Field } from './Field';
import { Radio } from './Radio';

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
    const ref = createRef<HTMLInputElement>();
    const { getByTestId } = render(
      <Field>
        <Radio data-test-id="radio" ref={ref} />
      </Field>
    );

    expect(getByTestId('radio')).toBe(ref.current);
  });

  it('does not let props override the garden attributes or the type', () => {
    const { getByTestId } = render(
      <Field>
        <Radio
          data-test-id="radio"
          data-garden-id="custom"
          data-garden-version="0.0.0"
          type="text"
        />
      </Field>
    );

    expect(getByTestId('radio')).toHaveAttribute('data-garden-id', 'forms.radio');
    expect(getByTestId('radio')).toHaveAttribute('data-garden-version', PACKAGE_VERSION);
    expect(getByTestId('radio')).toHaveAttribute('type', 'radio');
  });
});
