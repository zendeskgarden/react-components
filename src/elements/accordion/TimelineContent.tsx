/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { forwardRef, HTMLAttributes } from 'react';
import CircleIcon from 'svg-icons-legacy/src/12/circle-full-stroke.svg';

import { useTimelineItemContext } from '../../hooks/accordion/useTimelineItemContext';
import { StyledItemIcon } from '../../views/accordion/StyledItemIcon';
import { StyledSeparator } from '../../views/accordion/StyledSeparator';
import { StyledTimelineContent } from '../../views/accordion/StyledTimelineContent';
import { COMPONENT_IDS } from '../utils';

const ContentComponent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  (props, ref) => {
    const { icon, surfaceColor } = useTimelineItemContext();

    return (
      <>
        <StyledSeparator
          data-garden-id={COMPONENT_IDS['timeline.content.separator']}
          data-garden-version={PACKAGE_VERSION}
        >
          <StyledItemIcon
            $surfaceColor={surfaceColor}
            data-garden-id={COMPONENT_IDS['timeline.icon']}
            data-garden-version={PACKAGE_VERSION}
          >
            {icon || <CircleIcon />}
          </StyledItemIcon>
        </StyledSeparator>
        <StyledTimelineContent
          ref={ref}
          {...props}
          data-garden-id={COMPONENT_IDS['timeline.content']}
          data-garden-version={PACKAGE_VERSION}
        />
      </>
    );
  }
);

ContentComponent.displayName = 'Timeline.Content';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Content = ContentComponent;
