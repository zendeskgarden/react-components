/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useRef, useEffect, useState, PropsWithChildren, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Reference } from 'react-popper';
import { useSelection } from '@zendeskgarden/container-selection';
import {
  StyledMultiselectInput,
  StyledSelect,
  StyledItemWrapper,
  StyledMoreAnchor,
  VALIDATION
} from '../styled';
import useDropdownContext from '../utils/useDropdownContext';
import useFieldContext from '../utils/useFieldContext';
import { KEY_CODES } from '@zendeskgarden/container-utilities';
import { REMOVE_ITEM_STATE_TYPE } from '../Dropdown/Dropdown';

interface IMultiselectProps {
  /** Applies flex layout to support MediaFigure components */
  mediaLayout?: boolean;
  small?: boolean;
  /** Removes all borders and styling */
  bare?: boolean;
  disabled?: boolean;
  focused?: boolean;
  /** Applies inset `box-shadow` styling on focus */
  focusInset?: boolean;
  hovered?: boolean;
  /** Displays select open state */
  open?: boolean;
  placeholder?: string;
  validation?: VALIDATION;
  /** Number of items to show in the collapsed state. Default of 4. */
  maxItems: number;
  renderShowMore?: (index: number) => string;
  renderItem: (options: { value: any; removeValue: () => void }) => React.ReactElement;
}

/**
 * Applies state and a11y attributes to its children. Must be nested within a `<Field>` component.
 */
