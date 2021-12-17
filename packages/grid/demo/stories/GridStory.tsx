/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story } from '@storybook/react';
import { Col, Grid, IGridProps, IRowProps, Row } from '@zendeskgarden/react-grid';
import { IGridRow } from './types';

interface IArgs extends IGridProps {
  rows: IGridRow[];
  alignItems?: IRowProps['alignItems'];
  alignItemsXs?: IRowProps['alignItemsXs'];
  alignItemsSm?: IRowProps['alignItemsSm'];
  alignItemsMd?: IRowProps['alignItemsMd'];
  alignItemsLg?: IRowProps['alignItemsLg'];
  alignItemsXl?: IRowProps['alignItemsXl'];
  justifyContent?: IRowProps['justifyContent'];
  justifyContentXs?: IRowProps['justifyContentXs'];
  justifyContentSm?: IRowProps['justifyContentSm'];
  justifyContentMd?: IRowProps['justifyContentMd'];
  justifyContentLg?: IRowProps['justifyContentLg'];
  justifyContentXl?: IRowProps['justifyContentXl'];
  wrap?: IRowProps['wrap'];
  wrapXs?: IRowProps['wrapXs'];
  wrapSm?: IRowProps['wrapSm'];
  wrapMd?: IRowProps['wrapMd'];
  wrapLg?: IRowProps['wrapLg'];
  wrapXl?: IRowProps['wrapXl'];
}

export const GridStory: Story<IArgs> = ({
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
        <Row
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
            <Col key={colIndex} {...col} />
          ))}
        </Row>
      );
    })}
  </Grid>
);
