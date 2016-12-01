/* globals window, document */

const fixedContainers = new WeakMap()

// feature detect for css fixed position layout.
// IE11 doesn't follow the CSS spec and doesn't need the
// adjustments we implement here
const FIXED_OFFSET = (() => {
  const container = document.createElement('div')
  container.style.transform = 'matrix(1, 0, 0, 1, 0, 0)'
  container.style.position = 'absolute'
  container.style.top = '1px'
  container.style.left = '1px'
  const fixed = document.createElement('div')
  fixed.style.position = 'fixed'
  fixed.style.top = '1px'
  fixed.style.left = '1px'
  document.body.appendChild(container)
  container.appendChild(fixed)
  const position = fixed.getBoundingClientRect()
  document.body.removeChild(container)
  return position.top === 2 && position.left === 2
})()

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
    ? null
    : container.getBoundingClientRect()
}

/* adjust top and left for position:fixed containing block
   see https://www.w3.org/TR/css-transforms-1/#propdef-transform
*/
export default function toFixedOffset (placement, el, {detect = true} = {}) {
  if (detect && !FIXED_OFFSET) return placement
  const base = getFixedContainerOffsetRect(el)
  if (base === null) return placement

  const {position, rect} = placement
  return {
    position,
    rect: {
      ...rect,
      top: rect.top - base.top,
      left: rect.left - base.left
    }
  }
}
