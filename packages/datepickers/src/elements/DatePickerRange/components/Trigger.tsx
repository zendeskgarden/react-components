/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { PropsWithChildren, HTMLAttributes, cloneElement, useRef } from 'react';
import useDatePickerContext from '../utils/useDatePickerRangeContext';

/**
 * Wraps a single button that opens/focuses a consumer-composed
 * `DatePickerRange.Dialog`. Unused unless a `DatePickerRange.Dialog` is
 * also rendered. More than one `Trigger` may be composed at once (e.g. one
 * per field) - `getTriggerProps` tracks each one's ref, so blur/focus
 * detection treats every one of them as part of the same open widget.
 */
export const Trigger = ({ children }: PropsWithChildren<HTMLAttributes<HTMLButtonElement>>) => {
  const { getTriggerProps } = useDatePickerContext();
  const triggerRef = useRef<HTMLButtonElement>(null);

  const childElement = React.Children.only(children as React.ReactElement);

  return cloneElement(childElement, getTriggerProps({ ...childElement.props, ref: triggerRef }));
};

Trigger.displayName = 'DatePickerRange.Trigger';
