/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { useCallback } from 'react';
import IconRemove from 'svg-icons-legacy/src/12/x-stroke.svg';
import IconAdd from 'svg-icons-legacy/src/16/notification-stroke.svg';
import IconRemoveAll from 'svg-icons-legacy/src/16/x-circle-stroke.svg';

import {
  Button,
  Grid,
  IToast,
  IToastOptions,
  Item,
  Menu,
  Notification,
  useToast
} from '../../../src/index';

interface IArgs extends IToastOptions {
  children: string;
}

export const ToastStory = ({ children, ...args }: IArgs) => {
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
          {!!id && <Notification.Title>{id}</Notification.Title>}
          {children}
          <Notification.Close aria-label="Close" onClick={close} />
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
