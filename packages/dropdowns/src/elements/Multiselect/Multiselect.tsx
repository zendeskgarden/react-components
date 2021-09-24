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

export interface IMultiselectProps extends HTMLAttributes<HTMLDivElement> {
  /** Applies compact styling */
  isCompact?: boolean;
  /** Removes borders and padding */
  isBare?: boolean;
  /** Indicates that the element is not interactive */
  disabled?: boolean;
  /** Applies inset `box-shadow` styling on focus */
  focusInset?: boolean;
  /** Defines text that appears in the element when no items are selected */
  placeholder?: string;
  /** Defines the element's validation state */
  validation?: VALIDATION;
  /** Determines the maximum number of items displayed while collapsed */
  maxItems?: number;
  /**
   * Overrides the "+ N more" text displayed when the total number of items exceeds `maxItems`
   *
   * @param {number} value The number of hidden items
   * @returns {string} a replacement for the "+ N more" text
   */
  renderShowMore?: (value: number) => string;
  /**
   * Renders each item element. Designed to be used with [Tag](/components/tags).
   *
   * @param {Object} options Rendered item options
   * @param {any} options.value The item value
   * @param {Function} options.removeValue Remove item callback
   * @returns {React.ReactElement} the item element
   */
  renderItem: (options: { value: any; removeValue: () => void }) => React.ReactElement;
  /** Provides DOM access to the underlying input element */
  inputRef?: React.Ref<HTMLInputElement>;
  /** Defines the icon rendered before the element's content */
  start?: any;
}

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
      previousIndexRef,
      downshift: {
        getToggleButtonProps,
        getRootProps,
        getInputProps,
        isOpen,
        closeMenu,
        inputValue,
        setState: setDownshiftState,
        itemToString
      },
      setDropdownType
    } = useDropdownContext();
    const { isLabelHovered } = useFieldContext();
    const inputRef = useCombinedRefs<HTMLInputElement>(externalInputRef);
    const triggerRef = useCombinedRefs<HTMLDivElement>(popperReferenceElementRef, ref);
    const blurTimeoutRef = useRef<number | undefined>();
    const previousIsOpenRef = useRef<boolean | undefined>(undefined);
    const previousIsFocusedRef = useRef<boolean | undefined>(undefined);
    const [isHovered, setIsHovered] = useState(false);
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
      if (inputRef.current) {
        if (isOpen && !previousIsOpenRef.current) {
          inputRef.current.focus();
        } else if (isFocused && !previousIsFocusedRef.current && focusedItem === undefined) {
          inputRef.current.focus();
        }
      }

      previousIsOpenRef.current = isOpen;
      previousIsFocusedRef.current = isFocused;
    }, [isOpen, inputRef, isFocused, focusedItem]);

    /**
     * Close menu when an item becomes focused
     */
    useEffect(() => {
      if (focusedItem !== undefined && isOpen) {
        closeMenu();
      }
    }, [focusedItem, isOpen, closeMenu]);

    /**
     * Destructure type out of props so that `type="button"`
     * is not spread onto the MultiSelect Dropdown `div`.
     */
    /* eslint-disable @typescript-eslint/no-unused-vars */
    const { type, ...selectProps } = getToggleButtonProps(
      getRootProps({
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

          blurTimeoutRef.current = setTimeout(() => {
            if (!currentTarget.contains(document.activeElement)) {
              setIsFocused(false);
            }
          }, 0) as unknown as number;
        },
        onMouseEnter: composeEventHandlers(props.onMouseEnter, () => setIsHovered(true)),
        onMouseLeave: composeEventHandlers(props.onMouseLeave, () => setIsHovered(false)),
        /**
         * Ensure that [role="combobox"] is applied directly to the input
         * for Safari screenreader support
         */
        role: null,
        ...props
      } as any)
    );

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

    const isContainerHovered = isLabelHovered && !isOpen;
    const isContainerFocused = isOpen || isFocused;

    useEffect(() => {
      setDropdownType('multiselect');
    }, [setDropdownType]);

    return (
      <Reference>
        {({ ref: popperReference }) => (
          <StyledFauxInput
            data-test-is-open={isOpen}
            data-test-is-hovered={isContainerHovered}
            data-test-is-focused={isContainerFocused}
            {...getContainerProps({
              ...selectProps,
              isHovered: isContainerHovered,
              isFocused: isContainerFocused,
              ref: (selectRef: any) => {
                // Pass ref to popperJS for positioning
                (popperReference as any)(selectRef);

                // Apply Select ref to global Dropdown context
                (triggerRef as React.MutableRefObject<any>).current = selectRef;
              }
            })}
          >
            {start && (
              <StyledFauxInput.StartIcon
                isHovered={isHovered || (isLabelHovered && !isOpen)}
                isFocused={isContainerFocused}
                isDisabled={props.disabled}
              >
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
                        selectedItems.length > 0 &&
                        previousIndexRef.current === undefined
                      ) {
                        setFocusedItem(selectedItems[selectedItems.length - 1]);
                      } else if (
                        !isRtl(props) &&
                        e.keyCode === KEY_CODES.LEFT &&
                        selectedItems.length > 0 &&
                        previousIndexRef.current === undefined
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
                  role: 'combobox',
                  ref: inputRef,
                  placeholder: selectedItems.length === 0 ? placeholder : undefined
                }) as any)}
              />
            </StyledMultiselectItemsContainer>
            {!props.isBare && (
              <StyledFauxInput.EndIcon
                isHovered={isHovered || (isLabelHovered && !isOpen)}
                isFocused={isContainerFocused}
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
  renderItem: PropTypes.func.isRequired,
  maxItems: PropTypes.number,
  validation: PropTypes.oneOf(['success', 'warning', 'error'])
};

Multiselect.defaultProps = {
  maxItems: 4
};

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export default withTheme(Multiselect) as React.FunctionComponent<
  IMultiselectProps & React.RefAttributes<HTMLDivElement>
>;
