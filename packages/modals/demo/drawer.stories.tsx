/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import type { StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { useArgs } from '@storybook/preview-api';
import { Drawer } from '@zendeskgarden/react-modals';
import { DrawerStory } from './stories/DrawerStory';
import { MODAL_BODY as BODY, MODAL_FOOTER_ITEMS as FOOTER_ITEMS } from './stories/data';

export default {
  title: 'Packages/Modals/Drawer',
  component: Drawer,

  subcomponents: {
    'Drawer.Body': Drawer.Body,
    'Drawer.Close': Drawer.Close,
    'Drawer.Footer': Drawer.Footer,
    'Drawer.FooterItem': Drawer.FooterItem,
    'Drawer.Header': Drawer.Header
  }
};

export const Example: StoryObj<typeof DrawerStory> = {
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const updateArgs = useArgs()[1];

    const handleClick = () => {
      action('onClick')();

      updateArgs({
        isOpen: true
      });
    };

    const handleClose = () => {
      action('onClose')();

      updateArgs({
        isOpen: false
      });
    };

    return <DrawerStory {...args} onClick={handleClick} onClose={handleClose} />;
  },
  name: 'Drawer',
  args: {
    hasBody: true,
    body: BODY,
    hasClose: true,
    hasFooter: true,
    hasHeader: true,
    header: 'Header',
    footerItems: FOOTER_ITEMS,
    dialogAriaLabel: 'Header',
    closeAriaLabel: 'Close'
  },

  argTypes: {
    appendToNode: {
      control: false
    },

    hasBody: {
      name: 'Drawer.Body',

      table: {
        category: 'Story'
      }
    },

    hasClose: {
      name: 'Drawer.Close',

      table: {
        category: 'Story'
      }
    },

    hasFooter: {
      name: 'Drawer.Footer',

      table: {
        category: 'Story'
      }
    },

    hasHeader: {
      name: 'Drawer.Header',

      table: {
        category: 'Story'
      }
    },

    footerItems: {
      name: 'Drawer.FooterItem[]',

      table: {
        category: 'Story'
      }
    },

    body: {
      name: 'children',

      table: {
        category: 'Drawer.Body'
      }
    },

    header: {
      name: 'children',

      table: {
        category: 'Drawer.Header'
      }
    },

    tag: {
      control: 'text',

      table: {
        category: 'Drawer.Header'
      }
    },

    closeAriaLabel: {
      name: 'aria-label',

      table: {
        category: 'Drawer.Close'
      }
    },

    dialogAriaLabel: {
      name: 'aria-label'
    }
  },

  parameters: {
    design: {
      allowFullscreen: true,
      type: 'figma',
      url: 'https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=174%3A245'
    }
  }
};
