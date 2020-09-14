/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story, Meta } from '@storybook/react';
import styled from 'styled-components';

import { Stepper } from '@zendeskgarden/react-accordions';
import StarStrokeIcon from '@zendeskgarden/svg-icons/src/12/star-stroke.svg';
import SmileyStrokeIcon from '@zendeskgarden/svg-icons/src/12/smiley-stroke.svg';
import HomeStrokeIcon from '@zendeskgarden/svg-icons/src/12/home-stroke.svg';
import HeartStrokeIcon from '@zendeskgarden/svg-icons/src/12/heart-stroke.svg';
import GlobeStrokeIcon from '@zendeskgarden/svg-icons/src/12/globe-stroke.svg';
import CarStrokeIcon from '@zendeskgarden/svg-icons/src/12/car-stroke.svg';
import PencilStrokeIcon from '@zendeskgarden/svg-icons/src/12/pencil-stroke.svg';
import PhoneStrokeIcon from '@zendeskgarden/svg-icons/src/12/phone-stroke.svg';
import LightningBoltStrokeIcon from '@zendeskgarden/svg-icons/src/12/lightning-bolt-stroke.svg';
import SearchStrokeIcon from '@zendeskgarden/svg-icons/src/12/search-stroke.svg';

export default {
  title: 'Components/Accordions/Stepper',
  subcomponents: {
    Stepper,
    'Stepper.Step': Stepper.Step,
    'Stepper.Label': Stepper.Label,
    'Stepper.Content': Stepper.Content
  }
} as Meta;

const StyledHorizontalContent = styled.div`
  padding: ${props => `${props.theme.space.base * 6}px 0`};
`;

interface IStoryProps {
  isHorizontal: boolean;
  showLongLabel: boolean;
  hiddenLabels: boolean;
  customIcons: boolean;
  activeStep: number;
  numSteps: number;
}

