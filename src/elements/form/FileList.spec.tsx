/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { render } from 'garden-test-utils';
import React from 'react';

import { FileList } from './FileList';

describe('FileList', () => {
  it('renders the expected HTML element', () => {
    const { container } = render(<FileList />);

    expect(container.firstChild!.nodeName).toBe('UL');
  });

  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLUListElement>();
    const { container } = render(<FileList ref={ref} />);

    expect(container.firstChild).toBe(ref.current);
  });
});
