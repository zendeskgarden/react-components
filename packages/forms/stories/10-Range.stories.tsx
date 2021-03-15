/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { InputHTMLAttributes } from 'react';
import { Meta, Story } from '@storybook/react';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';
import { Field, Label, Hint, Range, Message } from '@zendeskgarden/react-forms';

import { IRangeStoryProps, RANGE_ARGS, RANGE_ARG_TYPES } from './story-types';

export default {
  title: 'Components/Forms/Range',
  component: Range,
  subcomponents: { Field, Label, Hint, Message, Range }
} as Meta;

export const Default: Story<IRangeStoryProps & InputHTMLAttributes<HTMLInputElement>> = ({
  disabled,
  validation,
  isRegular,
  isHidden,
  showHint,
  showMessage,
  step
}) => {
  return (
    <Grid>
      <Row style={{ minHeight: 450 }}>
        <Col lg={4} offsetLg={4} md={6} offsetMd={3}>
          <Field>
            <Label hidden={isHidden} isRegular={isRegular}>
              Range
            </Label>
            {showHint && <Hint>Hint</Hint>}
            <Range disabled={disabled} step={step} />
            {showMessage && <Message validation={validation}>Message</Message>}
          </Field>
        </Col>
      </Row>
    </Grid>
  );
};

Default.args = {
  ...RANGE_ARGS,
  isHidden: false,
  isRegular: false
};

Default.argTypes = {
  ...RANGE_ARG_TYPES
};
