/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, screen } from 'garden-test-utils';

import { SheetClose as Close } from './Close';

import { useSheetContext } from '../../../utils/useSheetContext';

jest.mock('../../../utils/useSheetContext', () => {
  const setCloseButtonPresent = jest.fn();

  return {
    useSheetContext: () => ({
      setCloseButtonPresent
    })
  };
});

describe('Sheet.Close', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLButtonElement>();

    render(<Close ref={ref} />);

    const btn = screen.getByRole('button');

    expect(btn).toBe(ref.current);
  });

  it('calls setCloseButtonPresent when mounting and unmounting', () => {
    const { unmount } = render(<Close />);
    const { setCloseButtonPresent } = useSheetContext();

    expect(setCloseButtonPresent).toHaveBeenCalledWith(true);

    unmount();

    expect(setCloseButtonPresent).toHaveBeenCalledWith(false);
    expect(setCloseButtonPresent).toHaveBeenCalledTimes(2);
  });
});
