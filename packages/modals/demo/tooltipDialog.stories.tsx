/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import type { StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { useArgs } from '@storybook/preview-api';
import { TooltipDialog } from '@zendeskgarden/react-modals';
import { TooltipDialogStory } from './stories/TooltipDialogStory';
import { TOOLTIP_DIALOG_BODY as BODY } from './stories/data';
import { PLACEMENT } from '../src/types';

export default {
  title: 'Packages/Modals/TooltipDialog',
  component: TooltipDialog,

  subcomponents: {
    'TooltipDialog.Body': TooltipDialog.Body,
    'TooltipDialog.Close': TooltipDialog.Close,
    'TooltipDialog.Footer': TooltipDialog.Footer,
    'TooltipDialog.FooterItem': TooltipDialog.FooterItem,
    'TooltipDialog.Title': TooltipDialog.Title
  }
};

export const Default: StoryObj<typeof TooltipDialogStory> = {
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const updateArgs = useArgs()[1];

    const handleClick = (referenceElement: any) => {
      action('onClick')(referenceElement);

      updateArgs({
        referenceElement
      });
    };

    const handleClose = () => {
      action('onClose')();

      updateArgs({
        referenceElement: null
      });
    };

    return (
      <TooltipDialogStory {...args} count={3} handleClick={handleClick} onClose={handleClose} />
    );
  },
  name: 'TooltipDialog',
  args: {
    focusOnMount: true,
    hasArrow: true,
    restoreFocus: true,
    hasBody: true,
    body: BODY,
    hasClose: true,
    hasFooter: true,
    hasTitle: true,
    title: 'Title',
    closeAriaLabel: 'Close',
    dialogAriaLabel: 'Title'
  },

  argTypes: {
    referenceElement: {
      control: false
    },

    fallbackPlacements: {
      control: 'multi-select',
      options: PLACEMENT.filter(p => p !== 'auto')
    },

    hasBody: {
      name: 'TooltipDialog.Body',

      table: {
        category: 'Story'
      }
    },

    hasClose: {
      name: 'TooltipDialog.Close',

      table: {
        category: 'Story'
      }
    },

    hasFooter: {
      name: 'TooltipDialog.Footer',

      table: {
        category: 'Story'
      }
    },

    hasTitle: {
      name: 'TooltipDialog.Title',

      table: {
        category: 'Story'
      }
    },

    body: {
      name: 'children',

      table: {
        category: 'TooltipDialog.Body'
      }
    },

    title: {
      name: 'children',

      table: {
        category: 'TooltipDialog.Title'
      }
    },

    tag: {
      control: 'text',

      table: {
        category: 'TooltipDialog.Title'
      }
    },

    closeAriaLabel: {
      name: 'aria-label',

      table: {
        category: 'TooltipDialog.Close'
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
      url: 'https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=103%3A25593'
    }
  }
};
