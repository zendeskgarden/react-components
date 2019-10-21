/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import useCombinedRefs from './useCombinedRefs';

describe('useCombinedRefs()', () => {
  const Example = React.forwardRef((props, ref) => {
    const targetRef = useCombinedRefs(ref);

    return <div {...props} ref={targetRef} />;
  });

  it('does not throw if no ref is provided', () => {
    expect(() => {
      render(<Example />);
    }).not.toThrow();
  });

  it('calls function ref with correct payload', () => {
    const refSpy = jest.fn();
    const { getByTestId } = render(<Example data-test-id="element" ref={refSpy} />);

    expect(refSpy).toHaveBeenCalledWith(getByTestId('element'));
  });

  it('assigns ref object with correct payload', () => {
    const elementRef = React.createRef();
    const { getByTestId } = render(<Example data-test-id="element" ref={elementRef} />);

    expect(elementRef.current).toBe(getByTestId('element'));
  });
});
