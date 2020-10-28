/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState, useRef } from 'react';
import { Story, Meta } from '@storybook/react';
import { Button } from '@zendeskgarden/react-buttons';
import { TooltipModal } from '@zendeskgarden/react-modals';
import { Col, Grid, Row } from '@zendeskgarden/react-grid';

export default {
  title: 'Components/Modals/TooltipModal',
  component: TooltipModal
} as Meta;

export const Default: Story = ({
  placement,
  hasArrow,
  zIndex,
  backdropProps,
  focusOnMount,
  restoreFocus,
  id
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [referenceElement, setReferenceElement] = useState<HTMLButtonElement | null>();

  return (
    <Grid>
      <Row>
        <Col textAlign="center" style={{ padding: 50 }}>
          <Button
            ref={buttonRef}
            onClick={() => {
              setReferenceElement(buttonRef.current);
            }}
          >
            Tooltip modal
          </Button>
          <TooltipModal
            referenceElement={referenceElement}
            onClose={() => setReferenceElement(null)}
            placement={placement}
            hasArrow={hasArrow}
            zIndex={zIndex}
            backdropProps={backdropProps}
            focusOnMount={focusOnMount}
            restoreFocus={restoreFocus}
            id={id}
          >
            <TooltipModal.Title>Tooltip modal header</TooltipModal.Title>
            <TooltipModal.Body>
              Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea
              sprouts fava bean collard greens dandelion okra wakame tomato.
            </TooltipModal.Body>
            <TooltipModal.Close aria-label="Close" />
          </TooltipModal>
        </Col>
      </Row>
    </Grid>
  );
};

Default.argTypes = {
  referenceElement: { control: { disable: true } },
  popperModifiers: { control: { disable: true } },
  backdropProps: { control: { disable: true } },
  placement: {
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
    control: 'boolean'
  },
  zIndex: {
    control: 'boolean'
  },
  focusOnMount: {
    control: 'boolean'
  },
  restoreFocus: {
    control: 'boolean'
  },
  id: {
    control: 'text'
  }
};
