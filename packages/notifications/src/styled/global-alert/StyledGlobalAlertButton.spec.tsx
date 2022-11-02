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
import { StyledGlobalAlertButton } from './StyledGlobalAlertButton';

describe('StyledGlobalAlertButton', () => {
  it.each(TYPE)('renders "%s" type', type => {
    const { getByRole } = render(<StyledGlobalAlertButton isPrimary kind={type} />);

    expect(getByRole('button')).toHaveStyleRule(
      'background-color',
      {
        success: getColor(DEFAULT_THEME.colors.successHue, 800, DEFAULT_THEME),
        warning: getColor(DEFAULT_THEME.colors.warningHue, 800, DEFAULT_THEME),
        error: getColor(DEFAULT_THEME.colors.dangerHue, 800, DEFAULT_THEME),
        info: getColor(DEFAULT_THEME.colors.primaryHue, 600, DEFAULT_THEME)
      }[type]
    );
  });
});
