/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { PropsWithChildren, HTMLAttributes, forwardRef } from 'react';
import { mergeRefs } from 'react-merge-refs';
import { InputGroup } from '@zendeskgarden/react-forms';
import useDatePickerContext from '../utils/useDatePickerRangeContext';
import { DatePickerRangeFieldContext } from '../utils/useDatePickerRangeFieldContext';

type IStartGroupProps = HTMLAttributes<HTMLDivElement> & {
  /** Removes the rounded corners on the trailing edge, since StartGroup always abuts the following EndGroup */
  isEdgeToEdge?: boolean;
};

export const StartGroup = forwardRef<HTMLDivElement, PropsWithChildren<IStartGroupProps>>(
  ({ children, isEdgeToEdge, ...props }, ref) => {
    const { isCompact, getStartGroupProps } = useDatePickerContext();
    const { ref: groupRef, ...groupProps } = getStartGroupProps(props);

    return (
      <InputGroup
        {...groupProps}
        ref={mergeRefs([groupRef as React.Ref<HTMLDivElement>, ref])}
        isUnified
        isCompact={isCompact}
        isEdgeToEdgeEnd={isEdgeToEdge}
      >
        <DatePickerRangeFieldContext.Provider value="start">
          {children}
        </DatePickerRangeFieldContext.Provider>
      </InputGroup>
    );
  }
);

StartGroup.displayName = 'DatePickerRange.StartGroup';
