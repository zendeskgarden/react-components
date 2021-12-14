/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story } from '@storybook/react';
import { Accordion } from '@zendeskgarden/react-accordions';

interface IStoryProps {
  isCollapsible: boolean;
  isExpandable: boolean;
  isBare: boolean;
  isCompact: boolean;
  isAnimated: boolean;
  defaultExpandedSections: number[];
}

export const Uncontrolled: Story<IStoryProps> = ({
  isCollapsible,
  isExpandable,
  isBare,
  isCompact,
  isAnimated
}) => {
  return (
    <Accordion
      level={3}
      isCollapsible={isCollapsible}
      isExpandable={isExpandable}
      isBare={isBare}
      isCompact={isCompact}
      isAnimated={isAnimated}
    >
      <Accordion.Section>
        <Accordion.Header>
          <Accordion.Label>Turnip greens yarrow</Accordion.Label>
        </Accordion.Header>
        <Accordion.Panel>
          Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth
          water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato
          scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel
          kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn
          pea. Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot
          carrot watercress.
        </Accordion.Panel>
      </Accordion.Section>
      <Accordion.Section>
        <Accordion.Header>
          <Accordion.Label>Corn amaranth salsify</Accordion.Label>
        </Accordion.Header>
        <Accordion.Panel>
          Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke.
          Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya
          nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip. Sea lettuce lettuce
          water chestnut eggplant winter purslane fennel azuki bean earthnut pea sierra leone bologi
          leek soko chicory celtuce parsley jícama.
        </Accordion.Panel>
      </Accordion.Section>
      <Accordion.Section>
        <Accordion.Header>
          <Accordion.Label>Celery quandong swiss</Accordion.Label>
        </Accordion.Header>
        <Accordion.Panel>
          Celery quandong swiss chard chicory earthnut pea potato. Salsify taro catsear garlic gram
          celery bitterleaf wattle seed collard greens nori. Grape wattle seed kombu beetroot
          horseradish carrot squash brussels sprout chard. Pea horseradish azuki bean lettuce
          avocado asparagus okra. Kohlrabi radish okra azuki bean corn fava bean mustard tigernut
          jícama green bean celtuce collard greens avocado quandong fennel gumbo black-eyed pea.
        </Accordion.Panel>
      </Accordion.Section>
      <Accordion.Section>
        <Accordion.Header>
          <Accordion.Label>Grape silver beet</Accordion.Label>
        </Accordion.Header>
        <Accordion.Panel>
          Grape silver beet watercress potato tigernut corn groundnut. Chickweed okra winter
          purslane coriander yarrow sweet pepper radish garlic brussels sprout pea groundnut summer
          purslane earthnut pea tomato spring onion azuki bean gourd. Gumbo kakadu plum komatsuna
          black-eyed pea green bean zucchini gourd winter purslane silver beet rock melon radish
          asparagus spinach.
        </Accordion.Panel>
      </Accordion.Section>
      <Accordion.Section>
        <Accordion.Header>
          <Accordion.Label>Soko radicchio bunya</Accordion.Label>
        </Accordion.Header>
        <Accordion.Panel>
          Soko radicchio bunya nuts gram dulse silver beet parsnip napa cabbage lotus root sea
          lettuce brussels sprout cabbage. Catsear cauliflower garbanzo yarrow salsify chicory
          garlic bell pepper napa cabbage lettuce tomato kale arugula melon sierra leone bologi
          rutabaga tigernut. Sea lettuce gumbo grape kale kombu cauliflower salsify kohlrabi okra
          sea lettuce broccoli celery lotus root carrot winter purslane turnip greens garlic. Jícama
          garlic courgette coriander radicchio plantain scallion cauliflower fava bean desert raisin
          spring onion chicory bunya nuts. Sea lettuce water spinach gram fava bean leek dandelion
          silver beet eggplant bush.
        </Accordion.Panel>
      </Accordion.Section>
    </Accordion>
  );
};

Uncontrolled.args = {
  isCollapsible: true,
  isExpandable: false,
  isCompact: false,
  isAnimated: true,
  isBare: false
};

Uncontrolled.argTypes = {
  defaultExpandedSections: {
    control: { disable: true }
  }
};

Uncontrolled.parameters = {
  docs: {
    description: {
      component:
        'The Accordion component is implemented using the [W3C Accordion pattern](https://www.w3.org/TR/wai-aria-practices/#accordion).'
    }
  }
};
