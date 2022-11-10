/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story } from '@storybook/react';
import { GlobalAlert, IGlobalAlertProps } from '@zendeskgarden/react-notifications';
import { Anchor } from '@zendeskgarden/react-buttons';

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

export const GlobalAlertStory: Story<IArgs> = ({
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
      {title && <GlobalAlert.Title isRegular={isRegular}>{title}</GlobalAlert.Title>}
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
    {button && <GlobalAlert.Button isBasic={isBasic}>{button}</GlobalAlert.Button>}
    {hasClose && <GlobalAlert.Close aria-label={ariaLabel} />}
  </GlobalAlert>
);
