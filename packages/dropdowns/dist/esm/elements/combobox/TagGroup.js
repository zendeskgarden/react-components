/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default from 'react';
import { Tag } from './Tag.js';

const TagGroup = _ref => {
  let {
    children,
    isDisabled,
    isExpanded,
    listboxZIndex,
    maxTags,
    optionTagProps,
    selection
  } = _ref;
  return React__default.createElement(React__default.Fragment, null, selection.map((option, index) => {
    const disabled = isDisabled || option.disabled;
    return React__default.createElement(Tag, Object.assign({
      key: option.value,
      hidden: !isExpanded && index >= maxTags,
      option: {
        ...option,
        disabled
      },
      tooltipZIndex: listboxZIndex ? listboxZIndex + 1 : undefined
    }, optionTagProps[option.value]));
  }), children);
};
TagGroup.displayName = 'TagGroup';

export { TagGroup };
