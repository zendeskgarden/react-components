/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import type { StoryObj } from '@storybook/react-vite';
import { useArgs } from 'storybook/preview-api';
import {
  Body,
  Chrome,
  Content,
  Footer,
  Header,
  Main,
  Nav,
  Sheet,
  SkipNav,
  PRODUCTS
} from '@zendeskgarden/react-chrome';
import { ChromeStory } from './stories/ChromeStory';
import {
  CHROME_FOOTER_ITEMS as FOOTER_ITEMS,
  CHROME_HEADER_ITEMS as HEADER_ITEMS,
  CHROME_MAIN as MAIN,
  CHROME_NAV_ITEMS as NAV_ITEMS,
  CHROME_SKIP_NAV as SKIP_NAV,
  SHEET_BODY,
  SHEET_DESCRIPTION,
  SHEET_TITLE
} from './stories/data';

export default {
  title: 'Packages/Chrome/Chrome',
  component: Chrome,
  subcomponents: {
    Body,
    Content,
    Footer,
    'Footer.Item': Footer.Item,
    Header,
    'Header.Item': Header.Item,
    'Header.ItemIcon': Header.ItemIcon,
    'Header.ItemText': Header.ItemText,
    'Header.ItemWrapper': Header.ItemWrapper,
    Main,
    Nav,
    'Nav.Item': Nav.Item,
    'Nav.ItemIcon': Nav.ItemIcon,
    'Nav.ItemText': Nav.ItemText,
    Sheet,
    SkipNav
  }
};

export const Example: StoryObj<typeof ChromeStory> = {
  render: args => {
    const updateArgs = useArgs()[1];

    const handleSheetClick = () => updateArgs({ isSheetOpen: false });

    return <ChromeStory {...args} onSheetClick={handleSheetClick} />;
  },
  name: 'Chrome',
  args: {
    isFluid: true,
    hasNav: true,
    navItems: NAV_ITEMS,
    isExpanded: false,
    isWrapped: false,
    hasLogo: true,
    hasBrandmark: true,
    hasHeader: true,
    headerItems: HEADER_ITEMS,
    hasFooter: true,
    footerItems: FOOTER_ITEMS,
    skipNav: SKIP_NAV,
    main: MAIN,
    isSheetOpen: true,
    isSheetCompact: false,
    sheetBody: SHEET_BODY,
    sheetTitle: SHEET_TITLE,
    sheetDescription: SHEET_DESCRIPTION
  },
  argTypes: {
    hue: { control: 'color' },
    isFluid: { control: 'boolean' },
    skipNav: {
      name: 'children',
      table: { category: 'SkipNav' }
    },
    isExpanded: {
      name: 'Nav isExpanded',
      table: { category: 'Story' }
    },
    isWrapped: {
      name: 'Nav isWrapped',
      table: { category: 'Story' }
    },
    hasNav: {
      name: 'Nav',
      table: { category: 'Story' }
    },
    navItems: {
      name: 'Nav.Item[]',
      table: { category: 'Story' }
    },
    hasLogo: {
      name: 'Nav hasLogo',
      table: { category: 'Story' }
    },
    hasBrandmark: {
      name: 'Nav hasBrandmark',
      table: { category: 'Story' }
    },
    hasHeader: {
      name: 'Header',
      table: { category: 'Story' }
    },
    headerItems: {
      name: 'Header.Item[]',
      table: { category: 'Story' }
    },
    hasFooter: {
      name: 'Footer',
      table: { category: 'Story' }
    },
    footerItems: {
      name: 'Footer.Item[]',
      table: { category: 'Story' }
    },
    product: {
      name: 'Nav product',
      control: { type: 'select' },
      options: PRODUCTS,
      table: { category: 'Story' }
    },
    isSheetOpen: {
      name: 'isOpen',
      table: { category: 'Sheet' }
    },
    isSheetCompact: {
      name: 'Sheet.Footer isCompact',
      control: 'boolean',
      table: { category: 'Sheet' }
    },
    sheetBody: {
      name: 'Sheet.Body',
      table: { category: 'Sheet' }
    },
    sheetTitle: {
      name: 'Sheet.Title',
      table: { category: 'Sheet' }
    },
    sheetDescription: {
      name: 'Sheet.Description',
      table: { category: 'Sheet' }
    },
    main: {
      name: 'children',
      table: { category: 'Main' }
    }
  },
  parameters: {
    design: {
      allowFullscreen: true,
      type: 'figma',
      url: 'https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=102%3A126'
    }
  }
};
