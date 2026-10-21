/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createRef } from 'react';

import { render } from '../../test/render';
import DEFAULT_THEME from '../../theming/elements/theme';
import { Close } from './Close';

describe('Close', () => {
  it('renders a close SVG icon', () => {
    const { container } = render(<Close />);

    expect(container.querySelector('svg')).not.toBeNull();
  });

  it('renders the x-small icon at the themed slot size', () => {
    const { container } = render(<Close />);
    const svg = container.querySelector('svg');

    expect(svg).toHaveAttribute('viewBox', '0 0 20 20');
    expect(container.firstChild).toHaveStyleRule('width', DEFAULT_THEME.iconSizes.sm, {
      modifier: 'svg'
    });
    expect(container.firstChild).toHaveStyleRule('height', DEFAULT_THEME.iconSizes.sm, {
      modifier: 'svg'
    });
  });

  it('renders with default aria-label', () => {
    const { container } = render(<Close />);

    expect(container.firstChild).toHaveAttribute('aria-label', 'Remove');
  });

  it('renders with custom aria-label', () => {
    const { container } = render(<Close aria-label="Delete" />);

    expect(container.firstChild).toHaveAttribute('aria-label', 'Delete');
  });

  it('passes ref to underlying DOM element', () => {
    const ref = createRef<HTMLButtonElement>();
    const { container } = render(<Close ref={ref} />);

    expect(container.firstChild).toBe(ref.current);
  });
});
