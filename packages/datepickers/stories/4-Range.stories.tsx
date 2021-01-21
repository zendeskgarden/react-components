/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import { Meta, Story } from '@storybook/react';
import { DatepickerRange } from '@zendeskgarden/react-datepickers';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';
import { Field, Label, Input, Message } from '@zendeskgarden/react-forms';
import { addDays, compareAsc } from 'date-fns';

export default {
  title: 'Components/Datepickers/DatepickerRange',
  subcomponents: {
    DatepickerRange,
    'DatepickerRange.Start': DatepickerRange.Start,
    'DatepickerRange.End': DatepickerRange.End,
    'DatepickerRange.Calendar': DatepickerRange.Calendar
  }
} as Meta;

const StyledCol = styled(Col)<{ isCompact: boolean }>`
  max-width: ${props => (props.isCompact ? '244px' : '300px')};
`;

interface IDefaultStoryProps {
  isCompact: boolean;
  minDate?: Date;
  maxDate?: Date;
}

export const Default: Story<IDefaultStoryProps> = ({ isCompact, minDate, maxDate }) => {
  const [startValue, setStartValue] = useState<Date | undefined>(new Date());
  const [endValue, setEndValue] = useState<Date | undefined>(addDays(new Date(), 16));

  const isInvalid = useMemo(() => {
    if (!startValue || !endValue) {
      return false;
    }

    return compareAsc(startValue, endValue) === 1;
  }, [endValue, startValue]);

  return (
    <DatepickerRange
      startValue={startValue}
      endValue={endValue}
      isCompact={isCompact}
      minValue={minDate}
      maxValue={maxDate}
      onChange={changes => {
        setStartValue(changes.startValue);
        setEndValue(changes.endValue);
      }}
    >
      <Grid style={{ minHeight: 450 }}>
        <Row>
          <StyledCol md isCompact={isCompact}>
            <Field>
              <Label>Start</Label>
              <DatepickerRange.Start>
                <Input isCompact={isCompact} />
              </DatepickerRange.Start>
            </Field>
          </StyledCol>
          <StyledCol md isCompact={isCompact}>
            <Field>
              <Label>End</Label>
              <DatepickerRange.End>
                <Input isCompact={isCompact} validation={isInvalid ? 'error' : undefined} />
              </DatepickerRange.End>
              {isInvalid && (
                <Message validation="error">End date must occur after the Start date</Message>
              )}
            </Field>
          </StyledCol>
        </Row>
        <Row>
          <Col>
            <DatepickerRange.Calendar />
          </Col>
        </Row>
      </Grid>
    </DatepickerRange>
  );
};

Default.args = {
  isCompact: false
};

Default.argTypes = {
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
