import { ThemeProvider, DEFAULT_THEME, PALETTE } from '@zendeskgarden/react-theming';
import { PaletteStory } from './stories/PaletteStory';
import README from '../README.md';

export default {
  title: 'Packages/Theming/ThemeProvider',
  component: ThemeProvider,

  subcomponents: {
    DEFAULT_THEME,
    PALETTE
  }
};

export const ThemeProvider = {
  render: args => <ThemeProvider {...args} />,
  name: 'ThemeProvider',

  args: {
    theme: DEFAULT_THEME
  }
};

export const Palette = {
  render: args => <PaletteStory {...args} />,
  name: 'PALETTE',

  args: {
    palette: PALETTE
  },

  argTypes: {
    palette: {
      control: {
        type: 'object'
      },

      name: 'PALETTE'
    },

    colorSchemeKey: {
      table: {
        disable: true
      }
    },

    initialColorScheme: {
      table: {
        disable: true
      }
    },

    theme: {
      table: {
        disable: true
      }
    }
  }
};
