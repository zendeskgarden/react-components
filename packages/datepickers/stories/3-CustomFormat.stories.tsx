/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useMemo, useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Datepicker } from '@zendeskgarden/react-datepickers';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';
import { Field, Label, Hint, Input } from '@zendeskgarden/react-forms';

export default {
  title: 'Components/Datepickers/Datepicker',
  subcomponents: { Datepicker }
} as Meta;

/**
 * https://github.com/storybookjs/storybook/issues/13362
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const CustomFormat: Story = ({ foo }) => {
  const [date, setDate] = useState(new Date());

  const dateFormatter = useMemo(
    () =>
      new Intl.DateTimeFormat('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric'
      }),
    []
  );

  return (
    <Grid>
      <Row style={{ minHeight: 450 }}>
        <Col md={6} offsetMd={3}>
          <Field>
            <Label>Standard datepicker</Label>
            <Hint>Using Intl.DateTimeFormat localization</Hint>
            <Datepicker
              value={date}
              onChange={newDate => {
                action('onChange');
                setDate(newDate);
              }}
              locale="en-US"
              formatDate={d => dateFormatter.format(d)}
            >
              <Input />
            </Datepicker>
          </Field>
        </Col>
      </Row>
    </Grid>
  );
};

CustomFormat.parameters = {
  docs: {
    storyDescription: `
By default Garden use the [Intl.DateTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat)
localization utility to format our dates.

This logic is customizable with the \`formatDate\` prop where you may use
other date formatting libraries like [momentjs](https://momentjs.com/) or
[date-fns](https://date-fns.org/).
      `
  }
};
