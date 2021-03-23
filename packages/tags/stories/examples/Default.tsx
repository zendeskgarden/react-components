/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Tag } from '@zendeskgarden/react-tags';
import { Col, Grid, Row } from '@zendeskgarden/react-grid';

interface IDefaultStoryProps {
  text: string;
  hue: string;
  size: 'small' | 'medium' | 'large';
  shape: 'default' | 'pill' | 'round';
  isRegularWeight: boolean;
  includeAvatar: boolean;
  includeClose: boolean;
}

export const Default: Story<IDefaultStoryProps> = ({
  text,
  hue,
  size,
  shape,
  isRegularWeight,
  includeAvatar,
  includeClose
}) => (
  <Grid>
    <Row>
      <Col textAlign="center">
        <Tag
          hue={hue === 'default' ? undefined : hue}
          isPill={shape === 'pill'}
          isRound={shape === 'round'}
          isRegular={isRegularWeight}
          size={size}
          tabIndex={0}
        >
          {includeAvatar && (
            <Tag.Avatar>
              <img alt="" src="images/tags/default.png" />
            </Tag.Avatar>
          )}
          <span>{text}</span>
          {includeClose && <Tag.Close onClick={() => action(`Delete "${text}" tag`)} />}
        </Tag>
      </Col>
    </Row>
  </Grid>
);

Default.args = {
  text: '8',
  hue: 'default',
  size: 'medium',
  shape: 'default',
  isRegularWeight: false,
  includeAvatar: false,
  includeClose: false
};

Default.argTypes = {
  text: {
    name: 'Text'
  },
  hue: {
    name: 'Hue',
    control: {
      type: 'select',
      options: [
        'default',
        'grey',
        'blue',
        'kale',
        'red',
        'green',
        'yellow',
        'fuschia',
        'pink',
        'crimson',
        'orange',
        'lemon',
        'lime',
        'mint',
        'teal',
        'azure',
        'royal',
        'purple'
      ]
    }
  },
  size: {
    name: 'Size',
    control: {
      type: 'select',
      options: ['small', 'medium', 'large']
    }
  },
  shape: {
    name: 'Shape',
    control: {
      type: 'select',
      options: ['default', 'pill', 'round']
    }
  },
  isRegularWeight: {
    name: 'Regular weight'
  },
  includeAvatar: {
    name: 'Include `Tag.Avatar`'
  },
  includeClose: {
    name: 'Include `Tag.Close`'
  }
};

Default.parameters = {
  docs: {
    description: {
      component: `
The following example provides controls that can be used to affect basic
\`Tag\` structure and styling. Please note the following:

- \`round\` tags are only meant to contain one or two characters (i.e. numbers)
- \`round\` tags do not display \`Tag.Avatar\` or \`Tag.Close\` components
- a \`Tag.Avatar\` is designed to contain one \`img\` or \`svg\` child
- a \`Tag.Avatar\` is not displayed in \`small\`-sized tags
- surround child text with a \`span\` to control for intended minimum widths, centering, and truncation
      `
    }
  }
};
