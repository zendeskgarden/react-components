/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, fireEvent } from 'garden-test-utils';

import Range from './Range';

describe('Range', () => {
  const BasicExample = () => <Range min={0} max={100} value={25} />;

  describe('BackgroundSize', () => {
    it('applies backgroundSize equivalent to the input value', () => {
      const { container } = render(<BasicExample />);

      expect(container.firstChild).toHaveStyleRule('background-size', '25%', {
        modifier: '&&'
      });
    });

    it('defaults to max of 100 if max is less than min', () => {
      const { container } = render(<Range min={0} max={-25} value={25} />);

      expect(container.firstChild).toHaveStyleRule('background-size', '25%', {
        modifier: '&&'
      });
    });

    it('updates backgroundSize after onChange event', () => {
      const { container } = render(<Range min={0} max={-25} value={25} />);

      fireEvent.change(container.firstChild, { target: { value: 85 } });

      expect(container.firstChild).toHaveStyleRule('background-size', '85%', {
        modifier: '&&'
      });
    });
  });

  describe('onFocus()', () => {
    it('it applies focus visualization to Range', () => {
      const { container } = render(<BasicExample />);

      fireEvent.focus(container.firstChild);

      expect(container.firstChild).toHaveClass('is-focused');
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
