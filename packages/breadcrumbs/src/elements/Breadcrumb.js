/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { Component, Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { hasType } from '@zendeskgarden/react-utilities';

import BreadcrumbContainer from '../containers/BreadcrumbContainer';
import BreadcrumbView from '../views/BreadcrumbView';
import List from '../views/List';
import Item from '../views/Item';

/**
 * High-level abstraction for basic Breadcrumb implementations. Accepts all
 * `<ol>` props.
 */
export default class Breadcrumb extends Component {
  static propTypes = {
    children: PropTypes.any
  };

  renderItems = items => {
    const total = Children.count(items);

    return Children.map(items, (item, index) => {
      let retVal;
      const itemProps = {
        current: index === total - 1,
        key: index
      };

      if (hasType(item, Item)) {
        retVal = cloneElement(item, itemProps);
      } else {
        retVal = <Item {...itemProps}>{item}</Item>;
      }

      return retVal;
    });
  };

  render() {
    const { children, ...breadcrumbProps } = this.props;

    return (
      <BreadcrumbContainer>
        {({ getContainerProps }) => (
          /* role not needed as `BreadcrumbView` is a navigation landmark. */
          <BreadcrumbView {...getContainerProps({ role: null })}>
            <List {...breadcrumbProps}>{this.renderItems(children)}</List>
          </BreadcrumbView>
        )}
      </BreadcrumbContainer>
    );
  }
}
