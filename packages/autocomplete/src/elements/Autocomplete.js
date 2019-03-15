/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MenuView, Item } from '@zendeskgarden/react-menus';
import { TextGroup, Label, FauxInput, Input, Hint, Message } from '@zendeskgarden/react-textfields';
import { FieldContainer, KEY_CODES } from '@zendeskgarden/react-selection';
import AutocompleteContainer from '../containers/AutocompleteContainer';

const VALIDATION = {
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error',
  NONE: 'none'
};

const StyledNoItemsMessage = styled.div`
  margin: 16px;
  text-align: center;
`;

const StyledMenuOverflow = styled.div`
  overflow-y: auto;
  max-height: ${props => props.maxHeight || 'inherit'};
`;

const StyledInput = styled(Input)`
  ${props =>
    !props.isOpen &&
    `
    && {
      opacity: 0;
      height: 0;
      min-height: 0;
      width: 0;
      min-width: 0;
    }
  `}
`;

const StyledFauxInput = styled(FauxInput)`
  cursor: text;
`;

const StyledValueWrapper = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

export default class Autocomplete extends Component {
  static propTypes = {
    label: PropTypes.string,
    'aria-label': PropTypes.string,
    validation: PropTypes.oneOf([
      VALIDATION.SUCCESS,
      VALIDATION.WARNING,
      VALIDATION.ERROR,
      VALIDATION.NONE
    ]),
    message: PropTypes.node,
    hint: PropTypes.node,
    small: PropTypes.bool,
    /** Applies inset `box-shadow` styling on focus */
    focusInset: PropTypes.bool,
    selectedValue: PropTypes.string,
    onChange: PropTypes.func,
    inputRef: PropTypes.func,
    placeholder: PropTypes.string,
    maxHeight: PropTypes.string,
    disabled: PropTypes.bool,
    options: PropTypes.array.isRequired,
    noOptionsMessage: PropTypes.string,
    renderOption: PropTypes.func,
    renderDropdown: PropTypes.func,
    optionFilter: PropTypes.func,
    /**
     * Passes options to [Popper.JS Instance](https://github.com/FezVrasta/popper.js/blob/master/docs/_includes/popper-documentation.md#new-popperreference-popper-options)
     */
    popperModifiers: PropTypes.object
  };

  static defaultProps = {
    noOptionsMessage: 'No matches found',
    maxHeight: '400px'
  };

  state = {
    isOpen: false,
    isFocused: false,
    isHovered: false,
    focusedKey: undefined,
    inputValue: '',
    value: undefined
  };

  defaultOptionFilter = (original, comparison) => {
    const formattedOriginal = original.replace(/ /u, '').toLocaleLowerCase();
    const formattedComparison = comparison.replace(/ /u, '').toLocaleLowerCase();

    return formattedOriginal.indexOf(formattedComparison) !== -1;
  };

  getMatchingOptions = () => {
    const optionFilter = this.props.optionFilter || this.defaultOptionFilter;

    return this.props.options.filter(option => optionFilter(option.label, this.state.inputValue));
  };

  renderMenuItems = getItemProps => {
    const { noOptionsMessage, renderOption, selectedValue } = this.props;
    const { focusedKey } = this.state;

    const matchingOptions = this.getMatchingOptions().map(option => {
      const checked = selectedValue === option.value;

      const props = getItemProps({
        key: option.value,
        focused: focusedKey === option.value,
        checked,
        'aria-selected': checked
      });

      props.children = option.label;

      if (renderOption) {
        return renderOption(props);
      }

      return <Item {...props} />;
    });

    if (matchingOptions.length > 0) {
      return matchingOptions;
    }

    return <StyledNoItemsMessage>{noOptionsMessage}</StyledNoItemsMessage>;
  };

