/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createRef } from 'react';

import { render } from '../../test/render';
import { GlobalAlertTitle } from './GlobalAlertTitle';

describe('GlobalAlertTitle', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = createRef<HTMLDivElement>();
    const { container } = render(<GlobalAlertTitle ref={ref} />);

    expect(container.firstChild).toBe(ref.current);
  });
});
