/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import Progress from './Progress';
import { zdColorGreen600 } from '@zendeskgarden/css-variables';

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
    it('renders a blue progress bar by default', () => {
      const { getByRole } = render(<Progress value={42} />);

      expect(getByRole('progressbar')).toHaveStyleRule('color', zdColorGreen600);
    });
  });

  describe('with a color set', () => {
    it('renders a colored progress bar', () => {
      const { getByRole } = render(<Progress value={42} color="red" />);

      expect(getByRole('progressbar')).toHaveStyleRule('color', 'red');
    });
  });
});
