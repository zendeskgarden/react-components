/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { DOMAttributes } from 'react';
import { Modal as GardenModal, IModalProps } from '@zendeskgarden/react-modals';
import { Button } from '@zendeskgarden/react-buttons';
import { Fields } from './Fields';

export const Modal = ({ onClose, ...props }: IModalProps) => (
  <GardenModal onClose={onClose} {...props}>
    <form autoComplete="off" onSubmit={onClose as DOMAttributes<HTMLFormElement>['onSubmit']}>
      <GardenModal.Header>Sign in</GardenModal.Header>
      <GardenModal.Body>
        <Fields />
      </GardenModal.Body>
      <GardenModal.Footer>
        <GardenModal.FooterItem>
          <Button isBasic onClick={onClose}>
            Cancel
          </Button>
        </GardenModal.FooterItem>
        <GardenModal.FooterItem>
          <Button isPrimary type="submit">
            Sign in
          </Button>
        </GardenModal.FooterItem>
      </GardenModal.Footer>
    </form>
  </GardenModal>
);
