/* eslint-disable react/no-unstable-nested-components */
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useCallback } from 'react';
import { Grid } from '@zendeskgarden/react-grid';
import { IconButton } from '@zendeskgarden/react-buttons';
import { Menu, Item, IMenuProps } from '@zendeskgarden/react-dropdowns';
import LeafIcon from '@zendeskgarden/svg-icons/src/16/leaf-stroke.svg';

const Example = () => {
  const handleChange = useCallback<NonNullable<IMenuProps['onChange']>>(changes => {
    // eslint-disable-next-line no-alert
    changes.value && alert(`You chose ${changes.value}`);
  }, []);

  return (
    <Grid.Row justifyContent="center">
      <Grid.Col textAlign="center">
        <Menu
          hasArrow
          button={props => (
            <IconButton {...props} aria-label="Choose a plant">
              <LeafIcon />
            </IconButton>
          )}
          onChange={handleChange}
        >
          <Item value="acacia">Acacia</Item>
          <Item value="daisy">Daisy</Item>
          <Item value="honeysuckle">Honeysuckle</Item>
        </Menu>
      </Grid.Col>
    </Grid.Row>
  );
};

export default Example;
