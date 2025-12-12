import { ToastProvider } from '@zendeskgarden/react-notifications';
import { ToastProviderStory } from './stories/ToastProviderStory';
import { TOAST_PLACEMENT_OPTIONS } from './stories/data';
import README from '../README.md';

export default {
  title: 'Packages/Notifications/ToastProvider',
  component: ToastProvider
};

export const ToastProvider = {
  render: args => <ToastProviderStory {...args} />,
  name: 'ToastProvider',

  args: {
    children: 'Notification',
    autoDismiss: true,
    milliseconds: 5000
  },

  argTypes: {
    placementProps: {
      control: 'object'
    },

    children: {
      table: {
        category: 'Toast'
      }
    },

    autoDismiss: {
      table: {
        category: 'Toast'
      }
    },

    milliseconds: {
      table: {
        category: 'Toast'
      }
    },

    placement: {
      control: 'radio',
      options: TOAST_PLACEMENT_OPTIONS,

      table: {
        category: 'Toast'
      }
    }
  }
};
