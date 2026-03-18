/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useMemo, forwardRef } from 'react';

import { StyledTimeline } from '../../styled';
import { ITimelineProps } from '../../types';
import { TimelineContext } from '../../utils';
import { Content } from '../timeline/components/Content';
import { Item } from '../timeline/components/Item';
import { OppositeContent } from '../timeline/components/OppositeContent';

const TimelineComponent = forwardRef<HTMLOListElement, ITimelineProps>(
  ({ isAlternate, ...props }, ref) => {
    const value = useMemo(() => ({ isAlternate }), [isAlternate]);

    return (
      <TimelineContext.Provider value={value}>
        <StyledTimeline ref={ref} {...props} />
      </TimelineContext.Provider>
    );
  }
);

TimelineComponent.displayName = 'Timeline';

/**
 * @extends OlHTMLAttributes<HTMLOListElement>
 */
export const Timeline = TimelineComponent as typeof TimelineComponent & {
  Content: typeof Content;
  Item: typeof Item;
  OppositeContent: typeof OppositeContent;
};

Timeline.Content = Content;
Timeline.Item = Item;
Timeline.OppositeContent = OppositeContent;
