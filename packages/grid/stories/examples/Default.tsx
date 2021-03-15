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
  gutters: false | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  debug: boolean;
  justifyContent: 'start' | 'end' | 'center' | 'between' | 'around' | undefined;
  alignItems: 'start' | 'end' | 'center' | 'baseline' | 'stretch' | undefined;
  wrap: 'wrap' | 'nowrap' | 'wrap-reverse' | undefined;
  textAlign: 'start' | 'end' | 'center' | 'justify' | undefined;
  offset: number;
  breakpoint: string;
  size: number | string;
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
  return (
    <Grid>
      <Row>
        <Col>
          <p>
            * controls a responsive property based on the selected breakpoint (minimum viewport
            width)
          </p>
        </Col>
        <Col size="8">
          <div className="u-mt">
            <Grid columns={columns} gutters={gutters} debug={debug}>
              {Array(rows)
                .fill(undefined)
                .map((_, index) => (
                  <Row
                    key={index}
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
                      .map((_, index) => (
                        <Col
                          key={index}
                          offset={
                            index === 0 && breakpoint === 'default' && offset > 0
                              ? offset
                              : undefined
                          }
                          offsetXs={
                            index === 0 && breakpoint === 'xs' && offset > 0 ? offset : undefined
                          }
                          offsetSm={
                            index === 0 && breakpoint === 'sm' && offset > 0 ? offset : undefined
                          }
                          offsetMd={
                            index === 0 && breakpoint === 'md' && offset > 0 ? offset : undefined
                          }
                          offsetLg={
                            index === 0 && breakpoint === 'lg' && offset > 0 ? offset : undefined
                          }
                          offsetXl={
                            index === 0 && breakpoint === 'xl' && offset > 0 ? offset : undefined
                          }
                          size={
                            breakpoint === 'default' && size > 0
                              ? size
                              : size === -1
                              ? 'auto'
                              : undefined
                          }
                          xs={
                            breakpoint === 'xs' && size > 0
                              ? size
                              : size === -1
                              ? 'auto'
                              : undefined
                          }
                          sm={
                            breakpoint === 'sm' && size > 0
                              ? size
                              : size === -1
                              ? 'auto'
                              : undefined
                          }
                          md={
                            breakpoint === 'md' && size > 0
                              ? size
                              : size === -1
                              ? 'auto'
                              : undefined
                          }
                          lg={
                            breakpoint === 'lg' && size > 0
                              ? size
                              : size === -1
                              ? 'auto'
                              : undefined
                          }
                          xl={
                            breakpoint === 'xl' && size > 0
                              ? size
                              : size === -1
                              ? 'auto'
                              : undefined
                          }
                          textAlign={breakpoint === 'default' ? textAlign : undefined}
                          textAlignXs={breakpoint === 'xs' ? textAlign : undefined}
                          textAlignSm={breakpoint === 'sm' ? textAlign : undefined}
                          textAlignMd={breakpoint === 'md' ? textAlign : undefined}
                          textAlignLg={breakpoint === 'lg' ? textAlign : undefined}
                          textAlignXl={breakpoint === 'xl' ? textAlign : undefined}
                        >
                          <div style={{ height: `${1 + 0.5 * index}em` }}>{`${index + 1}`}</div>
                        </Col>
                      ))}
                  </Row>
                ))}
            </Grid>
          </div>
        </Col>
      </Row>
    </Grid>
  );
};

Default.args = {
  rows: 1,
  debug: true,
  columns: 12,
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
    control: {
      name: 'Justify content (<Row>)',
      type: 'select',
      options: ['start', 'end', 'center', 'between', 'around']
    }
  },
  alignItems: {
    control: {
      name: 'Align items (<Row>)',
      type: 'select',
      options: ['start', 'end', 'center', 'baseline', 'stretch']
    }
  },
  wrap: {
    control: {
      name: 'Wrap (<Row>)',
      type: 'select',
      options: ['wrap', 'nowrap', 'wrap-reverse']
    }
  },
  textAlign: {
    control: {
      name: 'Text align (<Col>)',
      type: 'select',
      options: ['start', 'end', 'center', 'justify']
    }
  },
  offset: {
    control: {
      name: 'Col 1 offset',
      type: 'range',
      max: 11
    }
  },
  breakpoint: {
    control: {
      name: 'Viewport breakpoint',
      type: 'select',
      options: ['default', 'xs', 'sm', 'md', 'lg', 'xl']
    }
  },
  size: {
    control: {
      name: 'Size',
      type: 'select',
      options: ['auto', 'none', 1, 2, 3, 4]
    }
  }
};
