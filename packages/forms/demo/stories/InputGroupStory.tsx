/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { StoryFn } from '@storybook/react-vite';
import { Button, IButtonProps, ToggleButton } from '@zendeskgarden/react-buttons';
import { IInputGroupProps, IInputProps, Input, InputGroup } from '@zendeskgarden/react-forms';
import React, { PropsWithChildren, useState } from 'react';

import { FieldStory, IFieldArgs } from './FieldStory';
import { IInputGroupItem } from './types';

interface IGroupButtonProps extends PropsWithChildren {
  disabled?: boolean;
  isNeutral: boolean;
  isPrimary?: boolean;
  isDanger?: boolean;
  isToggle?: boolean;
  size?: IButtonProps['size'];
}

const GroupButton = ({ isToggle, ...props }: IGroupButtonProps) => {
  const [isPressed, setIsPressed] = useState(false);

  return isToggle ? (
    <ToggleButton
      focusInset
      {...props}
      isPressed={isPressed}
      onClick={() => setIsPressed(!isPressed)}
    />
  ) : (
    <Button focusInset {...props} />
  );
};

interface IArgs extends IInputGroupProps, IFieldArgs {
  items: IInputGroupItem[];
  disabled?: boolean;
  isNeutral: boolean;
  isPrimary?: boolean;
  isDanger?: boolean;
  isToggle?: boolean;
  readOnly?: boolean;
  inputValidation?: IInputProps['validation'];
}

export const InputGroupStory: StoryFn<IArgs> = ({
  label,
  isLabelRegular,
  isLabelHidden,
  hasHint,
  hint,
  hasMessage,
  message,
  validationLabel,
  items,
  disabled,
  isNeutral,
  isPrimary,
  isDanger,
  isToggle,
  readOnly,
  inputValidation,
  ...args
}) => (
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
    <InputGroup {...args}>
      {items.map((item, index) =>
        item.isButton ? (
          <GroupButton
            key={index}
            disabled={disabled}
            isNeutral={isNeutral}
            isPrimary={isPrimary}
            isDanger={isDanger}
            isToggle={isToggle}
            size={args.isCompact ? 'small' : undefined}
          >
            {item.text}
          </GroupButton>
        ) : (
          <Input
            key={index}
            placeholder={item.text}
            readOnly={readOnly}
            disabled={disabled}
            isCompact={args.isCompact}
            validation={inputValidation}
          />
        )
      )}
    </InputGroup>
  </FieldStory>
);
