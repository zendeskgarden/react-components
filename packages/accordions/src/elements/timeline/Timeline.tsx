/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, {
  useMemo,
  forwardRef,
  RefAttributes,
  HTMLAttributes,
  PropsWithoutRef,
  ForwardRefExoticComponent
} from 'react';
import { TimelineContext } from '../../utils';
import { StyledTimeline } from '../../styled';
import { Item } from '../timeline/components/Item';
import { Content } from '../timeline/components/Content';
import { OppositeContent } from '../timeline/components/OppositeContent';

interface IStaticTimelineExport<T, P>
  extends ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>> {
  Item: typeof Item;
  Content: typeof Content;
  OppositeContent: typeof OppositeContent;
}

export interface ITimelineProps extends Omit<HTMLAttributes<HTMLOListElement>, 'onChange'> {
  /** Applies alternate styling */
  isAlternate?: boolean;
}

/**
 * @extends HTMLAttributes<HTMLOListElement>
 */
export const Timeline = forwardRef<HTMLOListElement, ITimelineProps>(
  ({ isAlternate, ...props }, ref) => {
    const value = useMemo(() => ({ isAlternate }), [isAlternate]);

    return (
      <TimelineContext.Provider value={value}>
        <StyledTimeline ref={ref} {...props} />
      </TimelineContext.Provider>
    );
  }
) as IStaticTimelineExport<HTMLOListElement, ITimelineProps>;

Timeline.Item = Item;
Timeline.Content = Content;
Timeline.OppositeContent = OppositeContent;

Timeline.displayName = 'Timeline';
