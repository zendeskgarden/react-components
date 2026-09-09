/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { StyledCalendarHeading } from './StyledCalendarHeading';

describe('StyledCalendarHeading', () => {
  it('spans the full width of its month, so it does not wrap or squish when compact', () => {
    const { container } = render(<StyledCalendarHeading $isCompact={false} />);

    expect(container.firstChild).toHaveStyleRule('grid-column', '1/8');
  });
});
