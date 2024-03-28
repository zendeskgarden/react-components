/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { PALETTE_V8 } from '@zendeskgarden/react-theming';
import { StyledFile } from './StyledFile';

describe('StyledFile', () => {
  it('renders the expected element', () => {
    const { container } = render(<StyledFile />);

    expect(container.firstChild!.nodeName).toBe('DIV');
    expect(container.firstChild).toHaveStyleRule('height', '40px');
  });

  it('renders expected compact styling', () => {
    const { container } = render(<StyledFile isCompact />);

    expect(container.firstChild).toHaveStyleRule('height', '28px');
  });

  describe('validation', () => {
    it('renders expected success styling', () => {
      const { container } = render(<StyledFile validation="success" />);

      expect(container.firstChild).toHaveStyleRule('border-color', PALETTE_V8.green[600]);
    });

    it('renders expected error styling', () => {
      const { container } = render(<StyledFile validation="error" />);

      expect(container.firstChild).toHaveStyleRule('border-color', PALETTE_V8.red[600]);
    });
  });
});
