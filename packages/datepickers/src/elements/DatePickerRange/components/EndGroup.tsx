/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { PropsWithChildren, HTMLAttributes } from 'react';
import { InputGroup } from '@zendeskgarden/react-forms';
import useDatePickerContext from '../utils/useDatePickerRangeContext';

type IEndGroupProps = HTMLAttributes<HTMLDivElement> & {
  /** Removes the rounded corners on the leading edge, since EndGroup always abuts the preceding StartGroup */
  isFlush?: boolean;
};

export const EndGroup = ({ children, isFlush, ...props }: PropsWithChildren<IEndGroupProps>) => {
  const { isCompact, getEndGroupProps } = useDatePickerContext();

  return (
    <InputGroup {...getEndGroupProps(props)} isUnified isCompact={isCompact} isFlushStart={isFlush}>
      {children}
    </InputGroup>
  );
};

EndGroup.displayName = 'DatePickerRange.EndGroup';
