/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { PropsWithChildren, HTMLAttributes } from 'react';
import { IInputGroupProps, InputGroup } from '@zendeskgarden/react-forms';
import useDatePickerContext from '../utils/useDatePickerRangeContext';

type IStartGroupProps = HTMLAttributes<HTMLDivElement> &
  Pick<IInputGroupProps, 'isFlushStart' | 'isFlushEnd'>;

export const StartGroup = ({ children, ...props }: PropsWithChildren<IStartGroupProps>) => {
  const { isCompact, getStartGroupProps } = useDatePickerContext();

  return (
    <InputGroup {...getStartGroupProps(props)} isUnified isCompact={isCompact}>
      {children}
    </InputGroup>
  );
};

StartGroup.displayName = 'DatePickerRange.StartGroup';
