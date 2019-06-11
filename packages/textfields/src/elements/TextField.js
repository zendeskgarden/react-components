/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { Children, cloneElement, isValidElement, useRef } from 'react';
import PropTypes from 'prop-types';
import { IdManager, FieldContainer } from '@zendeskgarden/react-selection';
import { hasType } from '@zendeskgarden/react-utilities';

import TextGroup from '../views/TextGroup';
import Label from '../views/Label';
import Input from '../views/Input';
import Textarea from '../views/Textarea';
import Hint from '../views/Hint';

/** Accepts all `<div>` props */
const TextField = React.forwardRef(({ id, children, ...otherProps }, ref) => {
  const idRef = useRef(IdManager.generateId('garden-text-field'));

  let isDescribed = false;

  Children.forEach(children, child => {
    if (hasType(child, Hint)) {
      isDescribed = true;
    }
  });

  return (
    <FieldContainer id={id || idRef.current}>
      {({ getLabelProps, getInputProps, getHintProps }) => (
        <TextGroup {...otherProps} ref={ref}>
          {Children.map(children, child => {
            if (!isValidElement(child)) {
              return child;
            }

            if (hasType(child, Label)) {
              return cloneElement(child, getLabelProps(child.props));
            }

            if (hasType(child, Input) || hasType(child, Textarea)) {
              return cloneElement(child, getInputProps(child.props, { isDescribed }));
            }

            if (hasType(child, Hint)) {
              return cloneElement(child, getHintProps(child.props));
            }

            return child;
          })}
        </TextGroup>
      )}
    </FieldContainer>
  );
});

TextField.propTypes = {
  /**
   * The root ID to use for descendants. A unique ID is created if none is provided.
   **/
  id: PropTypes.string,
  /**
   * Apply inline styling to all children
   */
  inline: PropTypes.bool,
  children: PropTypes.node
};

/** @component */
export default TextField;
