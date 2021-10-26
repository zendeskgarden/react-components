/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, act } from 'garden-test-utils';
import userEvent from '@testing-library/user-event';

import { useFocusableMount } from './useFocusableMount';

describe('useFocusableMount', () => {
  const TestFocusOnMount = ({ isMounted = true, focusOnMount = true, restoreFocus = true }) => {
    const [mounted, setMounted] = React.useState(() => isMounted);
    const targetRef = React.useRef(null);

    useFocusableMount({ isMounted: mounted, focusOnMount, restoreFocus, targetRef });

    return (
      <>
        <button data-test-id="trigger-btn" onClick={() => setMounted(!mounted)}>
          Trigger
        </button>
        <button data-test-id="target-btn" ref={targetRef}>
          Target
        </button>
      </>
    );
  };

  it('focuses on target button on mount', () => {
    const { getByTestId } = render(<TestFocusOnMount />);
    const btn = getByTestId('target-btn');

    expect(btn).toHaveFocus();
  });

  it('focuses on trigger button after target is unmounted', () => {
    const { getByTestId } = render(<TestFocusOnMount isMounted={false} />);
    const targetBtn = getByTestId('target-btn');
    const triggerBtn = getByTestId('trigger-btn');

    expect(targetBtn).not.toHaveFocus();

    act(() => {
      userEvent.click(triggerBtn);
    });

    expect(targetBtn).toHaveFocus();

    act(() => {
      userEvent.click(triggerBtn);
    });

    expect(triggerBtn).toHaveFocus();
  });
});
