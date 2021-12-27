/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { math } from 'polished';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { render, renderRtl } from 'garden-test-utils';
import { ARRAY_SPACE } from '../utils/types';
import { StyledGrid } from './StyledGrid';

describe('StyledGrid', () => {
  it('renders default styling', () => {
    const { container } = render(<StyledGrid />);
    const padding = math(`${DEFAULT_THEME.space.md} / 2`);

    expect(container.firstChild).toHaveStyleRule('width', '100%');
    expect(container.firstChild).toHaveStyleRule('padding-left', padding); /* default gutters */
    expect(container.firstChild).not.toHaveStyleRule('box-shadow'); /* debug = false */
  });

  it('renders RTL styling if provided', () => {
    const { container } = renderRtl(<StyledGrid />);

    expect(container.firstChild).toHaveStyleRule('direction', 'rtl');
  });

  it('renders debug styling if provided', () => {
    const { container } = render(<StyledGrid debug />);

    expect(container.firstChild).toHaveStyleRule('box-shadow', expect.any(String));
  });

  describe('Gutters', () => {
    it('renders gutters', () => {
      ARRAY_SPACE.forEach(size => {
        if (typeof size === 'string') {
          const { container } = render(<StyledGrid gutters={size} />);
          const padding = math(`${DEFAULT_THEME.space[size]} / 2`);

          expect(container.firstChild).toHaveStyleRule('padding-right', padding);
          expect(container.firstChild).toHaveStyleRule('padding-left', padding);
        }
      });
    });

    it('collapses gutters', () => {
      const { container } = render(<StyledGrid gutters={false} />);

      expect(container.firstChild).toHaveStyleRule('padding-right', '0');
      expect(container.firstChild).toHaveStyleRule('padding-left', '0');
    });
  });
});
