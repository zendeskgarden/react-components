/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { screen } from '@testing-library/react';
import { createRef } from 'react';

import { render } from '../../test/render';
import { Fieldset } from './Fieldset';

describe('Fieldset', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = createRef<HTMLFieldSetElement>();

    render(<Fieldset ref={ref} />);

    const fieldset = screen.getByRole('group');

    expect(fieldset).toBe(ref.current);
  });
});
