/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';
import { Well } from '@zendeskgarden/react-notifications';
import { Toggle, Field, Input, Label } from '@zendeskgarden/react-forms';
import { Example } from '@zendeskgarden/react-{{component}}';

export default {
  title: 'Components/{{componentName}}/Example',
  component: Example
} as Meta;

export const Default: Story = () => {
  const [compact, setCompact] = React.useState(false);
  const [text, setText] = React.useState('');

  const style = { width: 300 };

  return (
    <Grid>
      <Row>
        <Col>
          <Well isRecessed style={style}>
            <Field>
              <Label>Text</Label>
              <Input isCompact value={text} onChange={event => setText(event.target.value)} />
            </Field>
            <Field className="u-mt-xs">
              <Toggle checked={compact} onChange={event => setCompact(event.target.checked)}>
                <Label>Compact</Label>
              </Toggle>
            </Field>
          </Well>
        </Col>
        <Col>
          <Example isCompact={compact}>
            <span>{text}</span>
          </Example>
        </Col>
      </Row>
    </Grid>
  );
};

Default.parameters = {
  docs: {
    description: {
      component: `
A description of the {{component}} component.
`
    }
  }
};
