/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { PropsWithChildren, HTMLAttributes, Ref, cloneElement } from 'react';
import { mergeRefs } from 'react-merge-refs';
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

/**
 * Renders no wrapper of its own, so the child composes as a true, direct
 * child of whatever the consumer wraps it in (e.g. `InputGroup`) - a
 * composite child (e.g. `ClearableInput`) instead receives its own
 * `wrapperRef`/`wrapperProps` (see `getStartWrapperProps`) so blur
 * detection still spans its extra focusable elements (e.g. a clear
 * button).
 */
export const Start = ({ children, opensDialog }: PropsWithChildren<IStartProps>) => {
  const { getStartInputProps, getStartWrapperProps, getFieldTriggerProps } = useDatePickerContext();

  const childElement = React.Children.only(
    children as React.ReactElement & React.RefAttributes<HTMLInputElement>
  );
  const isComponent = typeof childElement.type !== 'string';

  let inputProps: Record<string, unknown> = getStartInputProps({
    ...childElement.props,
    required: childElement.props.required
  });

  inputProps = {
    ...inputProps,
    ref: mergeRefs([inputProps.ref as Ref<HTMLInputElement>, childElement.ref ?? null])
  };

  if (isComponent) {
    const { ref: wrapperRef, onBlur: wrapperOnBlur } = getStartWrapperProps();

    inputProps = { ...inputProps, wrapperRef, wrapperProps: { onBlur: wrapperOnBlur } };
  }

  if (opensDialog) {
    inputProps = getFieldTriggerProps(inputProps);
  }

  return cloneElement(childElement, inputProps);
};

Start.displayName = 'DatePickerRange.Start';
