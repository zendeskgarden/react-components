import { ColorSchemeProvider } from '@zendeskgarden/react-theming';
import { ColorSchemeProviderStory } from './stories/ColorSchemeProviderStory';
import README from '../README.md';

export default {
  title: 'Packages/Theming/ColorSchemeProvider',
  component: ColorSchemeProvider
};

export const ColorSchemeProvider = {
  render: args => <ColorSchemeProviderStory {...args} />,
  name: 'ColorSchemeProvider',

  args: {
    initialColorScheme: 'system'
  }
};
