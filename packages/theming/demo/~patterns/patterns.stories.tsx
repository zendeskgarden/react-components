import React from 'react';
import { GetColorStory } from './stories/GetColorStory';
import { GetColorV8Story } from './stories/GetColorV8Story';

export default {
  title: 'Packages/Theming/[patterns]'
};

export const GetColorTest = {
  render: (args: any) => <GetColorStory {...args} />,
  name: 'getColor test'
};

export const GetColorV8Test = {
  render: (args: any) => <GetColorV8Story {...args} />,
  name: 'getColorV8 test'
};
