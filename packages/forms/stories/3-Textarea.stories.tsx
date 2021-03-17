/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';
import { Field, Label, Hint, Textarea, Message, ITextareaProps } from '@zendeskgarden/react-forms';
import { IInputStoryProps, INPUT_ARGS, INPUT_ARG_TYPES } from './story-types';

export default {
  title: 'Components/Forms/Textarea',
  component: Textarea,
  subcomponents: { Field, Label, Hint, Message, Textarea }
} as Meta;

export const Default: Story<IInputStoryProps & ITextareaProps> = ({
  isRegular,
  isHidden,
  showHint,
  readOnly,
  disabled,
  placeholder,
  showMessage,
  isCompact,
  isBare,
  focusInset,
  validation,
  isResizable,
  minRows,
  maxRows
}) => {
  return (
    <Grid>
      <Row style={{ minHeight: 450 }}>
        <Col lg={4} offsetLg={4} md={6} offsetMd={3}>
          <Field>
            <Label hidden={isHidden} isRegular={isRegular}>
              Textarea
            </Label>
            {showHint && <Hint>Hint</Hint>}
            <Textarea
              readOnly={readOnly}
              disabled={disabled}
              placeholder={placeholder}
              isCompact={isCompact}
              isBare={isBare}
              focusInset={focusInset}
              validation={validation}
              isResizable={isResizable}
              minRows={minRows}
              maxRows={maxRows}
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
  disabled: false,
  placeholder: '',
  isResizable: false,
  minRows: 3
};

Default.argTypes = {
  ...INPUT_ARG_TYPES,
  isResizable: { name: 'Resizable textarea' },
  minRows: { name: 'Min rows' },
  maxRows: { name: 'Max rows' }
};
