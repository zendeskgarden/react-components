/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import Anchor from './Anchor';

describe('Anchor', () => {
  it('renders external SVG if provided', () => {
    const { container } = render(<Anchor isExternal />);

    expect(container.querySelector('svg')).not.toBeNull();
  });
});
