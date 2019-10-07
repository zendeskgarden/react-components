/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, fireEvent } from 'garden-test-utils';

import Field from './common/Field';
import Range from './Range';

describe('Range', () => {
  const BasicExample = () => (
    <Field>
      <Range min={0} max={100} value={25} data-test-id="range" />
    </Field>
  );

  describe('BackgroundSize', () => {
    it('applies backgroundSize equivalent to the input value', () => {
      const { getByTestId } = render(<BasicExample />);

      expect(getByTestId('range')).toHaveStyleRule('background-size', '25%', {
        modifier: '&&'
      });
    });

    it('defaults to max of 100 if max is less than min', () => {
      const { getByTestId } = render(
        <Field>
          <Range min={0} max={-25} value={25} data-test-id="range" />
        </Field>
      );

      expect(getByTestId('range')).toHaveStyleRule('background-size', '25%', {
        modifier: '&&'
      });
    });

    it('updates backgroundSize after onChange event', () => {
      const { getByTestId } = render(
        <Field>
          <Range min={0} max={-25} value={25} data-test-id="range" />
        </Field>
      );

      const range = getByTestId('range');

      expect(range).toHaveStyleRule('background-size', '25%', {
        modifier: '&&'
      });

      fireEvent.change(range, { target: { value: 85 } });

      expect(range).toHaveStyleRule('background-size', '85%', {
        modifier: '&&'
      });
    });
  });

  describe('onFocus()', () => {
    it('it applies focus visualization to Range', () => {
      const { getByTestId } = render(<BasicExample />);
      const range = getByTestId('range');

      fireEvent.focus(range);

      expect(range).toHaveClass('is-focused');
    });
  });

  describe('onBlur()', () => {
    it('it removes focus visualization of Range', () => {
      const { container } = render(<BasicExample />);

      fireEvent.focus(container.firstChild);
      fireEvent.blur(container.firstChild);

      expect(container.firstChild).not.toHaveClass('is-focused');
    });
  });
});
