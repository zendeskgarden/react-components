/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { css } from 'styled-components';
import { render, renderRtl } from 'garden-test-utils';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { StyledStep } from './StyledStep';
import { StyledContent } from './StyledContent';
import { StyledLine } from './StyledLine';

describe('StyledStep', () => {
  it('renders default styles', () => {
    const { container } = render(<StyledStep />);

    expect(container.firstChild).not.toHaveStyleRule('position');
    expect(container.firstChild).not.toHaveStyleRule('flex');
    expect(container.firstChild).not.toHaveStyleRule('min-width');
  });

  it('renders horizontal styles', () => {
    const { container } = render(<StyledStep isHorizontal />);

    expect(container.firstChild).toHaveStyleRule('position', 'relative');
    expect(container.firstChild).toHaveStyleRule('flex', '1');
    expect(container.firstChild).toHaveStyleRule('min-width', '60px');
  });

  describe('StyledContent', () => {
    it('renders styling correctly', () => {
      const { container } = render(<StyledStep />);

      expect(container.firstChild).toHaveStyleRule('border-left', DEFAULT_THEME.borders.sm, {
        /* prettier-ignore */
        modifier: css`
          &:not(:last-of-type) ${StyledContent}
        ` as any
      });

      expect(container.firstChild).not.toHaveStyleRule('border-right', DEFAULT_THEME.borders.sm, {
        /* prettier-ignore */
        modifier: css`
          &:not(:last-of-type) ${StyledContent}
        ` as any
      });
    });

    it('renders RTL styling correctly', () => {
      const { container } = renderRtl(<StyledStep />);

      expect(container.firstChild).toHaveStyleRule('border-right', DEFAULT_THEME.borders.sm, {
        /* prettier-ignore */
        modifier: css`
          &:not(:last-of-type) ${StyledContent}
        ` as any
      });

      expect(container.firstChild).not.toHaveStyleRule('border-left', DEFAULT_THEME.borders.sm, {
        /* prettier-ignore */
        modifier: css`
          &:not(:last-of-type) ${StyledContent}
        ` as any
      });
    });
  });

  describe('StyledLine', () => {
    it('renders styling correctly', () => {
      const { container } = render(<StyledStep />);

      expect(container.firstChild).toHaveStyleRule('display', 'none', {
        /* prettier-ignore */
        modifier: css`
          &:first-of-type ${StyledLine}
        ` as any
      });
    });

    it('renders styling correctly in RTL', () => {
      const { container } = renderRtl(<StyledStep />);

      expect(container.firstChild).toHaveStyleRule('display', 'none', {
        /* prettier-ignore */
        modifier: css`
          &:last-of-type ${StyledLine}
        ` as any
      });
    });
  });
});
