/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { css } from 'styled-components';
import { render } from 'garden-test-utils';
import { StyledIconButton } from './StyledIconButton';
import { StyledIcon } from './StyledIcon';

describe('StyledIconButton', () => {
  it('renders the expected element', () => {
    const { container } = render(<StyledIconButton />);

    expect(container.firstChild!.nodeName).toBe('BUTTON');
  });

  it('renders default styling', () => {
    const { container } = render(<StyledIconButton />);

    expect(container.firstChild).toHaveStyleRule('padding', '0');
  });

  describe('Sizes', () => {
    it('renders small styling if provided', () => {
      const { container } = render(<StyledIconButton size="small" />);

      expect(container.firstChild).toHaveStyleRule('width', '32px');
      expect(container.firstChild).toHaveStyleRule('width', '16px', {
        modifier: (css`
          ${StyledIcon}
        ` as unknown) as string
      });
    });

    it('renders medium styling if provided', () => {
      const { container } = render(<StyledIconButton size="medium" />);

      expect(container.firstChild).toHaveStyleRule('width', '40px');
      expect(container.firstChild).toHaveStyleRule('width', '16px', {
        modifier: (css`
          ${StyledIcon}
        ` as unknown) as string
      });
    });

    it('renders large styling if provided', () => {
      const { container } = render(<StyledIconButton size="large" />);

      expect(container.firstChild).toHaveStyleRule('width', '48px');
      expect(container.firstChild).toHaveStyleRule('width', '24px', {
        modifier: (css`
          ${StyledIcon}
        ` as unknown) as string
      });
    });
  });
});
