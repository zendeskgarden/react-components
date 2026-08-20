/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { render } from 'garden-test-utils';
import React from 'react';
import styled from 'styled-components';

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

  it('renders when wrapped with styled()', () => {
    const StyledBody = styled(Drawer.Body)`
      padding-bottom: 10px;
    `;
    const { getByText } = render(
      <Drawer isOpen>
        <StyledBody>content</StyledBody>
      </Drawer>
    );

    expect(getByText('content')).toHaveStyleRule('padding-bottom', '10px');
  });
});
