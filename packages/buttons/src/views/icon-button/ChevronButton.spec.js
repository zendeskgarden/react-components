/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import ChevronButton from './ChevronButton';

describe('ChevronButton', () => {
  it('rotates icon if prop is provided', () => {
    const { container } = render(<ChevronButton rotated />);

    expect(container.firstChild.firstChild).toHaveClass('is-rotated');
  });
});
