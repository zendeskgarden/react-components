/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { useMemo, forwardRef, Children, ReactElement } from 'react';

import { ITimelineItemProps } from '../../types/elements';
import { TimelineItemContext, useTimelineContext } from '../../utils/accordion/index';
import { StyledTimelineItem } from '../../views/accordion/StyledItem';
import { COMPONENT_IDS } from '../utils';
import { OppositeContent } from './OppositeContent';

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
      <TimelineItemProvider value={value}>
        <StyledTimelineItem
          ref={ref}
          $isAlternate={isAlternate}
          $hasOppositeContent={hasOppositeContent}
          {...props}
          data-garden-id={COMPONENT_IDS['timeline.item']}
          data-garden-version={PACKAGE_VERSION}
        />
      </TimelineItemProvider>
    );
  }
);

ItemComponent.displayName = 'Timeline.Item';

/**
 * @extends LiHTMLAttributes<HTMLLIElement>
 */
export const Item = ItemComponent;
