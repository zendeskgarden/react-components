/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { StyledTextMediaFigure } from './StyledTextMediaFigure';
import TestIcon from '@zendeskgarden/svg-icons/src/16/gear-stroke.svg';

describe('StyledTextMediaFigure', () => {
  it('renders the expected element', () => {
    const { container } = render(
      <StyledTextMediaFigure>
        <TestIcon />
      </StyledTextMediaFigure>
    );

    expect(container.firstChild!.nodeName).toBe('svg');
    expect(container.firstChild).toHaveStyleRule('width', '16px');
  });
});
