/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { css } from 'styled-components';
import { render, renderRtl } from 'garden-test-utils';
import Inline, { StyledCircle } from './Inline';

describe('Inline', () => {
  it('applies size correctly', () => {
    const { container } = render(<Inline size={25} />);

    expect(container.firstChild).toHaveAttribute('width', '25');
    expect(container.firstChild).toHaveAttribute('height', '6.25');
  });

  it('applies color correctly', () => {
    const { container } = render(<Inline color="red" />);

    expect(container.firstChild).toHaveStyleRule('color', 'red');
  });

  it('applies LTR positioning correctly', () => {
    const { container } = render(<Inline size={25} />);

    expect(container.firstChild).toHaveStyleRule('animation-delay', '0.4s', {
      modifier: `${css`
        ${StyledCircle}
      `}:nth-child(1)`
    });
    expect(container.firstChild).toHaveStyleRule('animation-delay', 'unset', {
      modifier: `${css`
        ${StyledCircle}
      `}:nth-child(3)`
    });
  });

  it('applies RTL positioning correctly', () => {
    const { container } = renderRtl(<Inline size={25} />);

    expect(container.firstChild).toHaveStyleRule('animation-delay', 'unset', {
      modifier: `${css`
        ${StyledCircle}
      `}:nth-child(1)`
    });
    expect(container.firstChild).toHaveStyleRule('animation-delay', '0.4s', {
      modifier: `${css`
        ${StyledCircle}
      `}:nth-child(3)`
    });
  });
});
