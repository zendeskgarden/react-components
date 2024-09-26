/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import { Story } from '@storybook/react';
import { Anchor } from '@zendeskgarden/react-buttons';
import { Breadcrumb } from '@zendeskgarden/react-breadcrumbs';
import { BREADCRUMB_CHILDREN } from './data';

interface IArgs extends HTMLAttributes<HTMLElement> {
  children: typeof BREADCRUMB_CHILDREN;
}

export const BreadcrumbStory: Story<IArgs> = ({ children, ...args }) => (
  <Breadcrumb {...args}>
    {children.map((child, index) =>
      index < children.length - 1 ? (
        <Anchor key={index} href="#" isUnderlined={false}>
          {child}
        </Anchor>
      ) : (
        <span key={index}>{child}</span>
      )
    )}
  </Breadcrumb>
);
