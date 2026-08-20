/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { act, render } from 'garden-test-utils';
import React, { useRef } from 'react';

import { Listbox } from './Listbox';

interface ITestListboxProps {
  isExpanded?: boolean;
}

const TestListbox = ({ isExpanded }: ITestListboxProps) => {
  const triggerRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <button ref={triggerRef} type="button">
        trigger
      </button>
      <Listbox isExpanded={isExpanded} triggerRef={triggerRef}>
        <option data-test-id="option" aria-selected={false}>
          option
        </option>
      </Listbox>
    </>
  );
};

describe('Listbox', () => {
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
});
