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
import { Tag, Close } from '@zendeskgarden/react-tags';
import { Anchor } from '@zendeskgarden/react-buttons';
import { FieldContainer, KEY_CODES } from '@zendeskgarden/react-selection';
import AutocompleteContainer from '../containers/AutocompleteContainer';

const DEFAULT_NUM_TAGS = 4;
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
  && {
    flex-basis: 60px;
    flex-grow: 1;
    margin: 2px;
    width: inherit;
    min-width: 60px;
  }

  ${props =>
    props.selectedValues.length !== 0 && // eslint-disable-line
    (!props.isFocused || props.tagFocusedKey !== undefined) &&
    !props.isOpen &&
    !props.placeholder &&
    `
    &&& {
      margin: 0;
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

const StyledSpacedTag = styled(Tag)`
  margin: 2px;
`;

const StyledMoreAnchor = styled(Anchor)`
  && {
    display: flex;
    align-items: center;
    margin: 2px;
    min-height: 1em;
  }
`;

export default class Multiselect extends Component {
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
    focusInset: PropTypes.bool,
    selectedValues: PropTypes.arrayOf(PropTypes.string),
    onChange: PropTypes.func,
    inputRef: PropTypes.func,
    placeholder: PropTypes.string,
    maxHeight: PropTypes.string,
    disabled: PropTypes.bool,
    options: PropTypes.array.isRequired,
    noOptionsMessage: PropTypes.string,
    renderOption: PropTypes.func,
    renderDropdown: PropTypes.func,
    renderShowMore: PropTypes.func,
    optionFilter: PropTypes.func,
    closeOnSelect: PropTypes.bool,
    /**
     * Passes options to [Popper.JS Instance](https://github.com/FezVrasta/popper.js/blob/master/docs/_includes/popper-documentation.md#new-popperreference-popper-options)
     */
    popperModifiers: PropTypes.object
  };

  static defaultProps = {
    noOptionsMessage: 'No matches found',
    maxHeight: '400px',
    small: false
  };

  state = {
    isOpen: false,
    isFocused: false,
    isHovered: false,
    focusedKey: undefined,
    tagFocusedKey: undefined,
    inputValue: '',
    value: undefined,
    closeOnSelect: false
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

  renderMenuItems = (getItemProps, selectedValuesDictionary) => {
    const { noOptionsMessage, renderOption } = this.props;
    const { focusedKey } = this.state;

    const matchingOptions = this.getMatchingOptions().map(option => {
      const checked = !!selectedValuesDictionary[option.value];

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

  renderTags = (isFocused, selectedKeys, isSmall, tagFocusedKey, getTagProps) => {
    const { renderShowMore, disabled } = this.props;
    const keys = Object.keys(selectedKeys);

    if (isFocused && !disabled) {
      return keys.map(key => (
        <StyledSpacedTag
          {...getTagProps({
            key,
            size: isSmall ? undefined : 'large',
            focused: tagFocusedKey === key
          })}
        >
          {key}
          <Close
            onClick={() => {
              if (!disabled) {
                this.deleteTag(key);
              }
            }}
          />
        </StyledSpacedTag>
      ));
    }

    const labels = [];

    for (let x = 0; x < DEFAULT_NUM_TAGS && x < keys.length; x++) {
      const key = keys[x];

      labels.push(
        <StyledSpacedTag
          {...getTagProps({
            key,
            size: isSmall ? undefined : 'large',
            focused: tagFocusedKey === key && !disabled
          })}
        >
          {key}
          <Close
            onClick={() => {
              if (!disabled) {
                this.deleteTag(key);
              }
            }}
          />
        </StyledSpacedTag>
      );
    }

    if (keys.length > 4) {
      labels.push(
        <StyledMoreAnchor tabIndex={-1} key="more-anchor">
          {renderShowMore ? renderShowMore(keys.length - 4) : `+ ${keys.length - 4} more`}
        </StyledMoreAnchor>
      );
    }

    return labels;
  };

  deleteTag = key => {
    const { onChange, disabled, selectedValues = [] } = this.props;

    if (disabled) {
      return;
    }

    const filteredTags = selectedValues.filter(value => {
      return value !== key;
    });

    this.setState({ tagFocusedKey: undefined }, () => {
      onChange && onChange(filteredTags);
    });
  };

  render() {
    const {
      label,
      'aria-label': ariaLabel,
      hint,
      small,
      focusInset,
      disabled,
      selectedValues = [],
      onChange,
      placeholder,
      maxHeight,
      renderDropdown,
      inputRef,
      message,
      validation,
      closeOnSelect,
      popperModifiers
    } = this.props;
    const { isOpen, focusedKey, tagFocusedKey, isFocused, isHovered, inputValue } = this.state;

    const selectedValuesDictionary = selectedValues.reduce((dictionary, value) => {
      dictionary[value] = value;

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
              tagFocusedKey={tagFocusedKey}
              popperModifiers={popperModifiers}
              onSelect={selectedKey => {
                if (selectedValuesDictionary[selectedKey]) {
                  delete selectedValuesDictionary[selectedKey];
                } else {
                  selectedValuesDictionary[selectedKey] = true;
                }

                this.setState({ inputValue: '' }, () => {
                  onChange && onChange(Object.keys(selectedValuesDictionary));
                });

                return !closeOnSelect;
              }}
              onStateChange={newState => {
                if (typeof newState.isOpen !== 'undefined' && !newState.isOpen) {
                  newState.inputValue = '';
                }

                this.setState(newState);
              }}
              trigger={({
                getTriggerProps,
                getInputProps,
                getTagProps,
                triggerRef,
                inputRef: triggerInputRef
              }) => {
                let triggerProps = getTriggerProps({
                  open: isOpen,
                  small,
                  focused: isFocused || isOpen || typeof tagFocusedKey !== 'undefined',
                  hovered: isHovered,
                  select: true,
                  tagLayout: true,
                  validation,
                  focusInset,
                  'aria-label': ariaLabel,
                  inputRef: ref => {
                    this.wrapperRef = ref;
                    triggerRef(ref);
                  }
                });

                if (disabled) {
                  triggerProps = {
                    disabled: true,
                    select: true,
                    tagLayout: true,
                    small,
                    validation,
                    focusInset,
                    'aria-label': ariaLabel
                  };
                }

                return (
                  <StyledFauxInput {...triggerProps}>
                    {this.renderTags(
                      isOpen || typeof tagFocusedKey !== 'undefined' || isFocused,
                      selectedValuesDictionary,
                      small,
                      tagFocusedKey,
                      getTagProps
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
                            isFocused,
                            tagFocusedKey,
                            selectedValues,
                            placeholder,
                            onChange: e => {
                              this.setState({ inputValue: e.target.value });
                            },
                            onFocus: e => {
                              if (disabled) {
                                e.preventDefault();

                                return;
                              }
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

                                return;
                              }

                              if (
                                e.keyCode === KEY_CODES.DELETE ||
                                e.keyCode === KEY_CODES.BACKSPACE
                              ) {
                                if (tagFocusedKey !== undefined) {
                                  this.deleteTag(tagFocusedKey);

                                  return;
                                }

                                if (e.target.value === '') {
                                  this.deleteTag(selectedValues[selectedValues.length - 1]);
                                }
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

                props.children = this.renderMenuItems(getItemProps, selectedValuesDictionary);

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
