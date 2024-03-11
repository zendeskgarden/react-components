/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { getColorV8, PALETTE } from '@zendeskgarden/react-theming';
import { StyledButton } from './StyledButton';

describe('StyledButton', () => {
  it('renders the expected element', () => {
    const { container } = render(<StyledButton />);

    expect(container.firstChild!.nodeName).toBe('BUTTON');
  });

  it('renders default styling', () => {
    const { container } = render(<StyledButton />);

    expect(container.firstChild).toHaveStyleRule('display', 'inline-flex');
  });

  it('renders basic styling if provided', () => {
    const { container } = render(<StyledButton isBasic />);

    expect(container.firstChild).toHaveStyleRule('background-color', 'transparent');
  });

  it('renders danger styling if provided', () => {
    const { container } = render(<StyledButton isDanger />);

    expect(container.firstChild).toHaveStyleRule('color', getColorV8('dangerHue'));
  });

  it('renders disabled styling if provided', () => {
    const { container } = render(<StyledButton disabled />);

    expect(container.firstChild).toHaveStyleRule('color', getColorV8('neutralHue'));
  });

  it('renders link styling if provided', () => {
    const { container } = render(<StyledButton isLink />);

    expect(container.firstChild).toHaveStyleRule('display', 'inline');
    expect(container.firstChild).not.toHaveStyleRule('user-select');
  });

  it('renders primary styling if provided', () => {
    const { container } = render(<StyledButton isPrimary />);

    expect(container.firstChild).toHaveStyleRule('background-color', getColorV8('primaryHue'));
  });

  it('renders neutral styling if provided', () => {
    const { container } = render(<StyledButton isNeutral />);

    expect(container.firstChild).toHaveStyleRule('border-color', PALETTE.grey[300]);
  });

  it('renders pill styling if provided', () => {
    const { container } = render(<StyledButton isPill />);

    expect(container.firstChild).toHaveStyleRule('border-radius', '100px');
  });

  it('renders stretched styling if provided', () => {
    const { container } = render(<StyledButton isStretched />);

    expect(container.firstChild).toHaveStyleRule('width', '100%');
  });

  it('renders default type of "button"', () => {
    const { container } = render(<StyledButton />);

    expect(container.firstChild).toHaveAttribute('type', 'button');
  });

  it('renders custom type if provided', () => {
    const { container } = render(<StyledButton type="submit" />);

    expect(container.firstChild).toHaveAttribute('type', 'submit');
  });

  describe('Sizes', () => {
    it('renders small styling if provided', () => {
      const { container } = render(<StyledButton size="small" />);

      expect(container.firstChild).toHaveStyleRule('line-height', '30px');
    });

    it('renders medium styling if provided', () => {
      const { container } = render(<StyledButton size="medium" />);

      expect(container.firstChild).toHaveStyleRule('line-height', '38px');
    });

    it('renders large styling if provided', () => {
      const { container } = render(<StyledButton size="large" />);

      expect(container.firstChild).toHaveStyleRule('line-height', '46px');
    });
  });
});
