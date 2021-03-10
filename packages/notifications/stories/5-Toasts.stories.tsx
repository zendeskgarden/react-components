/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { Story, Meta } from '@storybook/react';
import { Button } from '@zendeskgarden/react-buttons';
import {
  ToastProvider,
  IToastProviderProps,
  useToast,
  Notification,
  Title,
  Paragraph,
  Close
} from '@zendeskgarden/react-notifications';
import { Col, Grid, Row } from '@zendeskgarden/react-grid';
import { Dropdown, Field, Label, Select, Menu, Item } from '@zendeskgarden/react-dropdowns';
import { ToastPlacement } from '../src/elements/toaster/reducer';

export default {
  title: 'Components/Notifications/Toasts',
  component: ToastProvider
} as Meta;

type VALIDATION_TYPE = 'success' | 'warning' | 'error' | 'info';

const StyledRow = styled(Row)`
  margin-bottom: ${p => p.theme.space.sm};
`;

const NotificationExample: React.FC<{ timeout: number }> = ({ timeout }) => {
  const [placement, setPlacement] = useState<ToastPlacement>('top-end');
  const { addToast, removeAllToasts } = useToast();

  const addNotification = useCallback(
    (type: VALIDATION_TYPE = 'info') => {
      addToast(
        ({ close }) => (
          <Notification style={{ width: 275 }} type={type}>
            <Title>{type.charAt(0).toUpperCase() + type.slice(1)} notification</Title>
            <Paragraph>
              Turnip greens yarrow ricebean cauliflower sea lettuce kohlrabi amaranth water
            </Paragraph>
            <Close aria-label="Close Alert" onClick={() => close()} />
          </Notification>
        ),
        {
          autoDismiss: type === 'error' ? false : timeout,
          placement
        }
      );
    },
    [addToast, placement, timeout]
  );

  return (
    <>
      <StyledRow>
        <Col>
          <Dropdown selectedItem={placement} onSelect={newPlacement => setPlacement(newPlacement)}>
            <Field>
              <Label>Placement</Label>
              <Select>{placement}</Select>
              <Menu>
                <Item value="top-start">top-start</Item>
                <Item value="top">top</Item>
                <Item value="top-end">top-end</Item>
                <Item value="bottom-start">bottom-start</Item>
                <Item value="bottom">bottom</Item>
                <Item value="bottom-end">bottom-end</Item>
              </Menu>
            </Field>
          </Dropdown>
        </Col>
      </StyledRow>
      <StyledRow>
        <Col>
          <Button onClick={() => addNotification('info')} isStretched>
            Info
          </Button>
        </Col>
        <Col>
          <Button onClick={() => addNotification('success')} isStretched>
            Success
          </Button>
        </Col>
      </StyledRow>
      <StyledRow>
        <Col>
          <Button onClick={() => addNotification('warning')} isStretched>
            Warning
          </Button>
        </Col>
        <Col>
          <Button onClick={() => addNotification('error')} isStretched>
            Error
          </Button>
        </Col>
      </StyledRow>
      <StyledRow>
        <Col>
          <Button
            onClick={() => {
              removeAllToasts();
            }}
            isDanger
            isStretched
          >
            Remove all
          </Button>
        </Col>
      </StyledRow>
    </>
  );
};

export const Default: Story<IToastProviderProps & { timeout: number }> = ({
  limit,
  zIndex,
  timeout
}) => {
  return (
    <Grid>
      <Row>
        <Col sm={12} offsetSm={0} md={6} offsetMd={3} lg={4} offsetLg={4}>
          <ToastProvider limit={limit} zIndex={zIndex}>
            <NotificationExample timeout={timeout} />
          </ToastProvider>
        </Col>
      </Row>
    </Grid>
  );
};

Default.args = {
  zIndex: 100,
  timeout: 5000
};
