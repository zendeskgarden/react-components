/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { PropsWithChildren, HTMLAttributes, cloneElement } from 'react';
import useDatePickerContext from '../utils/useDatePickerRangeContext';

export const End = ({ children }: PropsWithChildren<HTMLAttributes<HTMLInputElement>>) => {
  const { getEndGroupProps, getEndInputProps } = useDatePickerContext();

  const childElement = React.Children.only(children as React.ReactElement);

  return (
    <div {...getEndGroupProps()}>
      {cloneElement(
        childElement,
        getEndInputProps({
          ...childElement.props,
          required: childElement.props.required
        })
      )}
    </div>
  );
};

End.displayName = 'DatePickerRange.End';
