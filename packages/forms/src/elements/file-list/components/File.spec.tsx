/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { File } from './File';

describe('File', () => {
  it('renders the expected HTML element', () => {
    const { container } = render(<File />);

    expect(container.firstChild!.nodeName).toBe('DIV');
  });

  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLDivElement>();
    const { container } = render(<File ref={ref} />);

    expect(container.firstChild).toBe(ref.current);
  });

  it('renders `type` as expected', () => {
    const { container } = render(<File type="generic" />);

    expect(container.firstChild!.firstChild).not.toBeNull();
  });

  describe('children', () => {
    it('wraps child text', () => {
      const { container } = render(<File>test</File>);

      expect(container.firstChild!.firstChild!.nodeName).toBe('SPAN');
      expect(container.firstChild!.firstChild).toHaveTextContent('test');
    });

    it('renders unwrapped child element', () => {
      const { container } = render(
        <File>
          <div>test</div>
        </File>
      );

      expect(container.firstChild!.firstChild!.nodeName).toBe('DIV');
      expect(container.firstChild!.firstChild).toHaveTextContent('test');
    });
  });
});
