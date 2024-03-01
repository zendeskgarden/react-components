/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { Main as ChromeMain } from '@zendeskgarden/react-chrome';
import { Button } from '@zendeskgarden/react-buttons';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { Modal } from './Modal';
import { Table } from './Table';

export const Main = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <ChromeMain style={{ padding: DEFAULT_THEME.space.md, width: '100vw' }}>
      <Button onClick={() => setIsModalVisible(true)}>Sign in</Button>
      {isModalVisible && <Modal onClose={() => setIsModalVisible(false)} />}
      <Table style={{ marginTop: DEFAULT_THEME.space.lg, minWidth: 500 }} />
    </ChromeMain>
  );
};
