/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import StyledCheckMessage from './StyledCheckMessage';

describe('StyledCheckMessage', () => {
  it('renders default styling correctly', () => {
    const { container } = render(<StyledCheckMessage />);

    expect(container.firstChild).toHaveClass('c-chk__message');
  });

  ['success', 'warning', 'error'].forEach(validation => {
    it(`renders ${validation} validation styling correctly`, () => {
      const { container } = render(<StyledCheckMessage validation={validation} />);

      expect(container.firstChild).toHaveClass(`c-chk__message--${validation}`);
    });
  });

  it('renders RTL styling correctly', () => {
    const { container } = renderRtl(<StyledCheckMessage />);

    expect(container.firstChild).toHaveClass('is-rtl');
  });
});
