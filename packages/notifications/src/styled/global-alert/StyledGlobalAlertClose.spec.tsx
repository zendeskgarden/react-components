/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { DEFAULT_THEME, getColorV8 } from '@zendeskgarden/react-theming';
import XStrokeIcon from '@zendeskgarden/svg-icons/src/16/x-stroke.svg';

import { TYPE } from '../../types';
import { COMPONENT_ID, StyledGlobalAlertClose } from './StyledGlobalAlertClose';

describe('StyledGlobalAlertClose', () => {
  it.each(TYPE)('renders "%s" type', type => {
    const { getByRole } = render(
      <StyledGlobalAlertClose alertType={type}>
        <XStrokeIcon />
      </StyledGlobalAlertClose>
    );

    expect(getByRole('button')).toHaveStyleRule(
      'background-color',
      {
        success: getColorV8(DEFAULT_THEME.colors.successHue, 100, DEFAULT_THEME, 0.08),
        warning: getColorV8(DEFAULT_THEME.colors.warningHue, 800, DEFAULT_THEME, 0.08),
        error: getColorV8(DEFAULT_THEME.colors.dangerHue, 100, DEFAULT_THEME, 0.08),
        info: getColorV8(DEFAULT_THEME.colors.primaryHue, 700, DEFAULT_THEME, 0.08)
      }[type] as string,
      { modifier: '&:hover' }
    );
  });

  describe('`data-garden-id` attribute', () => {
    it('has the correct `data-garden-id`', () => {
      const { container } = render(
        <StyledGlobalAlertClose alertType="success">
          <XStrokeIcon />
        </StyledGlobalAlertClose>
      );

      expect(container.firstChild).toHaveAttribute('data-garden-id', COMPONENT_ID);
    });
  });
});
