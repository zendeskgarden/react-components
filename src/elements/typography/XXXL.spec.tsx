/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { render, renderRtl } from 'garden-test-utils';
import React from 'react';

import { XXXL } from './XXXL';

describe('XXXL', () => {
  it('applies bold styling if provided', () => {
    const { container } = render(<XXXL isBold />);

    expect(container.firstChild).toHaveStyleRule(
      'font-weight',
      DEFAULT_THEME.fontWeights.semibold.toString()
    );
  });

  it('applies correct styling with RTL locale', () => {
    const { container } = renderRtl(<XXXL>Hello world</XXXL>);

    expect(container.firstChild).toHaveStyleRule('direction', 'rtl');
  });
});
