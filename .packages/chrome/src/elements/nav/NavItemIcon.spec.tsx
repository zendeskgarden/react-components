/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { render } from 'garden-test-utils';
import React from 'react';

import { NavItemIcon } from './NavItemIcon';

describe('NavItemIcon', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<SVGSVGElement>();
    const { container } = render(
      <NavItemIcon>
        <svg ref={ref}>test</svg>
      </NavItemIcon>
    );

    expect(container.firstChild).toBe(ref.current);
  });
});
