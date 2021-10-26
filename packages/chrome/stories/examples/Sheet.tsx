/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story } from '@storybook/react';

import { Sheet } from '@zendeskgarden/react-chrome';
import { Button } from '@zendeskgarden/react-buttons';
import { Col, Grid, Row } from '@zendeskgarden/react-grid';
import { useState } from '@storybook/addons';

export const SheetStory: Story = ({
  isOpen,
  isAnimated,
  focusOnMount,
  restoreFocus,
  onClick = () => null
}) => {
  return (
    <Sheet
      isOpen={isOpen}
      isAnimated={isAnimated}
      focusOnMount={focusOnMount}
      restoreFocus={restoreFocus}
      style={{ maxHeight: '600px' }}
    >
      <Sheet.Header>
        <Sheet.Title>Garden</Sheet.Title>
        <Sheet.Description>Vegetables in the Garden</Sheet.Description>
      </Sheet.Header>
      <Sheet.Body style={{ padding: '20px' }}>
        <p style={{ textAlign: 'left' }}>
          Shaved almonds soy milk black bean chili dip second course salad edamame apple vinaigrette
          cremini mushrooms tofu mint with fiery fruit coconut sugar roasted peanuts Thai dark and
          stormy banana crunchy seaweed sparkling pomegranate punch summer blackberries strawberry
          spinach salad crispy Thai curry mediterranean vegetables crumbled lentils. Apricot
          shiitake mushrooms seasonal rich coconut cream ginger carrot spiced juice guacamole hot
          sandwiches burritos jalapeño four-layer green tea overflowing berries pomegranate avocado
          basil pesto Thai super chili. Blueberries casserole cumin picnic salad cherries heat miso
          turmeric glazed aubergine vine tomatoes cool fig arugula cashew salad chia seeds homemade
          balsamic sesame soba noodles.
        </p>
        <p style={{ textAlign: 'left' }}>
          Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke.
          Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Corn
          amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke. Nori
          grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Corn
          amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke. Nori
          grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Corn
          amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke. Nori
          grape silver beet broccoli kombu beet greens fava bean potato quandong celery.
        </p>
        <p style={{ textAlign: 'left' }}>
          Candy cane winter Malaysian sleepy morning tea refreshing cucumber splash chilies dessert
          blueberry pops avocado fresh bananas lingonberry. Tasty grenadillo peach strawberry mango
          cayenne hummus Caribbean red habanero edamame hummus bento box pumpkin butternut mix chili
          asian pear green tea lime entree maple orange tempeh miso dressing alfalfa sprouts winter
          cherry black bean wraps toasted hazelnuts lavender lemonade. Pesto banh mi salad rolls
          peanut butter one bowl apples mocha chocolate cool off lemon Bolivian rainbow pepper
          avocado dressing drizzle black beans cinnamon mangos garlic sriracha noodles Thai sun
          pepper creamiest lentils oranges soba noodles. Lime mango crisp couscous paprika pine nuts
          kung pao pepper vitamin glow picnic hearty sweet potato peaches appetizer green grapes
          tabasco pepper red amazon pepper Mexican fiesta dark chocolate coriander Sicilian
          pistachio pesto ginger tofu basil chocolate.
        </p>
      </Sheet.Body>
      <Sheet.Footer isCompact={true}>
        <Sheet.FooterItem>
          <a href="/#">Footer</a>
        </Sheet.FooterItem>
      </Sheet.Footer>
      <Sheet.Close onClick={onClick} />
    </Sheet>
  );
};

SheetStory.storyName = 'Standalone Sheet';

SheetStory.args = {
  isOpen: true,
  isAnimated: true,
  focusOnMount: false,
  restoreFocus: false
};

SheetStory.argTypes = {
  isOpen: {
    name: 'isOpen',
    control: 'boolean'
  },
  isAnimated: {
    name: 'isAnimated',
    control: 'boolean'
  },
  focusOnMount: {
    name: 'focusOnMount',
    control: 'boolean'
  },
  restoreFocus: {
    name: 'restoreFocus',
    control: 'boolean'
  }
};

export const ControlledSheetStory: Story = ({ focusOnMount, restoreFocus }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Grid>
      <Row>
        <Col>
          <Button onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen}>
            Open Sheet
          </Button>
        </Col>
        <Col>
          <SheetStory
            isOpen={isOpen}
            focusOnMount={focusOnMount}
            restoreFocus={restoreFocus}
            onClick={() => setIsOpen(false)}
          />
        </Col>
      </Row>
    </Grid>
  );
};

ControlledSheetStory.storyName = 'Controlled Sheet';

ControlledSheetStory.args = {
  focusOnMount: true,
  restoreFocus: true
};

ControlledSheetStory.argTypes = {
  focusOnMount: {
    name: 'focusOnMount',
    control: 'boolean'
  },
  restoreFocus: {
    name: 'restoreFocus',
    control: 'boolean'
  }
};
