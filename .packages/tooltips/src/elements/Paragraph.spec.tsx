/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { render } from 'garden-test-utils';
import React from 'react';

import { Paragraph } from './Paragraph';

describe('Paragraph', () => {
  it('applies custom attributes if provided', () => {
    const { container } = render(<Paragraph data-test-id="paragraph" />);

    expect(container.firstChild).toHaveAttribute('data-test-id', 'paragraph');
  });

  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLDivElement>();
    const { container } = render(<Paragraph ref={ref} />);

    expect(container.firstChild).toBe(ref.current);
  });
});
