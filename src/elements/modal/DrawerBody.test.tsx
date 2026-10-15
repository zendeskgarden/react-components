/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createRef } from 'react';
import styled from 'styled-components';

import { render } from '../../test/render';
import { COMPONENT_IDS } from '../utils';
import { Drawer } from './Drawer';

describe('Drawer.Body', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = createRef<HTMLDivElement>();
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
        <StyledBody
          data-garden-id={COMPONENT_IDS['modals.body']}
          data-garden-version={PACKAGE_VERSION}
        >
          content
        </StyledBody>
      </Drawer>
    );

    expect(getByText('content')).toHaveStyleRule('padding-bottom', '10px');
  });
});
