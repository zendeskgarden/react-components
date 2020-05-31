/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import TestIcon from '@zendeskgarden/svg-icons/src/16/gear-stroke.svg';
import ToggleIconButton from './ToggleIconButton';

describe('ToggleIconButton', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLButtonElement>();
    const { container } = render(
      <ToggleIconButton ref={ref}>
        <TestIcon />
      </ToggleIconButton>
    );

    expect(container.firstChild).toBe(ref.current);
  });

  describe('pressed', () => {
    it('renders true', () => {
      const { container } = render(
        <ToggleIconButton isPressed>
          <TestIcon />
        </ToggleIconButton>
      );

      expect(container.firstChild).toHaveAttribute('aria-pressed', 'true');
    });

    it('renders false', () => {
      const { container } = render(
        <ToggleIconButton isPressed={false}>
          <TestIcon />
        </ToggleIconButton>
      );

      expect(container.firstChild).toHaveAttribute('aria-pressed', 'false');
    });

    it('renders mixed', () => {
      const { container } = render(
        <ToggleIconButton isPressed="mixed">
          <TestIcon />
        </ToggleIconButton>
      );

      expect(container.firstChild).toHaveAttribute('aria-pressed', 'mixed');
    });
  });
});
