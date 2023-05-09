/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story } from '@storybook/react';
import OptionIcon from '@zendeskgarden/svg-icons/src/16/leaf-stroke.svg';
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

interface IArgs extends IComboboxProps {
  label: string;
  isLabelRegular: boolean;
  isLabelHidden: boolean;
  hint: string;
  message: string;
}

export const ComboboxStory: Story<IArgs> = ({
  label,
  isLabelRegular,
  isLabelHidden,
  hint,
  message,
  validation,
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
          <Combobox validation={validation} {...args}>
            <OptGroup label="Group">
              {OPTIONS.map(({ icon, ...option }, index) => (
                <Option key={index} icon={icon ? <OptionIcon /> : undefined} {...option} />
              ))}
            </OptGroup>
          </Combobox>
          {message && <Message validation={validation}>{message}</Message>}
        </Field>
      </Col>
    </Row>
  </Grid>
);
