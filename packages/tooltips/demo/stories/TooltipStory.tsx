/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story } from '@storybook/react';
import { PALETTE } from '@zendeskgarden/react-theming';
import { Col, Grid, Row } from '@zendeskgarden/react-grid';
import { ITooltipProps, Paragraph, Title, Tooltip } from '@zendeskgarden/react-tooltips';
import { ITooltipContent } from './types';

interface IArgs extends ITooltipProps {
  content: ITooltipContent;
}

export const TooltipStory: Story<IArgs> = ({ content, ...args }: IArgs) => (
  <Grid>
    <Row style={{ height: 'calc(100vh - 80px)' }}>
      <Col textAlign="center" alignSelf="center">
        <Tooltip
          {...args}
          content={
            <>
              <Title>{content.title}</Title>
              <Paragraph>{content.paragraph}</Paragraph>
            </>
          }
        >
          <span style={{ backgroundColor: PALETTE.grey[100], padding: '1em' }}>Target</span>
        </Tooltip>
      </Col>
    </Row>
  </Grid>
);
