/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { PropsWithChildren, HTMLAttributes, cloneElement } from 'react';
import useDatePickerContext from '../utils/useDatePickerRangeContext';

export const Start = ({ children }: PropsWithChildren<HTMLAttributes<HTMLInputElement>>) => {
  const { getStartGroupProps, getStartInputProps } = useDatePickerContext();

  const childElement = React.Children.only(children as React.ReactElement);

  return (
    <div {...getStartGroupProps()}>
      {cloneElement(
        childElement,
        getStartInputProps({
          ...childElement.props,
          required: childElement.props.required
        })
      )}
    </div>
  );
};

Start.displayName = 'DatePickerRange.Start';
