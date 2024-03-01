/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { DOMAttributes } from 'react';
import {
  Modal as GardenModal,
  Header,
  Body,
  Footer,
  FooterItem,
  IModalProps
} from '@zendeskgarden/react-modals';
import { Button } from '@zendeskgarden/react-buttons';
import { Fields } from './Fields';

export const Modal = ({ onClose, ...props }: IModalProps) => (
  <GardenModal onClose={onClose} {...props}>
    <form autoComplete="off" onSubmit={onClose as DOMAttributes<HTMLFormElement>['onSubmit']}>
      <Header>Sign in</Header>
      <Body>
        <Fields />
      </Body>
      <Footer>
        <FooterItem>
          <Button isBasic onClick={onClose}>
            Cancel
          </Button>
        </FooterItem>
        <FooterItem>
          <Button isPrimary type="submit">
            Sign in
          </Button>
        </FooterItem>
      </Footer>
    </form>
  </GardenModal>
);
