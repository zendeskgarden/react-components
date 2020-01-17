/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { StyledSliderTrack } from './StyledSliderTrack';

describe('StyledSliderTrack', () => {
  it('renders the expected element', () => {
    const { container } = render(<StyledSliderTrack />);

    expect(container.firstChild!.nodeName).toBe('DIV');
  });

  it('renders background size styling as expected', () => {
    const { container } = render(<StyledSliderTrack backgroundSize={50} />);

    expect(container.firstChild).toHaveStyleRule('background-size', '50px');
  });

  it('renders background position styling as expected', () => {
    const { container } = render(<StyledSliderTrack backgroundPosition={10} />);

    expect(container.firstChild).toHaveStyleRule('background-position', '10px');
  });
});
