/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, act } from 'garden-test-utils';
import mockDate from 'mockdate';
import { Spinner } from './Spinner';

jest.useFakeTimers({ legacyFakeTimers: true });

const DEFAULT_DATE = new Date(2019, 1, 5, 1, 1, 1);

describe('Spinner', () => {
  beforeEach(() => {
    (clearTimeout as jest.Mock).mockClear();
    (global as any).cancelAnimationFrame = jest.fn();
    (global as any).requestAnimationFrame = jest.fn();
    mockDate.set(DEFAULT_DATE);
  });

  afterEach(() => {
    mockDate.reset();
  });

  describe('Loading delay', () => {
    it('hides loader for initial delay', () => {
      const { queryByTestId } = render(<Spinner data-test-id="spinner" />);

      expect(queryByTestId('spinner')).toBeNull();
    });

    it('shows loader after initial delay', () => {
      const { queryByTestId } = render(<Spinner data-test-id="spinner" />);

      act(() => {
        jest.runOnlyPendingTimers();
      });

      expect(queryByTestId('spinner')).not.toBeNull();
    });
  });

  describe('Animation', () => {
    it('updates animation after request animation frame', () => {
      const { container } = render(<Spinner data-test-id="spinner" />);

      act(() => {
        jest.runOnlyPendingTimers();
      });

      expect(container.firstChild!.firstChild).toMatchInlineSnapshot(`
        <circle
          class=""
          cx="40"
          cy="40"
          fill="none"
          r="34"
          stroke="currentColor"
          stroke-dasharray="0 250"
          stroke-linecap="round"
          stroke-width="6"
          transform="rotate(-90, 40, 40)"
        />
      `);

      act(() => {
        // move time forward 1 second
        mockDate.set(DEFAULT_DATE.setSeconds(2));
        (requestAnimationFrame as jest.Mock).mock.calls[0][0]();
      });

      expect(container.firstChild!.firstChild).toMatchInlineSnapshot(`
        <circle
          class=""
          cx="40"
          cy="40"
          fill="none"
          r="34"
          stroke="currentColor"
          stroke-dasharray="33.04 250"
          stroke-linecap="round"
          stroke-width="5"
          transform="rotate(186.6, 40, 40)"
        />
      `);
    });
  });

  it('applies correct accessibility values', () => {
    const { getByTestId } = render(<Spinner data-test-id="spinner" />);

    act(() => {
      jest.runOnlyPendingTimers();
    });

    const spinner = getByTestId('spinner');

    expect(spinner).toHaveAttribute('role', 'img');
  });
});
