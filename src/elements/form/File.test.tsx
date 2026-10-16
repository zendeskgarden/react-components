/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import FileSuccess from '@zendeskgarden/svg-icons/src/check-circle-stroke.svg';
import FileDocument from '@zendeskgarden/svg-icons/src/file-document-stroke.svg';
import FileError from '@zendeskgarden/svg-icons/src/file-error-stroke.svg';
import FileGeneric from '@zendeskgarden/svg-icons/src/file-generic-stroke.svg';
import FileImage from '@zendeskgarden/svg-icons/src/file-image-stroke.svg';
import FilePdf from '@zendeskgarden/svg-icons/src/file-pdf-stroke.svg';
import FilePresentation from '@zendeskgarden/svg-icons/src/file-presentation-stroke.svg';
import FileSpreadsheet from '@zendeskgarden/svg-icons/src/file-spreadsheet-stroke.svg';
import FileZip from '@zendeskgarden/svg-icons/src/file-zip-stroke.svg';
import { createRef } from 'react';

import { render } from '../../test/render';
import DEFAULT_THEME from '../../theming/elements/theme';
import { getColor } from '../../theming/utils/getColor';
import { File } from './File';

const paths = (element: Element) =>
  [...element.querySelectorAll('path')].map(path => path.getAttribute('d'));

describe('File', () => {
  it('renders the expected HTML element', () => {
    const { container } = render(<File />);

    expect(container.firstChild!.nodeName).toBe('DIV');
  });

  it('passes ref to underlying DOM element', () => {
    const ref = createRef<HTMLDivElement>();
    const { container } = render(<File ref={ref} />);

    expect(container.firstChild).toBe(ref.current);
  });

  it('renders `type` as expected', () => {
    const { container } = render(<File type="generic" />);

    expect(container.firstChild!.firstChild).not.toBeNull();
  });

  it('clips its content to the rounded corners', () => {
    const { container } = render(<File />);

    expect(container.firstChild).toHaveStyleRule('overflow', 'hidden');
  });

  describe('icon', () => {
    const icons = [
      ['pdf', FilePdf],
      ['zip', FileZip],
      ['image', FileImage],
      ['document', FileDocument],
      ['spreadsheet', FileSpreadsheet],
      ['presentation', FilePresentation],
      ['generic', FileGeneric]
    ] as const;

    it.each(icons)('renders the %s glyph', (type, Icon) => {
      const { container: expected } = render(<Icon />);

      [false, true].forEach(isCompact => {
        const { container } = render(<File type={type} isCompact={isCompact} />);
        const icon = container.querySelector('svg')!;

        expect(icon).toHaveAttribute('viewBox', '0 0 20 20');
        expect(paths(icon)).toEqual(paths(expected.firstElementChild!));
      });
    });

    it.each([
      ['success', FileSuccess],
      ['error', FileError]
    ] as const)('renders the %s glyph', (validation, Icon) => {
      const { container } = render(<File type="pdf" validation={validation} />);
      const { container: expected } = render(<Icon />);

      expect(paths(container.querySelector('svg')!)).toEqual(paths(expected.firstElementChild!));
    });

    it('renders the icon at the 20px render size', () => {
      const { container } = render(<File type="pdf" />);
      const icon = container.querySelector('svg')!;

      expect(icon).toHaveAttribute('data-garden-id', 'forms.file.icon');
      expect(icon).toHaveStyleRule('width', DEFAULT_THEME.space.md);
      expect(icon).toHaveStyleRule('height', DEFAULT_THEME.space.md);
    });

    it('renders the compact icon at 16px', () => {
      const { container } = render(<File type="pdf" isCompact />);
      const icon = container.querySelector('svg')!;

      expect(icon).toHaveStyleRule('width', DEFAULT_THEME.iconSizes.md);
      expect(icon).toHaveStyleRule('height', DEFAULT_THEME.iconSizes.md);
    });
  });

  describe('children', () => {
    it('wraps child text', () => {
      const { container } = render(<File>test</File>);

      expect(container.firstChild!.firstChild!.nodeName).toBe('SPAN');
      expect(container.firstChild!.firstChild).toHaveTextContent('test');
    });

    it('renders unwrapped child element', () => {
      const { container } = render(
        <File>
          <div>test</div>
        </File>
      );

      expect(container.firstChild!.firstChild!.nodeName).toBe('DIV');
      expect(container.firstChild!.firstChild).toHaveTextContent('test');
    });
  });

  describe('validation', () => {
    it('renders the default colors without validation', () => {
      const { container } = render(<File />);

      expect(container.firstChild).toHaveStyleRule(
        'border-color',
        getColor({ theme: DEFAULT_THEME, variable: 'border.default' })
      );
      expect(container.firstChild).toHaveStyleRule(
        'color',
        getColor({ theme: DEFAULT_THEME, variable: 'foreground.default' })
      );
    });

    it('renders success colors', () => {
      const { container } = render(<File validation="success" />);

      expect(container.firstChild).toHaveStyleRule(
        'border-color',
        getColor({ theme: DEFAULT_THEME, variable: 'border.successEmphasis' })
      );
      expect(container.firstChild).toHaveStyleRule(
        'color',
        getColor({ theme: DEFAULT_THEME, variable: 'foreground.success' })
      );
    });

    it('renders error colors', () => {
      const { container } = render(<File validation="error" />);

      expect(container.firstChild).toHaveStyleRule(
        'border-color',
        getColor({ theme: DEFAULT_THEME, variable: 'border.dangerEmphasis' })
      );
      expect(container.firstChild).toHaveStyleRule(
        'color',
        getColor({ theme: DEFAULT_THEME, variable: 'foreground.danger' })
      );
    });
  });
});
