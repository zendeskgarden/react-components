/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { DrawerModal } from './DrawerModal';

describe('DrawerModal.Body', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLDivElement>();
    const { getByText } = render(
      <DrawerModal isOpen>
        <DrawerModal.Body ref={ref}>content</DrawerModal.Body>
      </DrawerModal>
    );

    expect(getByText('content')).toBe(ref.current);
  });
});
