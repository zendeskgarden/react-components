/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderDark, renderRtl } from 'garden-test-utils';
import { PALETTE } from '@zendeskgarden/react-theming';
import { StyledTag } from './StyledTag';

describe('StyledTag', () => {
  it('renders the expected element', () => {
    const { container } = render(<StyledTag />);

    expect(container.firstChild!.nodeName).toBe('DIV');
  });

  it('renders default styling', () => {
    const { container } = render(<StyledTag />);

    expect(container.firstChild).toHaveStyleRule('display', 'inline-flex');
  });

  it('renders RTL styling if provided', () => {
    const { container } = renderRtl(<StyledTag />);

    expect(container.firstChild).toHaveStyleRule('direction', 'rtl');
  });

  describe('Pill', () => {
    it('renders pill styling', () => {
      const { container } = render(<StyledTag $isPill />);

      expect(container.firstChild).toHaveStyleRule('border-radius', '100px');
    });

    it('renders small styling', () => {
      const { container } = render(<StyledTag $isPill $size="small" />);

      expect(container.firstChild).toHaveStyleRule('min-width', '24px');
    });

    it('renders large styling', () => {
      const { container } = render(<StyledTag $isPill $size="large" />);

      expect(container.firstChild).toHaveStyleRule('min-width', '48px');
    });
  });

  it('renders round styling if provided', () => {
    const { container } = render(<StyledTag $isRound />);

    expect(container.firstChild).toHaveStyleRule('border-radius', '50%');
  });

  it('renders regular weight styling if provided', () => {
    const { container } = render(<StyledTag $isRegular />);

    expect(container.firstChild).toHaveStyleRule('font-weight', undefined);
  });

  describe('size', () => {
    it('renders small styling if provided', () => {
      const { container } = render(<StyledTag $size="small" />);

      expect(container.firstChild).toHaveStyleRule('height', '16px');
    });

    it('renders medium styling if provided', () => {
      const { container } = render(<StyledTag $size="medium" />);

      expect(container.firstChild).toHaveStyleRule('height', '20px');
    });

    it('renders large styling if provided', () => {
      const { container } = render(<StyledTag $size="large" />);

      expect(container.firstChild).toHaveStyleRule('height', '32px');
    });
  });

  describe('hue', () => {
    it.each([['light'], ['dark']])('renders using a default hue for %s mode', mode => {
      const renderFn = mode === 'light' ? render : renderDark;
      const { container } = renderFn(<StyledTag />);
      const backgroundColor = mode === 'dark' ? PALETTE.grey[800] : PALETTE.grey[200];
      const foregroundColor = mode === 'dark' ? PALETTE.grey[300] : PALETTE.grey[900];

      expect(container.firstChild).toHaveStyleRule('background-color', backgroundColor);
      expect(container.firstChild).toHaveStyleRule('color', foregroundColor);
    });

    it.each([['light'], ['dark']])('renders using a "grey" hue in %s mode', mode => {
      const renderFn = mode === 'light' ? render : renderDark;
      const { container } = renderFn(<StyledTag $hue="grey" />);
      const backgroundColor = mode === 'dark' ? PALETTE.grey[300] : PALETTE.grey[700];
      const foregroundColor = mode === 'dark' ? PALETTE.grey[1100] : PALETTE.white;

      expect(container.firstChild).toHaveStyleRule('background-color', backgroundColor);
      expect(container.firstChild).toHaveStyleRule('color', foregroundColor);
    });

    it.each([['light'], ['dark']])('renders using a "blue" hue in %s mode', mode => {
      const renderFn = mode === 'light' ? render : renderDark;
      const { container } = renderFn(<StyledTag $hue="blue" />);
      const backgroundColor = mode === 'dark' ? PALETTE.blue[600] : PALETTE.blue[700];
      const foregroundColor = mode === 'dark' ? PALETTE.grey[1100] : PALETTE.white;

      expect(container.firstChild).toHaveStyleRule('background-color', backgroundColor);
      expect(container.firstChild).toHaveStyleRule('color', foregroundColor);
    });

    it.each([['light'], ['dark']])('renders using a "red" hue in %s mode', mode => {
      const renderFn = mode === 'light' ? render : renderDark;
      const { container } = renderFn(<StyledTag $hue="red" />);
      const backgroundColor = mode === 'dark' ? PALETTE.red[600] : PALETTE.red[700];
      const foregroundColor = mode === 'dark' ? PALETTE.grey[1100] : PALETTE.white;

      expect(container.firstChild).toHaveStyleRule('background-color', backgroundColor);
      expect(container.firstChild).toHaveStyleRule('color', foregroundColor);
    });

    it.each([['light'], ['dark']])('renders using a "green" hue in %s mode', mode => {
      const renderFn = mode === 'light' ? render : renderDark;
      const { container } = renderFn(<StyledTag $hue="green" />);
      const backgroundColor = mode === 'dark' ? PALETTE.green[600] : PALETTE.green[700];
      const foregroundColor = mode === 'dark' ? PALETTE.grey[1100] : PALETTE.white;

      expect(container.firstChild).toHaveStyleRule('background-color', backgroundColor);
      expect(container.firstChild).toHaveStyleRule('color', foregroundColor);
    });

    it.each([['light'], ['dark']])('renders using a "yellow" hue in %s mode', mode => {
      const renderFn = mode === 'light' ? render : renderDark;
      const { container } = renderFn(<StyledTag $hue="yellow" />);
      const foregroundColor = mode === 'dark' ? PALETTE.grey[1100] : PALETTE.yellow[900];

      expect(container.firstChild).toHaveStyleRule('background-color', PALETTE.yellow[400]);
      expect(container.firstChild).toHaveStyleRule('color', foregroundColor);
    });

    it.each([['light'], ['dark']])('renders using a "kale" hue in %s mode', mode => {
      const renderFn = mode === 'light' ? render : renderDark;
      const { container } = renderFn(<StyledTag $hue="kale" />);
      const backgroundColor = mode === 'dark' ? PALETTE.kale[500] : PALETTE.kale[800];
      const foregroundColor = mode === 'dark' ? PALETTE.grey[1100] : PALETTE.white;

      expect(container.firstChild).toHaveStyleRule('background-color', backgroundColor);
      expect(container.firstChild).toHaveStyleRule('color', foregroundColor);
    });

    it.each([['light'], ['dark']])('renders using a custom hue for %s mode', mode => {
      const renderFn = mode === 'light' ? render : renderDark;
      const { container } = renderFn(<StyledTag $hue="azure" />);
      const backgroundColor = mode === 'dark' ? PALETTE.azure[500] : PALETTE.azure[700];

      expect(container.firstChild).toHaveStyleRule('background-color', backgroundColor);
    });

    it('renders a dark foreground on a light background', () => {
      const { container } = render(<StyledTag $hue="white" />);

      expect(container.firstChild).toHaveStyleRule('color', PALETTE.grey[1100]);
    });

    it('renders a light foreground on a dark background', () => {
      const { container } = render(<StyledTag $hue="black" />);

      expect(container.firstChild).toHaveStyleRule('color', PALETTE.white);
    });
  });
});
