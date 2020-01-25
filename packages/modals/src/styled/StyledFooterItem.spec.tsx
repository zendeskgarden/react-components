/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import { StyledFooterItem } from './StyledFooterItem';

describe('StyledFooterItem', () => {
  it('renders default styling', () => {
    const { container } = render(<StyledFooterItem />);

    expect(container.firstChild).toHaveStyleRule('margin-left', '20px');

    expect(container.firstChild).toHaveStyleRule('margin', '0', {
      modifier: ':first-child'
    });

    expect(container.firstChild).not.toHaveStyleRule('margin', '0', {
      modifier: ':last-child'
    });
  });

  it('renders RTL styling if provided', () => {
    const { container } = renderRtl(<StyledFooterItem />);

    expect(container.firstChild).toHaveStyleRule('margin-left', '20px');

    expect(container.firstChild).not.toHaveStyleRule('margin', '0', {
      modifier: ':first-child'
    });

    expect(container.firstChild).toHaveStyleRule('margin', '0', {
      modifier: ':last-child'
    });
  });
});
