/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import EndIcon from 'svg-icons-legacy/src/16/location-stroke.svg';
import StartIcon from 'svg-icons-legacy/src/16/search-stroke.svg';

import { IMediaInputProps, MediaInput } from '../../../src/index';
import { FieldStory, IFieldArgs } from './FieldStory';

interface IArgs extends IMediaInputProps, IFieldArgs {}

export const MediaInputStory = ({
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
}: IArgs) => (
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
    <MediaInput
      {...args}
      start={start ? <StartIcon /> : undefined}
      end={end ? <EndIcon /> : undefined}
    />
  </FieldStory>
);
