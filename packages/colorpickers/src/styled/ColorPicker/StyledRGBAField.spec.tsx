/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { render, renderRtl } from 'garden-test-utils';
import React from 'react';

import { StyledRGBAField } from './StyledRGBAField';

describe('StyledRGBAField', () => {
  it('renders default style', () => {
    const { container } = render(<StyledRGBAField />);

    expect(container.firstChild).toHaveStyleRule('margin-left', '6px');
    expect(container.firstChild).not.toHaveStyleRule('margin-right');
  });

  it('renders RTL correctly', () => {
    const { container } = renderRtl(<StyledRGBAField />);

    expect(container.firstChild).toHaveStyleRule('margin-right', '6px');
    expect(container.firstChild).not.toHaveStyleRule('margin-left');
  });
});
