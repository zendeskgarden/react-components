/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { act } from '@testing-library/react';
import { vi } from 'vitest';

import { render } from '../../test/render';
import PALETTE from '../../theming/elements/palette';
import { Dots } from './Dots';

describe('Dots', () => {
  it('renders loader, starting as hidden by default', () => {
    const { queryByTestId } = render(<Dots data-test-id="dots" />);

    expect(queryByTestId('dots')).toBeInTheDocument();
    expect(queryByTestId('dots')).not.toBeVisible();
  });

  it('renders loader but does not hide if no delay', () => {
    const { queryByTestId } = render(<Dots data-test-id="dots" delayMS={0} />);

    expect(queryByTestId('dots')).toBeInTheDocument();
    expect(queryByTestId('dots')).toBeVisible();
  });

  it('applies correct accessibility values', () => {
    const { getByTestId } = render(<Dots data-test-id="dots" />);

    act(() => {
      vi.runOnlyPendingTimers();
    });

    const dots = getByTestId('dots');

    expect(dots).toHaveAttribute('role', 'img');
  });

  it('renders color variable key as expected', () => {
    const { container } = render(<Dots color="foreground.primary" />);

    act(() => {
      vi.runOnlyPendingTimers();
    });

    expect(container.firstChild).toHaveStyleRule('color', PALETTE.blue[700]);
  });
});
