/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import StyledTextMediaFigure from './StyledTextMediaFigure';

describe('StyledTextMediaFigure', () => {
  it('renders default styling correctly', () => {
    const { container } = render(<StyledTextMediaFigure />);

    expect(container.firstChild).toHaveClass('c-txt__input--media__figure');
  });
});
