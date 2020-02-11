/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { Notification } from './Notification';

describe('Notification', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLDivElement>();
    const { container } = render(<Notification ref={ref} />);

    expect(container.firstChild).toBe(ref.current);
  });

  it('has a default role attribute', () => {
    const { container } = render(<Notification type="success" />);

    expect(container.firstChild).toHaveAttribute('role', 'status');
  });

  it('can have its role attribute modified', () => {
    const { container } = render(<Notification type="error" role="alert" />);

    expect(container.firstChild).toHaveAttribute('role', 'alert');
  });

  it('can have its role attribute removed', () => {
    const { container } = render(<Notification role={null as any} />);

    expect(container.firstChild).not.toHaveAttribute('role');
  });
});
