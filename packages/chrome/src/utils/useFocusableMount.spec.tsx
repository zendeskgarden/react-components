/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, screen, act } from 'garden-test-utils';
import userEvent from '@testing-library/user-event';

import { useFocusableMount } from './useFocusableMount';

describe('useFocusableMount', () => {
  const user = userEvent.setup();

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
    render(<TestFocusOnMount />);

    const btn = screen.getByText('Target');

    expect(btn).toHaveFocus();
  });

  it('focuses on trigger when sheet is closed', async () => {
    render(<TestFocusOnMount isMounted={false} />);

    const [triggerBtn, targetBtn] = screen.getAllByRole('button');

    expect(targetBtn).not.toHaveFocus();

    await act(async () => {
      await user.click(triggerBtn);
    });

    expect(targetBtn).toHaveFocus();

    await act(async () => {
      await user.click(triggerBtn);
    });

    expect(triggerBtn).toHaveFocus();
  });
});
