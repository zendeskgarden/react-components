/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { Children, cloneElement, isValidElement, useState } from 'react';
import PropTypes from 'prop-types';
import { withTheme, isRtl } from '@zendeskgarden/react-theming';
import { hasType } from '@zendeskgarden/react-utilities';
import { useButtonGroup } from '@zendeskgarden/container-buttongroup';

import ButtonGroupView from '../views/button-group/ButtonGroupView';
import Button from '../views/Button';

/**
 * High-level abstraction for basic ButtonGroup implementations.
 */
const ButtonGroup = ({ id, selectedKey, onStateChange, children, ...otherProps }) => {
  const [controlledSelectedItem, setControlledSelectedItem] = useState(selectedKey);

  const { selectedItem, focusedItem, getButtonProps, getGroupProps } = useButtonGroup({
    id,
    rtl: isRtl(otherProps),
    defaultSelectedIndex: 0,
    selectedItem: selectedKey === undefined ? controlledSelectedItem : selectedKey,
    onSelect: newSelectedItem => {
      if (onStateChange) {
        onStateChange({ selectedKey: newSelectedItem });
      } else {
        setControlledSelectedItem(newSelectedItem);
      }
    }
  });

  const buttons = Children.map(children, child => {
    if (!isValidElement(child)) {
      return child;
    }

    if (hasType(child, Button)) {
      if (child.props.disabled) {
        return child;
      }

      const key = child.key;

      if (!key) {
        throw new Error('"key" prop must be provided to Button');
      }

      const focusRef = React.createRef();

      return cloneElement(
        child,
        getButtonProps({
          key,
          selected: key === selectedItem,
          focused: key === focusedItem,
          item: key,
          focusRef,
          ...child.props
        })
      );
    }

    return child;
  });

  return <ButtonGroupView {...getGroupProps(otherProps)}>{buttons}</ButtonGroupView>;
};

ButtonGroup.propTypes = {
  id: PropTypes.any,
  children: PropTypes.any,
  /**
   * Currently selected tab to display
   */
  selectedKey: PropTypes.any,
  /**
   * @param {Object} newState
   * @param {Any} newState.selectedKey - The newly selected key
   */
  onStateChange: PropTypes.func
};

export default withTheme(ButtonGroup);
