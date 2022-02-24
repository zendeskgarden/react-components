/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useRef } from 'react';
import { Story } from '@storybook/react';
import {
  Dropdown,
  IItemProps,
  IMenuProps,
  Item,
  Menu,
  Trigger
} from '@zendeskgarden/react-dropdowns';
import { IMenuItem } from '../../stories/types';
import { Button } from '@zendeskgarden/react-buttons';
import { Col, Grid, Row } from '@zendeskgarden/react-grid';

export interface IMenuItemProps extends IItemProps, Omit<IMenuItem, 'text' | 'value'> {}

interface IArgs extends Omit<IMenuProps, 'appendToNode'> {
  items: IMenuItem[];
  itemProps?: IMenuItemProps;
  appendToNode?: 'undefined' | 'portal';
}

export const MenuStory: Story<IArgs> = ({ items, appendToNode }) => {
  const portalsRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <Grid>
        <Row
          style={{
            position: 'relative',
            overflow: 'auto',
            height: '200px'
          }}
        >
          <Col>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam doloremque ducimus,
              hic molestias perferendis quia recusandae repellat sequi unde voluptas!
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
              voluptate. Ab autem necessitatibus non officiis quas. Alias consectetur doloremque ea
              eos, eum ex harum incidunt, ipsa ipsam iste magni provident quas quidem ratione
              similique ut voluptatem. A ab alias architecto ducimus est, explicabo inventore ipsa,
              iste laboriosam molestiae, omnis perspiciatis provident quae quibusdam suscipit ut
              velit vitae voluptas voluptate voluptatem. Corporis, cum dolores excepturi
              exercitationem iure magni modi nesciunt optio possimus quaerat? Accusantium adipisci
              aliquid assumenda autem beatae excepturi facere, fugiat impedit, ipsa laboriosam
              maiores nobis optio perferendis quod quos velit voluptates? Blanditiis dolore earum id
              omnis provident quo unde. Aliquid aspernatur consectetur consequuntur, debitis ea,
              esse et eveniet ex facere hic maiores molestiae natus nesciunt, nisi praesentium quo
              quos repellat unde veniam veritatis? Corporis ducimus, enim et libero officiis
              reprehenderit saepe velit veritatis vitae voluptatem. Accusamus at atque beatae culpa
              cupiditate deleniti dicta dolor doloribus eius enim est fuga in inventore, iste,
              laudantium maxime modi nulla perferendis provident quaerat quibusdam quidem
              repudiandae sunt tempora tempore ut vero! Debitis eligendi fugit minus modi molestiae
              natus non perspiciatis rem soluta, ullam. Asperiores distinctio hic optio porro
              quisquam sint vel voluptates? Consequuntur expedita ipsa mollitia provident quos
              repudiandae.
            </p>
          </Col>
        </Row>
      </Grid>
      <div ref={portalsRef} />
    </div>
  );
};
