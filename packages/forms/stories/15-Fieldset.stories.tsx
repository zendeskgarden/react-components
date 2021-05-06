/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { InputHTMLAttributes } from 'react';
import { Meta, Story } from '@storybook/react';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';
import {
  Field,
  Label,
  Radio,
  Checkbox,
  Toggle,
  Message,
  Fieldset
} from '@zendeskgarden/react-forms';

import { IFieldsetStoryProps, FIELDSET_ARGS, FIELDSET_ARGS_TYPES } from './story-types';

export default {
  title: 'Components/Forms/Fieldset',
  component: Fieldset,
  subcomponents: {
    Fieldset,
    'Fieldset.Legend': Fieldset.Legend
  }
} as Meta;

export const RadioGroup: Story<IFieldsetStoryProps & InputHTMLAttributes<HTMLInputElement>> = ({
  disabled,
  validation,
  isCompact,
  isHidden,
  showMessage
}) => {
  return (
    <Grid>
      <Row>
        <Col lg={4} offsetLg={4} md={6} offsetMd={3}>
          <Fieldset isCompact={isCompact} disabled={disabled}>
            <Fieldset.Legend hidden={isHidden}>Choose a growth type</Fieldset.Legend>
            <Field>
              <Radio value="annual" name="example">
                <Label>Annual</Label>
              </Radio>
            </Field>
            <Field>
              <Radio value="perennial" name="example">
                <Label>Perennial</Label>
                {showMessage && <Message validation={validation}>Message</Message>}
              </Radio>
            </Field>
          </Fieldset>
        </Col>
      </Row>
    </Grid>
  );
};

RadioGroup.args = {
  ...FIELDSET_ARGS
};

RadioGroup.argTypes = {
  ...FIELDSET_ARGS_TYPES
};

export const CheckboxGroup: Story<IFieldsetStoryProps & InputHTMLAttributes<HTMLInputElement>> = ({
  disabled,
  validation,
  isCompact,
  isHidden,
  showMessage
}) => {
  return (
    <Grid>
      <Row>
        <Col lg={4} offsetLg={4} md={6} offsetMd={3}>
          <Fieldset isCompact={isCompact} disabled={disabled}>
            <Fieldset.Legend hidden={isHidden}>Choose growth types</Fieldset.Legend>
            <Field>
              <Checkbox>
                <Label>Annual</Label>
              </Checkbox>
            </Field>
            <Field>
              <Checkbox>
                <Label>Perennial</Label>
                {showMessage && <Message validation={validation}>Message</Message>}
              </Checkbox>
            </Field>
          </Fieldset>
        </Col>
      </Row>
    </Grid>
  );
};

CheckboxGroup.args = {
  ...FIELDSET_ARGS
};

CheckboxGroup.argTypes = {
  ...FIELDSET_ARGS_TYPES
};

export const ToggleGroup: Story<IFieldsetStoryProps & InputHTMLAttributes<HTMLInputElement>> = ({
  disabled,
  validation,
  isCompact,
  isHidden,
  showMessage
}) => {
  return (
    <Grid>
      <Row>
        <Col lg={4} offsetLg={4} md={6} offsetMd={3}>
          <Fieldset isCompact={isCompact} disabled={disabled}>
            <Fieldset.Legend hidden={isHidden}>Toggle growth types</Fieldset.Legend>
            <Field>
              <Toggle>
                <Label>Annual</Label>
              </Toggle>
            </Field>
            <Field>
              <Toggle>
                <Label>Perennial</Label>
                {showMessage && <Message validation={validation}>Message</Message>}
              </Toggle>
            </Field>
          </Fieldset>
        </Col>
      </Row>
    </Grid>
  );
};

ToggleGroup.args = {
  ...FIELDSET_ARGS
};

ToggleGroup.argTypes = {
  ...FIELDSET_ARGS_TYPES
};
