/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { act, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { config } from 'react-transition-group';
import { vi } from 'vitest';

import { render } from '../../test/render';
import { ToastProvider } from './ToastProvider';
import { ToastSlot } from './ToastSlot';
import { useToast } from './useToast';

config.disabled = true;

vi.useFakeTimers({ shouldAdvanceTime: true });

const NotificationExample = () => {
  const { addToast } = useToast();

  return (
    // eslint-disable-next-line react/no-unstable-nested-components
    <button type="button" onClick={() => addToast(() => <div>notification</div>)}>
      Add
    </button>
  );
};

const ToastExample = () => (
  <ToastProvider zIndex={100}>
    <NotificationExample />
  </ToastProvider>
);

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

    await user.hover(getAllByText('notification')[0]!);

    act(() => {
      vi.runOnlyPendingTimers();
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

    await user.hover(getAllByText('notification')[0]!);

    act(() => {
      vi.runAllTimers();
    });

    expect(getAllByText('notification')).toHaveLength(5);

    await user.unhover(getAllByText('notification')[0]!);

    act(() => {
      vi.runAllTimers();
    });

    waitFor(() => {
      expect(queryByText('notification')).not.toBeInTheDocument();
    });
  });
  it('renders no position styles given an unknown placement', () => {
    const { container } = render(
      <ToastSlot toasts={[]} placement={'unknown' as 'top'} limit={4} zIndex={100} />
    );

    expect(container.firstChild).toHaveStyleRule('position', 'fixed');
    expect(container.firstChild).not.toHaveStyleRule('top');
    expect(container.firstChild).not.toHaveStyleRule('bottom');
  });
});
