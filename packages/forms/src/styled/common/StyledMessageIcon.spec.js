/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { StyledMessageIcon } from './StyledMessageIcon';
import TestIcon from '@zendeskgarden/svg-icons/src/16/gear-stroke.svg';

describe('StyledMessageIcon', () => {
  it('renders the expected element', () => {
    const { container } = render(
      <StyledMessageIcon>
        <TestIcon />
      </StyledMessageIcon>
    );

    expect(container.firstChild.nodeName).toBe('svg');
  });

  describe('Validation', () => {
    ['success', 'warning', 'error'].forEach(validation => {
      it(`renders ${validation} styling if provided`, () => {
        const { container } = render(<StyledMessageIcon validation={validation} />);

        expect(container.firstChild.nodeName).toBe('svg');
      });
    });
  });
});
