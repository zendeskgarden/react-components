/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { InputHTMLAttributes } from 'react';
import { Meta, Story } from '@storybook/react';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';
import { Field, Label, Hint, Radio, Message, Fieldset } from '@zendeskgarden/react-forms';

import { IFieldsetStoryProps, FIELDSET_ARGS, FIELDSET_ARGS_TYPES } from './story-types';

export default {
  title: 'Components/Forms/Fieldset',
  component: Fieldset,
  subcomponents: {
    Fieldset,
    'Fieldset.Legend': Fieldset.Legend
  }
} as Meta;

export const Default: Story<IFieldsetStoryProps & InputHTMLAttributes<HTMLInputElement>> = ({
  disabled,
  validation,
  isCompact,
  isHidden,
  showHint,
  showMessage
}) => {
  return (
    <Grid>
      <Row>
        <Col lg={4} offsetLg={4} md={6} offsetMd={3}>
          <Fieldset isCompact={isCompact} disabled={disabled}>
            <Fieldset.Legend isHidden={isHidden}>Choose a growth type</Fieldset.Legend>
            <Field>
              <Radio value="annual" name="example">
                <Label>Annual</Label>
                {showHint && <Hint>Hint</Hint>}
              </Radio>
            </Field>
            <Field>
              <Radio value="perennial" name="example">
                <Label>Perennial</Label>
                {showHint && <Hint>Hint</Hint>}
                {showMessage && <Message validation={validation}>Message</Message>}
              </Radio>
            </Field>
          </Fieldset>
        </Col>
      </Row>
    </Grid>
  );
};

Default.args = {
  ...FIELDSET_ARGS
};

Default.argTypes = {
  ...FIELDSET_ARGS_TYPES
};
