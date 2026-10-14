/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { useMemo, forwardRef } from 'react';

import { ITimelineProps } from '../../types/elements';
import { TimelineContext } from '../../utils/accordion/index';
import { StyledTimeline } from '../../views/accordion/StyledTimeline';
import { Item } from './Item';
import { OppositeContent } from './OppositeContent';
import { Content } from './TimelineContent';

const TimelineComponent = forwardRef<HTMLOListElement, ITimelineProps>(
  ({ isAlternate, ...props }, ref) => {
    const value = useMemo(() => ({ isAlternate }), [isAlternate]);

    return (
      <TimelineProvider value={value}>
        <StyledTimeline ref={ref} {...props} />
      </TimelineProvider>
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
