/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import { Children, isValidElement } from 'react';

const toOption = props => {
  return {
    value: props.value,
    label: props.label,
    hidden: props.isHidden,
    disabled: props.isDisabled,
    selected: props.isSelected
  };
};
const toOptions = (children, optionTagProps) => Children.toArray(children).reduce((options, option) => {
  const retVal = options;
  if (isValidElement(option)) {
    if ('value' in option.props) {
      retVal.push(toOption(option.props));
      optionTagProps[option.props.value] = option.props.tagProps;
    } else {
      const props = option.props;
      const groupOptions = toOptions(props.children, optionTagProps);
      retVal.push({
        label: props.legend,
        options: groupOptions
      });
    }
  }
  return retVal;
}, []);

export { toOption, toOptions };
