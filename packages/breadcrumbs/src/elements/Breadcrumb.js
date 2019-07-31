/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { hasType } from '@zendeskgarden/react-utilities';
import { useBreadcrumb } from '@zendeskgarden/container-breadcrumb';

import BreadcrumbView from '../views/BreadcrumbView';
import List from '../views/List';
import Item from '../views/Item';

/**
 * High-level abstraction for basic Breadcrumb implementations. Accepts all
 * `<ol>` props.
 */
const renderPage = (page, pageProps, itemProps) => {
  return <Item {...itemProps}>{itemProps.current ? cloneElement(page, pageProps) : page}</Item>;
};

const renderItems = (items, getCurrentPageProps) => {
  const total = Children.count(items);

  return Children.map(items, (item, index) => {
    const itemProps = {
      current: index === total - 1,
      key: index
    };

    return hasType(item, Item)
      ? cloneElement(item, itemProps)
      : renderPage(item, getCurrentPageProps(), itemProps);
  });
};

/** @component */
export default function Breadcrumb({ children, ...breadcrumbProps }) {
  const { getContainerProps, getCurrentPageProps } = useBreadcrumb();

  return (
    /* role not needed as `BreadcrumbView` is a navigation landmark. */
    <BreadcrumbView {...getContainerProps({ role: null })}>
      <List {...breadcrumbProps}>{renderItems(children, getCurrentPageProps)}</List>
    </BreadcrumbView>
  );
}

Breadcrumb.propTypes = {
  children: PropTypes.any
};
