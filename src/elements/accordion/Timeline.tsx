/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { useMemo, forwardRef } from 'react';

import { TimelineProvider } from '../../context/accordion/TimelineContext';
import { ITimelineProps } from '../../types/elements';
import { StyledTimeline } from '../../views/accordion/StyledTimeline';
import { COMPONENT_IDS } from '../utils';
import { Item } from './Item';
import { OppositeContent } from './OppositeContent';
import { Content } from './TimelineContent';

const TimelineComponent = forwardRef<HTMLOListElement, ITimelineProps>(
  ({ isAlternate, ...props }, ref) => {
    const value = useMemo(() => ({ isAlternate }), [isAlternate]);

    return (
      <TimelineProvider value={value}>
        <StyledTimeline
          ref={ref}
          {...props}
          data-garden-id={COMPONENT_IDS.timeline}
          data-garden-version={PACKAGE_VERSION}
        />
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
