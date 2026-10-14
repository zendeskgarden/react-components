/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import type { StoryObj } from '@storybook/react-vite';

import { CardStory } from './stories/CardStory';
import { COLUMNS } from './stories/data';

// MIGRATE(demos): no component property and no title for '[patterns]' in config/story-titles.json; title derived from the last segment
export default {
  title: 'Components/[patterns]'
};

export const Example: StoryObj<typeof CardStory> = {
  render: args => <CardStory {...args} />,
  name: 'Pane Card Layout',
  args: { columns: COLUMNS },
  argTypes: {
    columns: {
      name: 'columns',
      table: { category: 'Story' }
    }
  }
};
