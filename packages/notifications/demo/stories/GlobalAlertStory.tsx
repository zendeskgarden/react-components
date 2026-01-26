/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { StoryFn } from '@storybook/react-vite';
import { Anchor } from '@zendeskgarden/react-buttons';
import { GlobalAlert, IGlobalAlertProps } from '@zendeskgarden/react-notifications';
import React from 'react';

interface IArgs extends IGlobalAlertProps {
  anchor?: string;
  isExternal?: boolean;
  ariaLabel?: string;
  content?: string;
  title?: string;
  isRegular?: boolean;
  hasClose?: boolean;
  button?: string;
  isBasic?: boolean;
}

export const GlobalAlertStory: StoryFn<IArgs> = ({
  type,
  anchor,
  isExternal,
  ariaLabel,
  content,
  title,
  isRegular,
  button,
  isBasic,
  hasClose
}) => (
  <GlobalAlert type={type}>
    <GlobalAlert.Content>
      {!!title && <GlobalAlert.Title isRegular={isRegular}>{title}</GlobalAlert.Title>}
      {content}
      {!!anchor && (
        <>
          {' '}
          <Anchor href="#" isExternal={isExternal}>
            {anchor}
          </Anchor>
        </>
      )}
    </GlobalAlert.Content>
    {!!button && <GlobalAlert.Button isBasic={isBasic}>{button}</GlobalAlert.Button>}
    {!!hasClose && <GlobalAlert.Close aria-label={ariaLabel} />}
  </GlobalAlert>
);
