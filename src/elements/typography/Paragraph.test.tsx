/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createRef } from 'react';

import { RTL_THEME, render } from '../../test/render';
import { Paragraph } from './Paragraph';

describe('Paragraph', () => {
  it('applies correct styling with RTL locale', () => {
    const { container } = render(<Paragraph />, {
      theme: RTL_THEME
    });

    expect(container.firstChild).toHaveStyleRule('direction', 'rtl');
  });

  it('passes ref to underlying DOM element', () => {
    const ref = createRef<HTMLParagraphElement>();
    const { container } = render(<Paragraph ref={ref} />);

    expect(container.firstChild).toBe(ref.current);
  });
});
