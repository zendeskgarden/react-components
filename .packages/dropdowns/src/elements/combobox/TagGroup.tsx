/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { PropsWithChildren } from 'react';

import { ITagGroupProps } from '../../types';
import { Tag } from './Tag';

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
      const disabled = isDisabled || option.disabled;

      return (
        <Tag
          key={option.value}
          hidden={!isExpanded && index >= maxTags}
          option={{ ...option, disabled }}
          tooltipZIndex={listboxZIndex ? listboxZIndex + 1 : undefined}
          {...optionTagProps[option.value]}
        />
      );
    })}
    {children}
  </>
);

TagGroup.displayName = 'TagGroup';
