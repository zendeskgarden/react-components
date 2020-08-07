/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useRef, useEffect, useState, useMemo, useCallback, HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { DefaultTheme, ThemeProps } from 'styled-components';
import { Reference } from 'react-popper';
import { useSelection } from '@zendeskgarden/container-selection';
import {
  KEY_CODES,
  composeEventHandlers,
  useCombinedRefs
} from '@zendeskgarden/container-utilities';
import { isRtl, withTheme } from '@zendeskgarden/react-theming';
import Chevron from '@zendeskgarden/svg-icons/src/16/chevron-down-stroke.svg';
import {
  StyledFauxInput,
  StyledMultiselectInput,
  StyledMultiselectItemsContainer,
  StyledMultiselectItemWrapper,
  StyledMultiselectMoreAnchor
} from '../../styled';
import { VALIDATION } from '../../utils/validation';
import useDropdownContext from '../../utils/useDropdownContext';
import useFieldContext from '../../utils/useFieldContext';
import { REMOVE_ITEM_STATE_TYPE } from '../Dropdown/Dropdown';

interface IMultiselectProps extends HTMLAttributes<HTMLDivElement> {
  isCompact?: boolean;
  /** Removes all borders and styling */
  isBare?: boolean;
  disabled?: boolean;
  /** Applies inset `box-shadow` styling on focus */
  focusInset?: boolean;
  /** Displays select open state */
  isOpen?: boolean;
  placeholder?: string;
  validation?: VALIDATION;
  /** Number of items to show in the collapsed state. Default of 4. */
  maxItems?: number;
  renderShowMore?: (index: number) => string;
  renderItem: (options: { value: any; removeValue: () => void }) => React.ReactElement;
  inputRef?: React.Ref<HTMLInputElement>;
  /** Slot for "start" icon */
  start?: any;
}

/**
 * Applies state and a11y attributes to its children. Must be nested within a `<Field>` component.
 */
