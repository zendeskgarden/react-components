/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useRef } from 'react';
import { act, render } from 'garden-test-utils';
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
        <React.StrictMode>
          <TestMenuList isExpanded={false} />
        </React.StrictMode>
      );

      expect(queryByTestId('item')).toBeNull();

      rerender(
        <React.StrictMode>
          <TestMenuList isExpanded />
        </React.StrictMode>
      );

      expect(queryByTestId('item')).not.toBeNull();
    });

    it('hides children after collapse animation completes', () => {
      jest.useFakeTimers();

      try {
        const { queryByTestId, rerender } = render(<TestMenuList isExpanded />);

        expect(queryByTestId('item')).not.toBeNull();

        rerender(<TestMenuList isExpanded={false} />);

        expect(queryByTestId('item')).not.toBeNull();

        act(() => {
          jest.advanceTimersByTime(200);
        });

        expect(queryByTestId('item')).toBeNull();
      } finally {
        jest.useRealTimers();
      }
    });

    it('hides children after collapse animation completes inside React.StrictMode', () => {
      jest.useFakeTimers();

      try {
        const { queryByTestId, rerender } = render(
          <React.StrictMode>
            <TestMenuList isExpanded />
          </React.StrictMode>
        );

        expect(queryByTestId('item')).not.toBeNull();

        rerender(
          <React.StrictMode>
            <TestMenuList isExpanded={false} />
          </React.StrictMode>
        );

        act(() => {
          jest.advanceTimersByTime(200);
        });

        expect(queryByTestId('item')).toBeNull();
      } finally {
        jest.useRealTimers();
      }
    });

    it('does not warn about state updates after unmount', () => {
      const error = jest.spyOn(console, 'error').mockImplementation(() => undefined);

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
