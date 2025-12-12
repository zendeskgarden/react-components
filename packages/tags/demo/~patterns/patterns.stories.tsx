/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import type { StoryObj } from '@storybook/react';
import { Tag } from '@zendeskgarden/react-tags';
import { FauxInputStory } from './stories/FauxInputStory';
import { FAUX_INPUT_TAGS as TAGS } from './stories/data';

export default {
  title: 'Packages/Tags/[patterns]',
  component: Tag
};

export const Example: StoryObj<typeof FauxInputStory> = {
  render: args => <FauxInputStory {...args} />,
  name: 'FauxInput',

  args: {
    tags: TAGS,
    hasAvatar: false,
    hasClose: false,
    width: 25
  },

  argTypes: {
    hue: {
      table: {
        disable: true
      }
    },

    isRound: {
      table: {
        disable: true
      }
    },

    hasAvatar: {
      name: 'Tag.Avatar',

      table: {
        category: 'Story'
      }
    },

    hasClose: {
      name: 'Tag.Close',

      table: {
        category: 'Story'
      }
    },

    tags: {
      table: {
        category: 'Story'
      }
    },

    width: {
      control: {
        type: 'range',
        min: 10,
        step: 5
      },

      table: {
        category: 'Story'
      }
    }
  }
};
