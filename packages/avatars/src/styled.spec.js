/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import { StyledAvatar, StyledBadge, StyledText } from './styled';

describe('Styled Elements', () => {
  describe('StyledAvatar', () => {
    it('renders avatar styling by default', () => {
      const { container } = render(<StyledAvatar />);

      expect(container.firstChild).toHaveClass('c-avatar');
    });

    it('renders system styling if provided', () => {
      const { container } = render(<StyledAvatar isSystem />);

      expect(container.firstChild).toHaveClass('c-avatar--system');
    });

    it('renders correct sizing if provided', () => {
      const sizeMapping = {
        extrasmall: 'xs',
        small: 'sm',
        large: 'lg'
      };

      ['extrasmall', 'small', 'large'].forEach(size => {
        const { container } = render(<StyledAvatar size={size} />);

        expect(container.firstChild).toHaveClass(`c-avatar--${sizeMapping[size]}`);
      });
    });

    it('renders correct status if provided', () => {
      ['available', 'active', 'away'].forEach(status => {
        const { container } = render(<StyledAvatar status={status} />);

        expect(container.firstChild).toHaveClass(`is-${status}`);
      });
    });

    it('renders RTL styling if provided', () => {
      const { container } = renderRtl(<StyledAvatar />);

      expect(container.firstChild).toHaveClass(`is-rtl`);
    });
  });

  describe('StyledBadge', () => {
    it('renders badge styling by default', () => {
      const { container } = render(<StyledBadge />);

      expect(container.firstChild).toHaveClass(`c-avatar__badge`);
    });
  });

  describe('StyledText', () => {
    it('renders text styling by default', () => {
      const { container } = render(<StyledText />);

      expect(container.firstChild).toHaveClass(`c-avatar__txt`);
    });
  });
});
