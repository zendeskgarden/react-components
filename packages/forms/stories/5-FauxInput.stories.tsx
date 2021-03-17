/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';
import {
  Field,
  Label,
  Hint,
  FauxInput,
  Message,
  IFauxInputProps
} from '@zendeskgarden/react-forms';

import { IInputStoryProps, INPUT_ARGS, INPUT_ARG_TYPES } from './story-types';

export default {
  title: 'Components/Forms/FauxInput',
  component: FauxInput,
  subcomponents: { Field, Label, Hint, Message, FauxInput }
} as Meta;

export const Default: Story<IInputStoryProps & IFauxInputProps> = ({
  isRegular,
  isHidden,
  showHint,
  readOnly,
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
            <Label hidden={isHidden} isRegular={isRegular}>
              Faux input
            </Label>
            {showHint && <Hint>Hint</Hint>}
            <FauxInput
              readOnly={readOnly}
              disabled={disabled}
              isCompact={isCompact}
              isBare={isBare}
              focusInset={focusInset}
              validation={validation}
            />
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
  readOnly: false,
  disabled: false
};

Default.argTypes = {
  ...INPUT_ARG_TYPES
};
