/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { StoryFn } from '@storybook/react-vite';
import {
  ClearableInput,
  IClearableInputProps,
  IInputGroupProps,
  InputGroup
} from '@zendeskgarden/react-forms';
import { IconButton } from '@zendeskgarden/react-buttons';
import CalendarIcon from '@zendeskgarden/svg-icons/src/16/calendar-stroke.svg';
import { FieldStory, IFieldArgs } from './FieldStory';

interface IArgs
  extends
    Pick<IInputGroupProps, 'isCompact'>,
    IFieldArgs,
    Pick<
      IClearableInputProps,
      'disabled' | 'readOnly' | 'clearButtonLabel' | 'placeholder' | 'value' | 'onChange'
    > {}

export const InputGroupClearableStory: StoryFn<IArgs> = ({
  label,
  isLabelRegular,
  isLabelHidden,
  hasHint,
  hint,
  hasMessage,
  message,
  validation,
  validationLabel,
  isCompact,
  disabled,
  readOnly,
  clearButtonLabel,
  placeholder,
  value = '',
  onChange
}) => (
  <FieldStory
    label={label}
    isLabelRegular={isLabelRegular}
    isLabelHidden={isLabelHidden}
    hasHint={hasHint}
    hint={hint}
    hasMessage={hasMessage}
    message={message}
    validation={validation}
    validationLabel={validationLabel}
  >
    {/* the outer group supplies layout only; ClearableInput renders the unified inner group itself */}
    <InputGroup isCompact={isCompact}>
      <ClearableInput
        value={value}
        isCompact={isCompact}
        disabled={disabled}
        readOnly={readOnly}
        placeholder={placeholder}
        validation={validation}
        onChange={onChange}
        clearButtonLabel={clearButtonLabel}
        wrapperProps={{ focusInset: true }}
      />
      <IconButton
        aria-label={`Choose date: ${label}`}
        isBasic={false}
        isPill={false}
        isNeutral
        focusInset
        disabled={disabled}
        size={isCompact ? 'small' : undefined}
      >
        <CalendarIcon aria-hidden="true" />
      </IconButton>
    </InputGroup>
  </FieldStory>
);
