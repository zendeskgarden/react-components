/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { PALETTE } from '@zendeskgarden/react-theming';
import { default as Chrome } from './Chrome';

describe('Chrome', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLDivElement>();
    const { container } = render(<Chrome ref={ref} />);

    expect(container.firstChild).toBe(ref.current);
  });

  describe('Hue', () => {
    it('applies light styling if hue is below luminance threshold', () => {
      const { container } = render(<Chrome hue={PALETTE.green[100]} />);

      expect(container.firstChild).toHaveAttribute('data-test-light', 'true');
      expect(container.firstChild).toHaveAttribute('data-test-dark', 'false');
    });

    it('applies dark styling if hue is above luminance threshold', () => {
      const { container } = render(<Chrome hue={PALETTE.green[800]} />);

      expect(container.firstChild).toHaveAttribute('data-test-light', 'false');
      expect(container.firstChild).toHaveAttribute('data-test-dark', 'true');
    });
  });
});
