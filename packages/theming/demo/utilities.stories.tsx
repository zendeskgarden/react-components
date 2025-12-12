import { DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { ArrowStylesStory } from './stories/ArrowStylesStory';
import { MenuStylesStory } from './stories/MenuStylesStory';
import { GetColorStory } from './stories/GetColorStory';
import { ARROW_POSITIONS, MENU_POSITIONS } from './stories/data';
import README from '../README.md';

export default {
  title: 'Packages/Theming/utilities'
};

export const ArrowStyles = {
  render: args => <ArrowStylesStory {...args} />,
  name: 'arrowStyles()',

  args: {
    position: 'bottom',
    hasBoxShadow: true,
    hasBorder: true,
    isAnimated: false,
    size: 6,
    inset: 0
  },

  argTypes: {
    position: {
      control: 'select',
      options: ARROW_POSITIONS
    },

    size: {
      control: {
        type: 'range',
        min: 2,
        max: 10,
        step: 1
      }
    },

    inset: {
      control: {
        type: 'range',
        min: -4,
        max: 4,
        step: 1
      }
    }
  }
};

export const GetColor = {
  render: args => <GetColorStory {...args} />,
  name: 'getColor()',

  args: {
    theme: {
      colors: Object.fromEntries(
        Object.entries(DEFAULT_THEME.colors).filter(([key]) => key !== 'base')
      ),
      opacity: DEFAULT_THEME.opacity,
      palette: DEFAULT_THEME.palette
    },

    variable: 'background.primaryEmphasis'
  },

  argTypes: {
    dark: {
      control: {
        type: 'object'
      }
    },

    hue: {
      control: {
        type: 'text'
      }
    },

    light: {
      control: {
        type: 'object'
      }
    },

    offset: {
      control: {
        type: 'number'
      }
    },

    shade: {
      control: {
        type: 'number'
      }
    },

    transparency: {
      control: {
        type: 'number',
        min: 100,
        max: 1200,
        step: 100
      }
    },

    variable: {
      control: {
        type: 'text'
      }
    },

    'colors.dark': {
      control: false,

      table: {
        disable: true
      }
    },

    'colors.light': {
      control: false,

      table: {
        disable: true
      }
    }
  }
};

export const MenuStyles = {
  render: args => <MenuStylesStory {...args} />,
  name: 'menuStyles()',

  args: {
    position: 'bottom',
    isAnimated: true
  },

  argTypes: {
    position: {
      control: 'radio',
      options: MENU_POSITIONS
    }
  }
};
