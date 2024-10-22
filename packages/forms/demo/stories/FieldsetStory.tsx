/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { StoryFn } from '@storybook/react';
import {
  Checkbox,
  Fieldset,
  Field,
  IFieldsetProps,
  Radio,
  Toggle
} from '@zendeskgarden/react-forms';
import { FieldStory, IFieldArgs } from './FieldStory';

interface IArgs extends IFieldsetProps, IFieldArgs {
  legend: string;
  isLegendHidden: boolean;
  fields: string[];
  type: 'radio' | 'checkbox' | 'toggle';
}

export const FieldsetStory: StoryFn<IArgs> = ({
  legend,
  isLegendHidden,
  hasHint,
  hint,
  fields,
  type,
  hasMessage,
  message,
  validation,
  validationLabel,
  ...args
}) => (
  <Fieldset {...args}>
    <Fieldset.Legend hidden={isLegendHidden}>{legend}</Fieldset.Legend>
    {hasHint ? <Field.Hint>{hint}</Field.Hint> : null}
    {fields.map((field, index) => (
      <FieldStory
        key={index}
        hasLabel={false}
        hasHint={false}
        hasMessage={hasMessage ? index === fields.length - 1 : null}
        message={message}
        validation={validation}
        validationLabel={validationLabel}
      >
        {
          {
            radio: (
              <Radio name="name" value={index}>
                <Field.Label isRegular>{field}</Field.Label>
              </Radio>
            ),
            checkbox: (
              <Checkbox value={index}>
                <Field.Label isRegular>{field}</Field.Label>
              </Checkbox>
            ),
            toggle: (
              <Toggle value={index}>
                <Field.Label isRegular>{field}</Field.Label>
              </Toggle>
            )
          }[type]
        }
      </FieldStory>
    ))}
  </Fieldset>
);
