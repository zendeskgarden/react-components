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
import { IOption, Options } from './types';
import { toString } from '../../src/elements/combobox/utils';

const ComboboxOption = ({ icon, meta, ...props }: IOption) => (
  <Option icon={icon ? <Icon /> : undefined} {...props}>
    {meta && (
      <>
        {props.children || props.label || toString(props)}
        <Option.Meta>{meta}</Option.Meta>
      </>
    )}
  </Option>
);

interface IArgs extends Omit<IComboboxProps, 'startIcon' | 'endIcon'> {
  label: string;
  isLabelRegular: boolean;
  isLabelHidden: boolean;
  hint?: string;
  startIcon: boolean;
  endIcon: boolean;
  options: Options;
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
  options,
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
            {options.length === 0 ? (
              <Option label="No results found" isDisabled value="" />
            ) : (
              options.map(({ icon, ...option }, index) =>
                'options' in option ? (
                  <OptGroup key={index} icon={icon ? <Icon /> : undefined} {...option}>
                    {option.options.map(({ icon: groupIcon, ...groupOption }) => (
                      <ComboboxOption
                        key={toString(groupOption)}
                        icon={groupIcon}
                        {...groupOption}
                      />
                    ))}
                  </OptGroup>
                ) : (
                  <ComboboxOption key={toString(option)} icon={icon} {...option} />
                )
              )
            )}
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
