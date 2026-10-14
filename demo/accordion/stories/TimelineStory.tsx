/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { Span } from '@zendeskgarden/react-typography';
import { useTheme } from 'styled-components';
import Icon from 'svg-icons-legacy/src/12/clock-stroke.svg';

import { Timeline, ITimelineProps } from '../../../src/index';
import { getColor } from '../../../src/theming/utils/getColor';
import { ITimelineItem } from './types';

interface IArgs extends ITimelineProps {
  hasIcon: boolean;
  hasOppositeContent: boolean;
  items: ITimelineItem[];
  surfaceColor: string;
}

export const TimelineStory = ({ items, surfaceColor, ...args }: IArgs) => {
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
            {!!args.hasOppositeContent && (
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
