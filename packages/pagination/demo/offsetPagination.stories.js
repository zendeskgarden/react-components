import { useArgs } from '@storybook/client-api';
import { OffsetPagination } from '@zendeskgarden/react-pagination';
import README from '../README.md';

export default {
  title: 'Packages/Pagination/OffsetPagination',
  component: OffsetPagination
};

export const OffsetPagination = {
  render: args => {
    const labels = {
      renderPage: n => `${args.page} ${n}`,
      gap: args.gap,
      next: args.next,
      previous: args.previous
    };

    const updateArgs = useArgs()[1];

    const handleChange = currentPage =>
      updateArgs({
        currentPage
      });

    return <OffsetPagination {...args} labels={labels} onChange={handleChange} />;
  },

  name: 'OffsetPagination',

  args: {
    currentPage: 1,
    totalPages: 11,
    'aria-label': 'Pagination',
    gap: 'Ellipsis indicating non-visible pages',
    page: 'Page',
    next: 'Next page',
    previous: 'Previous page'
  },

  argTypes: {
    gap: {
      table: {
        category: 'Label'
      }
    },

    page: {
      table: {
        category: 'Label'
      }
    },

    next: {
      table: {
        category: 'Label'
      }
    },

    previous: {
      table: {
        category: 'Label'
      }
    }
  },

  parameters: {
    design: {
      allowFullscreen: true,
      type: 'figma',
      url: 'https://www.figma.com/file/6g87L4FdKZTA3knt3Rsfdx/Garden?node-id=172%3A13037'
    }
  }
};
