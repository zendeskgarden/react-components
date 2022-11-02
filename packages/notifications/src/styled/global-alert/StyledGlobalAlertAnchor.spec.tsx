/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { DEFAULT_THEME, getColor } from '@zendeskgarden/react-theming';

import { TYPE } from '../../types';
import { StyledGlobalAlertAnchor } from './StyledGlobalAlertAnchor';

describe('StyledGlobalAlertAnchor', () => {
  it.each(TYPE)('renders "%s" type', type => {
    const { getByRole } = render(<StyledGlobalAlertAnchor kind={type} href="#" />);

    expect(getByRole('link')).toHaveStyleRule(
      'color',
      {
        success: getColor(DEFAULT_THEME.colors.successHue, 100, DEFAULT_THEME),
        warning: getColor(DEFAULT_THEME.colors.warningHue, 800, DEFAULT_THEME),
        error: getColor(DEFAULT_THEME.colors.dangerHue, 100, DEFAULT_THEME),
        info: getColor(DEFAULT_THEME.colors.primaryHue, 700, DEFAULT_THEME)
      }[type]
    );
  });
});
