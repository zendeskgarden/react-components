/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story } from '@storybook/react';
import StartIcon from '@zendeskgarden/svg-icons/src/16/search-stroke.svg';
import EndIcon from '@zendeskgarden/svg-icons/src/16/location-stroke.svg';
import { IMediaInputProps, MediaInput } from '@zendeskgarden/react-forms';
import { FieldStory, IFieldArgs } from './FieldStory';

interface IArgs extends IMediaInputProps, IFieldArgs {}

export const MediaInputStory: Story<IArgs> = ({
  start,
  end,
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
    validationLabel={validationLabel}
    validation={args.validation}
  >
    <MediaInput {...args} start={start && <StartIcon />} end={end && <EndIcon />} />
  </FieldStory>
);
