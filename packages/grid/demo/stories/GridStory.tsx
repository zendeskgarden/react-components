/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story } from '@storybook/react';
import { Col, Grid, IGridProps, Row } from '@zendeskgarden/react-grid';
import { IGridRow } from './types';

interface IArgs extends IGridProps {
  rows: IGridRow[];
}

export const GridStory: Story<IArgs> = ({ rows, ...args }) => (
  <Grid {...args}>
    {rows.map((row, rowIndex) => {
      const { cols, ...props } = row;

      return (
        <Row key={rowIndex} {...props}>
          {cols.map((col, colIndex) => (
            <Col key={colIndex} {...col} />
          ))}
        </Row>
      );
    })}
  </Grid>
);
