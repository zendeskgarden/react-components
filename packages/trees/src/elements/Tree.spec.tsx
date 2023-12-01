/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { Tree } from './Tree';

describe('Tree', () => {
  it('is rendered as a div', () => {
    const { container } = render(<Tree />);

    expect(container.firstChild!.nodeName).toBe('DIV');
  });

  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLDivElement>();
    const { container } = render(<Tree ref={ref} />);

    expect(container.firstChild).toBe(ref.current);
  });

  describe('Tree.Text', () => {
    it('is rendered as a span', () => {
      const { container } = render(<Tree.Text />);

      expect(container.firstChild!.nodeName).toBe('SPAN');
    });

    it('passes ref to underlying DOM element', () => {
      const ref = React.createRef<HTMLSpanElement>();
      const { container } = render(<Tree.Text ref={ref} />);

      expect(container.firstChild).toBe(ref.current);
    });
  });
});
