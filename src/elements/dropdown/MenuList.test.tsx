/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { act } from '@testing-library/react';
import { useRef, StrictMode } from 'react';
import { vi } from 'vitest';

import { render } from '../../test/render';
import { MenuList } from './MenuList';

interface ITestMenuListProps {
  isExpanded?: boolean;
}

const TestMenuList = ({ isExpanded }: ITestMenuListProps) => {
  const triggerRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <button ref={triggerRef} type="button">
        trigger
      </button>
      <MenuList isExpanded={isExpanded} triggerRef={triggerRef}>
        <li data-test-id="item" role="menuitem">
          item
        </li>
      </MenuList>
    </>
  );
};

describe('MenuList', () => {
  describe('isMountedRef', () => {
    it('renders children when expanded', () => {
      const { queryByTestId, rerender } = render(<TestMenuList isExpanded={false} />);

      expect(queryByTestId('item')).toBeNull();

      rerender(<TestMenuList isExpanded />);

      expect(queryByTestId('item')).not.toBeNull();
    });

    it('renders children when expanded inside React.StrictMode', () => {
      // Regression: in StrictMode, components are mounted, unmounted, and
      // remounted on first mount. The mount-tracking effect must reset
      // `isMountedRef.current` to `true` on (re)mount, otherwise every
      // guarded `setState` (including `setIsVisible(true)`) is suppressed
      // and children never become visible.
      const { queryByTestId, rerender } = render(
        <StrictMode>
          <TestMenuList isExpanded={false} />
        </StrictMode>
      );

      expect(queryByTestId('item')).toBeNull();

      rerender(
        <StrictMode>
          <TestMenuList isExpanded />
        </StrictMode>
      );

      expect(queryByTestId('item')).not.toBeNull();
    });

    it('hides children after collapse animation completes', () => {
      vi.useFakeTimers();

      try {
        const { queryByTestId, rerender } = render(<TestMenuList isExpanded />);

        expect(queryByTestId('item')).not.toBeNull();

        rerender(<TestMenuList isExpanded={false} />);

        expect(queryByTestId('item')).not.toBeNull();

        act(() => {
          vi.advanceTimersByTime(200);
        });

        expect(queryByTestId('item')).toBeNull();
      } finally {
        vi.useRealTimers();
      }
    });

    it('hides children after collapse animation completes inside React.StrictMode', () => {
      vi.useFakeTimers();

      try {
        const { queryByTestId, rerender } = render(
          <StrictMode>
            <TestMenuList isExpanded />
          </StrictMode>
        );

        expect(queryByTestId('item')).not.toBeNull();

        rerender(
          <StrictMode>
            <TestMenuList isExpanded={false} />
          </StrictMode>
        );

        act(() => {
          vi.advanceTimersByTime(200);
        });

        expect(queryByTestId('item')).toBeNull();
      } finally {
        vi.useRealTimers();
      }
    });

    it('does not warn about state updates after unmount', () => {
      const error = vi.spyOn(console, 'error').mockImplementation(() => undefined);

      try {
        const { unmount } = render(<TestMenuList isExpanded />);

        unmount();

        expect(error).not.toHaveBeenCalled();
      } finally {
        error.mockRestore();
      }
    });
  });
});
