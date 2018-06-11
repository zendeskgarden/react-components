The `hasType` method is a utility to easily determine whether a given React
component is implemented with a specific type. This utility is also able to
compare Garden View components that are wrapped in an styling-HOC
including [styled-components](https://www.npmjs.com/package/styled-components)
and [react-fela](https://www.npmjs.com/package/react-fela).

```jsx static
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { Component, Children, cloneElement } from 'react';
import { Button } from '@zendeskgarden/react-buttons';
import { hasType } from '@zendeskgarden/react-utilities';

export default class ExampleComponent extends Component {
  render() {
    const { children } = this.props;

    return Children.map(children, child => {
      /* Determine if a child is a button and apply red color */
      if (hasType(child, Button)) {
        return cloneElement(
          child,
          { style: { color: 'red' }
        );
      }

      return child;
    });
  }
}
```
