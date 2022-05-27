/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { StyledAvatar } from './StyledAvatar';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';

describe('StyledAvatar', () => {
  it('renders the expected element', () => {
    const { container } = render(<StyledAvatar />);

    expect(container.firstChild!.nodeName).toBe('FIGURE');
  });

  it('renders avatar styling by default', () => {
    const { container } = render(<StyledAvatar />);

    expect(container.firstChild).toHaveStyleRule('border-radius', '50%');
  });

  it('renders system styling if provided', () => {
    const { container } = render(<StyledAvatar isSystem />);

    expect(container.firstChild).toHaveStyleRule('border-radius', DEFAULT_THEME.borderRadii.md);
  });

  describe('color', () => {
    it('renders surface color as expected', () => {
      const { container } = render(<StyledAvatar status="away" surfaceColor="red" />);

      expect(container.firstChild).toHaveStyleRule('color', 'red');
    });

    it('renders background color as expected', () => {
      const { container } = render(<StyledAvatar backgroundColor="red" />);

      expect(container.firstChild).toHaveStyleRule('background-color', 'red');
    });

    it('renders foreground color as expected', () => {
      const { container } = render(<StyledAvatar foregroundColor="red" />);

      expect(container.firstChild).toHaveStyleRule('color', 'red', { modifier: '> svg' });
    });
  });

  describe('size', () => {
    it('renders extraextrasmall', () => {
      const { container } = render(<StyledAvatar size="extraextrasmall" />);

      expect(container.firstChild).toHaveStyleRule('width', '16px !important');
    });

    it('renders extrasmall', () => {
      const { container } = render(<StyledAvatar size="extrasmall" />);

      expect(container.firstChild).toHaveStyleRule('width', '24px !important');
    });

    it('renders small', () => {
      const { container } = render(<StyledAvatar size="small" />);

      expect(container.firstChild).toHaveStyleRule('width', '32px !important');
    });

    it('renders medium', () => {
      const { container } = render(<StyledAvatar size="medium" />);

      expect(container.firstChild).toHaveStyleRule('width', '40px !important');
    });

    it('renders large', () => {
      const { container } = render(<StyledAvatar size="large" />);

      expect(container.firstChild).toHaveStyleRule('width', '48px !important');
    });
  });
});
