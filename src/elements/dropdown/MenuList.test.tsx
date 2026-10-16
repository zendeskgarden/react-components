/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { useFloating } from '@floating-ui/react-dom';
import { act } from '@testing-library/react';
import { ReactNode, RefObject, useRef, StrictMode } from 'react';
import { vi } from 'vitest';

import { render } from '../../test/render';
import { MenuList } from './MenuList';

vi.mock('@floating-ui/react-dom', async importOriginal => ({
  ...(await importOriginal<typeof import('@floating-ui/react-dom')>()),
  useFloating: vi.fn()
}));

interface ITestMenuListProps {
  isExpanded?: boolean;
  children?: ReactNode;
}

const TestMenuList = ({ isExpanded, children }: ITestMenuListProps) => {
  const triggerRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <button ref={triggerRef} type="button">
        trigger
      </button>
      <MenuList isExpanded={isExpanded} triggerRef={triggerRef as RefObject<HTMLElement>}>
        {children || (
          <li data-test-id="item" role="menuitem">
            item
          </li>
        )}
      </MenuList>
    </>
  );
};

describe('MenuList', () => {
  const mockUseFloating = vi.mocked(useFloating);
  // A stable `update` keeps the children-change effect from re-firing on every render
  const updateMock = vi.fn();
  let floatingOptions: Record<string, any>;

  beforeEach(() => {
    updateMock.mockClear();
    mockUseFloating.mockImplementation((options: any) => {
      floatingOptions = options;

      return {
        refs: { reference: { current: null }, floating: { current: null } },
        placement: 'bottom-start',
        update: updateMock,
        floatingStyles: { transform: undefined }
      } as unknown as ReturnType<typeof useFloating>;
    });
  });

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

  describe('size middleware', () => {
    const getSizeApply = () => {
      const middleware = floatingOptions.middleware as { name: string; options?: any }[];
      const entry = middleware.find(middlewareEntry => middlewareEntry.name === 'size');
      // Floating UI v2 stores middleware options as a `[options, detectOverflowOptions]` tuple
      const options = Array.isArray(entry?.options) ? entry.options[0] : entry?.options;

      return options?.apply;
    };

    it('resets the height when children change', () => {
      const { container, getByTestId, rerender } = render(<TestMenuList isExpanded />);
      const apply = getSizeApply();
      const menu = container.querySelector('ul') as HTMLElement;

      act(() => {
        apply({ rects: { floating: { height: 400 } }, availableHeight: 300 });
      });

      expect(menu.style.height).toBe('300px');

      updateMock.mockClear();

      rerender(
        <TestMenuList isExpanded>
          <li data-test-id="item" role="menuitem">
            item
          </li>
          <li data-test-id="item-2" role="menuitem">
            item 2
          </li>
        </TestMenuList>
      );

      expect(getByTestId('item-2')).not.toBeNull();
      expect(updateMock).toHaveBeenCalled();
      expect(menu.style.height).toBe('');
    });
  });
});
