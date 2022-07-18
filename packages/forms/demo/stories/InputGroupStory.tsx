/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story } from '@storybook/react';
import { IInputGroupProps, Input, InputGroup } from '@zendeskgarden/react-forms';
import { FieldStory, IFieldArgs } from './FieldStory';
import { IInputGroupItem } from './types';
import { Button } from '@zendeskgarden/react-buttons';

interface IArgs extends IInputGroupProps, IFieldArgs {
  items: IInputGroupItem[];
  disabled?: boolean;
  isNeutral: boolean;
  isPrimary?: boolean;
  isDanger?: boolean;
  readOnly?: boolean;
}

export const InputGroupStory: Story<IArgs> = ({
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
  readOnly,
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
          <Button
            key={index}
            focusInset
            disabled={disabled}
            isNeutral={isNeutral}
            isPrimary={isPrimary}
            isDanger={isDanger}
            size={args.isCompact ? 'small' : undefined}
          >
            {item.text}
          </Button>
        ) : (
          <Input
            key={index}
            placeholder={item.text}
            readOnly={readOnly}
            disabled={disabled}
            isCompact={args.isCompact}
          />
        )
      )}
    </InputGroup>
  </FieldStory>
);
