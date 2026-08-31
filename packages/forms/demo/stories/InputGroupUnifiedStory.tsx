/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { PropsWithChildren, useState } from 'react';
import { StoryFn } from '@storybook/react-vite';
import { IInputGroupProps, IInputProps, Input, InputGroup } from '@zendeskgarden/react-forms';
import {
  Button,
  IButtonProps,
  IconButton,
  ToggleButton,
  ToggleIconButton
} from '@zendeskgarden/react-buttons';
import CalendarIcon from '@zendeskgarden/svg-icons/src/16/calendar-stroke.svg';
import ClearIcon from '@zendeskgarden/svg-icons/src/16/x-stroke.svg';
import SearchIcon from '@zendeskgarden/svg-icons/src/16/search-stroke.svg';
import { FieldStory, IFieldArgs } from './FieldStory';

const ICONS = {
  calendar: CalendarIcon,
  clear: ClearIcon,
  search: SearchIcon
};

interface IUnifiedGroupItem {
  text: string;
  isButton: boolean;
  icon?: keyof typeof ICONS;
}

export const UNIFIED_TEXT_ITEMS: IUnifiedGroupItem[] = [
  {
    text: 'Content',
    isButton: false
  },
  {
    text: 'Copy',
    isButton: true
  }
];

export const UNIFIED_ICON_ITEMS: IUnifiedGroupItem[] = [
  {
    text: 'Search',
    isButton: true,
    icon: 'search'
  },
  {
    text: 'Content',
    isButton: false
  },
  {
    text: 'Clear',
    isButton: true,
    icon: 'clear'
  }
];

interface IGroupButtonProps extends PropsWithChildren {
  disabled?: boolean;
  isNeutral: boolean;
  isPrimary?: boolean;
  isDanger?: boolean;
  isToggle?: boolean;
  isUnified?: boolean;
  icon?: keyof typeof ICONS;
  size?: IButtonProps['size'];
  'aria-label'?: string;
}

const GroupButton = ({ isToggle, isUnified, icon, children, ...props }: IGroupButtonProps) => {
  const [isPressed, setIsPressed] = useState(false);
  /* the non-unified variant's overlapping borders need an inset ring to avoid clipping */
  const focusInset = !isUnified;
  const Icon = icon ? ICONS[icon] : undefined;
  const toggleProps = {
    isPressed,
    onClick: () => setIsPressed(!isPressed)
  };

  /* icon buttons stay basic; the unified container draws the border, and its CSS sizes the button */
  if (Icon) {
    return isToggle ? (
      <ToggleIconButton focusInset={focusInset} {...props} {...toggleProps}>
        <Icon aria-hidden="true" />
      </ToggleIconButton>
    ) : (
      <IconButton focusInset={focusInset} {...props}>
        <Icon aria-hidden="true" />
      </IconButton>
    );
  }

  return isToggle ? (
    <ToggleButton focusInset={focusInset} {...props} {...toggleProps}>
      {children}
    </ToggleButton>
  ) : (
    <Button focusInset={focusInset} {...props}>
      {children}
    </Button>
  );
};

interface IArgs extends IInputGroupProps, IFieldArgs {
  items: IUnifiedGroupItem[];
  disabled?: boolean;
  isNeutral: boolean;
  isPrimary?: boolean;
  isDanger?: boolean;
  isToggle?: boolean;
  readOnly?: boolean;
  inputValidation?: IInputProps['validation'];
}

export const InputGroupUnifiedStory: StoryFn<IArgs> = ({
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
            isUnified={args.isUnified}
            icon={item.icon}
            aria-label={item.icon ? item.text : undefined}
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
