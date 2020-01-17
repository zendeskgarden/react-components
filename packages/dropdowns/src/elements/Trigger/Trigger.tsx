/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useRef, useEffect, HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { Reference } from 'react-popper';
import { StyledInput } from '../../styled';
import useDropdownContext from '../../utils/useDropdownContext';

interface ITriggerProps extends HTMLAttributes<HTMLElement> {
  /** Used to pass the ref callback to components with non-standard ref props i.e. `innerRef` */
  refKey?: string;
}

/**
 * Applies state and a11y attributes to its children. Must be nested within a `<Dropdown>` component.
 */
const Trigger: React.FunctionComponent<ITriggerProps> = ({ children, refKey, ...triggerProps }) => {
  const {
    downshift: { getRootProps, getToggleButtonProps, getInputProps, isOpen }
  } = useDropdownContext();
  const hiddenInputRef = useRef<HTMLInputElement>(null);
  const triggerRef = useRef<HTMLElement>(null);
  const previousIsOpenRef = useRef<boolean | undefined>(undefined);

  useEffect(() => {
    // Focus internal input when Menu is opened
    if (isOpen && !previousIsOpenRef.current) {
      hiddenInputRef.current && hiddenInputRef.current.focus();
    }

    // Focus trigger when Menu is closed
    if (!isOpen && previousIsOpenRef.current) {
      triggerRef.current && triggerRef.current.focus();
    }

    previousIsOpenRef.current = isOpen;
  }, [isOpen]);

  const renderChildren = (popperRef: any) => {
    // Destructuring the `ref` argument lets us share it with PopperJS
    const { ref: rootPropsRefCallback, ...rootProps } = getRootProps();

    /**
     * Clone immediate child and provide:
     * - Necessary downshift props
     * - Ref collector based on `refKey` prop
     */
    return React.cloneElement(React.Children.only(children as any), {
      ...getToggleButtonProps({
        ...rootProps,
        ...triggerProps,
        ...(children as any).props
      }),
      [refKey!]: (childRef: HTMLElement) => {
        // Pass ref to popperJS for positioning
        popperRef(childRef);

        // Store ref locally to return focus on close
        (triggerRef as any).current = childRef;

        // Pass ref to getRootProps()
        rootPropsRefCallback(childRef);
      }
    });
  };

  return (
    <Reference>
      {({ ref: popperReference }) => (
        <>
          {renderChildren(popperReference)}
          <StyledInput
            {...getInputProps({
              readOnly: true,
              isHidden: true,
              tabIndex: -1,
              ref: hiddenInputRef,
              value: ''
            } as any)}
          />
        </>
      )}
    </Reference>
  );
};

Trigger.propTypes = {
  children: PropTypes.any,
  refKey: PropTypes.string
};

Trigger.defaultProps = {
  refKey: 'ref'
};

export default Trigger;
