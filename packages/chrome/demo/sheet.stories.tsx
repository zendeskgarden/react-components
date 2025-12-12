/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import type { StoryObj } from '@storybook/react';
import { useArgs } from 'storybook/preview-api';
import { Sheet } from '@zendeskgarden/react-chrome';
import { SheetStory } from './stories/SheetStory';
import {
  SHEET_BODY as BODY,
  SHEET_DESCRIPTION as DESCRIPTION,
  SHEET_FOOTER_ITEMS as FOOTER_ITEMS,
  SHEET_TITLE as TITLE
} from './stories/data';

export default {
  title: 'Packages/Chrome/Sheet',
  component: Sheet,

  subcomponents: {
    'Sheet.Body': Sheet.Body,
    'Sheet.Close': Sheet.Close,
    'Sheet.Description': Sheet.Description,
    'Sheet.Footer': Sheet.Footer,
    'Sheet.FooterItem': Sheet.FooterItem,
    'Sheet.Header': Sheet.Header,
    'Sheet.Title': Sheet.Title
  }
};

export const Example: StoryObj<typeof SheetStory> = {
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const updateArgs = useArgs()[1];

    const handleChange = () =>
      updateArgs({
        isOpen: !args.isOpen
      });

    const handleClick = () =>
      updateArgs({
        isOpen: false
      });

    return <SheetStory {...args} onChange={handleChange} onClick={handleClick} />;
  },
  name: 'Sheet',
  args: {
    isAnimated: true,
    debug: true,
    hasBody: true,
    body: BODY,
    hasClose: true,
    hasFooter: true,
    hasHeader: true,
    hasTitle: true,
    hasDescription: true,
    title: TITLE,
    description: DESCRIPTION,
    footerItems: FOOTER_ITEMS
  },

  argTypes: {
    debug: {
      name: 'Grid debug',

      table: {
        category: 'Story'
      }
    },

    hasBody: {
      name: 'Sheet.Body',

      table: {
        category: 'Story'
      }
    },

    hasClose: {
      name: 'Sheet.Close',

      table: {
        category: 'Story'
      }
    },

    hasFooter: {
      name: 'Sheet.Footer',

      table: {
        category: 'Story'
      }
    },

    hasHeader: {
      name: 'Sheet.Header',

      table: {
        category: 'Story'
      }
    },

    footerItems: {
      name: 'Sheet.FooterItem[]',

      table: {
        category: 'Story'
      }
    },

    body: {
      name: 'children',

      table: {
        category: 'Sheet.Body'
      }
    },

    hasTitle: {
      name: 'Sheet.Title',

      table: {
        category: 'Story'
      }
    },

    title: {
      name: 'children',

      table: {
        category: 'Sheet.Title'
      }
    },

    hasDescription: {
      name: 'Sheet.Description',

      table: {
        category: 'Story'
      }
    },

    description: {
      name: 'children',

      table: {
        category: 'Sheet.Description'
      }
    },

    isCompact: {
      control: 'boolean',

      table: {
        category: 'Sheet.Footer'
      }
    }
  },

  parameters: {
    design: {
      allowFullscreen: true,
      type: 'figma',
      url: 'https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=5686%3A38405'
    }
  }
};
