/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { hideVisually } from 'polished';
import { StoryFn } from '@storybook/react';
import { Col, Grid, Row } from '@zendeskgarden/react-grid';
import { IItemProps, Item, Menu, Separator } from '@zendeskgarden/react-dropdowns';

type IArgs = {
  items: IItemProps[];
};

const StyledHiddenText = styled.span(hideVisually);

export const MenuNestedStory: StoryFn<IArgs> = ({ items, ...args }) => {
  return (
    <Grid>
      <Row justifyContent="center" style={{ height: 'calc(100vh - 80px)' }}>
        <Col alignSelf="center" textAlign="center">
          <div style={{ display: 'inline-block', position: 'relative', width: 300 }}>
            <Menu button="Menu" {...args}>
              {items.map(item => {
                if ('isSeparator' in item) {
                  return <Separator key={item.value} />;
                }

                if ('value' in item) {
                  return (
                    <Item key={item.value} {...item}>
                      {item.value}
                      {item.type === 'next' && <StyledHiddenText>Go to submenu</StyledHiddenText>}
                      {item.type === 'previous' && (
                        <StyledHiddenText>Go to previous menu</StyledHiddenText>
                      )}
                    </Item>
                  );
                }

                return null;
              })}
            </Menu>
          </div>
        </Col>
      </Row>
    </Grid>
  );
};
