/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { MouseEventHandler } from 'react';
import { Story } from '@storybook/react';
import Icon from '@zendeskgarden/svg-icons/src/16/lightning-bolt-stroke.svg';
import { IModalProps, Modal } from '@zendeskgarden/react-modals';
import { Button } from '@zendeskgarden/react-buttons';
import { IFooterItem } from './types';

interface IArgs extends IModalProps {
  isVisible: boolean;
  onClick: MouseEventHandler<HTMLElement>;
  hasBody: boolean;
  body: string;
  hasClose: boolean;
  hasFooter: boolean;
  footerItems: IFooterItem[];
  hasHeader: boolean;
  isDanger: boolean;
  tag: string;
  header: string;
  closeAriaLabel: string;
  dialogAriaLabel: string;
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
  tag,
  closeAriaLabel,
  dialogAriaLabel,
  ...args
}) => {
  // Using `aria-label={undefined}` when `hasHeader` is `true` appears to
  // void the fallback value in Storybook, resulting in no rendered attribute.
  const ariaProp: Record<string, any> = hasHeader
    ? {}
    : {
        'aria-label': dialogAriaLabel
      };

  return (
    <>
      <Button size={args.isLarge ? 'large' : undefined} isDanger={isDanger} onClick={onClick}>
        Open
        <Button.EndIcon>
          <Icon />
        </Button.EndIcon>
      </Button>
      {isVisible ? (
        <Modal {...args} onClose={onClose} {...ariaProp}>
          {hasHeader ? (
            <Modal.Header isDanger={isDanger} tag={tag}>
              {header}
            </Modal.Header>
          ) : null}
          {hasBody ? <Modal.Body>{body}</Modal.Body> : body}
          {hasFooter ? (
            <Modal.Footer>
              {footerItems.map(({ text, type }, index) => (
                <Modal.FooterItem key={index}>
                  <Button
                    isBasic={type === 'basic'}
                    isPrimary={type === 'primary'}
                    isDanger={isDanger ? type === 'primary' : undefined}
                    onClick={onClose}
                  >
                    {text}
                  </Button>
                </Modal.FooterItem>
              ))}
            </Modal.Footer>
          ) : null}
          {hasClose ? <Modal.Close aria-label={closeAriaLabel} /> : null}
        </Modal>
      ) : null}
    </>
  );
};
