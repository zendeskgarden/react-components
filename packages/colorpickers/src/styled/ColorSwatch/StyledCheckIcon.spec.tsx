/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { StyledIcon } from './StyledIcon';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';
import CheckIcon from '@zendeskgarden/svg-icons/src/12/check-sm-fill.svg';

describe('StyledCheckIcon', () => {
  it('renders a light check icon on a dark background', () => {
    const { container } = render(
      <StyledIcon color="#000">
        <CheckIcon />
      </StyledIcon>
    );

    expect(container.firstChild).toHaveStyleRule('color', DEFAULT_THEME.colors.background);
  });

  it('renders a dark check icon on a light background', () => {
    const { container } = render(
      <StyledIcon color="#FFF">
        <CheckIcon />
      </StyledIcon>
    );

    expect(container.firstChild).toHaveStyleRule('color', DEFAULT_THEME.palette.grey[800]);
  });
});
