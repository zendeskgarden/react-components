/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { createRef } from 'react';
import { render, screen } from 'garden-test-utils';
import userEvent from '@testing-library/user-event';
import { ColorSwatch } from './index';

const colors = [
  [
    { label: 'Green-800', value: '#0b3b29' },
    { label: 'Green-700', value: '#186146' }
  ],
  [
    { label: 'Green-600', value: '#038153' },
    { label: 'Green-500', value: '#228f67' }
  ]
];

describe('ColorSwatch', () => {
  const user = userEvent.setup();

  it('passes ref to underlying DOM element', () => {
    const ref = createRef<HTMLTableElement>();

    render(<ColorSwatch colors={colors} ref={ref} />);

    expect(ref.current).toBe(screen.getByRole('grid'));
  });

  it('renders checkmark svg when a color is selected', async () => {
    render(<ColorSwatch colors={colors} />);

    await user.tab();
    expect(screen.getByTestId('#0b3b29').firstChild).toHaveStyleRule('opacity', '0');

    await user.type(document.activeElement as HTMLElement, '{enter}');
    expect(screen.getByTestId('#0b3b29').firstChild).toHaveStyleRule('opacity', '1');
  });
});
