/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { render, renderRtl } from 'garden-test-utils';
import ChevronLeftStrokeIcon from '@zendeskgarden/svg-icons/src/16/chevron-left-stroke.svg';
import { StyledHeaderPaddle } from './StyledHeaderPaddle';

describe('StyledHeaderPaddle', () => {
  it('does not rotate the button (and its chevron icon) in LTR', () => {
    const { container } = render(
      <StyledHeaderPaddle>
        <ChevronLeftStrokeIcon />
      </StyledHeaderPaddle>
    );

    expect(container.firstChild).not.toHaveStyleRule('transform', 'rotate(180deg)');
  });

  it('rotates the button (and its chevron icon) 180 degrees in RTL', () => {
    const { container } = renderRtl(
      <StyledHeaderPaddle>
        <ChevronLeftStrokeIcon />
      </StyledHeaderPaddle>
    );

    expect(container.firstChild).toHaveStyleRule('transform', 'rotate(180deg)');
  });

  it('renders at the default size when not compact', () => {
    const { container } = render(
      <StyledHeaderPaddle>
        <ChevronLeftStrokeIcon />
      </StyledHeaderPaddle>
    );

    expect(container.firstChild).toHaveStyleRule('width', '40px');
    expect(container.firstChild).toHaveStyleRule('min-width', '40px');
    expect(container.firstChild).toHaveStyleRule('height', '40px');
  });

  it('shrinks to match the calendar button when compact', () => {
    const { container } = render(
      <StyledHeaderPaddle $isCompact>
        <ChevronLeftStrokeIcon />
      </StyledHeaderPaddle>
    );

    expect(container.firstChild).toHaveStyleRule('width', '32px');
    expect(container.firstChild).toHaveStyleRule('min-width', '32px');
    expect(container.firstChild).toHaveStyleRule('height', '32px');
  });

  describe('`data-garden-id` attribute', () => {
    const renderWithOverrides = (components: Record<string, string>) =>
      render(
        <ThemeProvider theme={{ ...DEFAULT_THEME, components }}>
          <StyledHeaderPaddle>
            <ChevronLeftStrokeIcon />
          </StyledHeaderPaddle>
        </ThemeProvider>
      );

    it('has the correct `data-garden-id`', () => {
      const { container } = render(
        <StyledHeaderPaddle>
          <ChevronLeftStrokeIcon />
        </StyledHeaderPaddle>
      );

      expect(container.firstChild).toHaveAttribute('data-garden-id', 'datepickers.header_paddle');
    });

    it('applies a theme override for `datepickers.header_paddle`', () => {
      const { container } = renderWithOverrides({
        'datepickers.header_paddle': 'outline: 1px solid red;'
      });

      expect(container.firstChild).toHaveStyleRule('outline', '1px solid red');
    });

    it('is not themed by an app-wide `buttons.icon_button` override', () => {
      const { container } = renderWithOverrides({
        'buttons.icon_button': 'outline: 1px solid red;'
      });

      expect(container.firstChild).not.toHaveStyleRule('outline', '1px solid red');
    });
  });
});
