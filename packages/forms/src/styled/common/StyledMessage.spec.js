/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import { PALETTE } from '@zendeskgarden/react-theming';
import { StyledMessage } from './StyledMessage';

describe('StyledMessage', () => {
  it('renders the expected element', () => {
    const { container } = render(<StyledMessage />);

    expect(container.firstChild.nodeName).toBe('DIV');
  });

  it('renders expected RTL styling', () => {
    const { container } = renderRtl(<StyledMessage />);

    expect(container.firstChild).toHaveStyleRule('direction', 'rtl');
  });

  describe('Validation', () => {
    it('renders "success" styling if provided', () => {
      const { container } = render(<StyledMessage validation="success" />);

      expect(container.firstChild).toHaveStyleRule('color', PALETTE.green[600]);
    });

    it('renders "warning" styling if provided', () => {
      const { container } = render(<StyledMessage validation="warning" />);

      expect(container.firstChild).toHaveStyleRule('color', PALETTE.yellow[700]);
    });

    it('renders "error" styling if provided', () => {
      const { container } = render(<StyledMessage validation="error" />);

      expect(container.firstChild).toHaveStyleRule('color', PALETTE.red[600]);
    });
  });
});
