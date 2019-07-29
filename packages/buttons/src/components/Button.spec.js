/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { DEFAULT_THEME, getColor } from '@zendeskgarden/react-theming';
import { render, fireEvent } from 'garden-test-utils';
import Button from './Button';
import { StyledButton } from '../styled';

describe('Button', () => {
  it('renders default styling', () => {
    const { container } = render(<StyledButton />);

    expect(container.firstChild).toHaveStyleRule('display', 'inline-block');
  });

  it('renders danger styling if provided', () => {
    const { container } = render(<StyledButton danger />);

    expect(container.firstChild).toHaveStyleRule('color', getColor('dangerHue'));
  });

  it('renders disabled styling if provided', () => {
    const { container } = render(<StyledButton disabled />);

    expect(container.firstChild).toHaveStyleRule('color', getColor('neutralHue'));
  });

  it('renders stretched styling if provided', () => {
    const { container } = render(<StyledButton stretched />);

    expect(container.firstChild).toHaveStyleRule('width', '100%');
  });

  describe('Types', () => {
    it('renders primary styling if provided', () => {
      const { container } = render(<StyledButton primary />);

      expect(container.firstChild).toHaveStyleRule('background-color', getColor('primaryHue'));
    });

    it('renders basic styling if provided', () => {
      const { container } = render(<StyledButton basic />);

      expect(container.firstChild).toHaveStyleRule('background-color', 'transparent');
    });

    it('renders link styling if provided', () => {
      const { container } = render(<StyledButton link />);

      expect(container.firstChild).toHaveStyleRule('display', 'inline');
    });

    it('renders pill styling if provided', () => {
      const { container } = render(<StyledButton pill />);

      expect(container.firstChild).toHaveStyleRule('border-radius', '100px');
    });
  });

  describe('Selection', () => {
    it('does not render focused styling if focused by mouse', () => {
      const { container } = render(<Button />);

      fireEvent.click(container.firstChild);
      expect(container.firstChild).not.toHaveClass('focus-visible');
    });

    it('renders focused styling if focused by keyboard', () => {
      const { container } = render(<Button />);

      fireEvent.focus(container.firstChild);
      expect(container.firstChild).toHaveClass('focus-visible');
    });
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

  describe('States', () => {
    it('renders active styling if provided', () => {
      const { container } = render(<StyledButton />);

      expect(container.firstChild).toHaveStyleRule('color', getColor('primaryHue', 800), {
        modifier: ':active'
      });
    });

    it('renders disabled styling if provided', () => {
      const { container } = render(<StyledButton disabled />);

      expect(container.firstChild).toHaveStyleRule('color', getColor('neutralHue'));
    });

    it('renders hovered styling if provided', () => {
      const { container } = render(<StyledButton />);

      expect(container.firstChild).toHaveStyleRule('color', getColor('primaryHue', 700), {
        modifier: ':hover'
      });
    });

    it('renders selected styling if provided', () => {
      const { container } = render(<StyledButton selected />);

      expect(container.firstChild).toHaveStyleRule('background-color', getColor('primaryHue'));
    });
  });
});
