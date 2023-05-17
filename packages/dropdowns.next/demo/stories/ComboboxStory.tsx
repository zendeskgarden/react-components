/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Story } from '@storybook/react';
import Avatar from '@zendeskgarden/svg-icons/src/16/user-solo-stroke.svg';
import StartIcon from '@zendeskgarden/svg-icons/src/16/search-stroke.svg';
import Icon from '@zendeskgarden/svg-icons/src/16/leaf-stroke.svg';
import { Col, Grid, Row } from '@zendeskgarden/react-grid';
import {
  Combobox,
  Field,
  Hint,
  IComboboxProps,
  IOptionProps,
  Label,
  Message,
  OptGroup,
  Option,
  Tag
} from '@zendeskgarden/react-dropdowns.next';
import { IOption, Options } from './types';
import { toString } from '../../src/elements/combobox/utils';

const ComboboxOption = ({ icon, meta, ...props }: IOption) => {
  const Svg = props.tagProps?.isPill ? Avatar : Icon;

  return (
    <Option icon={icon ? <Svg /> : undefined} {...props}>
      {meta && (
        <>
          {props.children || props.label || toString(props)}
          <Option.Meta>{meta}</Option.Meta>
        </>
      )}
    </Option>
  );
};

interface IArgs extends Omit<IComboboxProps, 'startIcon' | 'endIcon' | 'renderValue'> {
  label: string;
  isLabelRegular: boolean;
  isLabelHidden: boolean;
  hint?: string;
  startIcon: boolean;
  renderValue: boolean;
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
  renderValue,
  endIcon,
  options,
  message,
  validation,
  validationLabel,
  ...args
}) => {
  const getTagProps = (option: IOption): IOptionProps['tagProps'] => {
    const Svg = option.tagProps?.isPill ? Avatar : Icon;
    const children = option.icon ? (
      <>
        <Tag.Avatar>
          <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Svg />
          </span>
        </Tag.Avatar>{' '}
        {option.tagProps?.children || option.label || toString(option)}
      </>
    ) : undefined;

    return {
      ...option.tagProps,
      children
    };
  };

  return (
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
              renderExpandTags={value => `+ ${value} more`}
              renderValue={
                renderValue
                  ? ({ inputValue }) => {
                      if (inputValue) {
                        return `🌱 ${inputValue}`;
                      }

                      return inputValue;
                    }
                  : undefined
              }
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
                          tagProps={getTagProps({ icon: groupIcon, ...groupOption })}
                        />
                      ))}
                    </OptGroup>
                  ) : (
                    <ComboboxOption
                      key={toString(option)}
                      icon={icon}
                      {...option}
                      tagProps={getTagProps({ icon, ...option })}
                    />
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
};
