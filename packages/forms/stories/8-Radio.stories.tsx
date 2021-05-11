/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { InputHTMLAttributes } from 'react';
import { Meta, Story } from '@storybook/react';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';
import { Field, Label, Hint, Radio, Message } from '@zendeskgarden/react-forms';

import { ICheckboxStoryProps, CHECKBOX_ARGS, CHECKBOX_ARGS_TYPES } from './story-types';

export default {
  title: 'Components/Forms/Radio',
  component: Radio,
  subcomponents: { Field, Label, Hint, Message, Radio }
} as Meta;

export const Default: Story<ICheckboxStoryProps & InputHTMLAttributes<HTMLInputElement>> = ({
  disabled,
  validation,
  isRegular,
  isHidden,
  isCompact,
  showHint,
  showMessage
}) => {
  return (
    <Grid>
      <Row style={{ minHeight: 450 }}>
        <Col lg={4} offsetLg={4} md={6} offsetMd={3}>
          <Field>
            <Radio disabled={disabled} isCompact={isCompact}>
              <Label hidden={isHidden} isRegular={isRegular}>
                Radio
              </Label>
              {showHint && <Hint>Hint</Hint>}
              {showMessage && <Message validation={validation}>Message</Message>}
            </Radio>
          </Field>
        </Col>
      </Row>
    </Grid>
  );
};

Default.args = {
  ...CHECKBOX_ARGS
};

Default.argTypes = {
  ...CHECKBOX_ARGS_TYPES,
  indeterminate: {
    table: {
      disable: true
    }
  }
};
