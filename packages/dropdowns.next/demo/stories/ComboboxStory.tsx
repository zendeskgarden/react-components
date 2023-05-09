/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story } from '@storybook/react';
import StartIcon from '@zendeskgarden/svg-icons/src/16/search-stroke.svg';
import Icon from '@zendeskgarden/svg-icons/src/16/leaf-stroke.svg';
import { Col, Grid, Row } from '@zendeskgarden/react-grid';
import {
  Combobox,
  Field,
  Hint,
  IComboboxProps,
  Label,
  Message,
  OptGroup,
  Option
} from '@zendeskgarden/react-dropdowns.next';
import { OPTIONS } from './data';

interface IArgs extends Omit<IComboboxProps, 'startIcon' | 'endIcon'> {
  label: string;
  isLabelRegular: boolean;
  isLabelHidden: boolean;
  hint?: string;
  startIcon: boolean;
  endIcon: boolean;
  message?: string;
  validationLabel: string;
}

export const ComboboxStory: Story<IArgs> = ({
  label,
  isLabelRegular,
  isLabelHidden,
  hint,
  startIcon,
  endIcon,
  message,
  validation,
  validationLabel,
  ...args
}) => (
  <Grid>
    <Row justifyContent="center" style={{ height: 'calc(100vh - 80px)' }}>
      <Col alignSelf="center">
        <Field>
          <Label hidden={isLabelHidden} isRegular={isLabelRegular}>
            {label}
          </Label>
          {hint && <Hint>{hint}</Hint>}
          <Combobox
            validation={validation}
            {...args}
            startIcon={startIcon ? <StartIcon /> : undefined}
            endIcon={endIcon ? <Icon /> : undefined}
          >
            <OptGroup label="Group">
              {OPTIONS.map(({ icon, ...option }, index) => (
                <Option key={index} icon={icon ? <Icon /> : undefined} {...option} />
              ))}
            </OptGroup>
          </Combobox>
          {message && (
            <Message validation={validation} validationLabel={validationLabel}>
              {message}
            </Message>
          )}
        </Field>
      </Col>
    </Row>
  </Grid>
);
