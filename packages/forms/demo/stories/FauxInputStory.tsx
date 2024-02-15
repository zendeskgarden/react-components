/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story } from '@storybook/react';
import StartIcon from '@zendeskgarden/svg-icons/src/16/leaf-stroke.svg';
import EndIcon from '@zendeskgarden/svg-icons/src/16/star-stroke.svg';
import { FauxInput, IFauxInputProps } from '@zendeskgarden/react-forms';
import { FieldStory, IFieldArgs } from './FieldStory';

interface IArgs extends IFauxInputProps, IFieldArgs {
  hasStartIcon: boolean;
  hasEndIcon: boolean;
  isStartIconRotated: boolean;
  isEndIconRotated: boolean;
}

export const FauxInputStory: Story<IArgs> = ({
  hasStartIcon,
  hasEndIcon,
  isStartIconRotated,
  isEndIconRotated,
  label,
  isLabelRegular,
  isLabelHidden,
  hasHint,
  hint,
  hasMessage,
  message,
  validationLabel,
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
    <FauxInput {...args}>
      {hasStartIcon && (
        <FauxInput.StartIcon
          isRotated={isStartIconRotated}
          isDisabled={args.disabled}
          isFocused={args.isFocused}
          isHovered={args.isHovered}
        >
          <StartIcon />
        </FauxInput.StartIcon>
      )}
      {args.children}
      {hasEndIcon && (
        <FauxInput.EndIcon
          isRotated={isEndIconRotated}
          isDisabled={args.disabled}
          isFocused={args.isFocused}
          isHovered={args.isHovered}
        >
          <EndIcon />
        </FauxInput.EndIcon>
      )}
    </FauxInput>
  </FieldStory>
);
