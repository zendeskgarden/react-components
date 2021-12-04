/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { MouseEventHandler } from 'react';
import { Story } from '@storybook/react';
import Icon from '@zendeskgarden/svg-icons/src/16/leaf-stroke.svg';
import IconChevron from '@zendeskgarden/svg-icons/src/16/chevron-down-stroke.svg';
import { Col, Grid, Row } from '@zendeskgarden/react-grid';
import {
  AddItem,
  Dropdown,
  HeaderIcon,
  HeaderItem,
  IItemProps,
  IMenuProps,
  Item,
  ItemMeta,
  MediaBody,
  MediaFigure,
  MediaItem,
  Menu,
  NextItem,
  PreviousItem,
  Separator,
  Trigger
} from '@zendeskgarden/react-dropdowns';
import { IMenuItem, MENU_SEPARATOR } from './types';
import { Button } from '@zendeskgarden/react-buttons';

interface IProps extends IItemProps, IMenuItem {}

const MenuItem = ({ text: children, type, hasIcon, meta, ...props }: IProps) => {
  switch (type) {
    case 'add':
      return (
        <AddItem {...props}>
          {children}
          {meta && <ItemMeta>{meta}</ItemMeta>}
        </AddItem>
      );

    case 'header':
      return (
        <HeaderItem hasIcon={hasIcon}>
          {hasIcon && (
            <HeaderIcon>
              <Icon />
            </HeaderIcon>
          )}
          {children}
        </HeaderItem>
      );

    case 'next':
      return (
        <NextItem {...props}>
          {children}
          {meta && <ItemMeta>{meta}</ItemMeta>}
        </NextItem>
      );

    case 'previous':
      return (
        <PreviousItem {...props}>
          {children}
          {meta && <ItemMeta>{meta}</ItemMeta>}
        </PreviousItem>
      );

    default:
      return hasIcon ? (
        <MediaItem {...props}>
          <MediaFigure>
            <Icon />
          </MediaFigure>
          <MediaBody>
            {children}
            {meta && <ItemMeta>{meta}</ItemMeta>}
          </MediaBody>
        </MediaItem>
      ) : (
        <Item {...props}>
          {children}
          {meta && <ItemMeta>{meta}</ItemMeta>}
        </Item>
      );
  }
};

interface IArgs extends IMenuProps {
  onTrigger: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  hasMedia?: boolean;
  isOpen?: boolean;
  items: (IMenuItem | MENU_SEPARATOR)[];
}

export const MenuStory: Story<IArgs> = ({
  isOpen,
  onTrigger,
  items,
  disabled,
  hasMedia,
  ...args
}) => {
  return (
    <Grid>
      <Row style={{ height: 'calc(100vh - 112px)' }}>
        <Col textAlign="center" alignSelf="center">
          <Dropdown isOpen={isOpen} onSelect={onTrigger}>
            <Trigger>
              <Button size={args.isCompact ? 'small' : undefined} onClick={onTrigger}>
                {hasMedia && (
                  <Button.StartIcon>
                    <Icon />
                  </Button.StartIcon>
                )}
                Trigger
                <Button.EndIcon isRotated={isOpen}>
                  <IconChevron />
                </Button.EndIcon>
              </Button>
            </Trigger>
            <Menu {...args}>
              {items.map((item, index) =>
                item === '---' ? (
                  <Separator key={index} />
                ) : (
                  <MenuItem
                    key={index}
                    {...item}
                    value={index}
                    hasIcon={hasMedia}
                    disabled={disabled}
                  />
                )
              )}
            </Menu>
          </Dropdown>
        </Col>
      </Row>
    </Grid>
  );
};
