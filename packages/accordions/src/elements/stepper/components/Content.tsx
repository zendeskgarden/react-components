/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, useRef, useCallback, useEffect, HTMLAttributes } from 'react';
import mergeRefs from 'react-merge-refs';
import debounce from 'lodash.debounce';
import { StyledContent, StyledInnerContent } from '../../../styled';
import { useStepContext, useStepperContext } from '../../../utils';

export const Content = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>((props, ref) => {
  const contentRef = useRef<HTMLDivElement>();
  const { activeIndex, isHorizontal } = useStepperContext();
  const { currentStepIndex } = useStepContext();
  const isActive = currentStepIndex === activeIndex;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updateMaxHeight = useCallback(
    debounce(() => {
      if (contentRef.current) {
        const child = contentRef.current.children[0] as any;

        child.style.maxHeight = `${child.scrollHeight}px`;
      }
    }, 100),
    [contentRef]
  );

  useEffect(() => {
    if (isActive && isHorizontal === false) {
      addEventListener('resize', updateMaxHeight);
      updateMaxHeight();

      return () => {
        removeEventListener('resize', updateMaxHeight);
      };
    }

    return undefined;
  }, [isActive, isHorizontal, props.children, updateMaxHeight]);

  return isHorizontal === false ? (
    <StyledContent ref={mergeRefs([contentRef, ref])} isActive={isActive} {...props}>
      <StyledInnerContent isActive={isActive}>{props.children}</StyledInnerContent>
    </StyledContent>
  ) : null;
});

Content.displayName = 'Content';
