/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { IdManager, ControlledComponent, FieldContainer } from '@zendesk/garden-react-selection';

import TextGroup from '../views/TextGroup';
import Label from '../views/Label';
import Input from '../views/Input';
import Textarea from '../views/Textarea';
import Hint from '../views/Hint';
import Message from '../views/Message';

/** Accepts all `<div>` props */
export default class TextField extends ControlledComponent {
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
          <TextGroup {...otherProps}>
            {Children.map(children, child => {
              if (child.type === Label) {
                return cloneElement(child, getLabelProps(child.props));
              }

              if (child.type === Input || child.type === Textarea) {
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
          </TextGroup>
        )}
      </FieldContainer>
    );
  }
}
