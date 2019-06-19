/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import { StyledMessage, VALIDATION } from './StyledMessage';

describe('StyledMessage', () => {
  it('renders default styling', () => {
    const { container } = render(<StyledMessage />);

    expect(container.firstChild).toHaveClass('c-txt__message');
  });

  it('renders RTL styling', () => {
    const { container } = renderRtl(<StyledMessage />);

    expect(container.firstChild).toHaveClass('is-rtl');
  });

  describe('Validaton states', () => {
    [VALIDATION.ERROR, VALIDATION.SUCCESS, VALIDATION.WARNING].forEach(validation => {
      it(`renders correct ${validation} validation styling`, () => {
        const { container } = render(<StyledMessage validation={validation} />);

        expect(container.firstChild).toHaveClass(`c-txt__message--${validation}`);
      });
    });
  });
});
