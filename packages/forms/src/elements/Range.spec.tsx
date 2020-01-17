/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, fireEvent } from 'garden-test-utils';
import { Field } from './common/Field';
import { Range } from './Range';

describe('Range', () => {
  const BasicExample = () => (
    <Field>
      <Range min={0} max={100} value={25} data-test-id="range" />
    </Field>
  );

  it('is rendered as an input of type range', () => {
    const { getByTestId } = render(<BasicExample />);
    const range = getByTestId('range');

    expect(range.nodeName).toBe('INPUT');
    expect(range).toHaveAttribute('type', 'range');
  });

  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLInputElement>();
    const { getByTestId } = render(
      <Field>
        <Range data-test-id="range" ref={ref} />
      </Field>
    );

    expect(getByTestId('range')).toBe(ref.current);
  });

  it('throws if rendered without a Field parent', () => {
    /* eslint-disable no-console */
    const consoleError = console.error;

    try {
      console.error = jest.fn();
      expect(() => render(<Range />)).toThrow();
    } finally {
      console.error = consoleError;
    }
  });

  describe('BackgroundSize', () => {
    it('applies backgroundSize equivalent to the input value', () => {
      const { getByTestId } = render(<BasicExample />);

      expect(getByTestId('range').style.backgroundSize).toBe('25%');
    });

    it('defaults to max of 100 if max is less than min', () => {
      const { getByTestId } = render(
        <Field>
          <Range min={0} max={-25} value={25} data-test-id="range" />
        </Field>
      );

      expect(getByTestId('range').style.backgroundSize).toBe('25%');
    });

    it('updates backgroundSize after onChange event', () => {
      const { getByTestId } = render(
        <Field>
          <Range min={0} max={-25} value={25} data-test-id="range" />
        </Field>
      );

      const range = getByTestId('range');

      expect(getByTestId('range').style.backgroundSize).toBe('25%');

      fireEvent.change(range, { target: { value: 85 } });

      expect(getByTestId('range').style.backgroundSize).toBe('85%');
    });
  });
});
