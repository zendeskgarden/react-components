/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story } from '@storybook/react';
import { Chrome, Body, Header, HeaderItem, HeaderItemIcon } from '@zendeskgarden/react-chrome';
import { Avatar } from '@zendeskgarden/react-avatars';
import GridIcon from '@zendeskgarden/svg-icons/src/16/grid-2x2-stroke.svg';

export const ChromeUsage: Story = () => {
  const CustomHeaderItem = HeaderItem as any;

  return (
    <Chrome isFluid style={{ height: 'auto' }}>
      <Body>
        <Header>
          <CustomHeaderItem as="button">
            <HeaderItemIcon>
              <GridIcon />
            </HeaderItemIcon>
          </CustomHeaderItem>
          <CustomHeaderItem as="button" isRound>
            <Avatar size="extrasmall">
              <img
                alt="Example User"
                src={`images/avatar-${Math.floor(Math.random() * 70 + 1)}.png`}
              />
            </Avatar>
          </CustomHeaderItem>
        </Header>
      </Body>
    </Chrome>
  );
};

ChromeUsage.storyName = 'Chrome usage';

ChromeUsage.argTypes = {};

ChromeUsage.parameters = {
  docs: {
    description: {
      story: `
  Use an \`extrasmall\` avatar within a Chrome \`HeaderItem\`
  in order to provide a user profile menu. Remember to add
  the \`isRound\` prop to the header item so that the keyboard focus
  ring is properly styled. Status may be added to this avatar without
  impacting the height of the header. See the code for details.
`
    }
  }
};
