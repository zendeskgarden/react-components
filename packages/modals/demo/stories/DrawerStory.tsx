/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { MouseEventHandler } from 'react';
import { Story } from '@storybook/react';
import { useTheme } from 'styled-components';
import Icon from '@zendeskgarden/svg-icons/src/16/arrow-left-stroke.svg';
import { Drawer, IDrawerProps } from '@zendeskgarden/react-modals';
import { Button } from '@zendeskgarden/react-buttons';
import { IFooterItem } from './types';

interface IArgs extends IDrawerProps {
  onClick: MouseEventHandler<HTMLElement>;
  hasBody: boolean;
  body: string;
  hasClose: boolean;
  hasFooter: boolean;
  footerItems: IFooterItem[];
  hasHeader: boolean;
  header: string;
  tag: string;
  dialogAriaLabel: string;
  closeAriaLabel: string;
}

export const DrawerStory: Story<IArgs> = ({
  onClick,
  onClose,
  hasBody,
  body,
  hasClose,
  hasFooter,
  footerItems,
  hasHeader,
  header,
  tag,
  dialogAriaLabel,
  closeAriaLabel,
  ...args
}) => {
  const theme = useTheme();

  // Using `aria-label={undefined}` when `hasHeader` is `true` appears to
  // void the fallback value in Storybook, resulting in no rendered attribute
  const ariaProp: Record<string, any> = hasHeader
    ? {}
    : {
        'aria-label': dialogAriaLabel
      };

  return (
    <>
      <Button onClick={onClick}>
        Open
        <Button.EndIcon isRotated={theme.rtl}>
          <Icon />
        </Button.EndIcon>
      </Button>
      <Drawer {...args} onClose={onClose} {...ariaProp}>
        {hasHeader && <Drawer.Header tag={tag}>{header}</Drawer.Header>}
        {hasBody ? <Drawer.Body>{body}</Drawer.Body> : body}
        {hasFooter && (
          <Drawer.Footer>
            {footerItems.map(({ text, type }, index) => (
              <Drawer.FooterItem key={index}>
                <Button isBasic={type === 'basic'} isPrimary={type === 'primary'} onClick={onClose}>
                  {text}
                </Button>
              </Drawer.FooterItem>
            ))}
          </Drawer.Footer>
        )}
        {hasClose && <Drawer.Close aria-label={closeAriaLabel} />}
      </Drawer>
    </>
  );
};
