/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { PropsWithChildren, HTMLAttributes, cloneElement } from 'react';
import useDatePickerContext from '../utils/useDatePickerRangeContext';

interface IStartProps extends HTMLAttributes<HTMLInputElement> {
  /**
   * Also wires this field to open/focus a consumer-composed
   * `DatePickerRange.Dialog`, via `getFieldTriggerProps` layered on top of
   * this field's own input wiring. Has no effect unless a
   * `DatePickerRange.Dialog` is also rendered.
   */
  opensDialog?: boolean;
}

export const Start = ({ children, opensDialog }: PropsWithChildren<IStartProps>) => {
  const { getStartGroupProps, getStartInputProps, getFieldTriggerProps } = useDatePickerContext();

  const childElement = React.Children.only(children as React.ReactElement);

  let inputProps = getStartInputProps({
    ...childElement.props,
    required: childElement.props.required
  });

  if (opensDialog) {
    inputProps = getFieldTriggerProps(inputProps);
  }

  return <div {...getStartGroupProps()}>{cloneElement(childElement, inputProps)}</div>;
};

Start.displayName = 'DatePickerRange.Start';
