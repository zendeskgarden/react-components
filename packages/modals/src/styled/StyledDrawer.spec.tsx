/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { getRenderFn } from 'garden-test-utils';
import { PALETTE, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { StyledDrawer } from './StyledDrawer';
import { rgba } from 'polished';

describe('StyledDrawer', () => {
  type Args = [
    'dark' | 'light',
    {
      bgColor: string;
      borderColor: string;
      boxShadowColor: string;
    }
  ];

  it.each<Args>([
    [
      'light',
      {
        bgColor: PALETTE.white,
        borderColor: PALETTE.grey[300],
        boxShadowColor: rgba(PALETTE.grey[1200], DEFAULT_THEME.opacity[200])
      }
    ],
    [
      'dark',
      {
        bgColor: PALETTE.grey[1000],
        borderColor: PALETTE.grey[800],
        boxShadowColor: rgba(PALETTE.grey[1200], DEFAULT_THEME.opacity[1000])
      }
    ]
  ])('renders in "%s" mode', (mode, { bgColor, borderColor, boxShadowColor }) => {
    const { container } = getRenderFn(mode)(<StyledDrawer />);

    expect(container.firstChild).toHaveStyleRule('background-color', bgColor);
    expect(container.firstChild).toHaveStyleRule('border-color', borderColor);
    expect(container.firstChild).toHaveStyleRule('box-shadow', `0 20px 28px 0 ${boxShadowColor}`);
  });

  it('renders RTL styling', () => {
    const { container } = getRenderFn('light', true)(<StyledDrawer />);

    expect(container.firstChild).toHaveStyleRule('direction', 'rtl');
    expect(container.firstChild).toHaveStyleRule('border-right', '1px solid');
  });
});
