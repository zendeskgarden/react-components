/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story } from '@storybook/react';
import { GlobalAlert, IGlobalAlertProps } from '@zendeskgarden/react-notifications';

interface IArgs extends IGlobalAlertProps {
  anchor?: string;
  isExternal?: boolean;
  button?: string;
  isBasic?: boolean;
  'aria-label'?: string;
  content?: string;
  title?: string;
  isRegular?: boolean;
  hasAnchor?: boolean;
  hasButton?: boolean;
  hasClose?: boolean;
  hasTitle?: boolean;
}

const globalAlertText = {
  success: {
    title: 'Success',
    content: 'Your first tomato has been planted.'
  },
  warning: {
    title: 'Warning',
    content: 'The soil has too much water.'
  },
  error: {
    title: 'Error',
    content: 'There are bugs in the garden.'
  },
  info: {
    title: 'Info',
    content: 'Another day in the garden.'
  }
};

export const GlobalAlertStory: Story<IArgs> = ({
  type,
  anchor,
  isExternal,
  button,
  isBasic,
  'aria-label': ariaLabel,
  content,
  title,
  isRegular,
  hasAnchor = true,
  hasButton = true,
  hasClose = true,
  hasTitle = true
}) => (
  <GlobalAlert type={type}>
    {hasTitle && (
      <GlobalAlert.Title isRegular={isRegular}>
        {title || globalAlertText[type].title}
      </GlobalAlert.Title>
    )}
    <GlobalAlert.Content>{content || globalAlertText[type].content}</GlobalAlert.Content>
    {hasAnchor && (
      <GlobalAlert.Anchor href="#" isExternal={isExternal}>
        {anchor || 'Find out more'}
      </GlobalAlert.Anchor>
    )}
    {hasButton && <GlobalAlert.Button isBasic={isBasic}>{button || 'Primary'}</GlobalAlert.Button>}
    {hasClose && <GlobalAlert.Close aria-label={ariaLabel} />}
  </GlobalAlert>
);
