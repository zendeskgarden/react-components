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
    const TestComponent = ({ type = 'info', href = '#' }: { type: Type; href?: string }) => (
      <GlobalAlert type={type}>
        <GlobalAlert.Title>title</GlobalAlert.Title>
        <GlobalAlert.Content>
          content
          <GlobalAlert.Anchor href={href}>anchor</GlobalAlert.Anchor>
        </GlobalAlert.Content>
        <GlobalAlert.Button>button</GlobalAlert.Button>
        <GlobalAlert.Close />
      </GlobalAlert>
    );

    it('renders in RTL mode', () => {
      const { getByText, getByRole } = renderRtl(<TestComponent type="info" />);

      expect(getByText('title')).toHaveStyleRule('padding-right', '8px');
      expect(getByText('content')).toHaveStyleRule('margin-right', '8px', {
        modifier: '& a'
      });
      expect(getByRole('status')).toHaveStyleRule('margin-right', 'auto', {
        modifier: '& > button:first-of-type'
      });
    });
  });
});
