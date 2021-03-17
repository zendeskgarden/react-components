/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';
import {
  Field,
  Label,
  Hint,
  MultiThumbRange,
  Message,
  IMultiThumbRangeProps
} from '@zendeskgarden/react-forms';

import { IRangeStoryProps, RANGE_ARGS, RANGE_ARG_TYPES } from './story-types';

export default {
  title: 'Components/Forms/MultiThumbRange',
  component: MultiThumbRange,
  subcomponents: { Field, Label, Hint, Message, MultiThumbRange }
} as Meta;

export const Default: Story<IRangeStoryProps & IMultiThumbRangeProps> = ({
  disabled,
  isRegular,
  isHidden,
  validation,
  showHint,
  showMessage,
  step
}) => {
  const [min, setMin] = useState<number | undefined>(0);
  const [max, setMax] = useState<number | undefined>(100);

  return (
    <Grid>
      <Row style={{ minHeight: 450 }}>
        <Col lg={4} offsetLg={4} md={6} offsetMd={3}>
          <Field>
            <Label hidden={isHidden} isRegular={isRegular}>
              Multi-thumb range
            </Label>
            {showHint && <Hint>Hint</Hint>}
            <MultiThumbRange
              disabled={disabled}
              minValue={min}
              maxValue={max}
              step={step}
              onChange={({ minValue, maxValue }) => {
                setMin(minValue);
                setMax(maxValue);
              }}
            />
            {showMessage && <Message validation={validation}>Message</Message>}
          </Field>
        </Col>
      </Row>
    </Grid>
  );
};

Default.args = {
  ...RANGE_ARGS
};

Default.argTypes = {
  ...RANGE_ARG_TYPES
};
