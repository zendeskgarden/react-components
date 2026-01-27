/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { PALETTE } from '@zendeskgarden/react-theming';
import { render } from 'garden-test-utils';
import React from 'react';

import { Type } from '../../types';
import { StyledGlobalAlertButton } from './StyledGlobalAlertButton';
import { colorStyles } from './StyledGlobalAlertClose';

jest.mock('./StyledGlobalAlertClose');

describe('StyledGlobalAlertButton', () => {
  it('uses basic styles', () => {
    render(<StyledGlobalAlertButton isBasic $alertType="info" />);

    expect(colorStyles).toHaveBeenCalledTimes(1);
  });

  it.each<{ type: Type; color: string }>([
    { type: 'success', color: PALETTE.green[900] },
    { type: 'error', color: PALETTE.red[900] },
    { type: 'warning', color: PALETTE.yellow[700] },
    { type: 'info', color: PALETTE.blue[700] }
  ])('renders $type background color', ({ type, color }) => {
    const { getByRole } = render(<StyledGlobalAlertButton isPrimary $alertType={type} />);

    expect(getByRole('button')).toHaveStyleRule('background-color', color);
  });

  describe('`data-garden-id` attribute', () => {
    it('has the correct `data-garden-id`', () => {
      const { container } = render(<StyledGlobalAlertButton $alertType="info" />);

      expect(container.firstChild).toHaveAttribute(
        'data-garden-id',
        'notifications.global_alert.button'
      );
    });
  });
});
