/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { StoryFn } from '@storybook/react-vite';
import { Grid, IGridProps, IRowProps } from '@zendeskgarden/react-grid';
import React from 'react';

import { IGridRow } from './types';

interface IArgs extends IGridProps, IRowProps {
  rows: IGridRow[];
}

export const GridStory: StoryFn<IArgs> = ({
  rows,
  alignItems,
  alignItemsXs,
  alignItemsSm,
  alignItemsMd,
  alignItemsLg,
  alignItemsXl,
  justifyContent,
  justifyContentXs,
  justifyContentSm,
  justifyContentMd,
  justifyContentLg,
  justifyContentXl,
  wrap,
  wrapXs,
  wrapSm,
  wrapMd,
  wrapLg,
  wrapXl,
  ...args
}) => (
  <Grid {...args}>
    {rows.map((row, rowIndex) => {
      const { cols, ...props } = row;

      return (
        <Grid.Row
          key={rowIndex}
          {...props}
          alignItems={alignItems}
          alignItemsXs={alignItemsXs}
          alignItemsSm={alignItemsSm}
          alignItemsMd={alignItemsMd}
          alignItemsLg={alignItemsLg}
          alignItemsXl={alignItemsXl}
          justifyContent={justifyContent}
          justifyContentXs={justifyContentXs}
          justifyContentSm={justifyContentSm}
          justifyContentMd={justifyContentMd}
          justifyContentLg={justifyContentLg}
          justifyContentXl={justifyContentXl}
          wrap={wrap}
          wrapXs={wrapXs}
          wrapSm={wrapSm}
          wrapMd={wrapMd}
          wrapLg={wrapLg}
          wrapXl={wrapXl}
        >
          {cols.map((col, colIndex) => (
            <Grid.Col key={colIndex} {...col} />
          ))}
        </Grid.Row>
      );
    })}
  </Grid>
);
