/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useCallback } from 'react';
import { Grid } from '@zendeskgarden/react-grid';
import LeafIcon from '@zendeskgarden/svg-icons/src/16/leaf-stroke.svg';
import { Menu, Item, IMenuProps } from '@zendeskgarden/react-dropdowns';

const Example = () => {
  const handleChange = useCallback<NonNullable<IMenuProps['onChange']>>(changes => {
    // eslint-disable-next-line no-alert
    changes.value && alert(`You chose ${changes.value}`);
  }, []);

  return (
    <Grid.Row justifyContent="center">
      <Grid.Col textAlign="center">
        <Menu button="Uproot" onChange={handleChange} buttonProps={{ isDanger: true }}>
          <Item type="danger" value="acacia">
            Acacia
          </Item>
          <Item type="danger" value="daisy">
            Daisy
            <Item.Meta>15 planted</Item.Meta>
          </Item>
          <Item type="danger" value="Honeysuckle">
            Honeysuckle
          </Item>
          <Item type="danger" icon={<LeafIcon />} value="candytuft">
            Candytuft
          </Item>
        </Menu>
      </Grid.Col>
    </Grid.Row>
  );
};

export default Example;
