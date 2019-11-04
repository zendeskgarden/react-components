/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import Inline from './Inline';

describe('Inline', () => {
  it('applies size correctly', () => {
    const { container } = render(<Inline size={25} />);

    expect(container.firstChild).toHaveAttribute('width', '25');
    expect(container.firstChild).toHaveAttribute('height', '6.25');
  });

  it('applies color correctly', () => {
    const { container } = render(<Inline color="red" />);

    expect(container.firstChild).toHaveStyleRule('color', 'red');
  });
});
