/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, screen } from 'garden-test-utils';
import { Fieldset } from '../..';

describe('Fieldset.Legend', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLLegendElement>();

    render(
      <Fieldset>
        <Fieldset.Legend ref={ref}>Example Legend Text</Fieldset.Legend>
      </Fieldset>
    );

    const legend = screen.getByText('Example Legend Text');

    expect(legend).toBe(ref.current);
  });
});
