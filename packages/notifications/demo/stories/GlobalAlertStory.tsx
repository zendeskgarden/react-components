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
import { Anchor } from '@zendeskgarden/react-buttons';

interface IArgs extends IGlobalAlertProps {
  anchor?: string;
  isExternal?: boolean;
  ariaLabel?: string;
  content?: string;
  title?: string;
  isRegular?: boolean;
  hasClose?: boolean;
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
  buttons = [],
  hasClose
}) => (
  <GlobalAlert type={type}>
    {title && <GlobalAlert.Title isRegular={isRegular}>{title}</GlobalAlert.Title>}
    <GlobalAlert.Content>
      {content}
      {anchor && (
        <>
          {' '}
          <Anchor href="#" isExternal={isExternal}>
            {anchor}
          </Anchor>
        </>
      )}
    </GlobalAlert.Content>
    {buttons && buttons.map((props, index) => <GlobalAlert.Button key={index} {...props} />)}
    {hasClose && <GlobalAlert.Close aria-label={ariaLabel} />}
  </GlobalAlert>
);
