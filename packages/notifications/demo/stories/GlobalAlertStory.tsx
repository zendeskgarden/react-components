/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story } from '@storybook/react';
import {
  GlobalAlert,
  IGlobalAlertProps,
  IGlobalAlertButtonProps
} from '@zendeskgarden/react-notifications';

interface IArgs extends IGlobalAlertProps {
  anchor?: string;
  isExternal?: boolean;
  ariaLabel?: string;
  content?: string;
  title?: string;
  isRegular?: boolean;
  hasAnchor?: boolean;
  hasButton?: boolean;
  hasClose?: boolean;
  hasContent?: boolean;
  hasTitle?: boolean;
  buttons?: IGlobalAlertButtonProps[];
}

export const GlobalAlertStory: Story<IArgs> = ({
  type,
  anchor,
  isExternal,
  ariaLabel,
  content,
  title,
  isRegular,
  hasAnchor = true,
  hasButton = true,
  hasClose = true,
  hasContent = true,
  hasTitle = true,
  buttons = []
}) => (
  <GlobalAlert type={type}>
    {hasTitle && <GlobalAlert.Title isRegular={isRegular}>{title}</GlobalAlert.Title>}
    {hasContent && (
      <GlobalAlert.Content>
        {content}
        {hasAnchor && (
          <GlobalAlert.Anchor href="#" isExternal={isExternal}>
            {anchor}
          </GlobalAlert.Anchor>
        )}
      </GlobalAlert.Content>
    )}
    {hasButton &&
      buttons?.length &&
      buttons.map((props, index) => <GlobalAlert.Button key={index} {...props} />)}
    {hasClose && <GlobalAlert.Close aria-label={ariaLabel} />}
  </GlobalAlert>
);
