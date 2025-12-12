/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Anchor } from '@zendeskgarden/react-buttons';
import { Code } from '@zendeskgarden/react-typography';

export default {
  title: 'Packages/Typography/Code',
  component: Code
};

export const Default = {
  render: (args: any) =>
    args.isAnchor ? (
      <Anchor isUnderlined={false}>
        <Code {...args} />
      </Anchor>
    ) : (
      <Code {...args} />
    ),

  name: 'Code',

  args: {
    children: 'Text'
  },

  argTypes: {
    isAnchor: {
      control: 'boolean',

      table: {
        category: 'Story'
      }
    }
  },

  parameters: {
    design: {
      allowFullscreen: true,
      type: 'figma',
      url: 'https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=7149%3A39295'
    }
  }
};
