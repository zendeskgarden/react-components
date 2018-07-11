/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { Button } from '@zendeskgarden/react-buttons';
import { Menu, Item } from '@zendeskgarden/react-menus';
import { zdColorGrey600, zdFontSizeAlpha, zdSpacing } from '@zendeskgarden/css-variables';

import Layout from '../components/layout';

const Title = styled.h1`
  margin-bottom: ${zdSpacing};
  color: ${zdColorGrey600};
  font-size: ${zdFontSizeAlpha};
`;

const IndexPage = () => (
  <Layout title="Home Page">
    <Title>Home Page</Title>
    <Menu
      onChange={selectedKey => alert(selectedKey)} // eslint-disable-line no-alert
      trigger={({ ref }) => <Button innerRef={ref}>Example Menu</Button>}
    >
      <Item key="item-1">1 - Item</Item>
      <Item key="item-2">2 - Item</Item>
      <Item key="item-3">3 - Item</Item>
    </Menu>
  </Layout>
);

export default IndexPage;
