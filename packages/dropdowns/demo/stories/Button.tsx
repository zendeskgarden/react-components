/* eslint-disable react/no-unstable-nested-components */
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Grid } from '@zendeskgarden/react-grid';
import { Button } from '@zendeskgarden/react-buttons';
import { Menu, Item } from '@zendeskgarden/react-dropdowns';
import LeafIcon from '@zendeskgarden/svg-icons/src/16/leaf-stroke.svg';

const Example = () => {
  const handleChange = ({ value }: { value?: string }) => {
    // eslint-disable-next-line no-alert
    value && alert(`You chose ${value}`);
  };

  return (
    <Grid.Row justifyContent="center">
      <Grid.Col textAlign="center">
        <Menu
          button={props => (
            <Button {...props} isPrimary>
              <Button.StartIcon>
                <LeafIcon />
              </Button.StartIcon>
              Pick flowers
            </Button>
          )}
          onChange={handleChange}
        >
          <Item value="hydrangea">Hydrangea</Item>
          <Item value="petunia">Petunia</Item>
          <Item value="lily">Lily</Item>
        </Menu>
      </Grid.Col>
    </Grid.Row>
  );
};

export default Example;
