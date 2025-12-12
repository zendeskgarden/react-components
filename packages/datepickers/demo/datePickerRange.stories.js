import { useArgs } from '@storybook/client-api';
import { DatePickerRange } from '@zendeskgarden/react-datepickers';
import { DatePickerRangeStory } from './stories/DatePickerRangeStory';
import { DATE_STYLE_OPTIONS } from './stories/data';
import README from '../README.md';

export default {
  title: 'Packages/Datepickers/DatePickerRange',
  component: DatePickerRange,

  subcomponents: {
    'DatePickerRange.Calendar': DatePickerRange.Calendar,
    'DatePickerRange.End': DatePickerRange.End,
    'DatePickerRange.Start': DatePickerRange.Start
  }
};

export const DatePickerRange = {
  render: args => {
    const updateArgs = useArgs()[1];

    const handleChange = ({ endValue, startValue }) =>
      updateArgs({
        endValue,
        startValue
      });

    return <DatePickerRangeStory {...args} onChange={handleChange} />;
  },

  name: 'DatePickerRange',

  args: {
    dateStyle: DATE_STYLE_OPTIONS[1]
  },

  argTypes: {
    startValue: {
      control: 'date'
    },

    endValue: {
      control: 'date'
    },

    minValue: {
      control: 'date'
    },

    maxValue: {
      control: 'date'
    },

    dateStyle: {
      control: 'radio',
      options: DATE_STYLE_OPTIONS,

      table: {
        category: 'Story'
      }
    }
  },

  parameters: {
    design: {
      allowFullscreen: true,
      type: 'figma',
      url: 'https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=134%3A32'
    }
  }
};
