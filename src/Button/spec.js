import React from 'react'
import expect from 'test/expect'
import Button from './'

const handler = () => { console.log('wat') }

describe('Button', () => {
  it('renders a default button', () => {
    expect(
      <Button>Default</Button>,
      'to render as',
      <button>Default</button>
    )
  })

  describe('when given a onClick handler', () => {
    it('renders a button with that onClick handler', () => {
      expect(
        <Button onClick={ handler }>Click me!</Button>,
        'to render as',
        <button onClick={ handler }>Click me!</button>
      )
    })
  })

  describe('with a test id', () => {
    it('renders a button with the test id', () => {
      expect(
        <Button testId='wat'>Testable</Button>,
        'to render as',
        <button data-test-id='wat'>Testable</button>
      )
    })
  })

  describe('with the type primary', () => {
    it('renders a primary button', () => {
      expect(
        <Button type='primary'>Primary</Button>,
        'to render as',
        <button className='type_primary c-btn c-btn--primary'>Primary</button>
      )
    })
  })

  describe('with the type basic', () => {
    it('renders a basic button', () => {
      expect(
        <Button type='basic'>Basic</Button>,
        'to render as',
        <button className='type_basic c-btn c-btn--basic'>Basic</button>
      )
    })
  })

  describe('when disabled', () => {
    it('renders a disabled button', () => {
      expect(
        <Button disabled>Disabled</Button>,
        'to render as',
        <button className='c-btn is-disabled' disabled>Disabled</button>
      )
    })
  })

  describe('when is stretched', () => {
    it('renders a stretched button', () => {
      expect(
        <Button stretched>Stretched</Button>,
        'to render as',
        <button className='type_default c-btn c-btn--full'>Stretched</button>
      )
    })
  })

  describe('when size is medium', () => {
    it('renders a medium sized button', () => {
      expect(
        <Button size='medium'>Medium</Button>,
        'to render as',
        <button className='type_default c-btn c-btn--medium'>Medium</button>
      )
    })
  })

  describe('when size is large', () => {
    it('renders a large button', () => {
      expect(
        <Button size='large'>Large</Button>,
        'to render as',
        <button className='type_default c-btn c-btn--large'>Large</button>
      )
    })
  })

  describe('when given a tab index', () => {
    it('renders a button with that tab index', () => {
      expect(
        <Button tabIndex={42}>Tab order</Button>,
        'to render as',
        <button tabIndex={42}>Tab order</button>
      )
    })
  })
})
