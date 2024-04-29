/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story } from '@storybook/react';
import { Col, Grid, Row } from '@zendeskgarden/react-grid';
import { Field, Input, Label, Message } from '@zendeskgarden/react-forms';
import { Datepicker, IDatepickerProps } from '@zendeskgarden/react-datepickers';
import { DATE_STYLE } from './types';

interface IArgs extends IDatepickerProps {
  dateStyle: DATE_STYLE;
  message?: string;
  validation?: 'success' | 'warning' | 'error';
  validationLabel?: string;
}

export const DatepickerStory: Story<IArgs> = ({
  dateStyle,
  isCompact,
  message,
  validation,
  validationLabel,
  ...args
}) => {
  const formatDate = (date: Date) =>
    new Intl.DateTimeFormat(args.locale, { dateStyle }).format(date);

  return (
    <Grid>
      <Row justifyContent="center" style={{ height: 'calc(100vh - 80px)' }}>
        <Col alignSelf="center" xs={12} md={4}>
          <Field>
            <Label hidden>{Datepicker.displayName}</Label>
            <Datepicker {...args} formatDate={formatDate} isCompact={isCompact}>
              <Input isCompact={isCompact} />
            </Datepicker>
            {message && (
              <Message validation={validation} validationLabel={validationLabel}>
                {message}
              </Message>
            )}
          </Field>
        </Col>
      </Row>
    </Grid>
  );
};
