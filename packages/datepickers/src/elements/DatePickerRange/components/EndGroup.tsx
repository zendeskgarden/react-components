/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { PropsWithChildren, HTMLAttributes, forwardRef } from 'react';
import { mergeRefs } from 'react-merge-refs';
import useDatePickerContext from '../utils/useDatePickerRangeContext';
import { DatePickerRangeFieldContext } from '../utils/useDatePickerRangeFieldContext';
import { StyledJoinedGroup } from '../../../styled';

type IEndGroupProps = HTMLAttributes<HTMLDivElement> & {
  /** Removes the rounded corners on the leading edge, since EndGroup always abuts the preceding StartGroup */
  isEdgeToEdge?: boolean;
};

export const EndGroup = forwardRef<HTMLDivElement, PropsWithChildren<IEndGroupProps>>(
  ({ children, isEdgeToEdge, ...props }, ref) => {
    const { isCompact, getEndGroupProps } = useDatePickerContext();
    const { ref: groupRef, ...groupProps } = getEndGroupProps(props);

    return (
      <StyledJoinedGroup
        {...groupProps}
        ref={mergeRefs([groupRef as React.Ref<HTMLDivElement>, ref])}
        isUnified
        isCompact={isCompact}
        $joinSide="end"
        $isEdgeToEdge={isEdgeToEdge}
      >
        <DatePickerRangeFieldContext.Provider value="end">
          {children}
        </DatePickerRangeFieldContext.Provider>
      </StyledJoinedGroup>
    );
  }
);

EndGroup.displayName = 'DatePickerRange.EndGroup';
