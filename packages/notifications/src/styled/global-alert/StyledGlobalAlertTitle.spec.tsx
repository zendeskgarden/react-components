/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';

import { StyledGlobalAlertTitle } from './StyledGlobalAlertTitle';

describe('StyledGlobalAlertTitle', () => {
  it('renders default styles', () => {
    const { getByText } = render(
      <StyledGlobalAlertTitle type="info">title</StyledGlobalAlertTitle>
    );

    expect(getByText('title')).toHaveStyleRule('font-weight', '600');
    expect(getByText('title')).toHaveStyleRule('margin-right', '8px');
  });

  it('renders in RTL mode', () => {
    const { getByText } = renderRtl(
      <StyledGlobalAlertTitle type="info">title</StyledGlobalAlertTitle>
    );

    expect(getByText('title')).toHaveStyleRule('font-weight', '600');
    expect(getByText('title')).toHaveStyleRule('margin-left', '8px');
  });

  it('renders "isRegular" styles', () => {
    const { getByText } = render(
      <StyledGlobalAlertTitle isRegular type="info">
        title
      </StyledGlobalAlertTitle>
    );

    expect(getByText('title')).toHaveStyleRule('font-weight', '400');
  });
});
