/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createRef } from 'react';

import { render } from '../../test/render';
import PALETTE from '../../theming/elements/palette';
import { Notification } from './Notification';

describe('Notification', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = createRef<HTMLDivElement>();
    const { container } = render(<Notification ref={ref} />);

    expect(container.firstChild).toBe(ref.current);
  });

  it('has a default role attribute', () => {
    const { container } = render(<Notification type="success" />);

    expect(container.firstChild).toHaveAttribute('role', 'alert');
  });

  it('can have its role attribute modified', () => {
    // eslint-disable-next-line jsx-a11y/prefer-tag-over-role
    const { container } = render(<Notification type="error" role="status" />);

    expect(container.firstChild).toHaveAttribute('role', 'status');
  });

  it('can have its role attribute removed', () => {
    const { container } = render(<Notification role={null as any} />);

    expect(container.firstChild).not.toHaveAttribute('role');
  });

  it('renders neutral floating colors given no type', () => {
    const { container } = render(<Notification />);

    expect(container.firstChild).toHaveStyleRule('color', PALETTE.grey[900]);
    expect(container.firstChild).toHaveStyleRule('border-color', PALETTE.grey[300]);
    expect(container.firstChild).toHaveStyleRule('background-color', PALETTE.white);
  });

  it('renders floating styling', () => {
    const { container } = render(<Notification />);

    expect(container.firstChild).toHaveStyleRule('box-shadow', expect.any(String));
  });

  it('renders no icon given no type', () => {
    const { container } = render(<Notification />);

    expect(container.querySelector('[data-garden-id="notifications.icon"]')).toBeNull();
  });
});
