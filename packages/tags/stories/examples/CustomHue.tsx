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

interface ICustomHueStoryProps {
  hue: string;
}

export const CustomHue: Story<ICustomHueStoryProps> = ({ hue }) => (
  <Grid>
    <Row>
      <Col textAlign="center">
        <Tag hue={hue} tabIndex={0}>
          Custom Hue
          <Tag.Close onClick={() => action('Delete tag')} />
        </Tag>
      </Col>
    </Row>
  </Grid>
);

CustomHue.args = {
  hue: ''
};

CustomHue.argTypes = {
  hue: {
    name: 'Hue',
    control: 'color'
  }
};

CustomHue.parameters = {
  docs: {
    storyDescription: `
Generally, the color of a Garden \`Tag\` is determined by setting the \`hue\`
prop to one of the available theming
[palette](https://zendeskgarden.github.io/react-components/theming/#palette)
primary or secondary hue values (\`grey\`, \`blue\`, \`red\`, \`yellow\`, \`green\`,
\`kale\`, etc). However, the \`hue\` prop is flexible and can accept any valid
[CSS color value](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value).
The \`Tag\` component uses the [PolishedJS
readableColor()](https://polished.js.org/docs/#readablecolor) utility to
maintain accessible foreground/background contrast levels.
      `
  }
};
