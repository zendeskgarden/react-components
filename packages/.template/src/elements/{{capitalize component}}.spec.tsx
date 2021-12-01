/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { {{capitalize component}} } from './{{capitalize component}}';

describe('{{capitalize component}}', () => {
  it('is rendered as a div', () => {
    const { container } = render(<{{capitalize component}} />);

    expect(container.firstChild!.nodeName).toBe('DIV');
  });

  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLDivElement>();
    const { container } = render(<{{capitalize component}} ref={ref} />);

    expect(container.firstChild).toBe(ref.current);
  });

  describe('{{capitalize component}}.Text', () => {
    it('is rendered as a span', () => {
      const { container } = render(<{{capitalize component}}.Text />);

      expect(container.firstChild!.nodeName).toBe('SPAN');
    });

    it('passes ref to underlying DOM element', () => {
      const ref = React.createRef<HTMLSpanElement>();
      const { container } = render(<{{capitalize component}}.Text ref={ref} />);

      expect(container.firstChild).toBe(ref.current);
    });
  });
});
