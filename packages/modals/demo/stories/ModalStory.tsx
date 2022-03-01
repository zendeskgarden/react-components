/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { EventHandler, MouseEventHandler, KeyboardEvent, MouseEvent } from 'react';
import { Story } from '@storybook/react';
import Icon from '@zendeskgarden/svg-icons/src/16/lightning-bolt-stroke.svg';
import {
  Body,
  Close,
  Footer,
  FooterItem,
  Header,
  IModalProps,
  Modal
} from '@zendeskgarden/react-modals';
import { Button } from '@zendeskgarden/react-buttons';
import { IFooterItem } from './types';

interface IArgs extends IModalProps {
  isVisible: boolean;
  onClick: MouseEventHandler<HTMLElement>;
  onClose: EventHandler<KeyboardEvent | MouseEvent>;
  hasBody: boolean;
  body: string;
  hasClose: boolean;
  hasFooter: boolean;
  footerItems: IFooterItem[];
  hasHeader: boolean;
  isDanger: boolean;
  header: string;
}

export const ModalStory: Story<IArgs> = ({
  onClick,
  onClose,
  isVisible,
  hasBody,
  body,
  hasClose,
  hasFooter,
  footerItems,
  hasHeader,
  header,
  isDanger,
  ...args
}) => (
  <>
    <Button size={args.isLarge ? 'large' : undefined} isDanger={isDanger} onClick={onClick}>
      Open
      <Button.EndIcon>
        <Icon />
      </Button.EndIcon>
    </Button>
    {isVisible && (
      <Modal {...args} onClose={onClose}>
        {hasHeader && <Header isDanger={isDanger}>{header}</Header>}
        {hasBody ? <Body>{body}</Body> : body}
        {hasFooter && (
          <Footer>
            {footerItems.map(({ text, type }, index) => (
              <FooterItem key={index}>
                <Button
                  isBasic={type === 'basic'}
                  isPrimary={type === 'primary'}
                  isDanger={isDanger && type === 'primary'}
                  onClick={onClose}
                >
                  {text}
                </Button>
              </FooterItem>
            ))}
          </Footer>
        )}
        {hasClose && <Close />}
      </Modal>
    )}
  </>
);
