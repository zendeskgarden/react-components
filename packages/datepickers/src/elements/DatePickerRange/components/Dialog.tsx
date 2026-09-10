/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes, PropsWithChildren } from 'react';
import useDatePickerContext from '../utils/useDatePickerRangeContext';

interface IDialogProps extends Omit<HTMLAttributes<HTMLDivElement>, 'aria-label'> {
  'aria-label': string;
}

/**
 * Wraps `DatePickerRange.Calendar` in a non-modal `role="dialog"` that
 * opens/closes via a consumer-composed `DatePickerRange.Trigger` and/or a
 * field with `opensDialog` - unmounts entirely while closed, matching how
 * `DatePicker`'s own popover behaves. Leaves positioning (e.g.
 * `position: absolute`) to the consumer, since `DatePickerRange` has no
 * opinion on where its dialog should float.
 */
export const Dialog = ({ children, ...props }: PropsWithChildren<IDialogProps>) => {
  const { isOpen, getDialogProps } = useDatePickerContext();

  if (!isOpen) {
    return null;
  }

  return <div {...getDialogProps(props)}>{children}</div>;
};

Dialog.displayName = 'DatePickerRange.Dialog';
