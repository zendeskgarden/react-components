/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { PropsWithChildren } from 'react';
import { toString } from './utils';
import { Tag } from './Tag';
import { ITagGroupProps } from '../../types';

export const TagGroup = ({
  children,
  isDisabled,
  isExpanded,
  listboxZIndex,
  maxTags,
  optionTagProps,
  selection
}: PropsWithChildren<ITagGroupProps>) => (
  <>
    {selection.map((option, index) => {
      const key = toString(option);
      const disabled = isDisabled || option.disabled;

      return (
        <Tag
          key={key}
          hidden={!isExpanded && index >= maxTags}
          option={{ ...option, disabled }}
          tooltipZIndex={listboxZIndex ? listboxZIndex + 1 : undefined}
          {...optionTagProps[key]}
        />
      );
    })}
    {children}
  </>
);

TagGroup.displayName = 'TagGroup';
