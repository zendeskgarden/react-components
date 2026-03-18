/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { render } from 'garden-test-utils';
import React from 'react';

import { Stepper } from '../Stepper';

describe('Label', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLDivElement>();
    const { getByTestId } = render(
      <Stepper>
        <Stepper.Step>
          <Stepper.Label ref={ref} data-test-id="step-label" />
        </Stepper.Step>
      </Stepper>
    );

    expect(getByTestId('step-label')).toBe(ref.current);
  });
});
