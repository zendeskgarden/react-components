/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { IdManager, ControlledComponent, FieldContainer } from '@zendeskgarden/react-selection';

import Range from './Range';
import RangeGroup from '../views/RangeGroup';
import Label from '../views/Label';
import Hint from '../views/Hint';
import Message from '../views/Message';

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
      id: IdManager.generateId()
    };
  }

  render() {
    const { id } = this.getControlledState();
    const { children, ...otherProps } = this.props;

    return (
      <FieldContainer id={id}>
        {({ getLabelProps, getInputProps, getHintProps, getMessageProps }) => (
          <RangeGroup {...otherProps}>
            {Children.map(children, child => {
              if (child.type === Label) {
                return cloneElement(child, getLabelProps(child.props));
              }

              if (child.type === Range) {
                return cloneElement(child, getInputProps(child.props));
              }

              if (child.type === Hint) {
                return cloneElement(child, getHintProps(child.props));
              }

              if (child.type === Message) {
                return cloneElement(child, getMessageProps(child.props));
              }

              return child;
            })}
          </RangeGroup>
        )}
      </FieldContainer>
    );
  }
}
