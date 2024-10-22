/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useCallback } from 'react';
import { StoryFn } from '@storybook/react';
import IconAdd from '@zendeskgarden/svg-icons/src/16/notification-stroke.svg';
import IconRemove from '@zendeskgarden/svg-icons/src/12/x-stroke.svg';
import IconRemoveAll from '@zendeskgarden/svg-icons/src/16/x-circle-stroke.svg';
import { Grid } from '@zendeskgarden/react-grid';
import { Button } from '@zendeskgarden/react-buttons';
import { Item, Menu } from '@zendeskgarden/react-dropdowns';
import {
  Close,
  IToastOptions,
  Notification,
  Title,
  IToast,
  useToast
} from '@zendeskgarden/react-notifications';

interface IArgs extends IToastOptions {
  children: string;
}

export const ToastStory: StoryFn<IArgs> = ({ children, ...args }) => {
  const {
    addToast,
    removeToast,
    removeAllToasts: handleRemoveAll,
    updateToast,
    toasts
  } = useToast();

  const handleAdd = useCallback(() => {
    const getToast = (id?: string) => {
      const retVal: IToast['content'] = ({ close }) => (
        <Notification>
          {id ? <Title>{id}</Title> : null}
          {children}
          <Close aria-label="Close" onClick={close} />
        </Notification>
      );

      return retVal;
    };

    const id = addToast(getToast(), args);

    updateToast(id, { content: getToast(id) });
  }, [addToast, updateToast, children, args]);

  const handleChange = useCallback(
    ({ value }: { value?: string }) => {
      value && removeToast(value);
    },
    [removeToast]
  );

  return (
    <Grid>
      <Grid.Row style={{ height: 'calc(100vh - 80px)' }}>
        <Grid.Col sm={4} textAlign="center" textAlignSm="end" alignSelf="center">
          <Button onClick={handleAdd}>
            <Button.StartIcon>
              <IconAdd />
            </Button.StartIcon>
            Add
          </Button>
        </Grid.Col>
        <Grid.Col sm={4} textAlign="center" alignSelf="center">
          <Menu
            onChange={handleChange}
            buttonProps={{
              disabled: toasts.length === 0,
              isDanger: true
            }}
            button="Remove"
          >
            {toasts.map(toast => (
              <Item key={toast.id} value={toast.id} type="danger" icon={<IconRemove />}>
                {toast.id}
              </Item>
            ))}
          </Menu>
        </Grid.Col>
        <Grid.Col sm={4} textAlign="center" textAlignSm="start" alignSelf="center">
          <Button isDanger disabled={toasts.length === 0} onClick={handleRemoveAll}>
            <Button.StartIcon>
              <IconRemoveAll />
            </Button.StartIcon>
            Remove all
          </Button>
        </Grid.Col>
      </Grid.Row>
    </Grid>
  );
};
