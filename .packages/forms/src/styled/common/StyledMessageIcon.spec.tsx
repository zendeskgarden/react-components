/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import TestIcon from '@zendeskgarden/svg-icons/src/16/gear-stroke.svg';
import { render } from 'garden-test-utils';
import React from 'react';

import { StyledMessageIcon } from './StyledMessageIcon';

describe('StyledMessageIcon', () => {
  it('renders the expected element', () => {
    const { container } = render(
      <StyledMessageIcon>
        <TestIcon />
      </StyledMessageIcon>
    );

    expect(container.firstChild!.nodeName).toBe('svg');
  });
});
