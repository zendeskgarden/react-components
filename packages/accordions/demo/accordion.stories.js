import { useArgs } from '@storybook/client-api';
import { Accordion } from '@zendeskgarden/react-accordions';
import { AccordionStory } from './stories/AccordionStory';
import { ACCORDION_SECTIONS as SECTIONS } from './stories/data';
import README from '../README.md';

export default {
  title: 'Packages/Accordions/Accordion',
  component: Accordion,

  subcomponents: {
    'Accordion.Header': Accordion.Header,
    'Accordion.Label': Accordion.Label,
    'Accordion.Panel': Accordion.Panel,
    'Accordion.Section': Accordion.Section
  },

  args: {
    isAnimated: true,
    level: 1,
    hasIconButtons: false,
    sections: SECTIONS
  },

  argTypes: {
    hasIconButtons: {
      name: 'Accordion.Header icon buttons',

      table: {
        category: 'Story'
      }
    },

    sections: {
      name: 'Accordion.Section[]',

      table: {
        category: 'Story'
      }
    }
  },

  parameters: {
    design: {
      allowFullscreen: true,
      type: 'figma',
      url: 'https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=103%3A16471'
    }
  }
};

export const Uncontrolled = {
  render: args => <AccordionStory {...args} />,
  name: 'Uncontrolled',

  args: {
    isCollapsible: true
  },

  argTypes: {
    expandedSections: {
      control: false
    }
  }
};

export const Controlled = {
  render: args => {
    const updateArgs = useArgs()[1];

    const handleChange = index => {
      const expandedSections = args.expandedSections.includes(index)
        ? args.expandedSections.filter(section => section !== index)
        : [...args.expandedSections, index];

      updateArgs({
        expandedSections
      });
    };

    return <AccordionStory {...args} onChange={handleChange} />;
  },

  name: 'Controlled',

  args: {
    expandedSections: [2]
  },

  argTypes: {
    defaultExpandedSections: {
      control: false
    },

    isCollapsible: {
      control: false
    },

    isExpandable: {
      control: false
    }
  }
};
