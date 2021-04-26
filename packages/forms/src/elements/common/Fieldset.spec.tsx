/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, screen } from 'garden-test-utils';
import { Fieldset } from '../..';

describe('Fieldset', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLFieldSetElement>();

    render(<Fieldset ref={ref} />);

    const fieldset = screen.getByRole('group');

    expect(fieldset).toBe(ref.current);
  });
});
