/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl, screen } from 'garden-test-utils';
import { ColorWell } from './ColorWell';

describe('Saturation', () => {
  it('initializes thumb on position respective to the current saturation and lightness', () => {
    render(
      <ColorWell
        hue={184.44444444444443}
        saturation={53.99999999999999}
        lightness={19.607843137254903}
      />
    );

    const thumb = screen.getByTestId('colorwell-thumb');

    expect(thumb.style.top).toBe('69.80392156862746%');
    expect(thumb.style.left).toBe('70.12987012987013%');
  });

  it('initializes thumb on position respective to the current saturation and lightness in RTL', () => {
    renderRtl(
      <ColorWell
        hue={184.44444444444443}
        saturation={53.99999999999999}
        lightness={19.607843137254903}
      />
    );

    const thumb = screen.getByTestId('colorwell-thumb');

    expect(thumb.style.top).toBe('69.80392156862746%');
    expect(thumb.style.left).toBe('29.870129870129873%');
  });
});
