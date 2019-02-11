/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { Children, cloneElement, isValidElement } from 'react';
import PropTypes from 'prop-types';
import { IdManager, ControlledComponent, FieldContainer } from '@zendeskgarden/react-selection';
import { hasType } from '@zendeskgarden/react-utilities';

import Range from './Range';
import MultiThumbRange from './MultiThumbRange';
import RangeGroup from '../views/RangeGroup';
import Label from '../views/Label';
import Hint from '../views/Hint';

/** Accepts all `<div>` props */
export default class RangeField extends ControlledComponent {
  static propTypes = {
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

  constructor(...args) {
    super(...args);

    this.state = {
      id: IdManager.generateId('garden-range-field')
    };
  }

  render() {
    const { id } = this.getControlledState();
    const { children, ...otherProps } = this.props;

    let isDescribed = false;

    Children.forEach(children, child => {
      if (hasType(child, Hint)) {
        isDescribed = true;
      }
    });

    return (
      <FieldContainer id={id}>
        {({ getLabelProps, getInputProps, getHintProps }) => (
          <RangeGroup {...otherProps}>
            {Children.map(children, child => {
              if (!isValidElement(child)) {
                return child;
              }

              if (hasType(child, Label)) {
                return cloneElement(child, getLabelProps(child.props));
              }

              if (hasType(child, Range) || hasType(child, MultiThumbRange)) {
                return cloneElement(child, getInputProps(child.props, { isDescribed }));
              }

              if (hasType(child, Hint)) {
                return cloneElement(child, getHintProps(child.props));
              }

              return child;
            })}
          </RangeGroup>
        )}
      </FieldContainer>
    );
  }
}
