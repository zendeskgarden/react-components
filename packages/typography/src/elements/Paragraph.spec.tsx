/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import { Paragraph } from './Paragraph';

describe('Paragraph', () => {
  it('applies correct styling with RTL locale', () => {
    const { container } = renderRtl(<Paragraph />);

    expect(container.firstChild).toHaveStyleRule('direction', 'rtl');
  });

  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLParagraphElement>();
    const { container } = render(<Paragraph ref={ref} />);

    expect(container.firstChild).toBe(ref.current);
  });
});
