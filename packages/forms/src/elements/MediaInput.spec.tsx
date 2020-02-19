/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, fireEvent } from 'garden-test-utils';
import { Field, MediaInput } from '..';
import { IMediaInputProps } from './MediaInput';

const Example = (props: IMediaInputProps) => (
  <Field>
    <MediaInput
      start={<span data-test-id="start">start</span>}
      end={<span data-test-id="end">end</span>}
      {...props}
    />
  </Field>
);

describe('MediaInput', () => {
  it('is rendered as an input', () => {
    const { getByTestId } = render(
      <Field>
        <MediaInput data-test-id="input" />
      </Field>
    );

    expect(getByTestId('input').nodeName).toBe('INPUT');
  });

  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLInputElement>();
    const { getByTestId } = render(
      <Field>
        <MediaInput data-test-id="input" ref={ref} />
      </Field>
    );

    expect(getByTestId('input')).toBe(ref.current);
  });

  it('focuses internal input when FauxInput wrapper is clicked', () => {
    const { container } = render(<Example />);
    const input = container.querySelector('input');

    fireEvent.click(input!);

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
    const { container, getByTestId } = render(
      <Field>
        <MediaInput data-test-id="input" disabled />
      </Field>
    );

    expect(container.firstChild!.firstChild).toHaveAttribute('aria-disabled');
    expect(getByTestId('input')).toHaveAttribute('disabled');
  });
});
