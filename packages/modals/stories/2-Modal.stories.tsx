/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import { Button } from '@zendeskgarden/react-buttons';
import { Paragraph } from '@zendeskgarden/react-typography';
import { Modal, Header, Body, Footer, FooterItem, Close } from '@zendeskgarden/react-modals';
import { Col, Grid, Row } from '@zendeskgarden/react-grid';

export default {
  title: 'Components/Modals/Modal',
  component: Modal
} as Meta;

export const Default: Story = ({
  isLarge,
  isDanger,
  isAnimated,
  isCentered,
  focusOnMount,
  restoreFocus,
  id
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <Grid>
      <Row>
        <Col textAlign="center">
          <Button isDanger={isDanger} onClick={() => setVisible(true)}>
            Open modal
          </Button>
          {visible && (
            <Modal
              id={id}
              isLarge={isLarge}
              isAnimated={isAnimated}
              isCentered={isCentered}
              focusOnMount={focusOnMount}
              restoreFocus={restoreFocus}
              onClose={() => setVisible(false)}
            >
              <Header isDanger={isDanger}>Brussels Sprout</Header>
              <Body>
                {isLarge ? (
                  <>
                    <Paragraph>
                      Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi
                      amaranth water spinach avocado daikon napa cabbage asparagus winter purslane
                      kale. Celery potato scallion desert raisin horseradish spinach carrot soko.
                      Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss
                      chard seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander
                      water chestnut gourd swiss chard wakame kohlrabi beetroot carrot watercress.
                      Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper
                      artichoke. Nori grape silver beet broccoli kombu beet greens fava bean potato
                      quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip
                      greens parsnip. Sea lettuce lettuce water chestnut eggplant winter purslane
                      fennel azuki bean earthnut pea sierra leone bologi leek soko chicory celtuce
                      parsley jícama. Celery quandong swiss chard chicory earthnut pea potato.
                      Salsify taro catsear garlic gram celery bitterleaf wattle seed collard greens
                      nori. Grape wattle seed kombu beetroot horseradish carrot squash brussels
                      sprout chard. Pea horseradish azuki bean lettuce avocado asparagus okra.
                      Kohlrabi radish okra azuki bean corn fava bean mustard tigernut jícama green
                      bean celtuce collard greens avocado quandong fennel gumbo black-eyed pea. Soko
                      radicchio bunya nuts gram dulse silver beet parsnip napa cabbage lotus root
                      sea lettuce brussels sprout cabbage. Catsear cauliflower garbanzo yarrow
                      salsify chicory garlic bell pepper napa cabbage lettuce tomato kale arugula
                      melon sierra leone bologi rutabaga tigernut.
                    </Paragraph>
                    <Paragraph>
                      Sea lettuce gumbo grape kale kombu cauliflower salsify kohlrabi okra sea
                      lettuce broccoli celery lotus root carrot winter purslane turnip greens
                      garlic. Jícama garlic courgette coriander radicchio plantain scallion
                      cauliflower fava bean desert raisin spring onion chicory bunya nuts. Sea
                      lettuce water spinach gram fava bean leek dandelion silver beet eggplant bush.
                      Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi
                      beetroot carrot watercress. Corn amaranth salsify bunya nuts nori azuki bean
                      chickweed potato bell pepper artichoke. Nori grape silver beet broccoli kombu
                      beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea
                      prairie turnip leek lentil turnip greens parsnip. Sea lettuce lettuce water
                      chestnut eggplant winter purslane fennel azuki bean earthnut pea sierra leone
                      bologi leek soko chicory celtuce parsley jícama. Celery quandong swiss chard
                      chicory earthnut pea potato. Salsify taro catsear garlic gram celery
                      bitterleaf wattle seed collard greens nori. Grape wattle seed kombu beetroot
                      horseradish carrot squash brussels sprout chard. Pea horseradish azuki bean
                      lettuce avocado asparagus okra. Kohlrabi radish okra azuki bean corn fava bean
                      mustard tigernut jícama green bean celtuce collard greens avocado quandong
                      fennel gumbo black-eyed pea. Soko radicchio bunya nuts gram dulse silver beet
                      parsnip napa cabbage lotus root sea lettuce brussels sprout cabbage. Catsear
                      cauliflower garbanzo yarrow salsify chicory garlic bell pepper napa cabbage
                      lettuce tomato kale arugula melon sierra leone bologi rutabaga tigernut. Sea
                      lettuce gumbo grape kale kombu cauliflower salsify kohlrabi okra sea lettuce
                      broccoli celery lotus root carrot winter purslane turnip greens garlic. Jícama
                      garlic courgette coriander radicchio plantain scallion cauliflower fava bean
                      desert raisin spring onion chicory bunya nuts. Sea lettuce water spinach gram
                      fava bean leek dandelion silver beet eggplant bush.
                    </Paragraph>
                    <Paragraph>
                      Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi
                      amaranth water spinach avocado daikon napa cabbage asparagus winter purslane
                      kale. Celery potato scallion desert raisin horseradish spinach carrot soko.
                      Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss
                      chard seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander
                      water chestnut gourd swiss chard wakame kohlrabi beetroot carrot watercress.
                      Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper
                      artichoke. Nori grape silver beet broccoli kombu beet greens fava bean potato
                      quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip
                      greens parsnip. Sea lettuce lettuce water chestnut eggplant winter purslane
                      fennel azuki bean earthnut pea sierra leone bologi leek soko chicory celtuce
                      parsley jícama. Celery quandong swiss chard chicory earthnut pea potato.
                      Salsify taro catsear garlic gram celery bitterleaf wattle seed collard greens
                      nori. Grape wattle seed kombu beetroot horseradish carrot squash brussels
                      sprout chard. Pea horseradish azuki bean lettuce avocado asparagus okra.
                      Kohlrabi radish okra azuki bean corn fava bean mustard tigernut jícama green
                      bean celtuce collard greens avocado quandong fennel gumbo black-eyed pea. Soko
                      radicchio bunya nuts gram dulse silver beet parsnip napa cabbage lotus root
                      sea lettuce brussels sprout cabbage. Catsear cauliflower garbanzo yarrow
                      salsify chicory garlic bell pepper napa cabbage lettuce tomato kale arugula
                      melon sierra leone bologi rutabaga tigernut. Sea lettuce gumbo grape kale
                      kombu cauliflower salsify kohlrabi okra sea lettuce broccoli celery lotus root
                      carrot winter purslane turnip greens garlic. Jícama garlic courgette coriander
                      radicchio plantain scallion cauliflower fava bean desert raisin spring onion
                      chicory bunya nuts. Sea lettuce water spinach gram fava bean leek dandelion
                      silver beet eggplant bush.
                    </Paragraph>
                    <Paragraph>
                      Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi
                      amaranth water spinach avocado daikon napa cabbage asparagus winter purslane
                      kale. Celery potato scallion desert raisin horseradish spinach carrot soko.
                      Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss
                      chard seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander
                      water chestnut gourd swiss chard wakame kohlrabi beetroot carrot watercress.
                      Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper
                      artichoke. Nori grape silver beet broccoli kombu beet greens fava bean potato
                      quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip
                      greens parsnip. Sea lettuce lettuce water chestnut eggplant winter purslane
                      fennel azuki bean earthnut pea sierra leone bologi leek soko chicory celtuce
                      parsley jícama. Celery quandong swiss chard chicory earthnut pea potato.
                      Salsify taro catsear garlic gram celery bitterleaf wattle seed collard greens
                      nori. Grape wattle seed kombu beetroot horseradish carrot squash brussels
                      sprout chard. Pea horseradish azuki bean lettuce avocado asparagus okra.
                      Kohlrabi radish okra azuki bean corn fava bean mustard tigernut jícama green
                      bean celtuce collard greens avocado quandong fennel gumbo black-eyed pea. Soko
                      radicchio bunya nuts gram dulse silver beet parsnip napa cabbage lotus root
                      sea lettuce brussels sprout cabbage. Catsear cauliflower garbanzo yarrow
                      salsify chicory garlic bell pepper napa cabbage lettuce tomato kale arugula
                      melon sierra leone bologi rutabaga tigernut. Sea lettuce gumbo grape kale
                      kombu cauliflower salsify kohlrabi okra sea lettuce broccoli celery lotus root
                      carrot winter purslane turnip greens garlic. Jícama garlic courgette coriander
                      radicchio plantain scallion cauliflower fava bean desert raisin spring onion
                      chicory bunya nuts. Sea lettuce water spinach gram fava bean leek dandelion
                      silver beet eggplant bush.
                    </Paragraph>
                  </>
                ) : (
                  <>
                    Soko radicchio bunya nuts gram dulse silver beet parsnip napa cabbage lotus root
                    sea lettuce brussels sprout cabbage.
                  </>
                )}
              </Body>
              <Footer>
                <FooterItem>
                  <Button onClick={() => setVisible(false)} isBasic>
                    Cancel
                  </Button>
                </FooterItem>
                <FooterItem>
                  <Button isPrimary isDanger={isDanger} onClick={() => setVisible(false)}>
                    Save
                  </Button>
                </FooterItem>
              </Footer>
              <Close aria-label="Close modal" />
            </Modal>
          )}
        </Col>
      </Row>
    </Grid>
  );
};

Default.argTypes = {
  backdropProps: { control: { disable: true } },
  isLarge: {
    control: 'boolean'
  },
  isDanger: {
    control: 'boolean'
  },
  isAnimated: {
    control: 'boolean'
  },
  isCentered: {
    control: 'boolean'
  },
  focusOnMount: {
    control: 'boolean'
  },
  restoreFocus: {
    control: 'boolean'
  },
  id: {
    control: 'text'
  },
  appendToNode: { control: { disable: true } }
};