export const Default: Story<IStoryProps> = ({
  isHorizontal,
  showLongLabel,
  hiddenLabels,
  customIcons,
  numSteps,
  activeStep
}) => {
  const allSteps = [
    {
      id: 'stepper-step-1',
      icon: StarStrokeIcon,
      label: 'Veggies Es',
      longLabel: 'Veggies Es Vobis Sweetpotatotomatillo',
      content: `Veggies es vobis, sweetpotatotomatillo vos postulo essum magis kohlrabi welsh
      onion daikon amaranth tatsoi tomatillo melon azuki bean garlic. Gumbo beet greens corn soko
      endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens
      dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.`
    },
    {
      id: 'stepper-step-2',
      icon: SmileyStrokeIcon,
      label: 'Turnip Greens',
      longLabel: 'Turnip Greens Yarrow Ricebean Rutabaga',
      content: `Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi
      amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery
      potato scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel
      kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea.
      Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot carrot
      watercress.`
    },
    {
      id: 'stepper-step-3',
      icon: HomeStrokeIcon,
      label: 'Corn Amaranth',
      longLabel: 'Corn Amaranth Salsify Bunya Nuts',
      content: `Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper
      artichoke. Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery.
      Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip. Sea lettuce lettuce
      water chestnut eggplant winter purslane fennel azuki bean earthnut pea sierra leone bologi leek
      soko chicory celtuce parsley jícama.`
    },
    {
      id: 'stepper-step-4',
      icon: HeartStrokeIcon,
      label: 'Celery Quandong',
      longLabel: 'Celery Quandong Swiss Chard Chicory',
      content: `Celery quandong swiss chard chicory earthnut pea potato. Salsify taro catsear garlic
      gram celery bitterleaf wattle seed collard greens nori. Grape wattle seed kombu beetroot
      horseradish carrot squash brussels sprout chard. Pea horseradish azuki bean lettuce avocado
      asparagus okra. Kohlrabi radish okra azuki bean corn fava bean mustard tigernut jícama green
      bean celtuce collard greens avocado quandong fennel gumbo black-eyed pea.`
    },
    {
      id: 'stepper-step-5',
      icon: GlobeStrokeIcon,
      label: 'Grape Silver',
      longLabel: 'Grape Silver Beet Watercress Potato',
      content: `Grape silver beet watercress potato tigernut corn groundnut. Chickweed okra winter
      purslane coriander yarrow sweet pepper radish garlic brussels sprout pea groundnut summer
      purslane earthnut pea tomato spring onion azuki bean gourd. Gumbo kakadu plum komatsuna
      black-eyed pea green bean zucchini gourd winter purslane silver beet rock melon radish
      asparagus spinach.`
    },
    {
      id: 'stepper-step-6',
      icon: CarStrokeIcon,
      label: 'Beetroot Water',
      longLabel: 'Beetroot Water Spinach Okra Water',
      content: `Beetroot water spinach okra water chestnut ricebean pea catsear courgette summer
      purslane. Water spinach arugula pea tatsoi aubergine spring onion bush tomato kale radicchio
      turnip chicory salsify pea sprouts fava bean. Dandelion zucchini burdock yarrow chickpea
      dandelion sorrel courgette turnip greens tigernut soybean radish artichoke wattle seed endive
      groundnut broccoli arugula.`
    },
    {
      id: 'stepper-step-7',
      icon: PencilStrokeIcon,
      label: 'Soko Radicchio',
      longLabel: 'Soko Radicchio Bunya Nuts Gram',
      content: `Soko radicchio bunya nuts gram dulse silver beet parsnip napa cabbage lotus root sea
      lettuce brussels sprout cabbage. Catsear cauliflower garbanzo yarrow salsify chicory garlic
      bell pepper napa cabbage lettuce tomato kale arugula melon sierra leone bologi rutabaga
      tigernut. Sea lettuce gumbo grape kale kombu cauliflower salsify kohlrabi okra sea lettuce
      broccoli celery lotus root carrot winter purslane turnip greens garlic. Jícama garlic courgette
      coriander radicchio plantain scallion cauliflower fava bean desert raisin spring onion chicory
      bunya nuts. Sea lettuce water spinach gram fava bean leek dandelion silver beet eggplant bush.`
    },
    {
      id: 'stepper-step-8',
      icon: PhoneStrokeIcon,
      label: 'Zucchini Soko',
      longLabel: 'Zucchini Soko Peanut Pea Okra',
      content: `Zucchini soko peanut pea okra cucumber Dandelion tomato. wakame earthnut dandelion
      greens collard bean fava sprouts pea tatsoi courgette shallot Parsley gourd. Gumbo endive soko
      corn greens beet Gumbo garlic. Bean azuki melon tomatillo tatsoi amaranth daikon onion welsh
      kohlrabi magis essum postulo vos proinde vobis, bonus es veggies.`
    },
    {
      id: 'stepper-step-9',
      icon: LightningBoltStrokeIcon,
      label: 'Swiss Carrot',
      longLabel: 'Swiss Carrot Beetroot Kohlrabi Wakame',
      content: `Swiss carrot beetroot kohlrabi wakame chard gourd chestnut water coriander sprout
      brussels pea. Corn gram chickpea onion pumpkin seakale chard swiss bean green shoot bamboo
      maize kombu fennel spinach water root Lotus soko. Carrot spinach horseradish raisin desert
      scallion potato celery kale. Purslane winter asparagus cabbage napa daikon avocado spinach
      water amaranth kohlrabi lettuce sea cauliflower endive rutabaga ricebean yarrow greens.`
    },
    {
      id: 'stepper-step-10',
      icon: SearchStrokeIcon,
      label: 'Pea Black-eyed',
      longLabel: 'Pea Black-eyed Gumbo Fennel',
      content: `Pea black-eyed gumbo fennel quandong avocado greens collard celtuce bean green jícama
      tigernut mustard bean fava corn bean azuki okra radish Kohlrabi okra. asparagus avocado lettuce
      bean azuki horseradish pea chard. Sprout brussels squash carrot horseradish beetroot kombu seed
      wattle Grape nori. Greens collard seed wattle bitterleaf celery gram garlic catsear taro
      salsify potato. Pea earthnut chicory chard swiss quandong celery.`
    }
  ];

  const steps = allSteps.filter((step, index) => index < numSteps);

  return (
    <>
      <Stepper activeIndex={activeStep - 1} isHorizontal={isHorizontal}>
        {steps.map(step => {
          const { id, label, longLabel, content, icon: Icon } = step;

          return (
            <Stepper.Step key={id}>
              <Stepper.Label isHidden={hiddenLabels} icon={customIcons && <Icon />}>
                {showLongLabel ? longLabel : label}
              </Stepper.Label>
              <Stepper.Content>{content}</Stepper.Content>
            </Stepper.Step>
          );
        })}
      </Stepper>
      {isHorizontal && (
        <StyledHorizontalContent>
          {steps.map(
            (step, index) =>
              isHorizontal && index === activeStep - 1 && <span key={step.id}>{step.content}</span>
          )}
        </StyledHorizontalContent>
      )}
    </>
  );
};

Default.argTypes = {
  numSteps: {
    name: 'Total steps',
    control: { type: 'range', min: 1, max: 10, step: 1 }
  },
  activeStep: {
    name: 'Active step',
    control: { type: 'range', min: 1, max: 10, step: 1 }
  },
  customIcons: {
    name: 'Custom icons'
  },
  hiddenLabels: {
    name: 'Hidden labels'
  },
  showLongLabel: {
    name: 'Long labels'
  }
};

Default.args = {
  isHorizontal: false,
  numSteps: 3,
  activeStep: 1,
  customIcons: false,
  hiddenLabels: false,
  showLongLabel: false
};
