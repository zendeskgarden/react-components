/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';

import { Type } from '../../types';
import { GlobalAlert } from './GlobalAlert';

describe('GlobalAlert', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLDivElement>();
    const { container } = render(<GlobalAlert type="success" ref={ref} />);

    expect(container.firstChild).toBe(ref.current);
  });

  it('has a default role attribute', () => {
    const { container } = render(<GlobalAlert type="error" />);

    expect(container.firstChild).toHaveAttribute('role', 'status');
  });

  it('can have its role attribute modified', () => {
    const { container } = render(<GlobalAlert type="info" role="alert" />);

    expect(container.firstChild).toHaveAttribute('role', 'alert');
  });

  it('can have its role attribute removed', () => {
    const { container } = render(<GlobalAlert type="info" role={null as any} />);

    expect(container.firstChild).not.toHaveAttribute('role');
  });

  describe('with subcomponents', () => {
    const TestComponent = ({ type = 'info' }: { type: Type }) => (
      <GlobalAlert type={type}>
        <GlobalAlert.Title>title</GlobalAlert.Title>
        <GlobalAlert.Content>content</GlobalAlert.Content>
        <GlobalAlert.Button>button</GlobalAlert.Button>
        <GlobalAlert.Close />
      </GlobalAlert>
    );

    it('renders in RTL mode', () => {
      const { getByText } = renderRtl(<TestComponent type="info" />);

      expect(getByText('title')).toHaveStyleRule('margin-left', '8px');
      expect(getByText('button')).toHaveStyleRule('margin', '-6px 8px -6px 0');
    });
  });
});
