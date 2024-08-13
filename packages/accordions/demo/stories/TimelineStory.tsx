/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { useTheme } from 'styled-components';
import { StoryFn } from '@storybook/react';
import Icon from '@zendeskgarden/svg-icons/src/12/clock-stroke.svg';
import { getColor } from '@zendeskgarden/react-theming';
import { Span } from '@zendeskgarden/react-typography';
import { Timeline, ITimelineProps } from '@zendeskgarden/react-accordions';
import { ITimelineItem } from './types';

interface IArgs extends ITimelineProps {
  hasIcon: boolean;
  hasOppositeContent: boolean;
  items: ITimelineItem[];
  surfaceColor: string;
}

export const TimelineStory: StoryFn<IArgs> = ({ items, surfaceColor, ...args }) => {
  const theme = useTheme();
  const backgroundColor = surfaceColor?.includes('.')
    ? getColor({ theme, variable: surfaceColor })
    : surfaceColor;

  return (
    <div style={{ backgroundColor }}>
      <Timeline {...args}>
        {items.map((item, index) => (
          <Timeline.Item
            key={index}
            icon={args.hasIcon ? <Icon /> : undefined}
            surfaceColor={surfaceColor}
          >
            {args.hasOppositeContent && (
              <Timeline.OppositeContent>
                <Span hue="grey">{item.description}</Span>
              </Timeline.OppositeContent>
            )}
            <Timeline.Content>
              <Span isBold tag="div">
                {item.title}
              </Span>
              {!args.hasOppositeContent && <Span hue="grey">{item.description}</Span>}
            </Timeline.Content>
          </Timeline.Item>
        ))}
      </Timeline>
    </div>
  );
};
