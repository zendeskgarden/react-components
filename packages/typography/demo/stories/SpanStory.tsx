/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { StoryFn } from '@storybook/react';
import Icon from '@zendeskgarden/svg-icons/src/16/asterisk-stroke.svg';
import StartIcon from '@zendeskgarden/svg-icons/src/16/circle-stroke.svg';
import { ISpanProps, Span } from '@zendeskgarden/react-typography';

interface IArgs extends ISpanProps {
  hasIcon: boolean;
  hasStartIcon: boolean;
}

export const SpanStory: StoryFn<IArgs> = ({ hasIcon, hasStartIcon, ...args }) => (
  <Span {...args}>
    {!!hasStartIcon && (
      <Span.StartIcon>
        <StartIcon />
      </Span.StartIcon>
    )}
    {args.children}
    {!!hasIcon && (
      <>
        {' '}
        <Span.Icon>
          <Icon />
        </Span.Icon>{' '}
        {args.children}
      </>
    )}
  </Span>
);
