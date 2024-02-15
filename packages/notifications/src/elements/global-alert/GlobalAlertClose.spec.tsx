/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { GlobalAlertClose } from './GlobalAlertClose';

describe('GlobalAlertClose', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLButtonElement>();
    const { container } = render(<GlobalAlertClose ref={ref} />);

    expect(container.firstChild).toBe(ref.current);
  });
});
