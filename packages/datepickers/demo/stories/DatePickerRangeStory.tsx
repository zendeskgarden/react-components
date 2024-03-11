/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story } from '@storybook/react';
import { Col, Grid, Row } from '@zendeskgarden/react-grid';
import { Field, Input } from '@zendeskgarden/react-forms';
import { DatePickerRange, IDatePickerRangeProps } from '@zendeskgarden/react-datepickers';
import { DATE_STYLE } from './types';

interface IArgs extends IDatePickerRangeProps {
  dateStyle: DATE_STYLE;
}

export const DatePickerRangeStory: Story<IArgs> = ({ dateStyle, isCompact, ...args }) => {
  const formatDate = (date: Date) =>
    new Intl.DateTimeFormat(args.locale, { dateStyle }).format(date);

  return (
    <DatePickerRange {...args} formatDate={formatDate} isCompact={isCompact}>
      <Grid>
        <Row>
          <Col size="auto">
            <Field>
              <Field.Label hidden>{(DatePickerRange.Start as any).displayName}</Field.Label>
              <DatePickerRange.Start>
                <Input isCompact={isCompact} style={{ width: isCompact ? 224 : 280 }} />
              </DatePickerRange.Start>
            </Field>
          </Col>
          <Col size="auto">
            <Field>
              <Field.Label hidden>{(DatePickerRange.End as any).displayName}</Field.Label>
              <DatePickerRange.End>
                <Input isCompact={isCompact} style={{ width: isCompact ? 224 : 280 }} />
              </DatePickerRange.End>
            </Field>
          </Col>
        </Row>
        <Row>
          <Col>
            <DatePickerRange.Calendar />
          </Col>
        </Row>
      </Grid>
    </DatePickerRange>
  );
};
