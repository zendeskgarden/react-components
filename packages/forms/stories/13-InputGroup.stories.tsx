/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { InputHTMLAttributes } from 'react';
import { Meta, Story } from '@storybook/react';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';
import { Button } from '@zendeskgarden/react-buttons';
import {
  Field,
  Label,
  Message,
  InputGroup,
  Input,
  IInputGroupProps
} from '@zendeskgarden/react-forms';

export default {
  title: 'Components/Forms/InputGroup',
  component: InputGroup,
  subcomponents: { Field, Label, Input, Message }
} as Meta;

export const Default: Story<
  IInputGroupProps & InputHTMLAttributes<HTMLInputElement> & { isHidden: boolean }
> = ({ isCompact, isHidden, isNeutral, readOnly, disabled }) => {
  return (
    <Grid>
      <Row>
        <Col lg={8} offsetLg={2}>
          <Field>
            <Label hidden={isHidden}>Input Group</Label>
            <InputGroup isCompact={isCompact}>
              <Button
                focusInset
                disabled={disabled}
                isNeutral={isNeutral}
                size={isCompact ? 'small' : undefined}
              >
                A
              </Button>
              <Button
                focusInset
                disabled={disabled}
                isNeutral={isNeutral}
                size={isCompact ? 'small' : undefined}
              >
                B
              </Button>
              <Input placeholder="Input content" readOnly={readOnly} disabled={disabled} />
              <Button
                focusInset
                disabled={disabled}
                isNeutral={isNeutral}
                size={isCompact ? 'small' : undefined}
              >
                Copy
              </Button>
            </InputGroup>
            <Message>Validation message</Message>
          </Field>
        </Col>
      </Row>
    </Grid>
  );
};

Default.args = {
  isCompact: false,
  isHidden: false,
  readOnly: false,
  disabled: false
};

Default.argTypes = {
  isHidden: {
    name: 'Hidden label'
  },
  isNeutral: {
    control: 'boolean'
  }
};
