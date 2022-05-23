/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { IColumns } from './types';

export const COLUMNS: IColumns[] = [
  {
    name: 'Column 1',
    panes: [
      {
        name: 'Pane 1',
        content:
          'Almonds lime lingonberry seitan leek cilantro Southern Italian falafel bites salty strawberries crispy. Second course Malaysian hummus falafel bowl crunchy seaweed pinch of yum soup red grapes burritos mediterranean luxury bowl mushroom risotto mint hearty dark and stormy comforting pumpkin spice latte smoked tofu couscous. Vine tomatoes chai tea cookies double dark chocolate banana spiced peppermint blast peanut butter crunch enchiladas spicy dessert banana bread chickpea crust pizza Indian spiced lemon red lentil soup pine nuts cool springtime strawberry açai vegan walnut pesto tart lime mango crisp banh mi salad rolls overflowing berries basil. Maple orange tempeh samosa lychee green tea lime seeds coconut rice peppermint hearts of palm eating together fall red amazon pepper soy milk cinnamon toast pasta four-layer grenadillo shaved almonds. Plums mangos chia seeds strawberry spinach salad almond milk chai latte oranges street style Thai basil tacos miso dressing toasted hazelnuts fiery fruit blood orange smash hot Thai basil curry chocolate peanut butter dip.',
        splitters: [
          {
            layoutKey: 'row-1',
            orientation: 'bottom',
            min: 0,
            max: 2
          },
          {
            providerId: 'column-layout',
            layoutKey: 'column-1',
            orientation: 'end',
            min: 0,
            max: 2
          }
        ]
      },
      {
        name: 'Pane 2',
        content:
          'Ghost pepper hemp seeds lemongrass black beans peaches sparkling pomegranate punch avocado dressing drizzle spring candy cane winter avocado avocado basil pesto creamy cauliflower alfredo. Chocolate cookie thyme chili raspberries cool cucumbers zesty tofu pad thai portobello mushrooms red lentil curry a delicious meal vitamin glow crumbled lentils blueberry pops strawberry mango smoothie.',
        splitters: [
          {
            providerId: 'column-layout',
            layoutKey: 'column-1',
            orientation: 'end',
            min: 0,
            max: 2
          },
          {
            layoutKey: 'row-2',
            orientation: 'top',
            min: 0,
            max: 2
          },
          {
            layoutKey: 'row-2',
            orientation: 'bottom',
            min: 0,
            max: 2
          }
        ]
      },
      {
        name: 'Pane 3',
        content:
          'Green tea ginger carrot spiced juice sesame soba noodles coconut tahini drizzle butternut mix refreshing cucumber splash apple vinaigrette entree Bulgarian carrot pomegranate coriander cinnamon Sicilian pistachio pesto golden cayenne pepper kimchi scotch bonnet pepper chili pepper kale sweet potato black bean burrito roasted brussel sprouts Thai super chili cashew with edamame. Apricot fig arugula cashew salad basmati apples Caribbean red habanero lentils green bowl blueberries salted tabasco pepper almond milk crispy iceberg lettuce mediterranean vegetables ginger tofu miso turmeric glazed aubergine heat guacamole appetizer cranberry spritzer pineapple salsa.',
        splitters: [
          {
            providerId: 'column-layout',
            layoutKey: 'column-1',
            orientation: 'end',
            min: 0,
            max: 2
          },
          {
            layoutKey: 'row-3',
            orientation: 'top',
            min: 0,
            max: 2
          }
        ]
      }
    ]
  },
  {
    name: 'Column 2',
    panes: [
      {
        name: 'Pane 4',
        content:
          'Shaved almonds banana bread mediterranean vegetables overflowing salad rich coconut cream summer street style Thai basil tacos crunchy seaweed red curry tofu noodles black bean wraps instant pot dark and stormy onion pomegranate. Soy milk simmer heat thyme cinnamon chili pepper green pepper sweet potato casserole ginger tofu apple vinaigrette black beans spring artichoke hearts cayenne Thai dragon pepper second course avocado basil pesto farro platter fruit smash cinnamon toast banana bread Bulgarian carrot cranberry spritzer muffins. Scotch bonnet pepper asian pear Southern Italian mint peaches cremini mushrooms banana apples spicy portobello mushrooms guacamole.',
        splitters: [
          {
            providerId: 'column-layout',
            layoutKey: 'column-2',
            orientation: 'start',
            min: 0,
            max: 2
          },
          {
            layoutKey: 'row-1',
            orientation: 'bottom',
            min: 0,
            max: 2
          },
          {
            providerId: 'column-layout',
            layoutKey: 'column-2',
            orientation: 'end',
            min: 0,
            max: 2
          }
        ]
      },
      {
        name: 'Pane 5',
        content:
          'A delicious meal soup lemon tahini dressing one bowl toasted hazelnuts lemongrass double dark chocolate sweet potato black bean burrito chocolate cookie golden cayenne pepper falafel bites refreshing cucumber splash apricot hemp seeds Thai curry sriracha pecans chili tomato and basil summer fruit salad frosted gingerbread bites delightful blueberry scones picnic salad. Overflowing berries raspberries Thai sun pepper miso turmeric glazed aubergine winter broccoli with green tea lime kung pao pepper creamiest crispy Thai super chili blueberry chia seed jam maple orange tempeh elderberry tasty mediterranean.',
        splitters: [
          {
            layoutKey: 'row-2',
            orientation: 'top',
            min: 0,
            max: 2
          },
          {
            providerId: 'column-layout',
            layoutKey: 'column-2',
            orientation: 'start',
            min: 0,
            max: 2
          },
          {
            providerId: 'column-layout',
            layoutKey: 'column-2',
            orientation: 'end',
            min: 0,
            max: 2
          },
          {
            layoutKey: 'row-2',
            orientation: 'bottom',
            min: 0,
            max: 2
          }
        ]
      },
      {
        name: 'Pane 6',
        content:
          'Indian spiced green grapes almond milk plums almonds pineapple salsa avocado dressing drizzle leek pasta quinoa flatbread summertime balsamic vinaigrette vitamin glow habanero golden cilantro coriander. Potato cherry hearty cool cucumbers citrusy basil ultimate hearts of palm enchiladas salted green bowl tofu picnic red lentil curry Mexican fiesta.',
        splitters: [
          {
            layoutKey: 'row-3',
            orientation: 'top',
            min: 0,
            max: 2
          },
          {
            providerId: 'column-layout',
            layoutKey: 'column-2',
            orientation: 'start',
            min: 0,
            max: 2
          },
          {
            providerId: 'column-layout',
            layoutKey: 'column-2',
            orientation: 'end',
            min: 0,
            max: 2
          }
        ]
      }
    ]
  },
  {
    name: 'Column 3',
    panes: [
      {
        name: 'Pane 7',
        content:
          'Sleepy morning tea lime dark chocolate mushroom risotto cashew sandwiches walnut pesto tart edamame hummus four-layer shiitake mushrooms garlic sriracha noodles figs cozy butternut roasted butternut squash spiced pumpkin chili vine tomatoes crumbled lentils earl grey latte strawberry mango smoothie cauliflower salty lemon lime minty lychee lemonade zest mediterranean luxury bowl. Sweet potato blood orange smash chocolate comforting pumpkin spice latte soba noodles seeds burritos sesame soba noodles Chinese five-spice powder mocha chocolate morning smoothie bowl paprika coconut rice red grapes arugula salad pumpkin cookies pinch of yum fiery fruit bruschetta hazelnut shiitake.',
        splitters: [
          {
            layoutKey: 'row-1',
            orientation: 'bottom',
            min: 0,
            max: 2
          },
          {
            providerId: 'column-layout',
            layoutKey: 'column-3',
            orientation: 'start',
            min: 0,
            max: 2
          }
        ]
      },
      {
        name: 'Pane 8',
        content:
          'Sparkling pomegranate punch cherry bomb miso dressing walnut mushroom tart kimchi bite sized chickpea crust pizza black bean chili dip basmati blackberries samosa smoky maple tempeh glaze cherries avocado lavender lemonade cool off Italian pepperoncini appetizer homemade balsamic. Coconut cumin chia seeds blueberry pops lingonberry springtime strawberry entree bananas coconut milk edamame chocolate peanut butter dip Caribbean red habanero peppermint tempeh peanut butter fall Thai basil curry red amazon pepper tabasco pepper Sicilian pistachio pesto hummus dragon fruit fresh shallots seasonal.',
        splitters: [
          {
            layoutKey: 'row-2',
            orientation: 'top',
            min: 0,
            max: 2
          },
          {
            providerId: 'column-layout',
            layoutKey: 'column-3',
            orientation: 'start',
            min: 0,
            max: 2
          },
          {
            layoutKey: 'row-2',
            orientation: 'bottom',
            min: 0,
            max: 2
          }
        ]
      },
      {
        name: 'Pane 9',
        content:
          'Cool roasted peanuts cilantro lime vinaigrette grenadillo spiced peppermint blast strawberry spinach salad bento box parsley almond milk chai latte creamy cauliflower alfredo chai tea peach strawberry mango eating together kale veggie burgers crunchy grapefruit green papaya salad oranges Italian linguine puttanesca green onions banh mi salad rolls ghost pepper. Zesty tofu pad thai coconut sugar kale caesar salad lemon Thai red pepper Malaysian crispy iceberg lettuce peanut butter crunch butternut mix naga viper pine nuts ginger lemongrass agave green tea ultra creamy avocado pesto.',
        splitters: [
          {
            layoutKey: 'row-3',
            orientation: 'top',
            min: 0,
            max: 2
          },
          {
            providerId: 'column-layout',
            layoutKey: 'column-3',
            orientation: 'start',
            min: 0,
            max: 2
          }
        ]
      }
    ]
  }
];
