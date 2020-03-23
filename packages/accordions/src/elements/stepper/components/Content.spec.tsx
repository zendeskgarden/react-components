/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { Stepper } from '../Stepper';

describe('Content', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLDivElement>();
    const { getByTestId } = render(
      <Stepper>
        <Stepper.Step>
          <Stepper.Content ref={ref} data-test-id="step-content" />
        </Stepper.Step>
      </Stepper>
    );

    expect(getByTestId('step-content')).toBe(ref.current);
  });

  it('renders null for a horizontal Stepper', () => {
    const { queryByText } = render(
      <Stepper isHorizontal>
        <Stepper.Step>
          <Stepper.Content>Some content</Stepper.Content>
        </Stepper.Step>
      </Stepper>
    );

    expect(queryByText('Some content')).toBeNull();
  });

  it('renders Content for a vertical Stepper', () => {
    const { queryByText } = render(
      <Stepper>
        <Stepper.Step>
          <Stepper.Content>Some content</Stepper.Content>
        </Stepper.Step>
      </Stepper>
    );

    expect(queryByText('Some content')).not.toBeNull();
  });
});
