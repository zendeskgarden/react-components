/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { Gap } from './Gap';

describe('Gap', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLLIElement>();
    const { container } = render(<Gap ref={ref} />);

    expect(container.firstElementChild).toBe(ref.current);
  });
});
