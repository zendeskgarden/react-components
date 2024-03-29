/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { render, renderRtl } from 'garden-test-utils';
import { MD } from './MD';

describe('MD', () => {
  it('applies bold styling if provided', () => {
    const { container } = render(<MD isBold />);

    expect(container.firstChild).toHaveStyleRule(
      'font-weight',
      DEFAULT_THEME.fontWeights.semibold.toString()
    );
  });

  it('applies monospace styling if provided', () => {
    const { container } = render(<MD isMonospace />);

    expect(container.firstChild).toHaveStyleRule(
      'font-family',
      expect.stringContaining('monospace')
    );
  });

  it('applies correct styling with RTL locale', () => {
    const { container } = renderRtl(<MD />);

    expect(container.firstChild).toHaveStyleRule('direction', 'rtl');
  });
});
