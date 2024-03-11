/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { DEFAULT_THEME, getColorV8 } from '@zendeskgarden/react-theming';

import { TYPE } from '../../types';
import { StyledGlobalAlert } from './StyledGlobalAlert';

describe('StyledGlobalAlert', () => {
  it.each(TYPE)('renders "%s" type', type => {
    const { container } = render(<StyledGlobalAlert alertType={type} />);

    expect(container.firstChild).toHaveStyleRule(
      'background-color',
      {
        success: getColorV8(DEFAULT_THEME.colors.successHue, 600, DEFAULT_THEME),
        error: getColorV8(DEFAULT_THEME.colors.dangerHue, 600, DEFAULT_THEME),
        warning: getColorV8(DEFAULT_THEME.colors.warningHue, 300, DEFAULT_THEME),
        info: getColorV8(DEFAULT_THEME.colors.primaryHue, 200, DEFAULT_THEME)
      }[type]
    );
  });
});
