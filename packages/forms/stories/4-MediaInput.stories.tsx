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
  MediaInput,
  Message,
  IMediaInputProps
} from '@zendeskgarden/react-forms';
import SearchIcon from '@zendeskgarden/svg-icons/src/16/search-stroke.svg';

import { IInputStoryProps, INPUT_ARGS, INPUT_ARG_TYPES } from './story-types';

export default {
  title: 'Components/Forms/MediaInput',
  component: MediaInput,
  subcomponents: { Field, Label, Hint, Message, MediaInput }
} as Meta;

export const Default: Story<IInputStoryProps & IMediaInputProps> = ({
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
  type
}) => {
  return (
    <Grid>
      <Row style={{ minHeight: 450 }}>
        <Col lg={4} offsetLg={4} md={6} offsetMd={3}>
          <Field>
            <Label hidden={isHidden} isRegular={isRegular}>
              Media input
            </Label>
            {showHint && <Hint>Hint</Hint>}
            <MediaInput
              readOnly={readOnly}
              disabled={disabled}
              placeholder={placeholder}
              isCompact={isCompact}
              isBare={isBare}
              focusInset={focusInset}
              validation={validation}
              type={type}
              start={<SearchIcon />}
              end={<SearchIcon />}
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
  type: 'text'
};

Default.argTypes = {
  ...INPUT_ARG_TYPES,
  start: {
    table: {
      disable: true
    }
  },
  end: {
    table: {
      disable: true
    }
  },
  wrapperProps: {
    table: {
      disable: true
    }
  }
};
