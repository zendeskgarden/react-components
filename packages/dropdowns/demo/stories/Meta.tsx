/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useCallback } from 'react';
import { Grid } from '@zendeskgarden/react-grid';
import { Menu, Item, IMenuProps } from '@zendeskgarden/react-dropdowns';

const Example = () => {
  const handleChange = useCallback<NonNullable<IMenuProps['onChange']>>(changes => {
    // eslint-disable-next-line no-alert
    changes.value && alert(`You chose ${changes.value}`);
  }, []);

  return (
    <Grid.Row justifyContent="center">
      <Grid.Col textAlign="center">
        <Menu button="Harvest" onChange={handleChange}>
          <Item value="avocado">
            Avocado <Item.Meta>27 available</Item.Meta>
          </Item>
          <Item value="potato">
            Potato <Item.Meta>5 available</Item.Meta>
          </Item>
          <Item value="beet">
            Beet <Item.Meta>11 available</Item.Meta>
          </Item>
        </Menu>
      </Grid.Col>
    </Grid.Row>
  );
};

export default Example;
