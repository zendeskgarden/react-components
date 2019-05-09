/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import MediaFigure from './MediaFigure';

describe('MediaFigure', () => {
  it('renders default styling', () => {
    const { container } = render(<MediaFigure />);

    expect(container.firstChild).toHaveClass('c-txt__input--media__figure');
  });
});
