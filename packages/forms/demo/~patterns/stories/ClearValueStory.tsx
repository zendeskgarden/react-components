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
import { FieldStory, IFieldArgs } from '../../stories/FieldStory';

interface IArgs extends IInputGroupProps, IFieldArgs {}

export const ClearValueStory: StoryFn<IArgs> = ({
  label,
  isLabelRegular,
  isLabelHidden,
  hasHint,
  hint,
  hasMessage,
  message,
  validationLabel,
  ...args
}) => {
  const [value, setValue] = useState('Seedling');
  const inputRef = useRef<HTMLInputElement>(null);

  const onClearClick = () => {
    setValue('');
    /* the clear button unmounts once value is empty; keep focus on the input rather than
     * letting it fall back to <body> */
    inputRef.current?.focus();
  };

  return (
    <FieldStory
      label={label}
      isLabelRegular={isLabelRegular}
      isLabelHidden={isLabelHidden}
      hasHint={hasHint}
      hint={hint}
      hasMessage={hasMessage}
      message={message}
      validation={args.validation}
      validationLabel={validationLabel}
    >
      <InputGroup {...args} isSeamless>
        <Input ref={inputRef} value={value} onChange={e => setValue(e.target.value)} />
        {value.length > 0 && (
          <IconButton aria-label={`Clear ${label}`} isBasic onClick={onClearClick}>
            <ClearIcon />
          </IconButton>
        )}
      </InputGroup>
    </FieldStory>
  );
};