const Multiselect = ({
  renderItem,
  placeholder,
  maxItems,
  renderShowMore,
  ...props
}: PropsWithChildren<IMultiselectProps>) => {
  const {
    popperReferenceElementRef,
    selectedItems,
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
  const inputRef = useRef<HTMLInputElement>(null);
  const triggerRef = useRef<HTMLElement>(null);
  const previousIsOpenRef = useRef<boolean | undefined>(undefined);
  const [isFocused, setIsFocused] = useState(false);
  const [focusedItem, setFocusedItem] = useState(undefined);

  const { getContainerProps, getItemProps } = useSelection({
    rtl: false,
    focusedItem,
    selectedItem: undefined,
    onFocus: (item: any) => {
      setFocusedItem(item);
    }
  });

  useEffect(() => {
    containsMultiselectRef.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // Focus internal input when Menu is opened
    if (isOpen && !previousIsOpenRef.current) {
      inputRef.current && inputRef.current.focus();
    }

    // Focus trigger when Menu is closed
    if (!isOpen && previousIsOpenRef.current) {
      triggerRef.current && triggerRef.current.focus();
    }
    previousIsOpenRef.current = isOpen;
  }, [isOpen]);

  const selectProps = getToggleButtonProps({
    onKeyDown: e => {
      if (isOpen) {
        (e.nativeEvent as any).preventDownshiftDefault = true;
      } else if (!inputValue && e.keyCode === KEY_CODES.HOME) {
        setFocusedItem(selectedItems![0]);
        e.preventDefault();
      }
    },
    onFocus: () => {
      setIsFocused(true);
    },
    onBlur: (e: React.FocusEvent<HTMLElement>) => {
      if (!e.currentTarget.contains(e.relatedTarget as Node)) {
        setIsFocused(false);

        e.preventDefault();
        (e.nativeEvent as any).preventDownshiftDefault = true;
      }
    },
    ...props
  });

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

      const clonedChild = React.cloneElement(
        renderedItem,
        getItemProps({
          item,
          focusRef,
          onKeyDown: (e: KeyboardEvent) => {
            if (e.keyCode === KEY_CODES.DELETE || e.keyCode === KEY_CODES.BACKSPACE) {
              e.preventDefault();
              removeValue();
            }

            if (e.keyCode === KEY_CODES.END && !inputValue) {
              inputRef.current && inputRef.current.focus();
              e.preventDefault();
            }

            if (e.keyCode === KEY_CODES.LEFT && index === 0) {
              e.preventDefault();
            }

            if (e.keyCode === KEY_CODES.RIGHT && index === selectedItems!.length - 1) {
              e.preventDefault();
              inputRef.current && inputRef.current.focus();
            }
          },
          onClick: (e: MouseEvent) => {
            (e as any).nativeEvent.preventDownshiftDefault = true;
          },
          tabIndex: -1
        })
      );

      const key = `${itemToString(item)}-${index}`;

      return <StyledItemWrapper key={key}>{clonedChild}</StyledItemWrapper>;
    },
    [getItemProps, inputValue, renderItem, setDownshiftState, itemToString, selectedItems]
  );

  const items = useMemo(() => {
    if (!props.disabled) {
      const itemValues = selectedItems || [];
      const output = [];

      for (let x = 0; x < itemValues.length; x++) {
        const item = itemValues[x];

        if (x < maxItems) {
          output.push(renderSelectableItem(item, x));
        } else if (!isFocused && !inputValue) {
          output.push(
            <StyledMoreAnchor key="more-anchor">
              {renderShowMore
                ? renderShowMore(itemValues.length - x)
                : `+ ${itemValues.length - x} more`}
            </StyledMoreAnchor>
          );
          break;
        } else {
          output.push(renderSelectableItem(item, x));
        }
      }

      return output;
    }

    return (selectedItems || []).map((item, index) => {
      // eslint-disable-next-line no-empty-function
      const renderedItem = renderItem({ value: item, removeValue: () => {} });

      return <StyledItemWrapper key={index}>{renderedItem}</StyledItemWrapper>;
    });
  }, [
    isFocused,
    props.disabled,
    renderSelectableItem,
    selectedItems,
    renderItem,
    inputValue,
    maxItems,
    renderShowMore
  ]);

  return (
    <Reference>
      {({ ref: popperReference }) => (
        <StyledSelect
          {...getContainerProps({
            ...selectProps,
            tagLayout: true,
            hovered: isLabelHovered && !isOpen,
            focused: isOpen ? true : isFocused,
            open: isOpen,
            ref: (selectRef: any) => {
              // Pass ref to popperJS for positioning
              popperReference(selectRef);

              // Store ref locally to return focus on close
              (triggerRef as any).current = selectRef;

              // Apply Select ref to global Dropdown context
              popperReferenceElementRef.current = selectRef;
            }
          })}
        >
          {items}
          <StyledMultiselectInput
            {...(getInputProps({
              disabled: props.disabled,
              onFocus: () => {
                setFocusedItem(undefined);
              },
              onKeyDown: (e: KeyboardEvent) => {
                if (!inputValue) {
                  if (e.keyCode === KEY_CODES.LEFT && selectedItems!.length > 0) {
                    setFocusedItem(selectedItems![selectedItems!.length - 1]);
                  } else if (e.keyCode === KEY_CODES.BACKSPACE && selectedItems!.length > 0) {
                    (setDownshiftState as any)({
                      type: REMOVE_ITEM_STATE_TYPE,
                      selectedItem: selectedItems![selectedItems!.length - 1]
                    });
                    (e as any).nativeEvent.preventDownshiftDefault = true;
                    e.preventDefault();
                    e.stopPropagation();
                  }
                }
              },
              onBlur: () => {
                closeMenu();
              },
              isVisible: isFocused || inputValue || selectedItems!.length === 0,
              isSmall: props.small,
              ref: inputRef,
              placeholder: selectedItems!.length === 0 ? placeholder : undefined
            }) as any)}
          />
        </StyledSelect>
      )}
    </Reference>
  );
};

Multiselect.propTypes = {
  /** Applies flex layout to support MediaFigure components */
  mediaLayout: PropTypes.bool,
  small: PropTypes.bool,
  /** Removes all borders and styling */
  bare: PropTypes.bool,
  disabled: PropTypes.bool,
  focused: PropTypes.bool,
  /** Applies inset `box-shadow` styling on focus */
  focusInset: PropTypes.bool,
  hovered: PropTypes.bool,
  /** Displays select open state */
  open: PropTypes.bool,
  renderItem: PropTypes.func.isRequired,
  maxItems: PropTypes.number,
  validation: PropTypes.oneOf([VALIDATION.SUCCESS, VALIDATION.WARNING, VALIDATION.ERROR])
};

Multiselect.defaultProps = {
  maxItems: 4
};

export default Multiselect;
