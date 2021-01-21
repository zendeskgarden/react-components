/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Datepicker } from '@zendeskgarden/react-datepickers';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';
import { Field, Label, Hint, Input } from '@zendeskgarden/react-forms';

export default {
  title: 'Components/Datepickers/Datepicker',
  subcomponents: { Datepicker }
} as Meta;

interface IDefaultStoryProps {
  locale: string;
  isCompact: boolean;
  minDate?: Date;
  maxDate?: Date;
}

export const Default: Story<IDefaultStoryProps> = ({ locale, isCompact, minDate, maxDate }) => {
  const [date, setDate] = useState(new Date());

  return (
    <Grid>
      <Row style={{ minHeight: 450 }}>
        <Col md={6} offsetMd={3}>
          <Field>
            <Label>Standard datepicker</Label>
            <Hint>Using Intl.DateTimeFormat localization</Hint>
            <Datepicker
              value={date}
              isCompact={isCompact}
              minValue={minDate}
              maxValue={maxDate}
              onChange={newDate => {
                action('onChange');
                setDate(newDate);
              }}
              locale={locale}
            >
              <Input isCompact={isCompact} />
            </Datepicker>
          </Field>
        </Col>
      </Row>
    </Grid>
  );
};

Default.args = {
  locale: 'en-US',
  isCompact: false
};

Default.argTypes = {
  locale: {
    name: 'Locale (BCP-47)',
    control: {
      type: 'select',
      options: ['ar-SA', 'en-US', 'en-GB', 'es', 'ja', 'zh-CH']
    }
  },
  isCompact: {
    name: 'Compact'
  },
  minDate: {
    name: 'Min date',
    control: 'date'
  },
  maxDate: {
    name: 'Max date',
    control: 'date'
  }
};

Default.parameters = {
  docs: {
    description: {
      component: `
The \`<Datepicker>\` takes a native \`Date()\` object as its input. It is able to
accept several varieties of user input to parse it's date. By default it
allows the standard \`Date.parse()\` formats, including:

- \`09/04/1986\`
- \`Sep 4, 1986\`
- \`September 4th, 1986\`

These values are localized and will change their format based on the provided locale.
This logic may be customized with the \`customParseDate\` prop to allow more advanced
date parsing with [momentjs](https://momentjs.com/) or [date-fns](https://date-fns.org/).
      `
    }
  }
};
