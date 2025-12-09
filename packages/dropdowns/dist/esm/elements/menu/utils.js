/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import { Children, isValidElement } from 'react';

const toItem = props => ({
  value: props.value,
  label: props.label,
  ...(props.name && {
    name: props.name
  }),
  ...(props.href && {
    href: props.href
  }),
  ...(props.isDisabled && {
    disabled: props.isDisabled
  }),
  ...(props.isExternal && {
    external: props.isExternal
  }),
  ...(props.isSelected && {
    selected: props.isSelected
  }),
  ...(props.selectionType && {
    type: props.selectionType
  }),
  ...(props.type === 'next' && {
    isNext: true
  }),
  ...(props.type === 'previous' && {
    isPrevious: true
  })
});
const toItems = (children, type) => Children.toArray(children).reduce((items, item) => {
  const retVal = items;
  if (isValidElement(item)) {
    if ('value' in item.props) {
      retVal.push(toItem({
        ...item.props,
        selectionType: type
      }));
    } else {
      const props = item.props;
      const groupLabel = props.legend || props['aria-label'];
      const isSelectableGroup = props.type && ['checkbox', 'radio'].includes(props.type);
      if (groupLabel || isSelectableGroup) {
        const groupItems = toItems(props.children, props.type);
        retVal.push({
          label: props.legend || props['aria-label'],
          items: groupItems
        });
      }
    }
  }
  return retVal;
}, []);

export { toItem, toItems };
