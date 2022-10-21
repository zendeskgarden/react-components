/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import userEvent from '@testing-library/user-event';
import { render } from 'garden-test-utils';
import { OverflowButton } from './OverflowButton';

describe('OverflowButton', () => {
  const user = userEvent.setup();

  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLButtonElement>();
    const { container } = render(<OverflowButton ref={ref} />);

    expect(container.firstChild).toBe(ref.current);
  });

  it('applies isHovered styling', () => {
    const { container } = render(<OverflowButton isHovered />);

    expect(container.firstElementChild).toHaveStyleRule('opacity', '1');
  });

  it('applies isActive styling', () => {
    const { container } = render(<OverflowButton isActive />);

    expect(container.firstElementChild).toHaveStyleRule('z-index', '1');
  });

  describe('onFocus', () => {
    it('applies focused state', async () => {
      const { container } = render(<OverflowButton />);

      await user.click(container.firstElementChild!);
      expect(container.firstElementChild).toHaveStyleRule('box-shadow');
    });
  });

  describe('onBlur', () => {
    it('removes focused state', async () => {
      const { container } = render(<OverflowButton />);

      await user.click(container.firstElementChild!);
      await user.tab();
      expect(container.firstElementChild).not.toHaveStyleRule('box-shadow');
    });
  });
});
