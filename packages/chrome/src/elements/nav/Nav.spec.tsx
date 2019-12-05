/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { PALETTE } from '@zendeskgarden/react-theming';
import { Nav } from './Nav';

describe('Nav', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLDivElement>();
    const { container } = render(<Nav ref={ref} />);

    expect(container.firstChild).toBe(ref.current);
  });

  it('renders correct width if collapsed', () => {
    const { container } = render(<Nav />);

    expect(container.firstChild).toHaveStyleRule('width', '60px');
  });

  it('renders correct width if expanded', () => {
    const { container } = render(<Nav isExpanded />);

    expect(container.firstChild).toHaveStyleRule('width', '200px');
  });

  describe('BackgroundColor', () => {
    it('applies light styling if color is below luminance threshold', () => {
      const { container } = render(<Nav backgroundColor={PALETTE.green[100]} />);

      expect(container.firstChild).toHaveAttribute('data-test-light', 'true');
      expect(container.firstChild).toHaveAttribute('data-test-dark', 'false');
    });

    it('applies dark styling if color is above luminance threshold', () => {
      const { container } = render(<Nav backgroundColor={PALETTE.green[800]} />);

      expect(container.firstChild).toHaveAttribute('data-test-light', 'false');
      expect(container.firstChild).toHaveAttribute('data-test-dark', 'true');
    });
  });
});
