const calculateTargetBasedOnPosition = {
  bottom: ({ anchor, target }) => ({
    top: anchor.top + anchor.margins.bottom + anchor.height,
    left: anchor.left + anchor.width / 2 - target.width / 2,
    height: target.height,
    width: target.width
  }),
  bottom_left: ({ anchor, centerPoint, target }) => ({
    top: anchor.top + anchor.margins.bottom + anchor.height,
    left: (
      typeof centerPoint === 'number'
        ? anchor.left + (anchor.width / 2) - target.width + centerPoint
        : anchor.left + anchor.width - target.width
    ),
    height: target.height,
    width: target.width
  }),
  bottom_right: ({ anchor, centerPoint, target }) => ({
    top: anchor.top + anchor.margins.bottom + anchor.height,
    left: (
      typeof centerPoint === 'number'
        ? anchor.left + (anchor.width / 2) - centerPoint
        : anchor.left
    ),
    height: target.height,
    width: target.width
  }),
  bottom_stretch: ({ anchor, target }) => ({
    top: anchor.top + anchor.margins.bottom + anchor.height,
    left: anchor.left,
    height: target.height,
    width: anchor.width
  }),
  left: ({ anchor, target }) => ({
    top: anchor.top + anchor.height / 2 - target.height / 2,
    left: anchor.left - anchor.margins.left - target.width,
    height: target.height,
    width: target.width
  }),
  left_top: ({ anchor, target }) => ({
    top: anchor.top,
    left: anchor.left - anchor.margins.left - target.width,
    height: target.height,
    width: target.width
  }),
  left_bottom: ({ anchor, target }) => ({
    top: anchor.top + anchor.margins.top + anchor.height - target.height,
    left: anchor.left - anchor.margins.left - target.width,
    height: target.height,
    width: target.width
  }),
  right: ({ anchor, target }) => ({
    top: anchor.top + anchor.height / 2 - target.height / 2,
    left: anchor.left + anchor.margins.right + anchor.width,
    height: target.height,
    width: target.width
  }),
  right_top: ({ anchor, target }) => ({
    top: anchor.top,
    left: anchor.left + anchor.margins.right + anchor.width,
    height: target.height,
    width: target.width
  }),
  right_bottom: ({ anchor, target }) => ({
    top: anchor.top + anchor.margins.top + anchor.height - target.height,
    left: anchor.left + anchor.margins.right + anchor.width,
    height: target.height,
    width: target.width
  }),
  top: ({ anchor, target }) => ({
    top: anchor.top - anchor.margins.top - target.height,
    left: anchor.left + anchor.width / 2 - target.width / 2,
    height: target.height,
    width: target.width
  }),
  top_left: ({ anchor, centerPoint, target }) => ({
    top: anchor.top - anchor.margins.top - target.height,
    left: (
      typeof centerPoint === 'number'
        ? anchor.left + (anchor.width / 2) - target.width + centerPoint
        : anchor.left + anchor.width - target.width
    ),
    height: target.height,
    width: target.width
  }),
  top_right: ({ anchor, centerPoint, target }) => ({
    top: anchor.top - anchor.margins.top - target.height,
    left: (
      typeof centerPoint === 'number'
        ? anchor.left + (anchor.width / 2) - centerPoint
        : anchor.left
    ),
    height: target.height,
    width: target.width
  }),
  top_stretch: ({ anchor, target }) => ({
    top: anchor.top - anchor.margins.top - target.height,
    left: anchor.left,
    height: target.height,
    width: anchor.width
  })
}

const positionRelative = ({ anchor, centerPoint, position, target }) => {
  const repositionedTarget = calculateTargetBasedOnPosition[position]({
    anchor, centerPoint, target
  })

  return {
    top: repositionedTarget.top,
    left: repositionedTarget.left,
    height: repositionedTarget.height,
    width: repositionedTarget.width
  }
}

export default positionRelative
