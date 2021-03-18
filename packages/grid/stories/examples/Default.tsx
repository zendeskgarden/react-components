/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story } from '@storybook/react';
import { Col, Grid, Row } from '@zendeskgarden/react-grid';

interface IDefaultStoryProps {
  columns: number;
  rows: number;
  offset: number;
  size: number;
  breakpoint: string;
  debug: boolean;
  wrap: 'wrap' | 'nowrap' | 'wrap-reverse' | undefined;
  textAlign: 'start' | 'end' | 'center' | 'justify' | undefined;
  gutters: false | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  justifyContent: 'start' | 'end' | 'center' | 'between' | 'around' | undefined;
  alignItems: 'start' | 'end' | 'center' | 'baseline' | 'stretch' | undefined;
}

export const Default: Story<IDefaultStoryProps> = ({
  columns,
  gutters,
  debug,
  rows,
  justifyContent,
  alignItems,
  wrap,
  textAlign,
  offset,
  breakpoint,
  size
}) => {
  const computedSize = size >= columns ? columns : size;
  const computedOffset =
    size > 1 ? Math.min(offset, columns - size) : Math.min(offset, columns - 1);

  return (
    <>
      <Grid columns={columns} gutters={gutters} debug={debug}>
        {Array(rows)
          .fill(undefined)
          .map((row, rowIndex) => (
            <Row
              key={rowIndex}
              alignItems={breakpoint === 'default' ? alignItems : undefined}
              alignItemsXs={breakpoint === 'xs' ? alignItems : undefined}
              alignItemsSm={breakpoint === 'sm' ? alignItems : undefined}
              alignItemsMd={breakpoint === 'md' ? alignItems : undefined}
              alignItemsLg={breakpoint === 'lg' ? alignItems : undefined}
              alignItemsXl={breakpoint === 'xl' ? alignItems : undefined}
              justifyContent={breakpoint === 'default' ? justifyContent : undefined}
              justifyContentXs={breakpoint === 'xs' ? justifyContent : undefined}
              justifyContentSm={breakpoint === 'sm' ? justifyContent : undefined}
              justifyContentMd={breakpoint === 'md' ? justifyContent : undefined}
              justifyContentLg={breakpoint === 'lg' ? justifyContent : undefined}
              justifyContentXl={breakpoint === 'xl' ? justifyContent : undefined}
              wrap={breakpoint === 'default' ? wrap : undefined}
              wrapXs={breakpoint === 'xs' ? wrap : undefined}
              wrapSm={breakpoint === 'sm' ? wrap : undefined}
              wrapMd={breakpoint === 'md' ? wrap : undefined}
              wrapLg={breakpoint === 'lg' ? wrap : undefined}
              wrapXl={breakpoint === 'xl' ? wrap : undefined}
            >
              {Array(columns)
                .fill(undefined)
                .map((column, columnIndex) => (
                  <Col
                    key={columnIndex}
                    offset={
                      columnIndex === 0 && breakpoint === 'default' && computedOffset > 0
                        ? computedOffset
                        : undefined
                    }
                    offsetXs={
                      columnIndex === 0 && breakpoint === 'xs' && computedOffset > 0
                        ? computedOffset
                        : undefined
                    }
                    offsetSm={
                      columnIndex === 0 && breakpoint === 'sm' && computedOffset > 0
                        ? computedOffset
                        : undefined
                    }
                    offsetMd={
                      columnIndex === 0 && breakpoint === 'md' && computedOffset > 0
                        ? computedOffset
                        : undefined
                    }
                    offsetLg={
                      columnIndex === 0 && breakpoint === 'lg' && computedOffset > 0
                        ? computedOffset
                        : undefined
                    }
                    offsetXl={
                      columnIndex === 0 && breakpoint === 'xl' && computedOffset > 0
                        ? computedOffset
                        : undefined
                    }
                    size={
                      /* eslint-disable no-nested-ternary */
                      breakpoint === 'default' && computedSize > 0
                        ? computedSize
                        : computedSize === -1
                        ? 'auto'
                        : undefined
                    }
                    xs={
                      breakpoint === 'xs' && computedSize > 0
                        ? computedSize
                        : computedSize === -1
                        ? 'auto'
                        : undefined
                    }
                    sm={
                      breakpoint === 'sm' && computedSize > 0
                        ? computedSize
                        : computedSize === -1
                        ? 'auto'
                        : undefined
                    }
                    md={
                      breakpoint === 'md' && computedSize > 0
                        ? computedSize
                        : computedSize === -1
                        ? 'auto'
                        : undefined
                    }
                    lg={
                      breakpoint === 'lg' && computedSize > 0
                        ? computedSize
                        : computedSize === -1
                        ? 'auto'
                        : undefined
                    }
                    xl={
                      breakpoint === 'xl' && computedSize > 0
                        ? computedSize
                        : computedSize === -1
                        ? 'auto'
                        : undefined
                      /* eslint-enabled no-nested-ternary */
                    }
                    textAlign={breakpoint === 'default' ? textAlign : undefined}
                    textAlignXs={breakpoint === 'xs' ? textAlign : undefined}
                    textAlignSm={breakpoint === 'sm' ? textAlign : undefined}
                    textAlignMd={breakpoint === 'md' ? textAlign : undefined}
                    textAlignLg={breakpoint === 'lg' ? textAlign : undefined}
                    textAlignXl={breakpoint === 'xl' ? textAlign : undefined}
                  >
                    <div style={{ height: `${1 + 0.5 * columnIndex}em` }}>{`${
                      columnIndex + 1
                    }`}</div>
                  </Col>
                ))}
            </Row>
          ))}
      </Grid>
      <p>
        * Indicates a Storybook control of a responsive property based on the selected breakpoint
        (minimum viewport width)
      </p>
    </>
  );
};

Default.args = {
  debug: true,
  rows: 1,
  columns: 12,
  size: 0,
  offset: 0,
  breakpoint: 'default'
};

Default.argTypes = {
  columns: {
    control: {
      type: 'select',
      options: [4, 8, 12, 16, 24]
    }
  },
  rows: {
    name: 'rows',
    control: {
      type: 'range',
      min: 1,
      max: 10
    }
  },
  gutters: {
    control: {
      type: 'select',
      options: [false, 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl']
    }
  },
  justifyContent: {
    name: 'Justify content (<Row>) *',
    control: {
      type: 'select',
      options: ['start', 'end', 'center', 'between', 'around']
    }
  },
  alignItems: {
    name: 'Align items (<Row>) *',
    control: {
      type: 'select',
      options: ['start', 'end', 'center', 'baseline', 'stretch']
    }
  },
  wrap: {
    name: 'Wrap (<Row>) *',
    control: {
      type: 'select',
      options: ['wrap', 'nowrap', 'wrap-reverse']
    }
  },
  textAlign: {
    name: 'Text align (<Col>) *',
    control: {
      type: 'select',
      options: ['start', 'end', 'center', 'justify']
    }
  },
  offset: {
    name: 'Col 1 offset *',
    control: {
      type: 'number',
      min: 0
    }
  },
  breakpoint: {
    name: 'Viewport breakpoint',
    control: {
      type: 'select',
      options: ['default', 'xs', 'sm', 'md', 'lg', 'xl']
    }
  },
  size: {
    name: 'Size *',
    control: {
      type: 'number',
      min: -1
    }
  }
};
