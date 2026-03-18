/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { render } from 'garden-test-utils';
import React from 'react';

import { ChevronButton } from './ChevronButton';

describe('ChevronButton', () => {
  it('renders a chevron SVG icon', () => {
    const { container } = render(<ChevronButton />);

    expect(container.querySelector('svg')).not.toBeNull();
  });

  it('rotates icon if prop is provided', () => {
    const { container } = render(<ChevronButton isRotated />);

    expect(container.querySelector('svg')).toHaveStyleRule('transform', 'rotate(+180deg)');
  });
});
