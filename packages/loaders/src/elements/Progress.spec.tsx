/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { DEFAULT_THEME, PALETTE } from '@zendeskgarden/react-theming';
import { getRenderFn, render } from 'garden-test-utils';
import { rgba } from 'polished';
import React from 'react';

import { Progress } from './Progress';

describe('Progress', () => {
  describe('without a value', () => {
    it('renders a progress bar with 0% progress', () => {
      const { getByRole } = render(<Progress />);

      expect(getByRole('progressbar')).toHaveAttribute('aria-valuenow', '0');
    });
  });

  it('renders a progress bar with correct aria attributes', () => {
    const { getByRole } = render(<Progress value={40} />);

    const progress = getByRole('progressbar');

    expect(progress).toHaveAttribute('aria-valuemin', '0');
    expect(progress).toHaveAttribute('aria-valuenow', '40');
    expect(progress).toHaveAttribute('aria-valuemax', '100');
    expect(progress).toHaveAttribute('aria-label', 'Progress');
  });

  it('renders a progress indicator', () => {
    const { getByRole } = render(<Progress value={40} />);

    expect(getByRole('progressbar').firstChild).toHaveStyleRule('width', '40%');
  });

  describe('when given a value below zero', () => {
    it('renders a progress bar with 0% progress', () => {
      const { getByRole } = render(<Progress value={-42} />);

      expect(getByRole('progressbar')).toHaveAttribute('aria-valuenow', '0');
    });
  });

  describe('when given a value above 100', () => {
    it('renders a progress bar with 100% progress', () => {
      const { getByRole } = render(<Progress value={666} />);

      expect(getByRole('progressbar')).toHaveAttribute('aria-valuenow', '100');
    });
  });

  describe('with a small size', () => {
    it('renders a small progress bar', () => {
      const { getByRole } = render(<Progress value={42} size="small" />);

      expect(getByRole('progressbar').firstChild).toHaveStyleRule('height', '2px');
    });
  });

  describe('with the default size', () => {
    it('renders a default progress bar', () => {
      const { getByRole } = render(<Progress value={42} />);

      expect(getByRole('progressbar').firstChild).toHaveStyleRule('height', '6px');
    });
  });

  describe('with a large size', () => {
    it('renders a large progress bar', () => {
      const { getByRole } = render(<Progress value={42} size="large" />);

      expect(getByRole('progressbar').firstChild).toHaveStyleRule('height', '12px');
    });
  });

  describe('without a color set', () => {
    it.each<['light' | 'dark', string, string]>([
      ['light', rgba(PALETTE.grey[700], DEFAULT_THEME.opacity[200]), PALETTE.green[700]],
      ['dark', rgba(PALETTE.white, DEFAULT_THEME.opacity[200]), PALETTE.green[600]]
    ])('applies the default colors in "%s mode', (mode, bgColor, fgColor) => {
      const { container } = getRenderFn(mode)(<Progress value={42} />);

      expect(container.firstChild).toHaveStyleRule('color', fgColor);
      expect(container.firstChild).toHaveStyleRule('background-color', bgColor);
    });
  });

  describe('with a color set', () => {
    it('renders a colored progress bar', () => {
      const { getByRole } = render(<Progress value={42} color="red" />);

      expect(getByRole('progressbar')).toHaveStyleRule('color', PALETTE.red[700]);
    });

    it('renders a variable key as expected', () => {
      const { container } = render(<Progress value={42} color="foreground.primary" />);

      expect(container.firstChild).toHaveStyleRule('color', PALETTE.blue[700]);
    });
  });
});
