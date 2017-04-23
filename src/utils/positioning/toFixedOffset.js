/* globals window, document */

const fixedContainers = new WeakMap();

// feature detect for css fixed position layout.
// IE11 doesn't follow the CSS spec and doesn't need the
// adjustments we implement here
const FIXED_OFFSET = (() => {
  const container = document.createElement('div');
  container.style.transform = 'matrix(1, 0, 0, 1, 0, 0)';
  container.style.position = 'absolute';
  container.style.top = '1px';
  container.style.left = '1px';
  const fixed = document.createElement('div');
  fixed.style.position = 'fixed';
  fixed.style.top = '1px';
  fixed.style.left = '1px';
  document.body.appendChild(container);
  container.appendChild(fixed);
  const position = fixed.getBoundingClientRect();
  document.body.removeChild(container);
  return position.top === 2 && position.left === 2;
})();

function parents(element) {
  const parents = [];
  while ((element = element.parentElement)) {
    parents.push(element);
  }
  return parents;
}

const ROOT_ELEMENT = document.body.parentElement;

function hasTransform(element) {
  const transform = window.getComputedStyle(element).transform || 'none';
  return transform !== 'none';
}

// position: fixed top and left are calculated from
// the containing block orign, not the document origin
// so, check parents for closest element with transform (if any)
// and use that as fixed base
export function getFixedContainer(element) {
  if (fixedContainers.has(element)) return fixedContainers.get(element);

  const container = parents(element).find(
    element => !element.parentElement || hasTransform(element)
  );
  fixedContainers.set(element, container);

  return container;
}

export function getFixedContainerOffsetRect(element) {
  const container = getFixedContainer(element);

  return container === ROOT_ELEMENT ? null : container.getBoundingClientRect();
}

// adjust top and left for position:fixed containing block
// see https://www.w3.org/TR/css-transforms-1/#propdef-transform
export default function toFixedOffset(
  placement,
  element,
  { detect = true } = {}
) {
  if (detect && !FIXED_OFFSET) return placement;

  const base = getFixedContainerOffsetRect(element);

  if (base) {
    const { position, rect } = placement;

    return {
      position,
      rect: {
        ...rect,
        top: rect.top - base.top,
        left: rect.left - base.left
      }
    };
  } else {
    return placement;
  }
}
