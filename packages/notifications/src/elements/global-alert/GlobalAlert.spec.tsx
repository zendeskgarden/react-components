/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';

import { GlobalAlert } from './GlobalAlert';
import { TYPE, Type } from '../../types';

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

  describe('subcomponents', () => {
    const TestComponent = ({ type = 'info', href = '#' }: { type: Type; href?: string }) => (
      <GlobalAlert type={type}>
        <GlobalAlert.Title>title</GlobalAlert.Title>
        <GlobalAlert.Content>content</GlobalAlert.Content>
        <GlobalAlert.Anchor href={href}>anchor</GlobalAlert.Anchor>
        <GlobalAlert.Button>button</GlobalAlert.Button>
        <GlobalAlert.Close />
      </GlobalAlert>
    );

    it.each(TYPE)('renders "%s" type', type => {
      expect(() => render(<TestComponent type={type} />)).not.toThrow();
      expect(() => renderRtl(<TestComponent type={type} />)).not.toThrow();
    });
  });
});
