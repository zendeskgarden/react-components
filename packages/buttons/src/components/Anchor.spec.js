/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { getColor } from '@zendeskgarden/react-theming';
import { render, fireEvent } from 'garden-test-utils';
import Anchor from './Anchor';

describe('Anchor', () => {
  it('renders external SVG if provided', () => {
    const { container } = render(<Anchor external />);

    expect(container.querySelector('svg')).not.toBeNull();
  });

  it('renders disabled styling if provided', () => {
    const { container } = render(<Anchor disabled />);

    expect(container.firstChild).toHaveStyleRule('color', getColor('neutralHue'));
  });

  describe('Selection', () => {
    it('does not render focused styling if focused by mouse', () => {
      const { container } = render(<Anchor />);

      fireEvent.click(container.firstChild);
      expect(container.firstChild).not.toHaveClass('focus-visible');
    });

    it('renders focused styling if focused by keyboard', () => {
      const { container } = render(<Anchor />);

      fireEvent.focus(container.firstChild);
      expect(container.firstChild).toHaveClass('focus-visible');
    });
  });
});
