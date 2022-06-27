/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story } from '@storybook/react';
import { IPaginationProps, Pagination } from '@zendeskgarden/react-pagination';

export const PaginationStory: Story<IPaginationProps> = args => {
  const transformPageProps: IPaginationProps['transformPageProps'] = (
    pageType,
    props,
    pageNumber
  ) => {
    let retVal;

    switch (pageType) {
      case 'previous':
        retVal = { ...props, 'aria-label': 'Previous page' };
        break;

      case 'next':
        retVal = { ...props, 'aria-label': 'Next page' };
        break;

      case 'page':
        retVal = {
          ...props,
          'aria-label': props['aria-current']
            ? `Current page, page ${pageNumber}`
            : `Page ${pageNumber}`
        };
        break;

      default:
        retVal = props;
        break;
    }

    return retVal;
  };

  return <Pagination {...args} transformPageProps={transformPageProps} />;
};
