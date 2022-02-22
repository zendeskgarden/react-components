/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story } from '@storybook/react';
import { Col, Grid, Row } from '@zendeskgarden/react-grid';
import { Field, Input, Label } from '@zendeskgarden/react-forms';
import { DatepickerRange, IDatepickerRangeProps } from '@zendeskgarden/react-datepickers';
import { DATE_STYLE } from './types';

interface IArgs extends IDatepickerRangeProps {
  dateStyle: DATE_STYLE;
}

export const DatepickerRangeStory: Story<IArgs> = ({ dateStyle, isCompact, ...args }) => {
  const formatDate = (date: Date) =>
    new Intl.DateTimeFormat(args.locale, { dateStyle }).format(date);

  return (
    <DatepickerRange {...args} formatDate={formatDate} isCompact={isCompact}>
      <Grid>
        <Row>
          <Col size="auto">
            <Field>
              <Label hidden>{(DatepickerRange.Start as any).displayName}</Label>
              <DatepickerRange.Start>
                <Input isCompact={isCompact} style={{ width: isCompact ? 224 : 280 }} />
              </DatepickerRange.Start>
            </Field>
          </Col>
          <Col size="auto">
            <Field>
              <Label hidden>{(DatepickerRange.End as any).displayName}</Label>
              <DatepickerRange.End>
                <Input isCompact={isCompact} style={{ width: isCompact ? 224 : 280 }} />
              </DatepickerRange.End>
            </Field>
          </Col>
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
