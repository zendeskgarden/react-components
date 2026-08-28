/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { StoryFn } from '@storybook/react-vite';
import { ClearableInput, IInputGroupProps, InputGroup } from '@zendeskgarden/react-forms';
import { IconButton } from '@zendeskgarden/react-buttons';
import CalendarIcon from '@zendeskgarden/svg-icons/src/16/calendar-stroke.svg';
import { FieldStory, IFieldArgs } from '../../stories/FieldStory';

interface IArgs extends IInputGroupProps, IFieldArgs {}

export const DateFieldStory: StoryFn<IArgs> = ({
  isLabelRegular,
  isLabelHidden,
  hasHint,
  hint,
  hasMessage,
  message,
  validation: controlValidation,
  validationLabel,
  ...args
}) => {
  const label = 'Expiration date';
  const [value, setValue] = useState('03/05/2024');
  const [isTouched, setIsTouched] = useState(false);

  const isRequiredError = isTouched && value.trim().length === 0;
  const validation = isRequiredError ? 'error' : controlValidation;
  const errorMessage = isRequiredError ? 'A date is required.' : message;

  const onInputBlur = () => setIsTouched(true);

  return (
    <FieldStory
      label={`${label}*`}
      isLabelRegular={isLabelRegular}
      isLabelHidden={isLabelHidden}
      hasHint={hasHint}
      hint={hint}
      hasMessage={hasMessage || isRequiredError}
      message={errorMessage}
      validation={validation}
      validationLabel={validationLabel}
    >
      <InputGroup {...args}>
        <ClearableInput
          value={value}
          aria-required="true"
          isCompact={args.isCompact}
          validation={validation}
          onChange={e => setValue(e.target.value)}
          onBlur={onInputBlur}
          clearButtonLabel={`Clear: ${label}`}
          wrapperProps={{ focusInset: true }}
        />
        <IconButton
          aria-label={`Choose date: ${label}`}
          isBasic={false}
          isPill={false}
          isNeutral
          focusInset
          size={args.isCompact ? 'small' : undefined}
        >
          <CalendarIcon />
        </IconButton>
      </InputGroup>
    </FieldStory>
  );
};
