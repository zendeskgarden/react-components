/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useRef, useState } from 'react';
import { StoryFn } from '@storybook/react-vite';
import { IInputGroupProps, Input, InputGroup } from '@zendeskgarden/react-forms';
import { IconButton } from '@zendeskgarden/react-buttons';
import ClearIcon from '@zendeskgarden/svg-icons/src/16/x-stroke.svg';
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
  const label = 'Date';
  const [value, setValue] = useState('03/05/2024');
  const [isTouched, setIsTouched] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const isRequiredError = isTouched && value.trim().length === 0;
  const validation = isRequiredError ? 'error' : controlValidation;
  const errorMessage = isRequiredError ? 'A date is required.' : message;

  const onClearClick = () => {
    setValue('');
    inputRef.current?.focus();
  };

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
        <InputGroup isSeamless focusInset>
          <Input
            ref={inputRef}
            value={value}
            aria-required="true"
            validation={validation}
            onChange={e => setValue(e.target.value)}
            onBlur={onInputBlur}
          />
          {value.length > 0 && (
            <IconButton aria-label={`Clear value: ${label}`} isBasic onClick={onClearClick}>
              <ClearIcon />
            </IconButton>
          )}
        </InputGroup>
        <IconButton
          aria-label={`Choose date: ${label}`}
          isBasic={false}
          isPill={false}
          isNeutral
          focusInset
        >
          <CalendarIcon />
        </IconButton>
      </InputGroup>
    </FieldStory>
  );
};
