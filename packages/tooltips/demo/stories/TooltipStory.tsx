/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { StoryFn } from '@storybook/react-vite';
import { Grid } from '@zendeskgarden/react-grid';
import { Button, IconButton } from '@zendeskgarden/react-buttons';
import Icon from '@zendeskgarden/svg-icons/src/16/info-stroke.svg';
import { ITooltipProps, Tooltip } from '@zendeskgarden/react-tooltips';
import { ITooltipContent } from './types';

interface IArgs extends Omit<ITooltipProps, 'content'> {
  content: ITooltipContent;
}

export const TooltipStory: StoryFn<IArgs> = ({ content, isLabel, ...args }: IArgs) => (
  <Grid>
    <Grid.Row style={{ height: 'calc(100vh - 200px)' }}>
      <Grid.Col textAlign="center" alignSelf="center">
        <Tooltip
          {...args}
          content={
            <>
              <Tooltip.Title>{content.title}</Tooltip.Title>
              <Tooltip.Paragraph>{content.paragraph}</Tooltip.Paragraph>
            </>
          }
          isLabel={isLabel}
        >
          {isLabel ? (
            <IconButton>
              <Icon />
            </IconButton>
          ) : (
            <Button>Trigger</Button>
          )}
        </Tooltip>
      </Grid.Col>
    </Grid.Row>
  </Grid>
);
