/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useCallback, useState } from 'react';
import { Story } from '@storybook/react';
import IconAdd from '@zendeskgarden/svg-icons/src/16/notification-stroke.svg';
import IconRemove from '@zendeskgarden/svg-icons/src/12/x-stroke.svg';
import IconRemoveAll from '@zendeskgarden/svg-icons/src/16/x-circle-stroke.svg';
import IconChevron from '@zendeskgarden/svg-icons/src/16/chevron-down-stroke.svg';
import { Col, Grid, Row } from '@zendeskgarden/react-grid';
import { Button } from '@zendeskgarden/react-buttons';
import {
  Dropdown,
  MediaBody,
  MediaFigure,
  MediaItem,
  Menu,
  Trigger
} from '@zendeskgarden/react-dropdowns.legacy';
import {
  Close,
  IToastOptions,
  Notification,
  Title,
  ToastContent,
  useToast
} from '@zendeskgarden/react-notifications';

interface IArgs extends IToastOptions {
  children: string;
}

export const ToastStory: Story<IArgs> = ({ children, ...args }) => {
  const {
    addToast,
    removeToast,
    removeAllToasts: handleRemoveAll,
    updateToast,
    toasts
  } = useToast();
  const [removeRotated, setRemoveRotated] = useState<boolean | undefined>();

  const handleAdd = useCallback(() => {
    const getToast = (id?: string) => {
      const retVal: ToastContent = ({ close }) => (
        <Notification>
          {id && <Title>{id}</Title>}
          {children}
          <Close aria-label="Close" onClick={close} />
        </Notification>
      );

      return retVal;
    };

    const id = addToast(getToast(), args);

    updateToast(id, { content: getToast(id) });
  }, [addToast, updateToast, children, args]);

  return (
    <Grid>
      <Row style={{ height: 'calc(100vh - 80px)' }}>
        <Col sm={4} textAlign="center" textAlignSm="end" alignSelf="center">
          <Button onClick={handleAdd}>
            <Button.StartIcon>
              <IconAdd />
            </Button.StartIcon>
            Add
          </Button>
        </Col>
        <Col sm={4} textAlign="center" alignSelf="center">
          <Dropdown
            onSelect={id => removeToast(id)}
            onStateChange={options =>
              Object.prototype.hasOwnProperty.call(options, 'isOpen') &&
              setRemoveRotated(options.isOpen)
            }
          >
            <Trigger>
              <Button disabled={toasts.length === 0} isDanger>
                Remove
                <Button.EndIcon isRotated={removeRotated && toasts.length > 0}>
                  <IconChevron />
                </Button.EndIcon>
              </Button>
            </Trigger>
            <Menu>
              {toasts.map(toast => (
                <MediaItem key={toast.id} value={toast.id} isDanger>
                  <MediaFigure>
                    <IconRemove />
                  </MediaFigure>
                  <MediaBody>{toast.id}</MediaBody>
                </MediaItem>
              ))}
            </Menu>
          </Dropdown>
        </Col>
        <Col sm={4} textAlign="center" textAlignSm="start" alignSelf="center">
          <Button isDanger disabled={toasts.length === 0} onClick={handleRemoveAll}>
            <Button.StartIcon>
              <IconRemoveAll />
            </Button.StartIcon>
            Remove all
          </Button>
        </Col>
      </Row>
    </Grid>
  );
};
