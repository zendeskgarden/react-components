/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { screen, act } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { useRef, useState } from 'react';

import { render } from '../../test/render';
import { useFocusableMount } from './useFocusableMount';

describe('useFocusableMount', () => {
  const user = userEvent.setup();

  interface ITestFocusOnMountProps {
    isMounted?: boolean;
    focusOnMount?: boolean;
    restoreFocus?: boolean;
  }

  const TestFocusOnMount = ({
    isMounted = true,
    focusOnMount = true,
    restoreFocus = true
  }: ITestFocusOnMountProps) => {
    const [mounted, setMounted] = useState(() => isMounted);
    const targetRef = useRef(null);

    useFocusableMount({ isMounted: mounted, focusOnMount, restoreFocus, targetRef });

    return (
      <>
        <button type="button" onClick={() => setMounted(!mounted)}>
          Trigger
        </button>
        <button type="button" ref={targetRef}>
          Target
        </button>
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

    const triggerBtn = screen.getByText('Trigger');
    const targetBtn = screen.getByText('Target');

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
