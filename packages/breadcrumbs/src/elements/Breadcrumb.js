/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { Component, Children, cloneElement } from 'react';
import PropTypes from 'prop-types';

import BreadcrumbContainer from '../containers/BreadcrumbContainer';
import BreadcrumbView from '../views/BreadcrumbView';
import List from '../views/List';
import Item from '../views/Item';

/**
 * High-level abstraction for basic Breadcrumb implementations. Accepts all
 * `<div>` props.
 */
export default class Breadcrumb extends Component {
  static propTypes = {
    children: PropTypes.any
  };

  renderItems = items => {
    const retVal = [];
    const total = Children.count(items);

    Children.forEach(items, (item, index) => {
      const itemProps = {
        current: index === total - 1,
        key: index
      };

      if (item.type === Item) {
        retVal.push(cloneElement(item, itemProps));
      } else {
        retVal.push(<Item {...itemProps}>{item}</Item>);
      }
    });

    return retVal;
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
