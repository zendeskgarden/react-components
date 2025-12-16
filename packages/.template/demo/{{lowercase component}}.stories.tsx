/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import type { StoryObj } from '@storybook/react-vite';
import { {{capitalize component}} } from '@zendeskgarden/react-{{pluralize (lowercase component)}}';
import { {{capitalize component}}Story } from './stories/{{capitalize component}}Story';

export default {
  title: 'Packages/{{pluralize (capitalize component)}}/{{capitalize component}}',
  component: {{capitalize component}}
};

export const Example: StoryObj<typeof {{capitalize component}}Story> = {
  render: args => <{{capitalize component}}Story {...args} />,
  name: '{{capitalize component}}',
  args: {
    children: 'Text'
  },
  argTypes: {},
  parameters: {
    design: {
      allowFullscreen: true,
      type: 'figma',
      url: 'https://path/to/file/'
    }
  }
};
