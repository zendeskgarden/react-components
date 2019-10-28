/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import { PALETTE } from '@zendeskgarden/react-theming';
import { StyledSliderThumb } from './StyledSliderThumb';

describe('StyledSliderThumb', () => {
  it('renders the expected element', () => {
    const { container } = render(<StyledSliderThumb />);

    expect(container.firstChild.nodeName).toBe('INPUT');
  });

  it('renders position styling as expected', () => {
    const { container } = render(<StyledSliderThumb position={55} />);

    expect(container.firstChild).toHaveStyleRule('left', '55px');
  });

  it('renders disabled styling as expected', () => {
    const { container } = render(<StyledSliderThumb disabled />);

    expect(container.firstChild).toHaveStyleRule('background-color', PALETTE.grey[300], {
      modifier: ':disabled'
    });
  });

  it('renders expected RTL styling', () => {
    const { container } = renderRtl(<StyledSliderThumb />);

    expect(container.firstChild).toHaveStyleRule('right', '0px');
  });
});