  render() {
    const {
      label,
      'aria-label': ariaLabel,
      hint,
      disabled,
      options,
      selectedValue,
      onChange,
      placeholder,
      maxHeight,
      renderDropdown,
      inputRef,
      message,
      small,
      focusInset,
      validation,
      popperModifiers
    } = this.props;
    const { isOpen, focusedKey, isFocused, isHovered, inputValue } = this.state;

    const optionDictionary = options.reduce((dictionary, option) => {
      dictionary[option.value] = option.label;

      return dictionary;
    }, {});

    return (
      <FieldContainer>
        {({ getLabelProps, getInputProps: getFieldInputProps, getHintProps }) => (
          <TextGroup>
            {label && (
              <Label
                {...getLabelProps({
                  onClick: () => {
                    if (!disabled) {
                      this.inputRef && this.inputRef.focus();
                      this.setState({ isOpen: true });
                    }
                  },
                  onMouseEnter: () => {
                    this.setState({ isHovered: true });
                  },
                  onMouseLeave: () => {
                    this.setState({ isHovered: false });
                  }
                })}
              >
                {label}
              </Label>
            )}
            {hint && <Hint {...getHintProps()}>{hint}</Hint>}
            <AutocompleteContainer
              isOpen={isOpen}
              focusedKey={focusedKey}
              popperModifiers={popperModifiers}
              onSelect={selectedKey => {
                onChange && onChange(selectedKey);
              }}
              onStateChange={newState => {
                if (!newState.isOpen) {
                  newState.inputValue = '';
                }

                this.setState(newState);
              }}
              trigger={({
                getTriggerProps,
                getInputProps,
                triggerRef,
                inputRef: triggerInputRef
              }) => {
                let triggerProps = getTriggerProps({
                  open: isOpen,
                  focused: isFocused || isOpen,
                  hovered: isHovered,
                  select: true,
                  small,
                  focusInset,
                  validation,
                  'aria-label': ariaLabel,
                  inputRef: ref => {
                    this.wrapperRef = ref;
                    triggerRef(ref);
                  }
                });

                if (disabled) {
                  triggerProps = {
                    disabled: true,
                    small,
                    focusInset,
                    validation,
                    select: true,
                    'aria-label': ariaLabel
                  };
                }

                return (
                  <StyledFauxInput {...triggerProps}>
                    {!isOpen && (
                      <StyledValueWrapper>{optionDictionary[selectedValue]}</StyledValueWrapper>
                    )}
                    <StyledInput
                      {...getInputProps(
                        getFieldInputProps(
                          {
                            bare: true,
                            autocomplete: 'off',
                            autocapitalize: 'off',
                            autocorrect: 'off',
                            innerRef: ref => {
                              this.inputRef = ref;
                              triggerInputRef(ref);
                              inputRef && inputRef(ref);
                            },
                            value: inputValue,
                            isOpen,
                            placeholder,
                            onChange: e => {
                              this.setState({ inputValue: e.target.value });
                            },
                            onFocus: () => {
                              this.setState({ isFocused: true });
                            },
                            onBlur: () => {
                              this.setState({ isFocused: false });
                            },
                            onKeyDown: e => {
                              if (
                                e.keyCode === KEY_CODES.ENTER &&
                                (!e.target.value || e.target.value.trim().length === 0) &&
                                !focusedKey &&
                                isOpen
                              ) {
                                e.preventDefault();
                              }
                            }
                          },
                          { isDescribed: false }
                        )
                      )}
                    />
                  </StyledFauxInput>
                );
              }}
            >
              {({ getMenuProps, getItemProps, placement }) => {
                const props = getMenuProps({
                  placement,
                  animate: true,
                  small,
                  style: {
                    width: this.wrapperRef ? this.wrapperRef.getBoundingClientRect().width : 0
                  }
                });

                props.children = this.renderMenuItems(getItemProps);

                if (renderDropdown) {
                  return renderDropdown(props);
                }

                const { children: menuChildren, ...otherMenuProps } = props;

                return (
                  <MenuView {...otherMenuProps}>
                    <StyledMenuOverflow maxHeight={maxHeight}>{menuChildren}</StyledMenuOverflow>
                  </MenuView>
                );
              }}
            </AutocompleteContainer>
            {message && <Message validation={validation}>{message}</Message>}
          </TextGroup>
        )}
      </FieldContainer>
    );
  }
}
