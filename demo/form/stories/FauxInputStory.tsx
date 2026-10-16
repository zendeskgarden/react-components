/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import StartIcon from 'svg-icons-legacy/src/16/leaf-stroke.svg';
import EndIcon from 'svg-icons-legacy/src/16/star-stroke.svg';

import { FauxInput, IFauxInputProps } from '../../../src/index';
import { FieldStory, IFieldArgs } from './FieldStory';

interface IArgs extends IFauxInputProps, IFieldArgs {
  hasStartIcon: boolean;
  hasEndIcon: boolean;
  isStartIconRotated: boolean;
  isEndIconRotated: boolean;
}

export const FauxInputStory = ({
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
}: IArgs) => (
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
      {!!hasStartIcon && (
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
      {!!hasEndIcon && (
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
