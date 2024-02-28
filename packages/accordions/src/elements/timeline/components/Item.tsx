/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useMemo, forwardRef, Children, ReactElement } from 'react';
import { OppositeContent } from './OppositeContent';
import { StyledTimelineItem } from '../../../styled';
import { TimelineItemContext, useTimelineContext } from '../../../utils';
import { ITimelineItemProps } from '../../../types';

const ItemComponent = forwardRef<HTMLLIElement, ITimelineItemProps>(
  ({ icon, surfaceColor, ...props }, ref) => {
    const value = useMemo(() => ({ icon, surfaceColor }), [icon, surfaceColor]);
    const { isAlternate } = useTimelineContext();
    let hasOppositeContent = false;

    Children.forEach(props.children, child => {
      if (child) {
        if ((child as ReactElement).type === OppositeContent) {
          hasOppositeContent = true;
        }
      }
    });

    return (
      <TimelineItemContext.Provider value={value}>
        <StyledTimelineItem
          ref={ref}
          isAlternate={isAlternate}
          hasOppositeContent={hasOppositeContent}
          {...props}
        />
      </TimelineItemContext.Provider>
    );
  }
);

ItemComponent.displayName = 'Timeline.Item';

/**
 * @extends LiHTMLAttributes<HTMLLIElement>
 */
export const Item = ItemComponent;
