/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useRef } from 'react';
import { act, render } from 'garden-test-utils';
import { useFloating } from '@floating-ui/react-dom';
import { Listbox } from './Listbox';

jest.mock<typeof import('@floating-ui/react-dom')>('@floating-ui/react-dom', () => ({
  ...jest.requireActual('@floating-ui/react-dom'),
  useFloating: jest.fn()
}));

interface ITestListboxProps {
  isExpanded?: boolean;
  maxHeight?: string;
  minHeight?: string;
}

const TestListbox = ({ isExpanded, maxHeight, minHeight }: ITestListboxProps) => {
  const triggerRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <button ref={triggerRef} type="button">
        trigger
      </button>
      <Listbox
        isExpanded={isExpanded}
        maxHeight={maxHeight}
        minHeight={minHeight}
        triggerRef={triggerRef}
      >
        <option data-test-id="option" aria-selected={false}>
          option
        </option>
      </Listbox>
    </>
  );
};

describe('Listbox', () => {
  const mockUseFloating = jest.mocked(useFloating);
  let floatingOptions: Record<string, any>;

  beforeEach(() => {
    mockUseFloating.mockImplementation((options: any) => {
      floatingOptions = options;

      return {
        refs: { reference: { current: null }, floating: { current: null } },
        placement: 'bottom-start',
        update: jest.fn(),
        floatingStyles: { transform: undefined }
      } as unknown as ReturnType<typeof useFloating>;
    });
  });

  describe('isMountedRef', () => {
    it('renders children when expanded', () => {
      const { queryByTestId, rerender } = render(<TestListbox isExpanded={false} />);

      expect(queryByTestId('option')).toBeNull();

      rerender(<TestListbox isExpanded />);

      expect(queryByTestId('option')).not.toBeNull();
    });

    it('renders children when expanded inside React.StrictMode', () => {
      // Regression: in StrictMode, components are mounted, unmounted, and
      // remounted on first mount. The mount-tracking effect must reset
      // `isMountedRef.current` to `true` on (re)mount, otherwise every
      // guarded `setState` (including `setIsVisible(true)`) is suppressed
      // and children never become visible.
      const { queryByTestId, rerender } = render(
        <React.StrictMode>
          <TestListbox isExpanded={false} />
        </React.StrictMode>
      );

      expect(queryByTestId('option')).toBeNull();

      rerender(
        <React.StrictMode>
          <TestListbox isExpanded />
        </React.StrictMode>
      );

      expect(queryByTestId('option')).not.toBeNull();
    });

    it('hides children after collapse animation completes', () => {
      jest.useFakeTimers();

      try {
        const { queryByTestId, rerender } = render(<TestListbox isExpanded />);

        expect(queryByTestId('option')).not.toBeNull();

        rerender(<TestListbox isExpanded={false} />);

        expect(queryByTestId('option')).not.toBeNull();

        act(() => {
          jest.advanceTimersByTime(200);
        });

        expect(queryByTestId('option')).toBeNull();
      } finally {
        jest.useRealTimers();
      }
    });

    it('hides children after collapse animation completes inside React.StrictMode', () => {
      jest.useFakeTimers();

      try {
        const { queryByTestId, rerender } = render(
          <React.StrictMode>
            <TestListbox isExpanded />
          </React.StrictMode>
        );

        expect(queryByTestId('option')).not.toBeNull();

        rerender(
          <React.StrictMode>
            <TestListbox isExpanded={false} />
          </React.StrictMode>
        );

        act(() => {
          jest.advanceTimersByTime(200);
        });

        expect(queryByTestId('option')).toBeNull();
      } finally {
        jest.useRealTimers();
      }
    });

    it('does not warn about state updates after unmount', () => {
      const error = jest.spyOn(console, 'error').mockImplementation(() => undefined);

      try {
        const { unmount } = render(<TestListbox isExpanded />);

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

    it('rounds subpixel measurements and skips no-op updates', () => {
      const { container } = render(<TestListbox isExpanded />);
      const apply = getSizeApply();
      const listbox = container.querySelector('ul') as HTMLElement;
      const floating = listbox.parentElement as HTMLElement;

      act(() => {
        apply({ rects: { reference: { width: 100.44 } }, availableHeight: 200.75 });
      });

      expect(floating.style.width).toBe('100px');
      expect(listbox.style.maxHeight).toBe('200px');

      // Subpixel oscillation at high browser zoom must not yield new state
      act(() => {
        apply({ rects: { reference: { width: 100.37 } }, availableHeight: 200.69 });
      });

      expect(floating.style.width).toBe('100px');
      expect(listbox.style.maxHeight).toBe('200px');
    });

    it('caps the listbox to the `maxHeight` prop', () => {
      const { container } = render(<TestListbox isExpanded maxHeight="400px" />);
      const apply = getSizeApply();
      const listbox = container.querySelector('ul') as HTMLElement;

      act(() => {
        apply({ rects: { reference: { width: 100 } }, availableHeight: 500 });
      });

      expect(listbox.style.maxHeight).toBe('min(400px, 500px)');
    });

    it('skips height constraint when `minHeight` is `fit-content`', () => {
      const { container } = render(<TestListbox isExpanded minHeight="fit-content" />);
      const apply = getSizeApply();
      const listbox = container.querySelector('ul') as HTMLElement;

      act(() => {
        apply({ rects: { reference: { width: 100 } }, availableHeight: 200 });
      });

      expect(listbox.style.maxHeight).toBe('');
    });
  });
});
