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
import { colorStyles } from './StyledGlobalAlertClose';

jest.mock('./StyledGlobalAlertClose');

describe('StyledGlobalAlertButton', () => {
  it('uses basic styles', () => {
    render(<StyledGlobalAlertButton isBasic alertType="info" />);

    expect(colorStyles).toHaveBeenCalledTimes(1);
  });

  it.each(TYPE)('renders "%s" type', type => {
    const { getByRole } = render(<StyledGlobalAlertButton isPrimary alertType={type} />);

    expect(getByRole('button')).toHaveStyleRule(
      'background-color',
      {
        success: getColor('successHue', 800, DEFAULT_THEME),
        warning: getColor('warningHue', 800, DEFAULT_THEME),
        error: getColor('dangerHue', 800, DEFAULT_THEME),
        info: getColor('primaryHue', 600, DEFAULT_THEME)
      }[type]
    );
  });
});
