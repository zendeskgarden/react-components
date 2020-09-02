/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { PALETTE } from '@zendeskgarden/react-theming';
import { StyledCodeBlockLine } from './StyledCodeBlockLine';

describe('StyledCodeBlockLine', () => {
  it('renders the expected element', () => {
    const { container } = render(<StyledCodeBlockLine />);

    expect(container.firstChild!.nodeName).toBe('CODE');
  });

  describe('line numbers', () => {
    it('renders line numbers as expected', () => {
      const { container } = render(<StyledCodeBlockLine isNumbered />);

      expect(container.firstChild).toHaveStyleRule('display', 'table-row');
    });

    it('renders as expected in light mode', () => {
      const { container } = render(<StyledCodeBlockLine isLight isNumbered />);

      expect(container.firstChild).toHaveStyleRule('color', PALETTE.grey[600], {
        modifier: '&::before'
      });
    });
  });
});
