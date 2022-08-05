/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';

import { Tab } from '../';

describe('Tab', () => {
  it('is able to render without parent Tabs component', () => {
    expect(() => render(<Tab>Content</Tab>)).not.toThrow();
  });

  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLDivElement>();
    const { container } = render(<Tab ref={ref} />);

    expect(container.firstChild).toBe(ref.current);
  });

  it('contains a role when disabled', () => {
    const { container } = render(<Tab disabled />);

    expect(container.firstChild).toHaveAttribute('role', 'tab');
  });
});
