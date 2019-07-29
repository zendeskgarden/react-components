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
  it('renders default styling', () => {
    const { container } = render(<Anchor />);

    expect(container.firstChild).toHaveStyleRule('display', 'inline');
  });

  it('renders danger styling if provided', () => {
    const { container } = render(<Anchor danger />);

    expect(container.firstChild).toHaveStyleRule('color', getColor('dangerHue'));
  });

  it('renders external styling if provided', () => {
    const { getByTestId } = render(<Anchor external />);

    expect(getByTestId('anchor-external')).not.toBeNull();
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
