/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { StyledClose } from './StyledClose';

describe('StyledClose', () => {
  it('renders default Styledclose styling', () => {
    const { container } = render(<StyledClose />);

    expect(container.firstChild).toHaveClass('c-dialog__close');
  });

  describe('state', () => {
    it('renders hovered styling correctly if provided', () => {
      const { container } = render(<StyledClose hovered />);

      expect(container.firstChild).toHaveClass('is-hovered');
    });
  });
});
