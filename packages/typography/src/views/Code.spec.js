/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import {
  zdColorGreen200,
  zdColorGrey200,
  zdColorRed200,
  zdColorYellow200,
  zdFontSizeSmMonospace,
  zdFontSizeMdMonospace,
  zdFontSizeLgMonospace
} from '@zendeskgarden/css-variables';
import Code from './Code';

describe('Code', () => {
  it('applies correct styling with RTL locale', () => {
    const { container } = renderRtl(<Code />);

    expect(container.firstChild).toHaveStyleRule('direction', 'rtl');
  });

  it('applies monospace font styling', () => {
    const { container } = render(<Code />);

    expect(container.firstChild).toHaveStyleRule(
      'font-family',
      expect.stringContaining('monospace')
    );
  });

  describe('size', () => {
    it('renders small styling if provided', () => {
      const { container } = render(<Code size="small" />);

      expect(container.firstChild).toHaveStyleRule('font-size', zdFontSizeSmMonospace);
    });

    it('renders medium styling if provided', () => {
      const { container } = render(<Code size="medium" />);

      expect(container.firstChild).toHaveStyleRule('font-size', zdFontSizeMdMonospace);
    });

    it('renders large styling if provided', () => {
      const { container } = render(<Code size="large" />);

      expect(container.firstChild).toHaveStyleRule('font-size', zdFontSizeLgMonospace);
    });
  });

  describe('visual types', () => {
    it('renders grey styling if provided', () => {
      const { container } = render(<Code type="grey" />);

      expect(container.firstChild).toHaveStyleRule('background-color', zdColorGrey200);
    });

    it('renders green styling if provided', () => {
      const { container } = render(<Code type="green" />);

      expect(container.firstChild).toHaveStyleRule('background-color', zdColorGreen200);
    });

    it('renders red styling if provided', () => {
      const { container } = render(<Code type="red" />);

      expect(container.firstChild).toHaveStyleRule('background-color', zdColorRed200);
    });

    it('renders yellow styling if provided', () => {
      const { container } = render(<Code type="yellow" />);

      expect(container.firstChild).toHaveStyleRule('background-color', zdColorYellow200);
    });
  });
});
