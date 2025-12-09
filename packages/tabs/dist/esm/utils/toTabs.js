/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import { Children, isValidElement } from 'react';

const toTabs = children => Children.toArray(children).reduce((_items, child) => {
  const retVal = _items;
  if (isValidElement(child)) {
    if ('item' in child.props) {
      const props = child.props;
      retVal.push({
        value: props.item,
        disabled: props.disabled
      });
    } else {
      const childItems = toTabs(child.props.children);
      retVal.push(...childItems);
    }
  }
  return retVal;
}, []);

export { toTabs };
