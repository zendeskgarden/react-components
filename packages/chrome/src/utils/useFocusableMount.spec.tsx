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
        <button onClick={() => setMounted(!mounted)}>Trigger</button>
        <button ref={targetRef}>Target</button>
      </>
    );
  };

  it('focuses on sheet when it is open', () => {
    const { getByText } = render(<TestFocusOnMount />);
    const btn = getByText('Target');

    expect(btn).toHaveFocus();
  });

  it('focuses on trigger when sheet is closes', () => {
    const { getAllByRole } = render(<TestFocusOnMount isMounted={false} />);
    const [triggerBtn, targetBtn] = getAllByRole('button');

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
