/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Button } from '@zendeskgarden/react-buttons';
import { Dropdown, Trigger, Menu, Item } from '@zendeskgarden/react-dropdowns';
import { XXL } from '@zendeskgarden/react-typography';

import Layout from '../components/layout';

const IndexPage = () => (
  <Layout title="Home Page">
    <XXL tag="h2">Home Page</XXL>
    <Dropdown onSelect={value => alert(value)}>
      <Trigger>
        <Button>Example Menu</Button>
      </Trigger>
      <Menu>
        <Item value="item-1">1 - Item</Item>
        <Item value="item-2">2 - Item</Item>
        <Item value="item-3">3 - Item</Item>
      </Menu>
    </Dropdown>
  </Layout>
);

export default IndexPage;
