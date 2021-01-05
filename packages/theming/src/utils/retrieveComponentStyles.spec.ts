/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import retrieveComponentStyles from './retrieveComponentStyles';

describe('retrieveComponentStyles', () => {
  const COMPONENT_ID = 'component-id';
  const EXAMPLE_STYLE = 'test-style';

  it('returns undefined if no matching styles is found', () => {
    const styles = retrieveComponentStyles(COMPONENT_ID, { theme: {} });

    expect(styles).toBeUndefined();
  });

  it('calls style as method if provided as a function', () => {
    const componentStyles = jest.fn().mockReturnValue(EXAMPLE_STYLE);

    const componentStyle = retrieveComponentStyles(COMPONENT_ID, {
      theme: { components: { [COMPONENT_ID]: componentStyles } }
    });

    expect(componentStyles).toHaveBeenCalled();
    expect(componentStyle).toBe(EXAMPLE_STYLE);
  });

  it('returns style directly if found', () => {
    const componentStyle = retrieveComponentStyles(COMPONENT_ID, {
      theme: { components: { [COMPONENT_ID]: EXAMPLE_STYLE } }
    });

    expect(componentStyle).toBe(EXAMPLE_STYLE);
  });
});
