/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import { useKeyboardFocus } from '@zendeskgarden/container-keyboardfocus';
import { composeEventHandlers } from '@zendeskgarden/container-utilities';
import { FieldContext } from './common/Field';
import useFieldContext from '../utils/useFieldContext';
import { StyledCheck, StyledCheckInput } from '../styled';

export const CheckboxContext = createContext(undefined);

/**
 * Accepts all `<input type="checkbox" />` props
 */
const Checkbox = React.forwardRef(({ children, ...props }, ref) => {
  const { getLabelProps, ...fieldCtx } = useFieldContext();
  const { getFocusProps, keyboardFocused } = useKeyboardFocus();

  /**
   * Due to us applying keyboard-only focus events to 2 separate elements (the input and label)
   * we must apply the original `onMouseDown` event to the `onMouseUp` event of the label.
   *
   * By passing the original props within `getFocusProps` we are able to allow
   * `event.preventDefault()` to still prevent chained events as expected.
   */
  const { onMouseDown: onFocusMouseDown, ...keyboardFocusedProps } = getFocusProps(props);

  const modifiedFieldCtx = {
    getLabelProps: ({ onMouseUp, ...other }) =>
      getLabelProps({ onMouseUp: composeEventHandlers(onMouseUp, onFocusMouseDown), ...other }),
    ...fieldCtx
  };

  return (
    <FieldContext.Provider value={modifiedFieldCtx}>
      <CheckboxContext.Provider value={{ isFocused: keyboardFocused }}>
        <StyledCheck>
          <StyledCheckInput
            {...modifiedFieldCtx.getInputProps({
              'data-garden-id': 'forms.checkbox',
              'data-garden-version': PACKAGE_VERSION,
              ref,
              ...keyboardFocusedProps
            })}
          />
          {children}
        </StyledCheck>
      </CheckboxContext.Provider>
    </FieldContext.Provider>
  );
});

Checkbox.propTypes = {
  children: PropTypes.node
};

export default Checkbox;
