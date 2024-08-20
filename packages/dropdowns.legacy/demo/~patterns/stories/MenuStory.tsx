/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useLayoutEffect, useRef, useState } from 'react';
import { Story } from '@storybook/react';
import {
  Dropdown,
  IItemProps,
  IMenuProps,
  Item,
  Menu,
  Trigger
} from '@zendeskgarden/react-dropdowns.legacy';
import { IMenuItem } from '../../stories/types';
import { Button } from '@zendeskgarden/react-buttons';
import { Grid } from '@zendeskgarden/react-grid';

export interface IMenuItemProps extends IItemProps, Omit<IMenuItem, 'text' | 'value'> {}

interface IArgs extends Omit<IMenuProps, 'appendToNode'> {
  items: IMenuItem[];
  itemProps?: IMenuItemProps;
  appendToNode?: 'undefined' | 'portal';
}

export const MenuStory: Story<IArgs> = ({ items, appendToNode, ...rest }) => {
  const portalsRef = useRef<HTMLDivElement>(null);

  const [isReady, setIsReady] = useState<boolean>(false);

  // Before rendering to the portal, we need to wait for the portal to be mounted first.
  // In reality, this will not be required, because typically the portals div will be in
  // the main html file, not in the same react component.
  useLayoutEffect(() => {
    setIsReady(true);
  }, []);

  return (
    <div
      // Grant a bit of room, so the menu will fit
      style={{ minHeight: '300px' }}
    >
      {isReady && (
        <Grid>
          <Grid.Row
            style={{
              position: 'relative',
              overflow: 'hidden',
              height: '200px'
            }}
          >
            <Grid.Col>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam doloremque
                ducimus, hic molestias perferendis quia recusandae repellat sequi unde voluptas!
              </p>
              <Dropdown
                downshiftProps={{
                  itemToString: (item?: IMenuItem) => item && item.value
                }}
              >
                <Trigger>
                  <Button>Menu</Button>
                </Trigger>
                <Menu
                  appendToNode={
                    appendToNode === 'portal' ? portalsRef.current || undefined : undefined
                  }
                  {...rest}
                >
                  {items.map((item, index) => (
                    <Item key={index} value={item.value}>
                      {item.text}
                    </Item>
                  ))}
                </Menu>
              </Dropdown>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci esse sed sit vero
                voluptate. Ab autem necessitatibus non officiis quas. Alias consectetur doloremque
                ea eos, eum ex harum incidunt, ipsa ipsam iste magni provident quas quidem ratione
                similique ut voluptatem. A ab alias architecto ducimus est, explicabo inventore
                ipsa, iste laboriosam molestiae, omnis perspiciatis provident quae quibusdam
                suscipit ut velit vitae voluptas voluptate voluptatem. Corporis, cum dolores
                excepturi exercitationem iure magni modi nesciunt optio possimus quaerat?
                Accusantium adipisci aliquid assumenda autem beatae excepturi facere, fugiat
                impedit, ipsa laboriosam maiores nobis optio perferendis quod quos velit voluptates?
                Blanditiis dolore earum id omnis provident quo unde. Aliquid aspernatur consectetur
                consequuntur, debitis ea, esse et eveniet ex facere hic maiores molestiae natus
                nesciunt, nisi praesentium quo quos repellat unde veniam veritatis? Corporis
                ducimus, enim et libero officiis reprehenderit saepe velit veritatis vitae
                voluptatem. Accusamus at atque beatae culpa cupiditate deleniti dicta dolor
                doloribus eius enim est fuga in inventore, iste, laudantium maxime modi nulla
                perferendis provident quaerat quibusdam quidem repudiandae sunt tempora tempore ut
                vero! Debitis eligendi fugit minus modi molestiae natus non perspiciatis rem soluta,
                ullam. Asperiores distinctio hic optio porro quisquam sint vel voluptates?
                Consequuntur expedita ipsa mollitia provident quos repudiandae.
              </p>
            </Grid.Col>
          </Grid.Row>
        </Grid>
      )}
      <div ref={portalsRef} />
    </div>
  );
};
