/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import { Code } from './Code';

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

      expect(container.firstChild).toHaveStyleRule('font-size', '11px');
    });

    it('renders medium styling if provided', () => {
      const { container } = render(<Code size="medium" />);

      expect(container.firstChild).toHaveStyleRule('font-size', '13px');
    });

    it('renders large styling if provided', () => {
      const { container } = render(<Code size="large" />);

      expect(container.firstChild).toHaveStyleRule('font-size', '17px');
    });
  });
});
