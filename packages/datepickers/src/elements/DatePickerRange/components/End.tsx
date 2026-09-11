/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { PropsWithChildren, HTMLAttributes, cloneElement } from 'react';
import useDatePickerContext from '../utils/useDatePickerRangeContext';

interface IEndProps extends HTMLAttributes<HTMLInputElement> {
  /**
   * Also wires this field to open/focus a consumer-composed
   * `DatePickerRange.Dialog`, via `getFieldTriggerProps` layered on top of
   * this field's own input wiring. Has no effect unless a
   * `DatePickerRange.Dialog` is also rendered.
   */
  opensDialog?: boolean;
}

/**
 * Renders no wrapper of its own, so the child composes as a true, direct
 * child of whatever the consumer wraps it in (e.g. `InputGroup`) - a
 * composite child (e.g. `ClearableInput`) instead receives its own
 * `wrapperRef`/`wrapperProps` (see `getEndWrapperProps`) so blur detection
 * still spans its extra focusable elements (e.g. a clear button).
 */
export const End = ({ children, opensDialog }: PropsWithChildren<IEndProps>) => {
  const { getEndInputProps, getEndWrapperProps, getFieldTriggerProps } = useDatePickerContext();

  const childElement = React.Children.only(children as React.ReactElement);
  const isComponent = typeof childElement.type !== 'string';

  let inputProps: Record<string, unknown> = getEndInputProps({
    ...childElement.props,
    required: childElement.props.required
  });

  if (isComponent) {
    const { ref: wrapperRef, onBlur: wrapperOnBlur } = getEndWrapperProps();

    inputProps = { ...inputProps, wrapperRef, wrapperProps: { onBlur: wrapperOnBlur } };
  }

  if (opensDialog) {
    inputProps = getFieldTriggerProps(inputProps);
  }

  return cloneElement(childElement, inputProps);
};

End.displayName = 'DatePickerRange.End';
