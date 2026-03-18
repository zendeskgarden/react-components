/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { render } from 'garden-test-utils';
import React from 'react';

import { StyledPage } from './StyledPage';

describe('StyledPage', () => {
  it('renders the expected element', () => {
    const { container } = render(<StyledPage />);

    expect(container.firstChild!.nodeName).toBe('BUTTON');
  });

  it('renders hidden styling if provided', () => {
    const { container } = render(<StyledPage hidden />);

    expect(container.firstChild).toHaveStyleRule('visibility', 'hidden');
  });

  it('renders expected current styling', () => {
    const { container } = render(<StyledPage aria-current="page" />);

    expect(container.firstChild).toHaveStyleRule(
      'font-weight',
      DEFAULT_THEME.fontWeights.semibold.toString(),
      { modifier: '[aria-current="page"]' }
    );
  });
});
