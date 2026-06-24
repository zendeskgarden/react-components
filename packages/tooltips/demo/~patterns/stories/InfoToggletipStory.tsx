/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { StoryFn } from '@storybook/react-vite';
import { Grid } from '@zendeskgarden/react-grid';
import { IconButton } from '@zendeskgarden/react-buttons';
import Icon from '@zendeskgarden/svg-icons/src/16/info-stroke.svg';
import { ITooltipProps, Tooltip } from '@zendeskgarden/react-tooltips';

export const InfoToggletipStory: StoryFn<ITooltipProps> = (args: ITooltipProps) => (
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
          {/*
            A toggletip announces its content via a live region rather than
            naming the trigger, so an icon-only trigger still needs its own
            accessible name.
          */}
          <IconButton aria-label="More information" size="small">
            <Icon />
          </IconButton>
        </Tooltip>
      </Grid.Col>
    </Grid.Row>
  </Grid>
);
