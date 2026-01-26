/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { render } from 'garden-test-utils';
import React from 'react';

import { TooltipDialog } from '../elements/TooltipDialog/TooltipDialog';
import { useTooltipDialogContext } from './useTooltipDialogContext';

describe('useTooltipDialogContext', () => {
  const TooltipDialogContextConsumer = () => {
    const context = useTooltipDialogContext();

    return <div>{!!context && 'it worked'}</div>;
  };

  it('throws if called outside of TooltipDialog component', () => {
    const originalError = console.error;

    console.error = jest.fn();

    const Example = () => <TooltipDialogContextConsumer />;

    expect(() => {
      render(<Example />);
    }).toThrow();

    console.error = originalError;
  });

  it('does not throw if called within TooltipDialog component', () => {
    const Example = () => (
      <TooltipDialog>
        <TooltipDialogContextConsumer />
      </TooltipDialog>
    );

    expect(() => {
      render(<Example />);
    }).not.toThrow();
  });
});
