/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { getRenderFn, render, renderRtl } from 'garden-test-utils';
import { DEFAULT_THEME, PALETTE } from '@zendeskgarden/react-theming';

import { StyledAvatar } from './StyledAvatar';
import { StyledStatusIndicator } from './StyledStatusIndicator';

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
    const { container } = render(<StyledAvatar $isSystem />);

    expect(container.firstChild).toHaveStyleRule('border-radius', DEFAULT_THEME.borderRadii.md);
  });

  describe('color', () => {
    it.each(['light', 'dark'])('renders default %s mode surface color as expected', mode => {
      const { container } = getRenderFn(mode)(<StyledAvatar $status="away" />);

      expect(container.firstChild).toHaveStyleRule(
        'color',
        mode === 'light' ? PALETTE.white : PALETTE.grey[1100],
        { modifier: '&&' }
      );
    });

    it('renders surface color as expected', () => {
      const { container } = render(<StyledAvatar $status="away" $surfaceColor="red" />);

      expect(container.firstChild).toHaveStyleRule('color', PALETTE.red[700], {
        modifier: '&&'
      });
    });

    it('renders surface color variable key as expected', () => {
      const { container, rerender } = render(
        <StyledAvatar $status="away" $surfaceColor="background.primaryEmphasis" />
      );

      expect(container.firstChild).toHaveStyleRule('color', PALETTE.blue[700], {
        modifier: '&&'
      });

      rerender(<StyledAvatar $surfaceColor="background.primaryEmphasis" />);

      expect(container.firstChild).toHaveStyleRule('color', 'transparent', {
        modifier: '&&'
      });
    });

    it('renders background color as expected', () => {
      const { container } = render(<StyledAvatar $backgroundColor="red" />);

      expect(container.firstChild).toHaveStyleRule('background-color', PALETTE.red[700]);
    });

    it('renders background color variable key as expected', () => {
      const { container } = render(
        <StyledAvatar $status="away" $backgroundColor="background.emphasis" />
      );

      expect(container.firstChild).toHaveStyleRule('background-color', PALETTE.grey[700]);
    });

    it('renders foreground color as expected', () => {
      const { container } = render(<StyledAvatar $foregroundColor="red" />);

      expect(container.firstChild).toHaveStyleRule('color', PALETTE.red[700], {
        modifier: '&>svg'
      });
    });

    it('renders foreground color variable as expected', () => {
      const { container } = render(<StyledAvatar $foregroundColor="foreground.default" />);

      expect(container.firstChild).toHaveStyleRule('color', PALETTE.grey[900], {
        modifier: '&>svg'
      });
    });
  });

  describe('size', () => {
    it('renders extraextrasmall', () => {
      const { container } = render(<StyledAvatar $size="extraextrasmall" />);

      expect(container.firstChild).toHaveStyleRule('width', '16px!important');
    });

    it('renders extrasmall', () => {
      const { container } = render(<StyledAvatar $size="extrasmall" />);

      expect(container.firstChild).toHaveStyleRule('width', '24px!important');
    });

    it('renders small', () => {
      const { container } = render(<StyledAvatar $size="small" />);

      expect(container.firstChild).toHaveStyleRule('width', '32px!important');
    });

    it('renders medium', () => {
      const { container } = render(<StyledAvatar $size="medium" />);

      expect(container.firstChild).toHaveStyleRule('width', '40px!important');
    });

    it('renders large', () => {
      const { container } = render(<StyledAvatar $size="large" />);

      expect(container.firstChild).toHaveStyleRule('width', '48px!important');
    });
  });

  describe('badge', () => {
    const styleRuleOptions = {
      modifier: `&>${StyledStatusIndicator}`
    };

    it('renders the status indicator correctly', () => {
      const { container } = render(
        <StyledAvatar>
          <StyledStatusIndicator />
        </StyledAvatar>
      );

      expect(container.firstChild).toHaveStyleRule('position', 'absolute', styleRuleOptions);
      expect(container.firstChild).toHaveStyleRule('bottom', '-2px', styleRuleOptions);
      expect(container.firstChild).toHaveStyleRule('right', '-2px', styleRuleOptions);
    });

    it('renders the status indicator correctly with alternate size', () => {
      const { container } = render(
        <StyledAvatar $size="large">
          <StyledStatusIndicator />
        </StyledAvatar>
      );

      expect(container.firstChild).toHaveStyleRule('position', 'absolute', styleRuleOptions);
      expect(container.firstChild).toHaveStyleRule('bottom', '-2px', styleRuleOptions);
      expect(container.firstChild).toHaveStyleRule('right', '-2px', styleRuleOptions);
    });

    it('renders the status indicator correctly from RTL', () => {
      const { container } = renderRtl(
        <StyledAvatar>
          <StyledStatusIndicator />
        </StyledAvatar>
      );

      expect(container.firstChild).toHaveStyleRule('position', 'absolute', styleRuleOptions);
      expect(container.firstChild).toHaveStyleRule('bottom', '-2px', styleRuleOptions);
      expect(container.firstChild).toHaveStyleRule('left', '-2px', styleRuleOptions);
    });
  });
});
