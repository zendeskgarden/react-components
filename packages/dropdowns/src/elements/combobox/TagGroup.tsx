/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { PropsWithChildren, useEffect, useRef } from 'react';
import { Tag } from './Tag';
import { ITagGroupProps } from '../../types';

export const TagGroup = ({
  children,
  isDisabled,
  isEditable,
  isExpanded,
  listboxZIndex,
  maxTags,
  optionTagProps,
  selection
}: PropsWithChildren<ITagGroupProps>) => {
  const lastTagRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isEditable) {
      // Scroll the last tag into view.
      lastTagRef.current?.scrollIntoView?.();
    }
  }, [isEditable, selection]);

  return (
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
            ref={index === selection.length - 1 ? lastTagRef : undefined}
          />
        );
      })}
      {children}
    </>
  );
};

TagGroup.displayName = 'TagGroup';
