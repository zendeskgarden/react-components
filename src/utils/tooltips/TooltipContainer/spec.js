import React from 'react'
import expect from 'test/expect'
import sinon from 'sinon'
import TooltipContainer from '.'
import { render } from 'react-dom'

jest.mock('../../positioning/getBestRelativePlacement')
import getBestRelativePlacement from '../../positioning/getBestRelativePlacement'

describe('TooltipContainer', () => {
  it('correctly flip left/right based on `dir` prop', () => {
    const spy = sinon.spy()

    getBestRelativePlacement.mockImplementation((...args) => {
      spy(...args)
      return { rect: {} }
    })

    const instance = render(
      <TooltipContainer
        anchor={document.createElement('div')}
        dir='rtl'
        positions={['top', 'right', 'left']}
        content='Some content'
      />, document.createElement('div')
    )

    instance.state = {
      tooltipBounds: { top: 0, bottom: 0, right: 0, left: 0 }
    }

    instance.render()

    const [ positioning ] = spy.args[0]

    expect(positioning.positions, 'to equal', [ 'top', 'left', 'right' ])
  })
})
