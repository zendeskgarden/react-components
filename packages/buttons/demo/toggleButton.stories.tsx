/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { useArgs } from '@storybook/preview-api';
import { ToggleButton } from '@zendeskgarden/react-buttons';

export default {
  title: 'Packages/Buttons/ToggleButton',
  component: ToggleButton
};

export const Default = {
  render: (args: any) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const updateArgs = useArgs()[1];

    const handleClick = () =>
      updateArgs({
        isPressed: !args.isPressed
      });

    return <ToggleButton {...args} onClick={handleClick} />;
  },

  name: 'ToggleButton',

  args: {
    children: 'Text'
  },

  argTypes: {
    disabled: {
      control: 'boolean'
    },

    isPressed: {
      control: 'radio',
      options: [false, true, 'mixed']
    }
  },

  parameters: {
    design: {
      allowFullscreen: true,
      type: 'figma',
      url: 'https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=7149%3A39389'
    }
  }
};
