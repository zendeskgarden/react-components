/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { IMessageProps, Field } from '@zendeskgarden/react-forms';

export const fieldSubcomponents = {
  Field,
  'Field.Label': Field.Label,
  'Field.Hint': Field.Hint,
  'Field.Message': Field.Message
};

export const labelArgTypes = {
  label: { name: 'children', table: { category: 'Field.Label' } },
  isLabelRegular: { name: 'isRegular', table: { category: 'Field.Label' } },
  isLabelHidden: { name: 'hidden', table: { category: 'Field.Label' } }
};

export const hintArgTypes = {
  hasHint: { name: 'Field.Hint', table: { category: 'Story' } },
  hint: { name: 'children', table: { category: 'Field.Hint' } }
};

export const messageArgTypes = {
  hasMessage: { name: 'Field.Message', table: { category: 'Story' } },
  message: { name: 'children', table: { category: 'Field.Message' } },
  validationLabel: {
    control: 'text' as const,
    table: { category: 'Field.Message' }
  },
  validation: {
    options: ['success', 'warning', 'error'],
    control: 'radio' as const,
    table: { category: 'Field.Message' }
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
    <Field.Label hidden={isLabelHidden} isRegular={isLabelRegular}>
      {label}
    </Field.Label>
  );

export interface IHintArgs {
  hasHint?: boolean;
  hint?: string;
}

export const renderHint = ({ hasHint, hint }: IHintArgs) =>
  hasHint && <Field.Hint>{hint}</Field.Hint>;

export interface IMessageArgs {
  hasMessage?: boolean;
  message?: string;
  validation?: IMessageProps['validation'];
  validationLabel?: IMessageProps['validationLabel'];
}

export const renderMessage = ({ hasMessage, validation, validationLabel, message }: IMessageArgs) =>
  hasMessage && (
    <Field.Message validation={validation} validationLabel={validationLabel}>
      {message}
    </Field.Message>
  );
