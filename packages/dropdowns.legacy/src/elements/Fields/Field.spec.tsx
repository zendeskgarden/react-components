/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { Field } from './Field';
import { Dropdown } from '../Dropdown/Dropdown';

describe('Field', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLDivElement>();
    const { getByTestId } = render(
      <Dropdown>
        <Field data-test-id="field" ref={ref} />
      </Dropdown>
    );

    expect(getByTestId('field')).toBe(ref.current);
  });
});
