/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';

import Message from './Message';

describe('Message', () => {
  it('renders default styling', () => {
    const { container } = render(<Message />);

    expect(container.firstChild).toHaveClass('c-txt__message');
  });

  it('renders RTL styling', () => {
    const { container } = renderRtl(<Message />);

    expect(container.firstChild).toHaveClass('is-rtl');
  });

  describe('validation', () => {
    ['success', 'warning', 'error'].forEach(validation => {
      it(`renders ${validation} styling if provided`, () => {
        const { container } = render(<Message validation={validation} />);

        expect(container.firstChild).toHaveClass(`c-txt__message--${validation}`);
      });
    });
  });
});
