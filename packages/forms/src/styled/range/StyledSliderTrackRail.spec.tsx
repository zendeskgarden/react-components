/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import { StyledSliderTrackRail } from './StyledSliderTrackRail';

describe('StyledSliderTrackRail', () => {
  it('renders the expected element', () => {
    const { container } = render(<StyledSliderTrackRail />);

    expect(container.firstChild!.nodeName).toBe('DIV');
  });

  it('renders expected RTL styling', () => {
    const { container } = renderRtl(<StyledSliderTrackRail />);

    expect(container.firstChild).toHaveStyleRule('margin', '0 -10px 0 10px');
  });
});
