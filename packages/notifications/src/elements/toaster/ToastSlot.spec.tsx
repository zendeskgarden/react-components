/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, act } from 'garden-test-utils';
import { useToast, ToastProvider } from '../../';

import { config } from 'react-transition-group';
config.disabled = true;

jest.useFakeTimers();

const ToastExample = () => {
  const NotificationExample = () => {
    const { addToast } = useToast();

    return <button onClick={() => addToast(() => <div>notification</div>)}>Add</button>;
  };

  return (
    <ToastProvider zIndex={100}>
      <NotificationExample />
    </ToastProvider>
  );
};

describe('ToastSlot', () => {
  const user = userEvent.setup({ delay: null });

  it('pauses toast timers when placement is hovered', async () => {
    const { getByRole, getAllByText } = render(<ToastExample />);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    for (const _ of new Array(5).fill(null)) {
      // eslint-disable-next-line no-await-in-loop
      await user.click(getByRole('button'));
    }

    expect(getAllByText('notification')).toHaveLength(5);

    await user.hover(getAllByText('notification')[0]);

    act(() => {
      jest.runOnlyPendingTimers();
    });

    expect(getAllByText('notification')).toHaveLength(5);
  });

  it('resumes toast timers when placement is unhovered', async () => {
    const { getByRole, getAllByText, queryByText } = render(<ToastExample />);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    for (const _ of new Array(5).fill(null)) {
      // eslint-disable-next-line no-await-in-loop
      await user.click(getByRole('button'));
    }

    expect(getAllByText('notification')).toHaveLength(5);

    await user.hover(getAllByText('notification')[0]);

    act(() => {
      jest.runAllTimers();
    });

    expect(getAllByText('notification')).toHaveLength(5);

    await act(async () => {
      await user.unhover(getAllByText('notification')[0]);
    });

    act(() => {
      jest.runAllTimers();
    });

    expect(queryByText('notification')).not.toBeInTheDocument();
  });
});
