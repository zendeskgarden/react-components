/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { StoryFn } from '@storybook/react-vite';
import { Grid } from '@zendeskgarden/react-grid';
import { Button } from '@zendeskgarden/react-buttons';
import { ITooltipProps, Tooltip } from '@zendeskgarden/react-tooltips';

export const ToggletipStory: StoryFn<ITooltipProps> = (args: ITooltipProps) => (
  <Grid>
    <Grid.Row style={{ height: 'calc(100vh - 80px)' }}>
      <Grid.Col textAlign="center" alignSelf="center">
        <Tooltip
          {...args}
          isToggletip
          content={
            <>
              <Tooltip.Title>Title text</Tooltip.Title>
              <Tooltip.Paragraph>
                Use this space to provide more context for your users.
              </Tooltip.Paragraph>
            </>
          }
        >
          <Button>More information</Button>
        </Tooltip>
      </Grid.Col>
    </Grid.Row>
  </Grid>
);
