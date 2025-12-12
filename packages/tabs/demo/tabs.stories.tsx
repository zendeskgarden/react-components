import { useArgs } from '@storybook/client-api';
import { Tabs } from '@zendeskgarden/react-tabs';
import { TabsStory } from './stories/TabsStory';
import { TABS } from './stories/data';
import README from '../README.md';

export default {
  title: 'Packages/Tabs/Tabs',
  component: Tabs,

  subcomponents: {
    'Tabs.Tab': Tabs.Tab,
    'Tabs.TabList': Tabs.TabList,
    'Tabs.TabPanel': Tabs.TabPanel
  },

  args: {
    tabs: TABS
  },

  argTypes: {
    tabs: {
      table: {
        category: 'Story'
      }
    }
  },

  parameters: {
    design: {
      allowFullscreen: true,
      type: 'figma',
      url: 'https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=102%3A123'
    }
  }
};

export const Uncontrolled = {
  render: args => <TabsStory {...args} />,
  name: 'Uncontrolled',

  argTypes: {
    selectedItem: {
      control: false
    }
  }
};

export const Controlled = {
  render: args => {
    const updateArgs = useArgs()[1];

    const handleChange = selectedItem =>
      updateArgs({
        selectedItem
      });

    return <TabsStory {...args} onChange={handleChange} />;
  },

  name: 'Controlled'
};
