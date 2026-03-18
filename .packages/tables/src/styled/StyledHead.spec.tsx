/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { render } from 'garden-test-utils';
import React from 'react';

import { StyledHead } from './StyledHead';
import { StyledHeaderRow } from './StyledHeaderRow';

describe('StyledHead', () => {
  it('renders the expected element', () => {
    const { container } = render(
      <table>
        <StyledHead />
      </table>
    );

    expect(container.firstChild!.childNodes[0].nodeName).toBe('THEAD');
  });

  it('renders sticky head styles', () => {
    const { getByTestId } = render(
      <table>
        <StyledHead $isSticky data-test-id="head">
          <StyledHeaderRow data-test-id="header" />
        </StyledHead>
      </table>
    );

    expect(getByTestId('head')).toHaveStyleRule('position', 'sticky');
    expect(getByTestId('head')).toHaveStyleRule('border-bottom-color', 'transparent', {
      modifier: `&>${StyledHeaderRow}:last-child`
    });
  });
});
