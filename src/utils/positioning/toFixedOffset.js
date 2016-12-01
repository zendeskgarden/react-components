/* globals window, document */

const fixedContainers = new WeakMap()

function parents (el) {
  const parents = []
  while (el = el.parentElement) { parents.push(el) } // eslint-disable-line no-cond-assign
  return parents
}

const ROOT_ELEMENT = document.body.parentElement

function hasTransform (el) {
  const transform = window.getComputedStyle(el).transform || 'none'
  return transform !== 'none'
}

/* position: fixed top and left are calculated from
   the containing block orign, not the document origin
   so, check parents for closest element with transform (if any)
   and use that as fixed base
*/
export function getFixedContainer (el) {
  if (fixedContainers.has(el)) { return fixedContainers.get(el) }
  const container = parents(el).find(el => !(el.parentElement) || hasTransform(el))
  fixedContainers.set(el, container)
  return container
}

export function getFixedContainerOffsetRect (el) {
  const container = getFixedContainer(el)
  return container === ROOT_ELEMENT
    ? {top: 0, left: 0}
    : container.getBoundingClientRect()
}

/* adjust top and left for position:fixed containing block
   see https://www.w3.org/TR/css-transforms-1/#propdef-transform
*/
export default function toFixedOffset ({position, rect}, el) {
  const base = getFixedContainerOffsetRect(el)
  const fixedRect = {
    ...rect,
    top: rect.top - base.top,
    left: rect.left - base.left
  }

  return {position, rect: fixedRect}
}
