/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { css } from 'styled-components';
import { DEFAULT_THEME, getColor } from '@zendeskgarden/react-theming';
import { render } from 'garden-test-utils';
import { VALIDATION_TYPE } from '../utils/types';
import { StyledAlert, StyledTitle } from '../styled';

describe('StyledAlert', () => {
  it(`should render the styling correctly for a Notification's title`, () => {
    const validationHues: Record<VALIDATION_TYPE, string> = {
      success: 'successHue',
      error: 'dangerHue',
      warning: 'warningHue',
      info: 'neutralHue'
    };

    Object.values(validationHues).forEach(hue => {
      const { container } = render(<StyledAlert hue={hue} />);

      expect(container.firstChild).toHaveStyleRule('color', getColor(hue, 800, DEFAULT_THEME), {
        modifier: css`
          ${StyledTitle}
        ` as any
      });
    });
  });
});
