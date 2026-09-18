/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { PALETTE } from '@zendeskgarden/react-theming';
import { render } from 'garden-test-utils';
import { StyledCalendarButton } from './StyledCalendarButton';

describe('StyledCalendarButton', () => {
  it('does not change background-color on hover', () => {
    const { container } = render(
      <StyledCalendarButton>
        <svg />
      </StyledCalendarButton>
    );

    expect(container.firstChild).toHaveStyleRule('background-color', 'transparent', {
      modifier: '&&:hover'
    });
  });

  it('does not change the icon color on hover', () => {
    const { container } = render(
      <StyledCalendarButton>
        <svg />
      </StyledCalendarButton>
    );

    expect(container.firstChild).toHaveStyleRule('color', PALETTE.grey[700], {
      modifier: '&&:hover svg'
    });
  });

  it('does not style itself differently while aria-expanded', () => {
    const { container } = render(
      <StyledCalendarButton aria-expanded="true">
        <svg />
      </StyledCalendarButton>
    );

    expect(container.firstChild).not.toHaveStyleRule('background-color', expect.anything(), {
      modifier: "&&[aria-expanded='true']"
    });
  });

  it('shows a text cursor, matching the rest of the input group', () => {
    const { container } = render(
      <StyledCalendarButton>
        <svg />
      </StyledCalendarButton>
    );

    expect(container.firstChild).toHaveStyleRule('cursor', 'text', { modifier: '&&' });
  });
});
