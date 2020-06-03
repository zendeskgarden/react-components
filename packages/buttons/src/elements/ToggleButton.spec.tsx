/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import ToggleButton from './ToggleButton';

describe('ToggleButton', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLButtonElement>();
    const { container } = render(<ToggleButton ref={ref} />);

    expect(container.firstChild).toBe(ref.current);
  });

  describe('pressed', () => {
    it('renders true', () => {
      const { container } = render(<ToggleButton isPressed />);

      expect(container.firstChild).toHaveAttribute('aria-pressed', 'true');
    });

    it('renders false', () => {
      const { container } = render(<ToggleButton isPressed={false} />);

      expect(container.firstChild).toHaveAttribute('aria-pressed', 'false');
    });

    it('renders mixed', () => {
      const { container } = render(<ToggleButton isPressed="mixed" />);

      expect(container.firstChild).toHaveAttribute('aria-pressed', 'mixed');
    });
  });
});
