/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';
import { Field, Label, Hint, Select, Message, ISelectProps } from '@zendeskgarden/react-forms';

import { IInputStoryProps, INPUT_ARGS, INPUT_ARG_TYPES } from './story-types';

export default {
  title: 'Components/Forms/Select',
  component: Select,
  subcomponents: { Field, Label, Hint, Message, Select }
} as Meta;

export const Default: Story<IInputStoryProps & ISelectProps> = ({
  isRegular,
  showHint,
  disabled,
  showMessage,
  isCompact,
  isBare,
  focusInset,
  validation
}) => {
  return (
    <Grid>
      <Row style={{ minHeight: 450 }}>
        <Col lg={4} offsetLg={4} md={6} offsetMd={3}>
          <Field>
            <Label isRegular={isRegular}>Input</Label>
            {showHint && <Hint>Hint</Hint>}
            <Select
              disabled={disabled}
              isCompact={isCompact}
              isBare={isBare}
              focusInset={focusInset}
              validation={validation}
            >
              <option>Option one</option>
              <option>Option two</option>
              <option>Option three</option>
              <option>Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi</option>
            </Select>
            {showMessage && <Message validation={validation}>Message</Message>}
          </Field>
        </Col>
      </Row>
    </Grid>
  );
};

Default.args = {
  ...INPUT_ARGS,
  isCompact: false,
  isBare: false,
  focusInset: false,
  disabled: false
};

Default.argTypes = {
  ...INPUT_ARG_TYPES
};
