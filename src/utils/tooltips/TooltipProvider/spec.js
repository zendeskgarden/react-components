import expect from 'test/expect'
import React from 'react'
import { render } from 'react-dom'
import TooltipProvider from '.'

describe('TooltipProvider', () => {
  it('should correctly set the ID automatically', () => {
    const elem = (
      <TooltipProvider>
        <div>My test content</div>
      </TooltipProvider>
    )

    const instance = render(elem, document.createElement('div'))
    expect(instance.id, 'to match', /tooltips-.+/)
  })

  it('should correctly set the ID manually', () => {
    const elem = (
      <TooltipProvider id='my-tooltips'>
        <div>My test content</div>
      </TooltipProvider>
    )

    const instance = render(elem, document.createElement('div'))
    expect(instance.id, 'to equal', 'my-tooltips')
  })

  it('should correctly its context', () => {
    const elem = (
      <TooltipProvider>
        <div>My test content</div>
      </TooltipProvider>
    )

    const instance = render(elem, document.createElement('div'))
    expect(
      instance.getChildContext().tooltips,
      'to only have keys',
      ['show', 'hide']
    )
  })
})
