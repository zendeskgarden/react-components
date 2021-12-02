/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story } from '@storybook/react';
import { ToastProvider, IToastProviderProps } from '@zendeskgarden/react-notifications';
import { TOAST_PLACEMENT } from './types';
import { ToastStory } from './ToastStory';

interface IArgs extends IToastProviderProps {
  children: string;
  autoDismiss: boolean;
  milliseconds: number;
  placement?: TOAST_PLACEMENT;
}

export const ToastProviderStory: Story<IArgs> = ({
  children,
  autoDismiss,
  milliseconds,
  placement = 'top-end',
  ...args
}) => (
  <ToastProvider {...args}>
    <ToastStory placement={placement} autoDismiss={autoDismiss ? milliseconds : false}>
      {children}
    </ToastStory>
  </ToastProvider>
);
