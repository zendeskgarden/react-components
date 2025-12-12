import React from 'react';
import type { StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { useArgs } from '@storybook/preview-api';
import { Modal } from '@zendeskgarden/react-modals';
import { ModalStory } from './stories/ModalStory';
import { MODAL_BODY as BODY, MODAL_FOOTER_ITEMS as FOOTER_ITEMS } from './stories/data';

export default {
  title: 'Packages/Modals/Modal',
  component: Modal,

  subcomponents: {
    'Modal.Body': Modal.Body,
    'Modal.Close': Modal.Close,
    'Modal.Footer': Modal.Footer,
    'Modal.FooterItem': Modal.FooterItem,
    'Modal.Header': Modal.Header
  }
};

export const Modal: StoryObj<typeof ModalStory> = {
  render: args => {
    const updateArgs = useArgs()[1];

    const handleClick = () => {
      action('onClick')();

      updateArgs({
        isVisible: true
      });
    };

    const handleClose = () => {
      action('onClose')();

      updateArgs({
        isVisible: false
      });
    };

    return <ModalStory {...args} onClick={handleClick} onClose={handleClose} />;
  },

  name: 'Modal',

  args: {
    isAnimated: true,
    isCentered: true,
    isVisible: false,
    hasBody: true,
    body: BODY,
    hasClose: true,
    hasFooter: true,
    hasHeader: true,
    header: 'Header',
    footerItems: FOOTER_ITEMS,
    dialogAriaLabel: 'Header',
    closeAriaLabel: 'Close'
  },

  argTypes: {
    appendToNode: {
      control: false
    },

    isVisible: {
      table: {
        category: 'Story'
      }
    },

    hasBody: {
      name: 'Modal.Body',

      table: {
        category: 'Story'
      }
    },

    hasClose: {
      name: 'Modal.Close',

      table: {
        category: 'Story'
      }
    },

    hasFooter: {
      name: 'Modal.Footer',

      table: {
        category: 'Story'
      }
    },

    hasHeader: {
      name: 'Modal.Header',

      table: {
        category: 'Story'
      }
    },

    footerItems: {
      name: 'Modal.FooterItem[]',

      table: {
        category: 'Story'
      }
    },

    body: {
      name: 'children',

      table: {
        category: 'Modal.Body'
      }
    },

    isDanger: {
      control: 'boolean',

      table: {
        category: 'Modal.Header'
      }
    },

    tag: {
      control: 'text',

      table: {
        category: 'Modal.Header'
      }
    },

    header: {
      name: 'children',

      table: {
        category: 'Modal.Header'
      }
    },

    closeAriaLabel: {
      name: 'aria-label',

      table: {
        category: 'Modal.Close'
      }
    },

    dialogAriaLabel: {
      name: 'aria-label'
    }
  },

  parameters: {
    design: {
      allowFullscreen: true,
      type: 'figma',
      url: 'https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=102%3A124'
    }
  }
};
