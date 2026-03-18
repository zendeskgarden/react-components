/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { render } from 'garden-test-utils';
import React from 'react';

import { HeaderItemIcon } from './HeaderItemIcon';

describe('HeaderItemIcon', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<SVGSVGElement>();
    const { container } = render(
      <HeaderItemIcon>
        <svg ref={ref}>test</svg>
      </HeaderItemIcon>
    );

    expect(container.firstChild).toBe(ref.current);
  });
});
