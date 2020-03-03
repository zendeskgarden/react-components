/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import { StyledStepContent } from './StyledStepContent';

describe('StyledStepContent', () => {
  it('renders default styling correctly', () => {
    const { container } = render(<StyledStepContent />);

    expect(container.firstChild).toHaveStyleRule('margin', '6px 0px 6px 12px');
  });

  it('renders RTL styling correctly', () => {
    const { container } = renderRtl(<StyledStepContent />);

    expect(container.firstChild).toHaveStyleRule('margin', '6px 12px 6px 0px');
  });
});
