import { Breadcrumb } from '@zendeskgarden/react-breadcrumbs';
import { BreadcrumbStory } from './stories/BreadcrumbStory';
import { BREADCRUMB_CHILDREN as CHILDREN } from './stories/data';
import README from '../README.md';

export default {
  title: 'Packages/Breadcrumbs/Breadcrumb',
  component: Breadcrumb
};

export const Breadcrumb = {
  render: args => <BreadcrumbStory {...args} />,
  name: 'Breadcrumb',

  args: {
    'aria-label': 'Breadcrumbs',
    children: CHILDREN
  },

  parameters: {
    design: {
      allowFullscreen: true,
      type: 'figma',
      url: 'https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=171%3A13406'
    }
  }
};
