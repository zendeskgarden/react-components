/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { COLLAPSIBLE_SUB_NAV_ITEM, IFooterItem, IHeaderItem, INavItem, ISubNavItem } from './types';

export const CHROME_FOOTER_ITEMS: IFooterItem[] = [
  {
    text: 'Cancel',
    type: 'basic'
  },
  {
    text: 'Save',
    type: 'primary'
  }
];

export const CHROME_HEADER_ITEMS: IHeaderItem[] = [
  {
    text: 'Example maxX content',
    hasIcon: false,
    maxX: true,
    isWrapper: true
  },
  {
    text: 'Example maxY content',
    hasIcon: true,
    maxY: true
  },
  {
    text: 'Help center',
    hasIcon: true
  },
  {
    text: 'Products',
    hasIcon: true,
    isClipped: true
  },
  {
    text: 'User',
    hasIcon: true,
    isRound: true,
    isClipped: true
  }
];

export const CHROME_MAIN = `Main content. Pea horseradish azuki bean lettuce
avocado asparagus okra. Kohlrabi radish okra azuki bean corn fava bean mustard
tigernut green bean celtuce collard greens avocado quandong fennel gumbo
black-eyed pea. Grape silver beet watercress potato tigernut corn groundnut.
Chickweed okra pea winter purslane coriander yarrow sweet pepper radish garlic
brussels sprout groundnut summer purslane earthnut pea tomato spring onion azuki
bean gourd. Gumbo kakadu plum komatsuna black-eyed pea green bean zucchini gourd
winter purslane silver beet rock melon radish asparagus spinach.  Soko radicchio
bunya nuts gram dulse silver beet parsnip napa cabbage lotus root sea lettuce
brussels sprout cabbage. Catsear cauliflower garbanzo yarrow salsify chicory
garlic bell pepper napa cabbage lettuce tomato kale arugula melon sierra leone
bologi rutabaga tigernut. Sea lettuce gumbo grape kale kombu cauliflower salsify
kohlrabi okra sea lettuce broccoli celery lotus root carrot winter purslane
turnip greens garlic. Garlic courgette coriander radicchio plantain scallion
cauliflower fava bean desert raisin spring onion chicory bunya nuts.  Sea
lettuce water spinach gram fava bean leek dandelion silver beet eggplant bush
tomato.`;

export const CHROME_NAV_ITEMS: INavItem[] = [
  {
    text: 'Home'
  },
  {
    text: 'Email'
  },
  {
    text: 'User access control lists',
    hasSidebar: true
  },
  {
    text: 'Chat'
  },
  {
    text: 'Dashboard'
  },
  {
    text: 'Settings',
    hasSubNav: true
  }
];

export const CHROME_SIDEBAR = 'Sidebar content';

export const CHROME_SKIP_NAV = 'Skip to main content';

export const CHROME_SUB_NAV_ITEMS: ISubNavItem[] = [
  {
    text: 'Recently viewed'
  },
  {
    text: 'Account',
    items: ['Billing', 'Security', 'Sandbox', 'Tools']
  },
  {
    text: 'Workspaces'
  },
  {
    text: 'Apps and integrations',
    items: ['Apps', 'Integrations', 'APIs', 'Webhooks']
  }
];

export const COLLAPSIBLE_SUB_NAV_ITEMS: COLLAPSIBLE_SUB_NAV_ITEM[] = [
  'Item 1',
  'Item 2',
  'Item 3',
  'Item 4'
];

export const SHEET_BODY = `Onion cherry bomb pepper summertime raspberry fizz
spiced peppermint blast kale caesar salad hearts of palm a delicious meal
seasonal mediterranean vegetables picnic salad black beans cookies springtime
strawberry banana lemongrass banh mi salad rolls dragon fruit roasted butternut
squash leek garlic sriracha noodles. Apples falafel bites sriracha pecans ultra
creamy avocado pesto Italian linguine puttanesca summer red curry tofu noodles
cherry blackberries matcha dill creamy cauliflower alfredo mocha chocolate green
tea red amazon pepper cayenne blood orange smash.`;

export const SHEET_DESCRIPTION = 'Description';

export const SHEET_FOOTER_ITEMS = CHROME_FOOTER_ITEMS;

export const SHEET_TITLE = 'Title';
