/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import userEvent from '@testing-library/user-event';
import { render, act } from 'garden-test-utils';
import { useToast, ToastProvider } from '../../';

import { config } from 'react-transition-group';
config.disabled = true;

jest.useFakeTimers();

const Notification: React.FC<{ close: () => void }> = ({ close, children }) => {
  return (
    <div role="alert">
      {children}
      <button onClick={close}>Close</button>
    </div>
  );
};

const NotificationExample = () => {
  const { addToast, updateToast, removeToast, removeAllToasts } = useToast();
  const [recentToast, setRecentToast] = useState('');

  return (
    <>
      <button
        onClick={() => {
          setRecentToast(
            addToast(({ close }) => <Notification close={close}>added toast</Notification>)
          );
        }}
      >
        Add toast
      </button>
      <button
        onClick={() => {
          setRecentToast(
            addToast(({ close }) => <Notification close={close}>persistent toast</Notification>, {
              autoDismiss: false
            })
          );
        }}
      >
        Add persistent toast
      </button>
      <button
        onClick={() => {
          updateToast(recentToast, {
            content: ({ close }) => <Notification close={close}>updated content</Notification>
          });
        }}
      >
        Update toast
      </button>
      <button
        onClick={() => {
          removeToast(recentToast);
          setRecentToast('');
        }}
      >
        Remove toast
      </button>
      <button
        onClick={() => {
          removeAllToasts();
        }}
      >
        Remove all toasts
      </button>
    </>
  );
};

const ToastExample = () => (
  <ToastProvider>
    <NotificationExample />
  </ToastProvider>
);

describe('useToast()', () => {
  const user = userEvent.setup({ delay: null });

  it('throws if not rendered within a ToastProvider', () => {
    const originalError = console.error;

    console.error = jest.fn();

    expect(() => {
      render(<NotificationExample />);
    }).toThrow('useToast() must be used within a "ToastProvider"');

    console.error = originalError;
  });

  describe('addToast()', () => {
    it('renders toast content when called', async () => {
      const { getByRole } = render(<ToastExample />);

      await act(async () => {
        await user.click(getByRole('button', { name: 'Add toast' }));
      });

      expect(getByRole('alert')).toBeInTheDocument();
    });

    it('allows toast to be removed by internal content', async () => {
      const { getByRole, queryByRole } = render(<ToastExample />);

      await act(async () => {
        await user.click(getByRole('button', { name: 'Add toast' }));
      });

      await act(async () => {
        await user.click(getByRole('button', { name: 'Close' }));
      });

      expect(queryByRole('alert')).not.toBeInTheDocument();
    });

    it('removes toast when autoDismissal is provided', async () => {
      const { getByRole, queryByRole } = render(<ToastExample />);

      await act(async () => {
        await user.click(getByRole('button', { name: 'Add toast' }));
      });

      expect(queryByRole('alert')).toBeInTheDocument();

      act(() => {
        jest.runOnlyPendingTimers();
      });

      expect(queryByRole('alert')).not.toBeInTheDocument();
    });

    it('does not remove toast when autoDismissal is not provided', async () => {
      const { getByRole, queryByRole } = render(<ToastExample />);

      await act(async () => {
        await user.click(getByRole('button', { name: 'Add persistent toast' }));
      });

      expect(queryByRole('alert')).toBeInTheDocument();

      act(() => {
        jest.runOnlyPendingTimers();
      });

      expect(queryByRole('alert')).toBeInTheDocument();
    });
  });

  describe('removeToast()', () => {
    it('removes toast when called', async () => {
      const { getByRole, queryByRole } = render(<ToastExample />);

      await act(async () => {
        await user.click(getByRole('button', { name: 'Add toast' }));
      });

      await act(async () => {
        await user.click(getByRole('button', { name: 'Remove toast' }));
      });

      expect(queryByRole('alert')).not.toBeInTheDocument();
    });
  });

  describe('updateToast()', () => {
    it('updates toast when called', async () => {
      const { getByRole, getAllByRole } = render(<ToastExample />);

      await act(async () => {
        await user.click(getByRole('button', { name: 'Add toast' }));
        await user.click(getByRole('button', { name: 'Add toast' }));
      });

      for (const alert of getAllByRole('alert')) {
        expect(alert).toHaveTextContent('added toast');
      }

      await act(async () => {
        await user.click(getByRole('button', { name: 'Update toast' }));
      });

      const alerts = getAllByRole('alert');

      expect(alerts[0]).toHaveTextContent('added toast');
      expect(alerts[1]).toHaveTextContent('updated content');
    });
  });

  describe('removeAllToasts()', () => {
    it('removes all toasts when called', async () => {
      const { getByRole, queryAllByRole } = render(<ToastExample />);

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      for (const _ of new Array(5).fill(null)) {
        // eslint-disable-next-line no-await-in-loop
        await user.click(getByRole('button', { name: 'Add toast' }));
      }

      expect(queryAllByRole('alert')).toHaveLength(5);

      await act(async () => {
        await user.click(getByRole('button', { name: 'Remove all toasts' }));
      });

      expect(queryAllByRole('alert')).toHaveLength(0);
    });
  });
});
