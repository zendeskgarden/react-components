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
import { DrawerModal, IDrawerModalProps } from '@zendeskgarden/react-modals';
import { Button } from '@zendeskgarden/react-buttons';
import { IFooterItem } from './types';

interface IArgs extends IDrawerModalProps {
  onClick: MouseEventHandler<HTMLElement>;
  hasBody: boolean;
  body: string;
  hasClose: boolean;
  hasFooter: boolean;
  footerItems: IFooterItem[];
  hasHeader: boolean;
  header: string;
  tag: string;
}

export const DrawerModalStory: Story<IArgs> = ({
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
  'aria-label': ariaLabel,
  ...args
}) => {
  const theme = useTheme();

  return (
    <>
      <Button onClick={onClick}>
        Open
        <Button.EndIcon isRotated={theme.rtl}>
          <Icon />
        </Button.EndIcon>
      </Button>
      <DrawerModal {...args} onClose={onClose}>
        {hasHeader && <DrawerModal.Header tag={tag}>{header}</DrawerModal.Header>}
        {hasBody ? <DrawerModal.Body>{body}</DrawerModal.Body> : body}
        {hasFooter && (
          <DrawerModal.Footer>
            {footerItems.map(({ text, type }, index) => (
              <DrawerModal.FooterItem key={index}>
                <Button isBasic={type === 'basic'} isPrimary={type === 'primary'} onClick={onClose}>
                  {text}
                </Button>
              </DrawerModal.FooterItem>
            ))}
          </DrawerModal.Footer>
        )}
        {hasClose && <DrawerModal.Close aria-label={ariaLabel} />}
      </DrawerModal>
    </>
  );
};
