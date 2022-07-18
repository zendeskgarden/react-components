/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import { Story } from '@storybook/react';
import {
  Checkbox,
  Fieldset,
  Hint,
  IFieldsetProps,
  Label,
  Radio,
  Toggle
} from '@zendeskgarden/react-forms';
import { FieldStory, IFieldArgs } from './FieldStory';

interface IArgs extends IFieldsetProps, IFieldArgs {
  legend: string;
  isLegendHidden: boolean;
  fields: HTMLAttributes<HTMLDivElement>[];
  type: 'radio' | 'checkbox' | 'toggle';
}

export const FieldsetStory: Story<IArgs> = ({
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
    {hasHint && <Hint>{hint}</Hint>}
    {fields.map((field, index) => (
      <FieldStory
        key={index}
        hasLabel={false}
        hasHint={false}
        hasMessage={hasMessage && index === fields.length - 1}
        message={message}
        validation={validation}
        validationLabel={validationLabel}
      >
        {
          {
            radio: (
              <Radio name="name" value={index}>
                <Label isRegular>{field}</Label>
              </Radio>
            ),
            checkbox: (
              <Checkbox value={index}>
                <Label isRegular>{field}</Label>
              </Checkbox>
            ),
            toggle: (
              <Toggle value={index}>
                <Label isRegular>{field}</Label>
              </Toggle>
            )
          }[type]
        }
      </FieldStory>
    ))}
  </Fieldset>
);
