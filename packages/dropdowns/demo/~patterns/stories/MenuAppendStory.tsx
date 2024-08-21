/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useRef } from 'react';
import { StoryFn } from '@storybook/react';
import { Menu, Item } from '@zendeskgarden/react-dropdowns';
import { Paragraph } from '@zendeskgarden/react-typography';
import { StyledContainer } from './ListboxStory';

interface IArgs {
  appendToNode: boolean;
}

export const MenuAppendStory: StoryFn<IArgs> = ({ appendToNode }) => {
  const portalNode = useRef<HTMLDivElement>(null);

  return (
    <>
      <div ref={portalNode} />
      <StyledContainer>
        <Menu
          button="Menu"
          appendToNode={appendToNode ? portalNode.current || undefined : undefined}
          minHeight="fit-content"
        >
          <Item value="One" />
          <Item value="Two" />
          <Item value="Three" />
          <Item value="Four" />
          <Item value="Five" />
          <Item value="Six" />
          <Item value="Seven" />
          <Item value="Eight" />
          <Item value="Nine" />
        </Menu>
        <Paragraph style={{ marginTop: 20 }}>
          Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth
          water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato
          scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel
          kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn
          pea. Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot
          carrot watercress. Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell
          pepper artichoke.
        </Paragraph>
      </StyledContainer>
    </>
  );
};
