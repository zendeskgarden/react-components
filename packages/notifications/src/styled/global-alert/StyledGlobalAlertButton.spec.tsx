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
import { COMPONENT_ID, StyledGlobalAlertButton } from './StyledGlobalAlertButton';
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
        success: getColorV8('successHue', 800, DEFAULT_THEME),
        warning: getColorV8('warningHue', 800, DEFAULT_THEME),
        error: getColorV8('dangerHue', 800, DEFAULT_THEME),
        info: getColorV8('primaryHue', 600, DEFAULT_THEME)
      }[type]
    );
  });

  describe('`data-garden-id` attribute', () => {
    it('has the correct `data-garden-id`', () => {
      const { container } = render(<StyledGlobalAlertButton alertType="info" />);

      expect(container.firstChild).toHaveAttribute('data-garden-id', COMPONENT_ID);
    });
  });
});
