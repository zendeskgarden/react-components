/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import SM from './SM';

describe('SM', () => {
  it('applies monospace styling if provided', () => {
    const { container } = render(<SM monospace />);

    expect(container.firstChild).toHaveStyleRule(
      'font-family',
      expect.stringContaining('monospace')
    );
  });

  it('applies correct styling with RTL locale', () => {
    const { container } = renderRtl(<SM />);

    expect(container.firstChild).toHaveStyleRule('direction', 'rtl');
  });
});
