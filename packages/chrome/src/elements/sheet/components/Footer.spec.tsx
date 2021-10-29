/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { SheetFooter as Footer } from './Footer';

describe('Sheet.Footer', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLDivElement>();
    const { container } = render(<Footer ref={ref} />);

    expect(container.firstChild).toBe(ref.current);
  });

  it('is styled correctly when isCompact', () => {
    const { container } = render(<Footer isCompact />);

    expect(container.firstChild).toHaveStyleRule('justify-content', 'center');
    expect(container.firstChild).toHaveStyleRule('padding', '10px');
  });
});
