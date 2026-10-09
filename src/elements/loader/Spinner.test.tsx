/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { act } from '@testing-library/react';
import mockDate from 'mockdate';
import { vi } from 'vitest';

import { render } from '../../test/render';
import { Spinner } from './Spinner';

vi.useFakeTimers({ toFake: ['setTimeout', 'clearTimeout', 'setInterval', 'clearInterval'] });

const DEFAULT_DATE = new Date(2019, 1, 5, 1, 1, 1);

describe('Spinner', () => {
  beforeEach(() => {
    (global as any).cancelAnimationFrame = vi.fn();
    (global as any).requestAnimationFrame = vi.fn();
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

    it('sizes the placeholder with the size that has a unit', () => {
      const { container } = render(<Spinner size="2em" />);

      expect(container.firstChild).toHaveStyleRule('font-size', '2em');
    });

    it('shows loader after initial delay', () => {
      const { queryByTestId } = render(<Spinner data-test-id="spinner" />);

      act(() => {
        vi.runOnlyPendingTimers();
      });

      expect(queryByTestId('spinner')).not.toBeNull();
    });
  });

  describe('Animation', () => {
    it('updates animation after request animation frame', () => {
      const { container } = render(<Spinner data-test-id="spinner" />);

      act(() => {
        vi.runOnlyPendingTimers();
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
        vi.mocked(requestAnimationFrame).mock.calls[0]![0](0);
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
      vi.runOnlyPendingTimers();
    });

    const spinner = getByTestId('spinner');

    expect(spinner).toHaveAttribute('role', 'img');
  });

  describe('garden attributes', () => {
    it('are not overridden by props on the placeholder', () => {
      const { getByRole } = render(<Spinner data-garden-id="custom" data-garden-version="0.0.0" />);

      const placeholder = getByRole('progressbar');

      expect(placeholder).toHaveAttribute('data-garden-id', 'loaders.loading_placeholder');
      expect(placeholder).toHaveAttribute('data-garden-version', PACKAGE_VERSION);
    });

    it('are not overridden by props on the spinner', () => {
      const { getByTestId } = render(
        <Spinner data-test-id="spinner" data-garden-id="custom" data-garden-version="0.0.0" />
      );

      act(() => {
        vi.runOnlyPendingTimers();
      });

      const spinner = getByTestId('spinner');

      expect(spinner).toHaveAttribute('data-garden-id', 'loaders.spinner');
      expect(spinner).toHaveAttribute('data-garden-version', PACKAGE_VERSION);
    });
  });
});
