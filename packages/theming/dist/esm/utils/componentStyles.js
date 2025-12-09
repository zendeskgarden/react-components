/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
const componentStyles = props => {
  let retVal;
  const components = props.theme.components;
  const componentId = props.componentId || props['data-garden-id'];
  if (components && componentId) {
    retVal = components[componentId];
    if (typeof retVal === 'function') {
      const fn = retVal;
      retVal = fn(props);
    }
  }
  return retVal;
};

export { componentStyles };
