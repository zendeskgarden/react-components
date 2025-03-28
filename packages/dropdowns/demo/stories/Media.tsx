/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useCallback } from 'react';
import { Grid } from '@zendeskgarden/react-grid';
import { Menu, Item, ItemGroup, Separator, IMenuProps } from '@zendeskgarden/react-dropdowns';
import LeafIcon from '@zendeskgarden/svg-icons/src/16/leaf-stroke.svg';

const Example = () => {
  const handleChange = useCallback<NonNullable<IMenuProps['onChange']>>(changes => {
    // eslint-disable-next-line no-alert
    changes.value && alert(`You chose ${changes.value}`);
  }, []);

  return (
    <Grid.Row justifyContent="center">
      <Grid.Col textAlign="center">
        <Menu button="Menu" onChange={handleChange}>
          <ItemGroup icon={<LeafIcon />} legend="Plants">
            <Item icon={<LeafIcon />} value="cactus">
              Cactus
              <Item.Meta>15 available</Item.Meta>
            </Item>
            <Item icon={<LeafIcon />} value="flower">
              Flower
            </Item>
            <Item value="succulent">Succulent</Item>
          </ItemGroup>
          <Separator />
          <Item type="add" value="add-plant">
            Add plant
          </Item>
        </Menu>
      </Grid.Col>
    </Grid.Row>
  );
};

export default Example;
