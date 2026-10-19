/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import {
  activeElement,
  getScrollbarSize,
  getStyle,
  isWindow,
  ownerDocument,
  ownerWindow
} from './dom';

describe('dom utility functions', () => {
  afterEach(() => {
    vi.restoreAllMocks();
    document.body.innerHTML = '';
  });

  describe('ownerDocument', () => {
    it('returns the document of a node', () => {
      const other = document.implementation.createHTMLDocument('other');
      const element = other.createElement('div');

      expect(ownerDocument(element)).toBe(other);
    });

    it('falls back to the global document', () => {
      expect(ownerDocument()).toBe(document);
      expect(ownerDocument(null)).toBe(document);
    });
  });

  describe('ownerWindow', () => {
    it('returns the window of a node', () => {
      const element = document.createElement('div');

      expect(ownerWindow(element)).toBe(window);
    });

    it('falls back to the global window', () => {
      const detached = document.implementation.createHTMLDocument('detached');

      expect(ownerWindow()).toBe(window);
      expect(ownerWindow(null)).toBe(window);
      expect(detached.defaultView).toBeNull();
      expect(ownerWindow(detached)).toBe(window);
    });
  });

  describe('isWindow', () => {
    it('returns a window', () => {
      expect(isWindow(window)).toBe(window);
    });

    it('returns the window of a document', () => {
      expect(isWindow(document)).toBe(window);
    });

    it('returns false for a document without a window', () => {
      expect(isWindow(document.implementation.createHTMLDocument('detached'))).toBe(false);
    });

    it('returns false for an element', () => {
      expect(isWindow(document.createElement('div'))).toBe(false);
    });
  });

  describe('activeElement', () => {
    it('returns the focused element', () => {
      const button = document.createElement('button');

      document.body.appendChild(button);
      button.focus();

      expect(activeElement()).toBe(button);
    });

    it('returns the body when nothing is focused', () => {
      expect(activeElement()).toBe(document.body);
    });

    it('uses the given document', () => {
      const other = document.implementation.createHTMLDocument('other');
      const input = other.createElement('input');

      other.body.appendChild(input);
      input.focus();

      expect(activeElement(other)).toBe(other.activeElement);
    });

    it('returns null for an active element without a node name', () => {
      const doc = { activeElement: {} } as unknown as Document;

      expect(activeElement(doc)).toBeNull();
    });

    it('returns the body when reading the active element throws', () => {
      const body = document.createElement('body');
      const doc = {
        body,
        get activeElement(): Element {
          throw new Error('inaccessible');
        }
      } as unknown as Document;

      expect(activeElement(doc)).toBe(body);
    });
  });

  describe('getScrollbarSize', () => {
    const mockSizes = (offsetWidth: number, clientWidth: number) => {
      vi.spyOn(HTMLElement.prototype, 'offsetWidth', 'get').mockReturnValue(offsetWidth);
      vi.spyOn(HTMLElement.prototype, 'clientWidth', 'get').mockReturnValue(clientWidth);
    };

    it('measures the scrollbar width', () => {
      mockSizes(65, 50);

      expect(getScrollbarSize(true)).toBe(15);
    });

    it('removes the measuring element', () => {
      mockSizes(65, 50);
      getScrollbarSize(true);

      expect(document.body.children).toHaveLength(0);
    });

    it('keeps the measured size until asked to measure again', () => {
      mockSizes(65, 50);
      getScrollbarSize(true);
      vi.restoreAllMocks();
      mockSizes(70, 50);

      expect(getScrollbarSize()).toBe(15);
      expect(getScrollbarSize(true)).toBe(20);
    });
  });

  describe('getStyle', () => {
    it('reads an inline style', () => {
      const element = document.createElement('div');

      element.style.paddingRight = '8px';

      expect(getStyle(element, 'paddingRight')).toBe('8px');
    });

    it('reads a hyphenated property name', () => {
      const element = document.createElement('div');

      element.style.paddingRight = '8px';

      expect(getStyle(element, 'padding-right')).toBe('8px');
    });

    it('falls back to the computed style', () => {
      const element = document.createElement('div');

      vi.spyOn(window, 'getComputedStyle').mockReturnValue({
        getPropertyValue: (name: string) => (name === 'padding-right' ? '12px' : '')
      } as CSSStyleDeclaration);

      expect(getStyle(element, 'paddingRight')).toBe('12px');
    });

    it('returns an empty string for an unset property', () => {
      const element = document.createElement('div');

      document.body.appendChild(element);

      expect(getStyle(element, 'paddingRight')).toBe('');
    });
  });
});
