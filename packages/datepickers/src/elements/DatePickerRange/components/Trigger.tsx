/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { PropsWithChildren, HTMLAttributes, cloneElement } from 'react';
import useDatePickerContext from '../utils/useDatePickerRangeContext';

/**
 * Wraps a single button that opens/focuses a consumer-composed
 * `DatePickerRange.Dialog`. Unused unless a `DatePickerRange.Dialog` is
 * also rendered.
 */
export const Trigger = ({ children }: PropsWithChildren<HTMLAttributes<HTMLButtonElement>>) => {
  const { getTriggerProps } = useDatePickerContext();

  const childElement = React.Children.only(children as React.ReactElement);

  return cloneElement(childElement, getTriggerProps({ ...childElement.props }));
};

Trigger.displayName = 'DatePickerRange.Trigger';
