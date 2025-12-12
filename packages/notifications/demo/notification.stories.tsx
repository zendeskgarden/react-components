import { Notification } from '@zendeskgarden/react-notifications';
import { NotificationStory } from './stories/NotificationStory';
import README from '../README.md';

export default {
  title: 'Packages/Notifications/Notification',
  component: Notification,

  subcomponents: {
    'Notification.Close': Notification.Close,
    'Notification.Paragraph': Notification.Paragraph,
    'Notification.Title': Notification.Title
  }
};

export const Notification = {
  render: args => <NotificationStory {...args} />,
  name: 'Notification',

  args: {
    children: 'Text',
    title: 'Title',
    hasClose: true,
    hasParagraph: false,
    'aria-label': 'Close'
  },

  argTypes: {
    title: {
      name: 'children',

      table: {
        category: 'Notification.Title'
      }
    },

    isRegular: {
      control: {
        type: 'boolean'
      },

      table: {
        category: 'Notification.Title'
      }
    },

    hasClose: {
      name: 'Notification.Close',

      table: {
        category: 'Story'
      }
    },

    hasParagraph: {
      name: 'Notification.Paragraph',

      table: {
        category: 'Story'
      }
    },

    'aria-label': {
      table: {
        category: 'Notification.Close'
      }
    }
  },

  parameters: {
    design: {
      allowFullscreen: true,
      type: 'figma',
      url: 'https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=1480%3A28056'
    }
  }
};
