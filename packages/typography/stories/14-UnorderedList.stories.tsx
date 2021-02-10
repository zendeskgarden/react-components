/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story, Meta } from '@storybook/react';
import { UnorderedList } from '@zendeskgarden/react-typography';
import { Col, Grid, Row } from '@zendeskgarden/react-grid';

export default {
  title: 'Components/Typography/UnorderedList',
  component: UnorderedList
} as Meta;

const text = [
  `garden es bonus vobis proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth
  tatsoi tomatillo melon azuki bean garlic beet greens corn soko endive gumbo gourd shallot
  courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato cucumber
  earthnut pea peanut soko zucchini.`.split(' '),
  `greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach
  avocado daikon napa cabbage asparagus winter purslane kale celery potato scallion desert raisin
  horseradish spinach carrot soko lotus root water spinach fennel kombu maize bamboo shoot green
  bean swiss chard seakale pumpkin sprout coriander.`.split(' '),
  `water chestnut gourd swiss chard wakame kohlrabi beetroot carrot watercress corn amaranth
  salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke chestnut eggplant
  winter purslane fennel azuki bean earthnut pea sierra leone bologi leek soko chicory celtuce
  parsley jícama salsify celery quandong swiss chard.`.split(' '),
  `rock melon radish asparagus spinach beetroot water spinach okra water chestnut ricebean pea
  catsear courgette summer purslane water spinach arugula pea tatsoi aubergine spring onion bush
  tomato kale radicchio turnip chicory salsify pea sprouts fava bean dandelion zucchini burdock
  yarrow chickpea dandelion sorrel courgette turnip greens.`.split(' ')
];

type TYPE = 'disc' | 'circle' | 'square';

const getType = (level: number): TYPE => {
  const types: TYPE[] = ['disc', 'circle', 'square'];
  const index = level % types.length;

  return types[index];
};

const NestedList = ({ length = 1, levels = 1, level = 0, ...props }) => {
  const content = text.map(string => string.slice(0, length).join(' '));

  if (level < levels) {
    return (
      <UnorderedList {...props} type={level === 0 ? props.type : getType(level)}>
        <UnorderedList.Item>{content[0]}</UnorderedList.Item>
        <UnorderedList.Item>
          {content[1]}
          <NestedList length={length} levels={levels} level={level + 1} {...props} />
        </UnorderedList.Item>
        {level === 0 && (
          <>
            <UnorderedList.Item>{content[2]}</UnorderedList.Item>
            <UnorderedList.Item>{content[3]}</UnorderedList.Item>
          </>
        )}
      </UnorderedList>
    );
  }

  return null;
};

export const Default: Story = props => (
  <Grid>
    <Row>
      <Col>
        <NestedList {...props} />
      </Col>
    </Row>
  </Grid>
);

Default.args = {
  length: 1,
  levels: 1
};

Default.argTypes = {
  length: { control: { type: 'range', min: 1, max: text[0].length } },
  levels: { control: { type: 'range', min: 1, max: 9 } }
};
