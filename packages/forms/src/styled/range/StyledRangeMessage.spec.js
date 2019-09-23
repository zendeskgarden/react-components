/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import StyledRangeMessage from './StyledRangeMessage';

describe('StyledTextMessage', () => {
  it('renders default styling correctly', () => {
    const { container } = render(<StyledRangeMessage />);

    expect(container.firstChild).toHaveClass('c-range__message');
  });

  ['success', 'warning', 'error'].forEach(validation => {
    it(`renders ${validation} validation styling correctly`, () => {
      const { container } = render(<StyledRangeMessage validation={validation} />);

      expect(container.firstChild).toHaveClass(`c-range__message--${validation}`);
    });
  });

  it('renders RTL styling correctly', () => {
    const { container } = renderRtl(<StyledRangeMessage />);

    expect(container.firstChild).toHaveClass('is-rtl');
  });
});
