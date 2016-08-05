import positionRelative from './positionRelative'
import isInsideViewport from './isInsideViewport'
import distance from './distance'
import keepInViewport from './keepInViewport'

const getBestRelativePlacement = ({
  positions,
  anchor,
  target,
  viewport
}) => {
  const possiblePlacements = positions.map((position) => ({
    rect: positionRelative({
      position,
      anchor,
      target
    }),
    position
  }))

  const placementWithinViewport = possiblePlacements.find((placement) => (
    isInsideViewport({
      target: placement.rect,
      viewport
    })
  ))

  if (placementWithinViewport) {
    return placementWithinViewport
  }

  const bestPlacement = possiblePlacements.map((placement) => ({
    distance: distance(placement.rect, keepInViewport({
      target: placement.rect,
      viewport
    })),
    ...placement
  })).sort((a, b) => a.distance - b.distance)[0]

  const anchorIsInsideViewport = isInsideViewport({
    target: anchor,
    viewport
  })

  if (anchorIsInsideViewport) {
    return {
      rect: keepInViewport({
        target: bestPlacement.rect,
        viewport
      }),
      position: bestPlacement.position
    }
  } else {
    return {
      rect: bestPlacement.rect,
      position: bestPlacement.position
    }
  }
}

export default getBestRelativePlacement
