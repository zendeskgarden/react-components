/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Tooltip, Title, Paragraph } from '@zendeskgarden/react-tooltips';
import { Col, Grid, Row } from '@zendeskgarden/react-grid';
import { Button } from '@zendeskgarden/react-buttons';
import { Alert, Title as AlertTitle } from '@zendeskgarden/react-notifications';

export default {
  title: 'Components/Tooltips',
  subcomponents: { Tooltip, Title, Paragraph }
} as Meta;

type TOOLTIP_SIZE = 'default' | 'small' | 'medium' | 'large' | 'extra-large';

const retrieveTooltipContent = (size: TOOLTIP_SIZE, type: 'light' | 'dark') => {
  const shortValue = 'Lorem ipsum dolor';
  const mediumValue = 'Lorem ipsum dolor sit amet, consect.';
  const longValue =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt' +
    ' ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ' +
    'ullamco laboris nisi ut aliquip ex ea commodo consequat.';

  if (size === 'default') {
    if (type === 'light') {
      return longValue;
    }

    return shortValue;
  }

  if (size === 'extra-large' || size === 'large') {
    return longValue;
  } else if (size === 'medium') {
    return mediumValue;
  }

  return shortValue;
};

interface IStoryProps {
  placement:
    | 'auto'
    | 'top'
    | 'top-start'
    | 'top-end'
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end'
    | 'end'
    | 'end-top'
    | 'end-bottom'
    | 'start'
    | 'start-top'
    | 'start-bottom';
  size: TOOLTIP_SIZE;
  hasArrow: boolean;
  forceVisibility: boolean;
  delayMS: number;
}

export const Default: Story<IStoryProps> = ({
  placement,
  size,
  hasArrow,
  forceVisibility,
  delayMS
}) => {
  return (
    <Grid>
      <Row alignItems="center" style={{ minHeight: 500 }}>
        <Col md={6} style={{ textAlign: 'center' }}>
          <Tooltip
            content={
              <>
                <Title>Dark Tooltip</Title>
                <Paragraph>{retrieveTooltipContent(size, 'dark')}</Paragraph>
              </>
            }
            hasArrow={hasArrow}
            placement={placement}
            size={size === 'default' ? undefined : size}
            delayMS={delayMS}
            isVisible={forceVisibility ? true : undefined}
            zIndex={1}
            popperModifiers={{ preventOverflow: { boundariesElement: 'viewport' } }}
          >
            <Button>Default tooltip</Button>
          </Tooltip>
        </Col>
        <Col md={6} style={{ textAlign: 'center' }}>
          <Tooltip
            content={
              <>
                <Title>Light Tooltip</Title>
                <Paragraph>{retrieveTooltipContent(size, 'light')}</Paragraph>
              </>
            }
            hasArrow={hasArrow}
            placement={placement}
            size={size === 'default' ? undefined : size}
            type="light"
            isVisible={forceVisibility ? true : undefined}
            delayMS={delayMS}
            zIndex={1}
            popperModifiers={{ preventOverflow: { boundariesElement: 'viewport' } }}
          >
            <Button>Light tooltip</Button>
          </Tooltip>
        </Col>
      </Row>
      <Row>
        <Col>
          {size !== 'default' && (
            <Alert type="warning">
              <AlertTitle>Size warning</AlertTitle>
              Although small, light tooltips and large, dark tooltips are supported in code, they go
              against Garden&apos;s usage guidelines. Please don&apos;t use this.
            </Alert>
          )}
        </Col>
      </Row>
    </Grid>
  );
};

Default.argTypes = {
  placement: {
    name: 'Placement',
    control: {
      type: 'select',
      options: [
        'auto',
        'top',
        'top-start',
        'top-end',
        'bottom',
        'bottom-start',
        'bottom-end',
        'end',
        'end-top',
        'end-bottom',
        'start',
        'start-top',
        'start-bottom'
      ]
    }
  },
  hasArrow: {
    name: 'Has Arrow'
  },
  size: {
    name: 'Size',
    control: {
      type: 'select',
      options: ['default', 'small', 'medium', 'large', 'extra-large']
    }
  },
  forceVisibility: {
    name: 'Foce Visibility'
  },
  delayMS: {
    name: 'Delay (ms)',
    control: { type: 'range', min: 0, max: 1000, step: 50 }
  }
};

Default.args = {
  placement: 'top',
  size: 'default',
  hasArrow: true,
  forceVisibility: true,
  delayMS: 500
};
