/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import Button from './Button';
import TestIcon from '@zendeskgarden/svg-icons/src/16/gear-stroke.svg';

describe('Button', () => {
  it('is rendered as a button', () => {
    const { container } = render(<Button />);

    expect(container.firstChild!.nodeName).toBe('BUTTON');
  });

  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLButtonElement>();
    const { container } = render(<Button ref={ref} />);

    expect(container.firstChild).toBe(ref.current);
  });

  describe('Icons', () => {
    it('successfully renders start and end icons', () => {
      const { getByTestId } = render(
        <Button start={<TestIcon data-test-id="start" />} end={<TestIcon data-test-id="end" />} />
      );

      expect(getByTestId('start')).not.toBeNull();
      expect(getByTestId('end')).not.toBeNull();
    });

    it('renders icon rotation', () => {
      const { getByTestId } = render(
        <Button start={<TestIcon data-test-id="icon" />} isStartRotated />
      );

      expect(getByTestId('icon')).toHaveStyleRule('transform', 'rotate(+180deg)');
    });

    it('renders RTL icon rotation', () => {
      const { getByTestId } = renderRtl(
        <Button end={<TestIcon data-test-id="icon" />} isEndRotated />
      );

      expect(getByTestId('icon')).toHaveStyleRule('transform', 'rotate(-180deg)');
    });
  });
});
