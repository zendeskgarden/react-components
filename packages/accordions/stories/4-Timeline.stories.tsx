/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { Story, Meta } from '@storybook/react';
import { MD } from '@zendeskgarden/react-typography';
import { Timeline } from '@zendeskgarden/react-accordions';
import EyeIcon from '@zendeskgarden/svg-icons/src/12/eye-stroke.svg';
import EmailIcon from '@zendeskgarden/svg-icons/src/12/email-stroke.svg';
import CartIcon from '@zendeskgarden/svg-icons/src/12/shopping-cart-stroke.svg';
import ClipboardIcon from '@zendeskgarden/svg-icons/src/12/clipboard-blank-stroke.svg';

const items = [
  {
    icon: <EmailIcon />,
    time: 'Today 9:00 AM',
    activity: 'Issue with order'
  },
  {
    icon: <ClipboardIcon />,
    time: 'Feb 08, 9:05 AM',
    activity: 'Ordered 3 items'
  },
  {
    icon: <CartIcon />,
    time: 'Jan 21, 9:13 AM',
    activity: 'Added 3 items to cart'
  },
  {
    icon: <EyeIcon />,
    time: 'Jan 21, 9:21 AM',
    activity: 'Viewed product page'
  }
];

interface IStoryProps {
  isAlternate: boolean;
  customIcons: boolean;
  showOppositeContent: boolean;
}

export default {
  title: 'Components/Accordions/Timeline',
  subcomponents: {
    Timeline,
    'Timeline.Item': Timeline.Item,
    'Timeline.Content': Timeline.Content,
    'Timeline.OppositeContent': Timeline.OppositeContent
  }
} as Meta;

const StyledTime = styled(MD)`
  color: ${props => props.theme.palette.grey[800]};
`;

const StyledActivity = styled(MD)`
  color: ${props => props.theme.palette.grey[600]};
`;

export const Default: Story<IStoryProps> = ({ isAlternate, customIcons, showOppositeContent }) => (
  <Timeline isAlternate={isAlternate}>
    {items.map((item, index) => (
      <Timeline.Item key={index} icon={customIcons ? item.icon : null}>
        {showOppositeContent ? (
          <Timeline.OppositeContent>
            <StyledTime isBold>{item.time}</StyledTime>
          </Timeline.OppositeContent>
        ) : null}
        <Timeline.Content>
          {showOppositeContent ? null : <StyledTime isBold>{item.time}</StyledTime>}
          <StyledActivity>{item.activity}</StyledActivity>
        </Timeline.Content>
      </Timeline.Item>
    ))}
  </Timeline>
);

Default.args = {
  isAlternate: false,
  customIcons: false,
  showOppositeContent: false
};

Default.argTypes = {
  customIcons: {
    name: 'Show custom icons'
  },
  showOppositeContent: {
    name: 'Show opposite content'
  }
};

Default.parameters = {
  docs: {
    description: {
      component: 'The Timeline component displays a list of events in chronological order.'
    }
  }
};
