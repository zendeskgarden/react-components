/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { SheetCloseButton as Close } from './Close';

describe('Sheet.Close', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLDivElement>();
    const { getByTestId } = render(<Close data-test-id="close-btn" ref={ref} />);

    const btn = getByTestId('close-btn');

    expect(btn).toBe(ref.current);
  });
});
