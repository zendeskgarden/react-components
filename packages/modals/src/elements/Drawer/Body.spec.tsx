/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { Drawer } from './Drawer';

describe('Drawer.Body', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLDivElement>();
    const { getByText } = render(
      <Drawer isOpen>
        <Drawer.Body ref={ref}>content</Drawer.Body>
      </Drawer>
    );

    expect(getByText('content')).toBe(ref.current);
  });
});
