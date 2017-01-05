import React from 'react'
import expect from 'test/expect'
import Text from './'

const handler = () => { console.log('wat') }

describe('Text', () => {
  it('renders a span with no styling', () => {
    expect(
      <Text>Hello world</Text>,
      'to render as',
      <span>Hello world</span>
    )
  })

  describe('with a test id', () => {
    it('renders a text with the test id', () => {
      expect(
        <Text testId='wat'>Testable</Text>,
        'to render as',
        <span data-test-id='wat'>Testable</span>
      )
    })
  })

  describe('when given a onClick handler', () => {
    it('renders a text with that onClick handler', () => {
      expect(
        <Text onClick={handler}>Click me!</Text>,
        'to render as',
        <span onClick={handler}>Click me!</span>
      )
    })
  })

  describe('when given a tab index', () => {
    it('renders a text with that tab index', () => {
      expect(
        <Text tabIndex={42}>Tab order</Text>,
        'to render as',
        <span tabIndex={42}>Tab order</span>
      )
    })
  })

  describe('when given a css class', () => {
    it('renders a text with that class', () => {
      expect(
        <Text className='foo'>Custom</Text>,
        'to render as',
        <span className='foo'>Custom</span>
      )
    })
  })
})
