/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import { StyledContent } from './StyledContent';

describe('StyledContent', () => {
  it('renders default styling correctly', () => {
    const { container } = render(<StyledContent />);

    expect(container.firstChild).toHaveStyleRule('margin', '6px 0px 6px 12px');
    expect(container.firstChild).toHaveStyleRule('padding', '16px 0px 16px 24px');
  });

  it('renders RTL styling correctly', () => {
    const { container } = renderRtl(<StyledContent />);

    expect(container.firstChild).toHaveStyleRule('margin', '6px 12px 6px 0px');
    expect(container.firstChild).toHaveStyleRule('padding', '16px 24px 16px 0px');
  });
});
