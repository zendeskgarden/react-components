/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import type { StoryObj } from '@storybook/react';
import { Grid, ALIGN_ITEMS, JUSTIFY_CONTENT, WRAP } from '@zendeskgarden/react-grid';
import { GridStory } from './stories/GridStory';
import { GRID_ROWS as ROWS } from './stories/data';

export default {
  title: 'Packages/Grid/Grid',
  component: Grid,

  subcomponents: {
    'Grid.Col': Grid.Col,
    'Grid.Row': Grid.Row
  }
};

export const Example: StoryObj<typeof GridStory> = {
  render: args => <GridStory {...args} />,
  name: 'Grid',
  args: {
    columns: 12,
    gutters: 'md',
    rows: ROWS
  },

  argTypes: {
    rows: {
      name: 'children'
    },

    alignItems: {
      control: {
        type: 'select'
      },

      options: ALIGN_ITEMS,

      table: {
        category: 'Grid.Row'
      }
    },

    alignItemsXs: {
      control: {
        type: 'select'
      },

      options: ALIGN_ITEMS,

      table: {
        category: 'Grid.Row'
      }
    },

    alignItemsSm: {
      control: {
        type: 'select'
      },

      options: ALIGN_ITEMS,

      table: {
        category: 'Grid.Row'
      }
    },

    alignItemsMd: {
      control: {
        type: 'select'
      },

      options: ALIGN_ITEMS,

      table: {
        category: 'Grid.Row'
      }
    },

    alignItemsLg: {
      control: {
        type: 'select'
      },

      options: ALIGN_ITEMS,

      table: {
        category: 'Grid.Row'
      }
    },

    alignItemsXl: {
      control: {
        type: 'select'
      },

      options: ALIGN_ITEMS,

      table: {
        category: 'Grid.Row'
      }
    },

    justifyContent: {
      control: {
        type: 'select'
      },

      options: JUSTIFY_CONTENT,

      table: {
        category: 'Grid.Row'
      }
    },

    justifyContentXs: {
      control: {
        type: 'select'
      },

      options: JUSTIFY_CONTENT,

      table: {
        category: 'Grid.Row'
      }
    },

    justifyContentSm: {
      control: {
        type: 'select'
      },

      options: JUSTIFY_CONTENT,

      table: {
        category: 'Grid.Row'
      }
    },

    justifyContentMd: {
      control: {
        type: 'select'
      },

      options: JUSTIFY_CONTENT,

      table: {
        category: 'Grid.Row'
      }
    },

    justifyContentLg: {
      control: {
        type: 'select'
      },

      options: JUSTIFY_CONTENT,

      table: {
        category: 'Grid.Row'
      }
    },

    justifyContentXl: {
      control: {
        type: 'select'
      },

      options: JUSTIFY_CONTENT,

      table: {
        category: 'Grid.Row'
      }
    },

    wrap: {
      control: {
        type: 'select'
      },

      options: WRAP,

      table: {
        category: 'Grid.Row'
      }
    },

    wrapXs: {
      control: {
        type: 'select'
      },

      options: WRAP,

      table: {
        category: 'Grid.Row'
      }
    },

    wrapSm: {
      control: {
        type: 'select'
      },

      options: WRAP,

      table: {
        category: 'Grid.Row'
      }
    },

    wrapMd: {
      control: {
        type: 'select'
      },

      options: WRAP,

      table: {
        category: 'Grid.Row'
      }
    },

    wrapLg: {
      control: {
        type: 'select'
      },

      options: WRAP,

      table: {
        category: 'Grid.Row'
      }
    },

    wrapXl: {
      control: {
        type: 'select'
      },

      options: WRAP,

      table: {
        category: 'Grid.Row'
      }
    }
  },

  parameters: {
    design: {
      allowFullscreen: true,
      type: 'figma',
      url: 'https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=102%3A108'
    }
  }
};
