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
import { FieldStory, IFieldArgs } from '../../stories/FieldStory';

interface IArgs
  extends
    Omit<IInputGroupProps, 'onChange'>,
    IFieldArgs,
    Pick<
      IClearableInputProps,
      'disabled' | 'readOnly' | 'clearButtonLabel' | 'placeholder' | 'value' | 'onChange'
    > {}

export const DateFieldStory: StoryFn<IArgs> = ({
  label,
  isLabelRegular,
  isLabelHidden,
  hasHint,
  hint,
  hasMessage,
  message,
  validation,
  validationLabel,
  disabled,
  readOnly,
  clearButtonLabel,
  placeholder,
  value = '',
  onChange,
  ...args
}) => {
  return (
    <FieldStory
      label={`${label}*`}
      isLabelRegular={isLabelRegular}
      isLabelHidden={isLabelHidden}
      hasHint={hasHint}
      hint={hint}
      hasMessage={hasMessage}
      message={message}
      validation={validation}
      validationLabel={validationLabel}
    >
      <InputGroup {...args}>
        <ClearableInput
          value={value}
          aria-required="true"
          isCompact={args.isCompact}
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
          size={args.isCompact ? 'small' : undefined}
        >
          <CalendarIcon aria-hidden="true" />
        </IconButton>
      </InputGroup>
    </FieldStory>
  );
};
