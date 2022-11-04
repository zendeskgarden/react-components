/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, {
  KeyboardEventHandler,
  MouseEventHandler,
  RefObject,
  TouchEventHandler
} from 'react';
import userEvent from '@testing-library/user-event';
import { fireEvent, render } from 'garden-test-utils';
import { PaneProvider } from '../PaneProvider';
import { Pane } from '../Pane';
import { Splitter } from './Splitter';

const UncontrolledTestSplitter = ({
  splitterRef,
  splitterOnMouseDown,
  splitterOnTouchStart,
  splitterOnKeyDown,
  splitterClick,
  isFixed
}: {
  splitterRef?: RefObject<HTMLDivElement>;
  splitterOnMouseDown?: MouseEventHandler<HTMLDivElement>;
  splitterOnTouchStart?: TouchEventHandler<HTMLDivElement>;
  splitterOnKeyDown?: KeyboardEventHandler<HTMLDivElement>;
  splitterClick?: MouseEventHandler<HTMLDivElement>;
  isFixed?: boolean;
}) => {
  return (
    <PaneProvider
      totalPanesWidth={1}
      totalPanesHeight={1}
      defaultColumnValues={{ a: 1, b: 1 }}
      defaultRowValues={{}}
    >
      {() => (
        <Pane>
          <Splitter
            ref={splitterRef}
            layoutKey="a"
            min={0}
            max={1}
            orientation="end"
            onMouseDown={splitterOnMouseDown}
            onTouchStart={splitterOnTouchStart}
            onKeyDown={splitterOnKeyDown}
            onClick={splitterClick}
            isFixed={isFixed}
          />
        </Pane>
      )}
    </PaneProvider>
  );
};

describe('Splitter', () => {
  const user = userEvent.setup();

  it('is rendered as a div', () => {
    const { getByRole } = render(<UncontrolledTestSplitter />);

    expect(getByRole('separator').nodeName).toBe('DIV');
  });

  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLDivElement>();

    render(<UncontrolledTestSplitter splitterRef={ref} />);

    expect(ref.current?.getAttribute('role')).toBe('separator');
  });

  it('behaves as expected in fixed mode', async () => {
    const { getByRole } = render(<UncontrolledTestSplitter isFixed />);
    const splitter = getByRole('separator');

    await user.click(splitter);

    expect(splitter).toHaveAttribute('aria-valuenow', '0');
  });

  describe('composed events', () => {
    it('handles click prop', async () => {
      let value = false;
      const { getByRole } = render(
        <UncontrolledTestSplitter
          splitterClick={() => {
            value = true;
          }}
        />
      );
      const splitter = getByRole('separator');

      await user.click(splitter);

      expect(value).toBe(true);
    });

    it('handles onMouseDown prop', () => {
      let value = false;
      const { getByRole } = render(
        <UncontrolledTestSplitter
          splitterOnMouseDown={() => {
            value = true;
          }}
        />
      );
      const splitter = getByRole('separator');

      fireEvent.mouseDown(splitter);

      expect(value).toBe(true);
    });

    it('handles onTouchStart prop', () => {
      let value = false;
      const { getByRole } = render(
        <UncontrolledTestSplitter
          splitterOnTouchStart={() => {
            value = true;
          }}
        />
      );
      const splitter = getByRole('separator');

      fireEvent.touchStart(splitter);

      expect(value).toBe(true);
    });

    it('handles onKeyDown prop', () => {
      let value = false;
      const { getByRole } = render(
        <UncontrolledTestSplitter
          splitterOnKeyDown={() => {
            value = true;
          }}
        />
      );
      const splitter = getByRole('separator');

      fireEvent.keyDown(splitter);

      expect(value).toBe(true);
    });
  });
});
