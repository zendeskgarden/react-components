/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { render, screen } from 'garden-test-utils';
import React from 'react';

import { useSheetContext } from '../../../utils/useSheetContext';
import { Close } from './Close';

type IMockUseSheetContextReturnValue = {
  useSheetContext: () => {
    setIsCloseButtonPresent: jest.Mock;
  };
};

jest.mock<IMockUseSheetContextReturnValue>('../../../utils/useSheetContext', () => {
  const setIsCloseButtonPresent = jest.fn();

  return {
    useSheetContext: () => ({
      setIsCloseButtonPresent
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

  describe('functionality', () => {
    it('calls setIsCloseButtonPresent when mounting and unmounting', () => {
      const { unmount } = render(<Close />);
      const { setIsCloseButtonPresent } = useSheetContext();

      expect(setIsCloseButtonPresent).toHaveBeenCalledWith(true);

      unmount();

      expect(setIsCloseButtonPresent).toHaveBeenCalledWith(false);
      expect(setIsCloseButtonPresent).toHaveBeenCalledTimes(2);
    });
  });
});
