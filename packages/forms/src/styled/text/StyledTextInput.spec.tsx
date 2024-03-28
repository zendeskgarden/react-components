/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import { PALETTE_V8 } from '@zendeskgarden/react-theming';
import { StyledTextInput } from './StyledTextInput';

describe('StyledTextInput', () => {
  it('renders the expected element', () => {
    const { container } = render(<StyledTextInput />);

    expect(container.firstChild!.nodeName).toBe('INPUT');
  });

  it('renders compact styling if provided', () => {
    const { container } = render(<StyledTextInput isCompact />);

    expect(container.firstChild).toHaveStyleRule('min-height', '32px');
  });

  it('renders bare styling if provided', () => {
    const { container } = render(<StyledTextInput isBare />);

    expect(container.firstChild).toHaveStyleRule('border', 'none');
  });

  it('renders expected readonly styling', () => {
    const { container } = render(<StyledTextInput readOnly />);

    expect(container.firstChild).toHaveStyleRule('border-color', PALETTE_V8.grey[300]);
  });

  it('renders expected disabled styling', () => {
    const { container } = render(<StyledTextInput disabled />);

    expect(container.firstChild).toHaveStyleRule('color', PALETTE_V8.grey[400], {
      modifier: '&:disabled'
    });
  });

  it('renders expected RTL styling', () => {
    const { container } = renderRtl(<StyledTextInput />);

    expect(container.firstChild).toHaveStyleRule('direction', 'rtl');
  });

  describe('Validation', () => {
    it('renders "success" styling if provided', () => {
      const { container } = render(<StyledTextInput validation="success" />);

      expect(container.firstChild).toHaveStyleRule('border-color', PALETTE_V8.green[600]);
    });

    it('renders "warning" styling if provided', () => {
      const { container } = render(<StyledTextInput validation="warning" />);

      expect(container.firstChild).toHaveStyleRule('border-color', PALETTE_V8.yellow[600]);
    });

    it('renders "error" styling if provided', () => {
      const { container } = render(<StyledTextInput validation="error" />);

      expect(container.firstChild).toHaveStyleRule('border-color', PALETTE_V8.red[600]);
    });
  });
});
