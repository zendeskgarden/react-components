/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { PALETTE } from '@zendeskgarden/react-theming';
import { render, renderDark } from 'garden-test-utils';
import React from 'react';

import { StyledDrawerHeader } from './StyledDrawerHeader';

describe('StyledDrawerHeader', () => {
  it.each([['light'], ['dark']])('gets the correct %s mode default color', mode => {
    const renderFn = mode === 'light' ? render : renderDark;
    const { container } = renderFn(<StyledDrawerHeader />);

    expect(container.firstChild).toHaveStyleRule(
      'color',
      mode === 'light' ? PALETTE.grey[900] : PALETTE.grey[300]
    );
  });

  it.each([['light'], ['dark']])('gets the correct %s mode danger color', mode => {
    const renderFn = mode === 'light' ? render : renderDark;
    const { container } = renderFn(<StyledDrawerHeader $isDanger />);

    expect(container.firstChild).toHaveStyleRule(
      'color',
      mode === 'light' ? PALETTE.red[700] : PALETTE.red[400]
    );
  });
});
