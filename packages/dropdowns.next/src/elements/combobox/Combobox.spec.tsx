/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { Combobox } from './Combobox';
import { Field } from './Field';

describe('Combobox', () => {
  it('is rendered as a div', () => {
    const { container } = render(
      <Field>
        <Combobox />
      </Field>
    );

    expect(container.firstChild?.firstChild?.nodeName).toBe('DIV');
  });

  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLDivElement>();
    const { container } = render(
      <Field>
        <Combobox ref={ref} />
      </Field>
    );

    expect(container.firstChild?.firstChild).toBe(ref.current);
  });
});
