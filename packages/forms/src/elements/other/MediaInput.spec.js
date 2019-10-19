/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, fireEvent } from 'garden-test-utils';
import { Field, MediaInput } from '../../';

const Example = props => (
  <Field>
    <MediaInput
      start={<span data-test-id="start">start</span>}
      end={<span data-test-id="end">end</span>}
      {...props}
    />
  </Field>
);

describe('MediaInput', () => {
  it('focuses internal input when FauxInput wrapper is clicked', () => {
    const { container } = render(<Example />);
    const input = container.querySelector('input');

    fireEvent.click(input);

    expect(input).toHaveFocus();
  });

  it('renders start figure if provided', () => {
    const { getByTestId } = render(<Example />);

    expect(getByTestId('start')).toHaveTextContent('start');
  });

  it('renders end figure if provided', () => {
    const { getByTestId } = render(<Example />);

    expect(getByTestId('end')).toHaveTextContent('end');
  });

  it('applies disabled styling if provided', () => {
    const { getByTestId } = render(<Example data-test-id="input" disabled />);
    const input = getByTestId('input');

    expect(input).toHaveClass('is-disabled');
    expect(input).toHaveAttribute('disabled');
  });
});
