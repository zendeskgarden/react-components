/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { StoryFn } from '@storybook/react-vite';
import { Grid } from '@zendeskgarden/react-grid';
import { ColorSwatchDialog, IColorSwatchDialogProps } from '@zendeskgarden/react-colorpickers';

export const ColorSwatchDialogStory: StoryFn<IColorSwatchDialogProps> = args => (
  <Grid>
    <Grid.Row style={{ height: 'calc(100vh - 80px)' }}>
      <Grid.Col textAlign="center" alignSelf="center">
        <ColorSwatchDialog {...args} />
      </Grid.Col>
    </Grid.Row>
  </Grid>
);
