/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { IColProps } from '@zendeskgarden/react-grid';
import { IGridRow, ISplitterPane } from './types';

const ROW_COLUMNS_STANDARD: IColProps[] = Array.from({ length: 12 }, (_, index) => ({
  children: index < 9 ? `0${index + 1}` : `${index + 1}`,
  textAlign: 'center'
}));

const ROW_COLUMNS_RESPONSIVE: IColProps[] = Array(12).fill({
  children: 'xl={1} lg={2} md={4} sm={6} xs={12}',
  textAlign: 'center',
  xl: 1,
  lg: 2,
  md: 4,
  sm: 6,
  xs: 12
});

const ROW_COLUMNS_JUSTIFY: IColProps[] = [
  { children: 'size={4}', size: 4, textAlign: 'center' },
  { children: 'size={4}', size: 4, textAlign: 'center' }
];

const ROW_COLUMNS_OFFSET: IColProps[] = [
  { children: 'md={4}', md: 3, textAlign: 'center' },
  { children: 'md={4} offsetMd={4}', md: 3, offsetMd: 6, textAlign: 'center' }
];

export const GRID_ROWS: IGridRow[] = [
  {
    cols: [{ children: 'Col' }]
  },
  {
    cols: ROW_COLUMNS_STANDARD
  },
  {
    cols: ROW_COLUMNS_RESPONSIVE
  },
  {
    cols: ROW_COLUMNS_JUSTIFY
  },
  {
    cols: ROW_COLUMNS_OFFSET
  }
];

export const VEGGIE_IPSUM = [
  `
Almonds lime lingonberry seitan leek cilantro Southern Italian falafel bites salty strawberries crispy. Second course Malaysian hummus falafel bowl crunchy seaweed pinch of yum soup red grapes burritos mediterranean luxury bowl mushroom risotto mint hearty dark and stormy comforting pumpkin spice latte smoked tofu couscous. Vine tomatoes chai tea cookies double dark chocolate banana spiced peppermint blast peanut butter crunch enchiladas spicy dessert banana bread chickpea crust pizza Indian spiced lemon red lentil soup pine nuts cool springtime strawberry açai vegan walnut pesto tart lime mango crisp banh mi salad rolls overflowing berries basil.

Maple orange tempeh samosa lychee green tea lime seeds coconut rice peppermint hearts of palm eating together fall red amazon pepper soy milk cinnamon toast pasta four-layer grenadillo shaved almonds. Plums mangos chia seeds strawberry spinach salad almond milk chai latte oranges street style Thai basil tacos miso dressing toasted hazelnuts fiery fruit blood orange smash hot Thai basil curry chocolate peanut butter dip.`,
  `Farro platter peanut butter Italian pepperoncini edamame hummus sweet potato green onions winter picnic salad artichoke hearts cauliflower crunchy. Shiitake mushrooms shallots veggie burgers garlic sriracha noodles green grapes chocolate green pepper coconut sugar tomato and basil habanero golden figs cumin cilantro lime vinaigrette blackberries ultra creamy avocado pesto.`,

  `Ghost pepper hemp seeds lemongrass black beans peaches sparkling pomegranate punch avocado dressing drizzle spring candy cane winter avocado avocado basil pesto creamy cauliflower alfredo. Chocolate cookie thyme chili raspberries cool cucumbers zesty tofu pad thai portobello mushrooms red lentil curry a delicious meal vitamin glow crumbled lentils blueberry pops strawberry mango smoothie.

Lemon tahini dressing hazelnut shiitake spiced pumpkin chili Thai dragon pepper udon noodles bento box broccoli soba noodles grapefruit roasted peanuts lemon lime minty Thai curry sriracha pecans raspberry fizz summertime mediterranean tempeh green papaya salad casserole asian pear Thai sun pepper balsamic vinaigrette jalapeño simmer alfalfa sprouts. Cayenne bite sized instant pot lemon citrusy cool off sweet potato cherry bomb pepper onion matcha dragon fruit fresh Bolivian rainbow pepper smoky maple tempeh glaze salad dark chocolate.

Chinese five-spice powder dill sandwiches pumpkin morning smoothie bowl naga viper potato arugula salad homemade balsamic grains cozy cinnamon oatmeal sleepy morning tea kale caesar salad earl grey latte roasted butternut squash. Delightful blueberry scones coconut milk red pepper ginger lemongrass agave green tea creamiest summer fruit salad bruschetta Mexican fiesta cherries orange muffins frosted gingerbread bites.`,
  `Green tea ginger carrot spiced juice sesame soba noodles coconut tahini drizzle butternut mix refreshing cucumber splash apple vinaigrette entree Bulgarian carrot pomegranate coriander cinnamon Sicilian pistachio pesto golden cayenne pepper kimchi scotch bonnet pepper chili pepper kale sweet potato black bean burrito roasted brussel sprouts Thai super chili cashew with edamame. Apricot fig arugula cashew salad basmati apples Caribbean red habanero lentils green bowl blueberries salted tabasco pepper almond milk crispy iceberg lettuce mediterranean vegetables ginger tofu miso turmeric glazed aubergine heat guacamole appetizer cranberry spritzer pineapple salsa.`
];

export const SIMPLE_SPLITTER_PANES: ISplitterPane[] = [
  {
    name: 'Pane 1',
    splitters: [
      {
        layoutKey: 'row-1',
        orientation: 'bottom',
        min: 0,
        max: 2
      },
      {
        layoutKey: 'column-1',
        orientation: 'end',
        min: 0,
        max: 2
      }
    ]
  },
  {
    name: 'Pane 2',
    splitters: [
      {
        layoutKey: 'row-1',
        orientation: 'bottom',
        min: 0,
        max: 2
      }
    ]
  },
  {
    name: 'Pane 3',
    splitters: [
      {
        layoutKey: 'column-1',
        orientation: 'end',
        min: 0,
        max: 2
      }
    ]
  },
  {
    name: 'Pane 4',
    splitters: []
  }
];
