/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { PropsWithChildren, HTMLAttributes } from 'react';
import { IInputGroupProps, InputGroup } from '@zendeskgarden/react-forms';
import useDatePickerContext from '../utils/useDatePickerRangeContext';

type IEndGroupProps = HTMLAttributes<HTMLDivElement> &
  Pick<IInputGroupProps, 'isFlushStart' | 'isFlushEnd'>;

export const EndGroup = ({ children, ...props }: PropsWithChildren<IEndGroupProps>) => {
  const { isCompact, getEndGroupProps } = useDatePickerContext();

  return (
    <InputGroup {...getEndGroupProps(props)} isUnified isCompact={isCompact}>
      {children}
    </InputGroup>
  );
};

EndGroup.displayName = 'DatePickerRange.EndGroup';
