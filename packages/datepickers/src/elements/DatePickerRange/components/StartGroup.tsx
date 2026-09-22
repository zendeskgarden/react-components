/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { PropsWithChildren, HTMLAttributes } from 'react';
import { InputGroup } from '@zendeskgarden/react-forms';
import useDatePickerContext from '../utils/useDatePickerRangeContext';

type IStartGroupProps = HTMLAttributes<HTMLDivElement> & {
  /** Removes the rounded corners on the trailing edge, since StartGroup always abuts the following EndGroup */
  isEdgeToEdge?: boolean;
};

export const StartGroup = ({
  children,
  isEdgeToEdge,
  ...props
}: PropsWithChildren<IStartGroupProps>) => {
  const { isCompact, getStartGroupProps } = useDatePickerContext();

  return (
    <InputGroup
      {...getStartGroupProps(props)}
      isUnified
      isCompact={isCompact}
      isEdgeToEdgeEnd={isEdgeToEdge}
    >
      {children}
    </InputGroup>
  );
};

StartGroup.displayName = 'DatePickerRange.StartGroup';
