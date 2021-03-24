/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, renderRtl } from 'garden-test-utils';
import { useToast, ToastProvider, IToastProviderProps } from '../../';

import { config } from 'react-transition-group';
config.disabled = true;

const ToastExample: React.FC<IToastProviderProps> = props => {
  const NotificationExample = () => {
    const { addToast } = useToast();

    return (
      <button
        onClick={() => addToast(() => <div>notification</div>, { placement: 'bottom-start' })}
      >
        Add
      </button>
    );
  };

  return (
    <ToastProvider {...props}>
      <NotificationExample />
    </ToastProvider>
  );
};

describe('ToastProvider', () => {
  it('renders toasts in their provided placement', () => {
    const { getByRole, getByText } = render(<ToastExample />);

    userEvent.click(getByRole('button'));
    const notificationElement = getByText('notification');

    expect(notificationElement).toBeInTheDocument();
    expect(notificationElement.parentElement?.parentElement).toHaveStyleRule('bottom', '64px');
    expect(notificationElement.parentElement?.parentElement).toHaveStyleRule('left', '12px');
  });

  it('renders toasts in alternative placement when in RTL mode', () => {
    const { getByRole, getByText } = renderRtl(<ToastExample />);

    userEvent.click(getByRole('button'));
    const notificationElement = getByText('notification');

    expect(notificationElement).toBeInTheDocument();
    expect(notificationElement.parentElement?.parentElement).toHaveStyleRule('bottom', '64px');
    expect(notificationElement.parentElement?.parentElement).toHaveStyleRule('right', '12px');
  });

  it('renders visible toasts up to provided limit', () => {
    const { getByRole, getAllByText } = render(<ToastExample />);

    for (let x = 0; x < 10; x++) {
      userEvent.click(getByRole('button'));
    }

    const notificationElements = getAllByText('notification');

    for (let x = 0; x < 6; x++) {
      expect(notificationElements[x].parentElement).toHaveStyleRule('opacity', '0 !important');
    }

    for (let x = 6; x < 10; x++) {
      expect(notificationElements[x].parentElement).toHaveStyleRule('opacity', '1');
    }
  });

  it('renders toasts with provided zIndex', () => {
    const { getByRole, getByText } = render(<ToastExample zIndex={100} />);

    userEvent.click(getByRole('button'));
    const notificationElement = getByText('notification');

    expect(notificationElement).toBeInTheDocument();
    expect(notificationElement.parentElement?.parentElement).toHaveStyleRule('z-index', '100');
  });

  it('applies placementProps when provided', () => {
    const customizationProps = { 'data-test-id': 'placement-prop' } as any;

    const { getAllByTestId } = render(
      <ToastExample
        placementProps={{
          'top-start': customizationProps,
          top: customizationProps,
          'top-end': customizationProps,
          'bottom-start': customizationProps,
          bottom: customizationProps,
          'bottom-end': customizationProps
        }}
      />
    );

    const customizedPlacements = getAllByTestId('placement-prop');

    expect(customizedPlacements).toHaveLength(6);
  });
});
