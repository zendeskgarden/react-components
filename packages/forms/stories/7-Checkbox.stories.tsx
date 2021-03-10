/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';
import { Field, Label, Hint, Checkbox, Message, ICheckboxProps } from '@zendeskgarden/react-forms';

import { ICheckboxStoryProps, CHECKBOX_ARGS, CHECKBOX_ARGS_TYPES } from './story-types';

export default {
  title: 'Components/Forms/Checkbox',
  component: Checkbox,
  subcomponents: { Field, Label, Hint, Message, Checkbox }
} as Meta;

export const Default: Story<ICheckboxStoryProps & ICheckboxProps> = ({
  disabled,
  indeterminate,
  validation,
  isRegular,
  isHidden,
  showHint,
  showMessage
}) => {
  return (
    <Grid>
      <Row style={{ minHeight: 450 }}>
        <Col lg={4} offsetLg={4} md={6} offsetMd={3}>
          <Field>
            <Checkbox disabled={disabled} indeterminate={indeterminate}>
              <Label hidden={isHidden} isRegular={isRegular}>
                Checkbox
              </Label>
              {showHint && <Hint>Hint</Hint>}
              {showMessage && <Message validation={validation}>Message</Message>}
            </Checkbox>
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
  ...CHECKBOX_ARGS_TYPES
};
