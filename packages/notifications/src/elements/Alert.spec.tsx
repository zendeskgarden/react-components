/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { Alert } from './Alert';

describe('Alert', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLDivElement>();
    const { container } = render(<Alert type="success" ref={ref} />);

    expect(container.firstChild).toBe(ref.current);
  });

  it('has a default role attribute', () => {
    const { container } = render(<Alert type="error" />);

    expect(container.firstChild).toHaveAttribute('role', 'alert');
  });

  it('can have its role attribute modified', () => {
    // eslint-disable-next-line jsx-a11y/prefer-tag-over-role
    const { container } = render(<Alert type="info" role="status" />);

    expect(container.firstChild).toHaveAttribute('role', 'status');
  });

  it('can have its role attribute removed', () => {
    const { container } = render(<Alert type="info" role={null as any} />);

    expect(container.firstChild).not.toHaveAttribute('role');
  });
});
