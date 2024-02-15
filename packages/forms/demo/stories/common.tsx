/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Label, Hint, Message, IMessageProps } from '@zendeskgarden/react-forms';

export const labelArgTypes = {
  label: { name: 'children', table: { category: 'Label' } },
  isLabelRegular: { name: 'isRegular', table: { category: 'Label' } },
  isLabelHidden: { name: 'hidden', table: { category: 'Label' } }
};

export const hintArgTypes = {
  hasHint: { name: 'Hint', table: { category: 'Story' } },
  hint: { name: 'children', table: { category: 'Hint' } }
};

export const messageArgTypes = {
  hasMessage: { name: 'Message', table: { category: 'Story' } },
  message: { name: 'children', table: { category: 'Message' } },
  validationLabel: {
    control: { type: 'text' },
    table: { category: 'Message' }
  },
  validation: {
    options: ['success', 'warning', 'error'],
    control: { type: 'radio' },
    table: { category: 'Message' }
  }
};

export const commonArgTypes = {
  ...labelArgTypes,
  ...hintArgTypes,
  ...messageArgTypes
};

export const labelArgs = {
  label: 'Label',
  isLabelRegular: false,
  isLabelHidden: false
};

export const hintArgs = {
  hasHint: true,
  hint: 'Hint'
};

export const messageArgs = {
  hasMessage: true,
  message: 'Message'
};

export const commonArgs = {
  ...labelArgs,
  ...hintArgs,
  ...messageArgs
};

export interface ICommonArgs extends ILabelArgs, IHintArgs, IMessageArgs {}

export interface ILabelArgs {
  hasLabel?: boolean;
  label?: string;
  isLabelRegular?: boolean;
  isLabelHidden?: boolean;
}

export const renderLabel = ({ hasLabel, isLabelHidden, isLabelRegular, label }: ILabelArgs) =>
  hasLabel && (
    <Label hidden={isLabelHidden} isRegular={isLabelRegular}>
      {label}
    </Label>
  );

export interface IHintArgs {
  hasHint?: boolean;
  hint?: string;
}

export const renderHint = ({ hasHint, hint }: IHintArgs) => hasHint && <Hint>{hint}</Hint>;

export interface IMessageArgs {
  hasMessage?: boolean;
  message?: string;
  validation?: IMessageProps['validation'];
  validationLabel?: IMessageProps['validationLabel'];
}

export const renderMessage = ({ hasMessage, validation, validationLabel, message }: IMessageArgs) =>
  hasMessage && (
    <Message validation={validation} validationLabel={validationLabel}>
      {message}
    </Message>
  );
