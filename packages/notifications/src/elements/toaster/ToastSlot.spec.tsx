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
  it('pauses toast timers when placement is hovered', () => {
    const { getByRole, getAllByText } = render(<ToastExample />);

    for (let x = 0; x < 5; x++) {
      userEvent.click(getByRole('button'));
    }

    expect(getAllByText('notification')).toHaveLength(5);

    userEvent.hover(getAllByText('notification')[0]);

    act(() => {
      jest.runOnlyPendingTimers();
    });

    expect(getAllByText('notification')).toHaveLength(5);
  });

  it('resumes toast timers when placement is unhovered', () => {
    const { getByRole, getAllByText, queryByText } = render(<ToastExample />);

    for (let x = 0; x < 5; x++) {
      userEvent.click(getByRole('button'));
    }

    expect(getAllByText('notification')).toHaveLength(5);

    userEvent.hover(getAllByText('notification')[0]);

    act(() => {
      jest.runAllTimers();
    });

    expect(getAllByText('notification')).toHaveLength(5);

    act(() => {
      userEvent.unhover(getAllByText('notification')[0]);
    });

    act(() => {
      jest.runAllTimers();
    });

    expect(queryByText('notification')).not.toBeInTheDocument();
  });
});
