/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import { StyledRangeDayCell } from './StyledRangeDayCell';

const TINT = 'rgba(31,115,183,0.08)';

describe('StyledRangeDayCell', () => {
  it('fills the whole cell with a flat tint for a highlighted middle day', () => {
    const { container } = render(<StyledRangeDayCell $isHighlighted />);

    expect(container.firstChild).toHaveStyleRule('background-color', TINT);
  });

  it('tints the trailing half for the highlighted range start, in LTR', () => {
    const { container } = render(<StyledRangeDayCell $isHighlighted $isHighlightStart />);

    expect(container.firstChild).toHaveStyleRule(
      'background-image',
      `linear-gradient(to right, transparent 50%, ${TINT} 50%)`
    );
  });

  it('tints the leading half for the highlighted range end, in LTR', () => {
    const { container } = render(<StyledRangeDayCell $isHighlighted $isHighlightEnd />);

    expect(container.firstChild).toHaveStyleRule(
      'background-image',
      `linear-gradient(to left, transparent 50%, ${TINT} 50%)`
    );
  });

  it('flips which half is tinted in RTL', () => {
    const { container: startContainer } = renderRtl(
      <StyledRangeDayCell $isHighlighted $isHighlightStart />
    );
    const { container: endContainer } = renderRtl(
      <StyledRangeDayCell $isHighlighted $isHighlightEnd />
    );

    expect(startContainer.firstChild).toHaveStyleRule(
      'background-image',
      `linear-gradient(to left, transparent 50%, ${TINT} 50%)`
    );
    expect(endContainer.firstChild).toHaveStyleRule(
      'background-image',
      `linear-gradient(to right, transparent 50%, ${TINT} 50%)`
    );
  });

  it('renders no tint when not highlighted', () => {
    const { container } = render(<StyledRangeDayCell />);

    expect(container.firstChild).not.toHaveStyleRule('background-color', TINT);
  });
});
