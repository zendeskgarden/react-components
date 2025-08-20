/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import { Kbd } from './Kbd';

describe('Kbd', () => {
  it('renders the expected element', () => {
    const { container } = render(<Kbd />);

    expect(container.firstChild!.nodeName).toBe('KBD');
  });

  it('applies the expected Garden ID attribute', () => {
    const { container } = render(<Kbd />);

    expect(container.firstChild).toHaveAttribute('data-garden-id', 'typography.kbd');
  });

  it('forces left-to-right text direction', () => {
    const { container } = renderRtl(<Kbd />);

    expect(container.firstChild).toHaveStyleRule('direction', 'ltr');
  });

  describe('size', () => {
    it('renders inherited size', () => {
      const { container } = render(<Kbd />);

      expect(container.firstChild).not.toHaveStyleRule('font-size', 'inherit');
    });

    it('renders small styling if provided', () => {
      const { container } = render(<Kbd size="small" />);

      expect(container.firstChild).toHaveStyleRule('font-size', '11px');
    });

    it('renders medium styling if provided', () => {
      const { container } = render(<Kbd size="medium" />);

      expect(container.firstChild).toHaveStyleRule('font-size', '13px');
    });

    it('renders large styling if provided', () => {
      const { container } = render(<Kbd size="large" />);

      expect(container.firstChild).toHaveStyleRule('font-size', '17px');
    });
  });
});
