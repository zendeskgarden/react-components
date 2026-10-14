/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { render } from 'garden-test-utils';
import React from 'react';

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

  it('hides step content from assistive devices when the step is inactive', () => {
    const { queryByText } = render(
      <Stepper activeIndex={0}>
        <Stepper.Step>
          <Stepper.Content>Blueberry</Stepper.Content>
        </Stepper.Step>
        <Stepper.Step>
          <Stepper.Content>Strawberry</Stepper.Content>
        </Stepper.Step>
      </Stepper>
    );
    const visibleElement = queryByText('Blueberry');
    const hiddenElement = queryByText('Strawberry');

    expect(visibleElement).toHaveAttribute('aria-hidden', 'false');
    expect(visibleElement).not.toHaveAttribute('inert');
    expect(hiddenElement).toHaveAttribute('aria-hidden', 'true');
    expect(hiddenElement).toHaveAttribute('inert');
  });
});