const Multiselect = React.forwardRef<HTMLDivElement, IMultiselectProps & ThemeProps<DefaultTheme>>(
  (
    {
      renderItem,
      placeholder,
      maxItems,
      renderShowMore,
      inputRef: externalInputRef,
      start,
      ...props
    },
    ref
  ) => {
    const {
      popperReferenceElementRef,
      selectedItems = [],
      containsMultiselectRef,
      downshift: {
        getToggleButtonProps,
        getInputProps,
        isOpen,
        closeMenu,
        inputValue,
        setState: setDownshiftState,
        itemToString
      }
    } = useDropdownContext();
    const { isLabelHovered } = useFieldContext();
    const [isHovered, setIsHovered] = useState(false);
    const inputRef = useCombinedRefs<HTMLInputElement>(externalInputRef);
    const triggerRef = useCombinedRefs<HTMLDivElement>(popperReferenceElementRef, ref);
    const blurTimeoutRef = useRef<number | undefined>();
    const previousIsOpenRef = useRef<boolean | undefined>(undefined);
    const [isFocused, setIsFocused] = useState(false);
    const [focusedItem, setFocusedItem] = useState(undefined);

    const { getContainerProps, getItemProps } = useSelection({
      rtl: isRtl(props),
      focusedItem,
      selectedItem: undefined,
      onFocus: (item: any) => {
        setFocusedItem(item);
      }
    });

    useEffect(() => {
      containsMultiselectRef.current = true;
      const tempRef = blurTimeoutRef;

      return () => {
        clearTimeout(tempRef.current);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
      // Focus internal input when Menu is opened
      if (isOpen && !previousIsOpenRef.current) {
        inputRef.current && inputRef.current.focus();
      }
      previousIsOpenRef.current = isOpen;
    }, [isOpen, inputRef]);

    /**
     * Close menu when an item becomes focused
     */
    useEffect(() => {
      if (focusedItem !== undefined && isOpen) {
        closeMenu();
      }
    }, [focusedItem, isOpen, closeMenu]);

    const onMouseEnter = composeEventHandlers(props.onMouseEnter, () => setIsHovered(true));
    const onMouseLeave = composeEventHandlers(props.onMouseLeave, () => setIsHovered(false));

    /**
     * Destructure type out of props so that `type="button"`
     * is not spread onto the MultiSelect Dropdown `div`.
     */
    /* eslint-disable @typescript-eslint/no-unused-vars */
    const { type, ...selectProps } = getToggleButtonProps({
      tabIndex: props.disabled ? undefined : -1,
      onKeyDown: (e: React.KeyboardEvent<HTMLElement>) => {
        if (isOpen) {
          (e.nativeEvent as any).preventDownshiftDefault = true;
        } else if (!inputValue && e.keyCode === KEY_CODES.HOME) {
          setFocusedItem(selectedItems[0]);
          e.preventDefault();
        }
      },
      onFocus: () => {
        setIsFocused(true);
      },
      onBlur: (e: React.FocusEvent<HTMLElement>) => {
        const currentTarget = e.currentTarget;

        blurTimeoutRef.current = (setTimeout(() => {
          if (!currentTarget.contains(document.activeElement)) {
            setIsFocused(false);
          }
        }, 0) as unknown) as number;
      },
      ...props
    } as any);

    const renderSelectableItem = useCallback(
      (item, index) => {
        const removeValue = () => {
          (setDownshiftState as any)({
            type: REMOVE_ITEM_STATE_TYPE,
            selectedItem: item
          });
          inputRef.current && inputRef.current.focus();
        };

        const renderedItem = renderItem({ value: item, removeValue });
        const focusRef = React.createRef();

        const clonedChild = React.cloneElement(renderedItem, {
          ...getItemProps({
            item,
            focusRef,
            onKeyDown: (e: React.KeyboardEvent<any>) => {
              if (e.keyCode === KEY_CODES.DELETE || e.keyCode === KEY_CODES.BACKSPACE) {
                e.preventDefault();
                removeValue();
              }

              if (e.keyCode === KEY_CODES.END && !inputValue) {
                inputRef.current && inputRef.current.focus();
                e.preventDefault();
              }

              if (isRtl(props)) {
                if (e.keyCode === KEY_CODES.RIGHT && index === 0) {
                  e.preventDefault();
                }

                if (e.keyCode === KEY_CODES.LEFT && index === selectedItems.length - 1) {
                  e.preventDefault();
                  inputRef.current && inputRef.current.focus();
                }
              } else {
                if (e.keyCode === KEY_CODES.LEFT && index === 0) {
                  e.preventDefault();
                }

                if (e.keyCode === KEY_CODES.RIGHT && index === selectedItems.length - 1) {
                  e.preventDefault();
                  inputRef.current && inputRef.current.focus();
                }
              }
            },
            onClick: (e: React.MouseEvent<any>) => {
              (e as any).nativeEvent.preventDownshiftDefault = true;
            },
            tabIndex: -1
          }),
          size: props.isCompact ? 'medium' : 'large'
        });

        const key = `${itemToString(item)}-${index}`;

        return <StyledMultiselectItemWrapper key={key}>{clonedChild}</StyledMultiselectItemWrapper>;
      },
      [
        getItemProps,
        inputValue,
        renderItem,
        setDownshiftState,
        itemToString,
        selectedItems,
        props,
        inputRef
      ]
    );

    const items = useMemo(() => {
      const itemValues = selectedItems || [];
      const output = [];

      for (let x = 0; x < itemValues.length; x++) {
        const item = itemValues[x];

        if (x < maxItems!) {
          if (props.disabled) {
            const renderedItem = React.cloneElement(
              renderItem({
                value: item,
                removeValue: () => {
                  return undefined;
                }
              }),
              {
                size: props.isCompact ? 'medium' : 'large'
              }
            );

            output.push(
              <StyledMultiselectItemWrapper key={x}>{renderedItem}</StyledMultiselectItemWrapper>
            );
          } else {
            output.push(renderSelectableItem(item, x));
          }
        } else if ((!isFocused && !inputValue) || props.disabled) {
          output.push(
            <StyledMultiselectItemWrapper key="more-anchor">
              <StyledMultiselectMoreAnchor
                data-test-id="show-more"
                isCompact={props.isCompact}
                isDisabled={props.disabled}
                onMouseDown={e => {
                  /**
                   * Prevent anchor from receiving focus on mouse down.
                   * This allows the input to receive focus.
                   **/
                  e.preventDefault();
                }}
              >
                {renderShowMore
                  ? renderShowMore(itemValues.length - x)
                  : `+ ${itemValues.length - x} more`}
              </StyledMultiselectMoreAnchor>
            </StyledMultiselectItemWrapper>
          );
          break;
        } else {
          output.push(renderSelectableItem(item, x));
        }
      }

      return output;
    }, [
      isFocused,
      props.disabled,
      renderSelectableItem,
      selectedItems,
      renderItem,
      inputValue,
      maxItems,
      renderShowMore,
      props.isCompact
    ]);

    return (
      <Reference>
        {({ ref: popperReference }) => (
          <StyledFauxInput
            isHovered={isLabelHovered && !isOpen}
            isFocused={isOpen ? true : isFocused}
            disabled={props.disabled}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            ref={selectRef => {
              // Pass ref to popperJS for positioning
              (popperReference as any)(selectRef);

              // Apply Select ref to global Dropdown context
              (triggerRef as React.MutableRefObject<any>).current = selectRef;
            }}
            {...getContainerProps(selectProps)}
          >
            {start && (
              <StyledFauxInput.StartIcon isDisabled={props.disabled}>
                {start}
              </StyledFauxInput.StartIcon>
            )}
            <StyledMultiselectItemsContainer isBare={props.isBare} isCompact={props.isCompact}>
              {items}
              <StyledMultiselectInput
                {...(getInputProps({
                  disabled: props.disabled,
                  onFocus: () => {
                    setFocusedItem(undefined);
                  },
                  onClick: (e: MouseEvent) => {
                    if (inputValue && inputValue.length > 0 && isOpen) {
                      (e as any).nativeEvent.preventDownshiftDefault = true;
                    }
                  },
                  onKeyDown: (e: KeyboardEvent) => {
                    if (!inputValue) {
                      if (
                        isRtl(props) &&
                        e.keyCode === KEY_CODES.RIGHT &&
                        selectedItems.length > 0
                      ) {
                        setFocusedItem(selectedItems[selectedItems.length - 1]);
                      } else if (
                        !isRtl(props) &&
                        e.keyCode === KEY_CODES.LEFT &&
                        selectedItems.length > 0
                      ) {
                        setFocusedItem(selectedItems[selectedItems.length - 1]);
                      } else if (e.keyCode === KEY_CODES.BACKSPACE && selectedItems.length > 0) {
                        (setDownshiftState as any)({
                          type: REMOVE_ITEM_STATE_TYPE,
                          selectedItem: selectedItems[selectedItems.length - 1]
                        });
                        (e as any).nativeEvent.preventDownshiftDefault = true;
                        e.preventDefault();
                        e.stopPropagation();
                      }
                    }
                  },
                  isVisible: isFocused || inputValue || selectedItems.length === 0,
                  isCompact: props.isCompact,
                  ref: inputRef,
                  placeholder: selectedItems.length === 0 ? placeholder : undefined
                }) as any)}
              />
            </StyledMultiselectItemsContainer>
            {!props.isBare && (
              <StyledFauxInput.EndIcon
                isHovered={isHovered || (isLabelHovered && !isOpen)}
                isFocused={isOpen}
                isDisabled={props.disabled}
                isRotated={isOpen}
              >
                <Chevron />
              </StyledFauxInput.EndIcon>
            )}
          </StyledFauxInput>
        )}
      </Reference>
    );
  }
);

Multiselect.propTypes = {
  isCompact: PropTypes.bool,
  isBare: PropTypes.bool,
  disabled: PropTypes.bool,
  focusInset: PropTypes.bool,
  isOpen: PropTypes.bool,
  renderItem: PropTypes.func.isRequired,
  maxItems: PropTypes.number,
  validation: PropTypes.oneOf(['success', 'warning', 'error'])
};

Multiselect.defaultProps = {
  maxItems: 4
};

/* @component */
export default withTheme(Multiselect) as React.FunctionComponent<
  IMultiselectProps & React.RefAttributes<HTMLDivElement>
>;
