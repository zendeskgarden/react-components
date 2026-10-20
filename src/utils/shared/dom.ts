/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

let scrollbarSize: number | undefined;

export const ownerDocument = (node?: Node | null): Document =>
  (node && node.ownerDocument) || document;

export const ownerWindow = (node?: Node | null): Window => {
  const doc = ownerDocument(node);

  return (doc && doc.defaultView) || window;
};

export const isWindow = (node: Element | Document | Window): Window | false => {
  if ('window' in node && node.window === node) {
    return node;
  }

  if ('nodeType' in node && node.nodeType === document.DOCUMENT_NODE) {
    return (node as Document).defaultView || false;
  }

  return false;
};

export const activeElement = (doc: Document = ownerDocument()): Element | null => {
  try {
    const active = doc.activeElement;

    return active && active.nodeName ? active : null;
  } catch {
    return doc.body;
  }
};

export const getScrollbarSize = (recalc?: boolean): number => {
  if ((scrollbarSize === undefined || recalc) && typeof document !== 'undefined') {
    const scrollDiv = document.createElement('div');

    scrollDiv.style.position = 'absolute';
    scrollDiv.style.top = '-9999px';
    scrollDiv.style.width = '50px';
    scrollDiv.style.height = '50px';
    scrollDiv.style.overflow = 'scroll';
    document.body.appendChild(scrollDiv);
    scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
  }

  return scrollbarSize as number;
};

export const getStyle = (node: HTMLElement, property: string): string => {
  const name = property.replace(/[A-Z]/gu, match => `-${match}`).toLowerCase();

  return (
    node.style.getPropertyValue(name) ||
    ownerWindow(node).getComputedStyle(node).getPropertyValue(name)
  );
};
