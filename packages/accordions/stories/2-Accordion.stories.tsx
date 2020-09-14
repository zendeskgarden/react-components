/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useCallback, useState } from 'react';
import { Story, Meta } from '@storybook/react';
import { Accordion } from '@zendeskgarden/react-accordions';
import styled from 'styled-components';
import { SM } from '@zendeskgarden/react-typography';
import { IconButton, Button } from '@zendeskgarden/react-buttons';
import { Trigger, Dropdown, Menu, Item } from '@zendeskgarden/react-dropdowns';
import GearIcon from '@zendeskgarden/svg-icons/src/16/gear-stroke.svg';
import FolderIcon from '@zendeskgarden/svg-icons/src/16/folder-open-stroke.svg';

export default {
  title: 'Components/Accordions/Accordion',
  subcomponents: {
    Accordion,
    'Accordion.Section': Accordion.Section,
    'Accordion.Header': Accordion.Header,
    'Accordion.Label': Accordion.Label,
    'Accordion.Panel': Accordion.Panel
  }
} as Meta;

interface IStoryProps {
  isCollapsible: boolean;
  isExpandable: boolean;
  isBare: boolean;
  isCompact: boolean;
}

export const Default: Story<IStoryProps> = ({ isCollapsible, isExpandable, isBare, isCompact }) => {
  return (
    <Accordion
      level={3}
      isCollapsible={isCollapsible}
      isExpandable={isExpandable}
      isBare={isBare}
      isCompact={isCompact}
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

Default.args = {
  isCollapsible: true,
  isExpandable: false,
  isCompact: false,
  isBare: false
};

const StyledSM = styled(SM)`
  margin-left: ${props => props.theme.space.base}px;
`;

const StyledButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: ${props => props.theme.space.base * 28}px;
`;

const ButtonGroup: React.FC<{ isCompact?: boolean }> = ({ isCompact }) => (
  <StyledButtonGroup>
    {/* eslint-disable-next-line no-alert */}
    <Dropdown onSelect={item => alert(item)}>
      <Trigger>
        <IconButton
          title="Settings"
          aria-label="Settings"
          focusInset={isCompact}
          size={isCompact ? 'small' : 'medium'}
        >
          <GearIcon />
        </IconButton>
      </Trigger>
      <Menu placement="top" hasArrow>
        <Item value="option-1">Option 1</Item>
        <Item value="option-2">Option 2</Item>
        <Item value="option-3">Option 3</Item>
      </Menu>
    </Dropdown>
    {/* eslint-disable-next-line no-alert */}
    <Dropdown onSelect={item => alert(item)}>
      <Trigger>
        <IconButton
          title="Settings"
          aria-label="Settings"
          focusInset={isCompact}
          size={isCompact ? 'small' : 'medium'}
        >
          <FolderIcon />
        </IconButton>
      </Trigger>
      <Menu placement="top" hasArrow>
        <Item value="option-1">Option 1</Item>
        <Item value="option-2">Option 2</Item>
        <Item value="option-3">Option 3</Item>
      </Menu>
    </Dropdown>
  </StyledButtonGroup>
);

const StyledButtonWrapper = styled.div`
  margin-bottom: ${p => p.theme.space.md};

  & > * {
    margin-right: ${p => p.theme.space.md};
  }
`;

interface IAdvancedStoryProps {
  isBare: boolean;
  isCompact: boolean;
}

export const Advanced: Story<IAdvancedStoryProps> = ({ isBare, isCompact }) => {
  const accordionSections = [
    {
      id: 'section-0',
      header: 'Turnip greens yarrow',
      headerDetail: 'ricebean rutabaga endive cauliflower sea lettuce kohlrabi',
      panelContent: `Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi
      amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery
      potato scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel
      kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea.
      Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot carrot
      watercress.`
    },
    {
      id: 'section-1',
      header: 'Corn amaranth salsify',
      headerDetail: 'bunya nuts nori azuki bean chickweed potato bell pepper',
      panelContent: `Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper
      artichoke. Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery.
      Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip. Sea lettuce lettuce
      water chestnut eggplant winter purslane fennel azuki bean earthnut pea sierra leone bologi leek
      soko chicory celtuce parsley jícama.`
    },
    {
      id: 'section-2',
      header: 'Celery quandong swiss',
      headerDetail: 'chard chicory earthnut pea potato salsify taro catsear',
      panelContent: `Celery quandong swiss chard chicory earthnut pea potato. Salsify taro catsear
      garlic gram celery bitterleaf wattle seed collard greens nori. Grape wattle seed kombu beetroot
      horseradish carrot squash brussels sprout chard. Pea horseradish azuki bean lettuce avocado
      asparagus okra. Kohlrabi radish okra azuki bean corn fava bean mustard tigernut jícama green
      bean celtuce collard greens avocado quandong fennel gumbo black-eyed pea.`
    },
    {
      id: 'section-3',
      header: 'Grape silver beet',
      headerDetail: 'watercress potato tigernut corn groundnut chickweed okra winter',
      panelContent: `Grape silver beet watercress potato tigernut corn groundnut. Chickweed okra
      winter purslane coriander yarrow sweet pepper radish garlic brussels sprout pea groundnut
      summer purslane earthnut pea tomato spring onion azuki bean gourd. Gumbo kakadu plum komatsuna
      black-eyed pea green bean zucchini gourd winter purslane silver beet rock melon radish
      asparagus spinach.`
    },
    {
      id: 'section-4',
      header: 'Soko radicchio bunya',
      headerDetail: 'nuts gram dulse silver beet parsnip napa cabbage lotus root',
      panelContent: `Soko radicchio bunya nuts gram dulse silver beet parsnip napa cabbage lotus root
      sea lettuce brussels sprout cabbage. Catsear cauliflower garbanzo yarrow salsify chicory garlic
      bell pepper napa cabbage lettuce tomato kale arugula melon sierra leone bologi rutabaga
      tigernut. Sea lettuce gumbo grape kale kombu cauliflower salsify kohlrabi okra sea lettuce
      broccoli celery lotus root carrot winter purslane turnip greens garlic. Jícama garlic courgette
      coriander radicchio plantain scallion cauliflower fava bean desert raisin spring onion chicory
      bunya nuts. Sea lettuce water spinach gram fava bean leek dandelion silver beet eggplant bush.`
    }
  ];

  const [expandedSections, setExpandedSections] = useState([0]);
  const isExpandAll = expandedSections.length === 5;
  const isCollapseAll = expandedSections.length === 0;

  const expandAll = useCallback(() => setExpandedSections([0, 1, 2, 3, 4]), []);

  const collapseAll = useCallback(() => setExpandedSections([]), []);

  const onChange = (index: number) => {
    setExpandedSections(sections =>
      expandedSections.includes(index)
        ? sections.filter(section => section !== index)
        : [...expandedSections, index]
    );
  };

  return (
    <>
      <StyledButtonWrapper>
        <Button onClick={expandAll} disabled={isExpandAll}>
          Expand all
        </Button>
        <Button onClick={collapseAll} disabled={isCollapseAll}>
          Collapse all
        </Button>
      </StyledButtonWrapper>
      <Accordion
        level={3}
        isBare={isBare}
        onChange={onChange}
        isCompact={isCompact}
        expandedSections={expandedSections}
      >
        {accordionSections.map(section => (
          <Accordion.Section key={section.id}>
            <Accordion.Header>
              <Accordion.Label>
                {section.header}
                <StyledSM forwardedAs="span">{section.headerDetail}</StyledSM>
              </Accordion.Label>
              <ButtonGroup isCompact={isCompact} />
            </Accordion.Header>
            <Accordion.Panel>{section.panelContent}</Accordion.Panel>
          </Accordion.Section>
        ))}
      </Accordion>
    </>
  );
};

Advanced.args = {
  isCompact: false,
  isBare: false
};
