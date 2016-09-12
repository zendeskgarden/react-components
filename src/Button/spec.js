import React from 'react'
import expect from 'test/expect'
import sinon from 'sinon'
import Button from './'
import View from '../core/View'

describe('Button', () => {
  it('renders a default button', () => {
    expect(
      <Button>Default</Button>,
      'to render as',
      <View role='button'>Default</View>
    )
  })

  it('is clickable', () => {
    const onClick = sinon.spy()

    return expect(
      <Button onClick={ onClick }>Click me!</Button>,
      'when deeply rendered',
      'with event', 'click'
    ).then(() => {
      expect(onClick, 'was called once')
    })
  })

  describe('with a test id', () => {
    it('renders a button with the test id', () => {
      expect(
        <Button testId='wat'>Testable</Button>,
        'to render as',
        <View role='button' testId='wat'>Testable</View>
      )
    })
  })

  describe('with the type primary', () => {
    it('renders a primary button', () => {
      expect(
        <Button type='primary'>Primary</Button>,
        'to render as',
        <View role='button' className='type_primary c-btn c-btn--primary'>Primary</View>
      )
    })
  })

  describe('with the type basic', () => {
    it('renders a basic button', () => {
      expect(
        <Button type='basic'>Basic</Button>,
        'to render as',
        <View role='button' className='type_basic c-btn c-btn--basic'>Basic</View>
      )
    })
  })

  describe('when disabled', () => {
    it('renders a disabled button', () => {
      expect(
        <Button disabled>Disabled</Button>,
        'to render as',
        <View role='button' tabIndex={-1} className='c-btn is-disabled' disabled>Disabled</View>
      )
    })

    it('is not clickable', () => {
      const onClick = sinon.spy()

      return expect(
        <Button onClick={ onClick } disabled>Disabled</Button>,
        'when deeply rendered',
        'with event', 'click'
      ).then(() => {
        expect(onClick, 'was not called')
      })
    })
  })

  describe('when is stretched', () => {
    it('renders a stretched button', () => {
      expect(
        <Button stretched>Stretched</Button>,
        'to render as',
        <View role='button' className='type_default c-btn c-btn--full'>Stretched</View>
      )
    })
  })

  describe('when size is medium', () => {
    it('renders a medium sized button', () => {
      expect(
        <Button size='medium'>Medium</Button>,
        'to render as',
        <View role='button' className='type_default c-btn c-btn--medium'>Medium</View>
      )
    })
  })

  describe('when size is large', () => {
    it('renders a large button', () => {
      expect(
        <Button size='large'>Large</Button>,
        'to render as',
        <View role='button' className='type_default c-btn c-btn--large'>Large</View>
      )
    })
  })

  describe('when given a tab index', () => {
    it('renders a button with that tab index', () => {
      expect(
        <Button tabIndex={42}>Tab order</Button>,
        'to render as',
        <View role='button' tabIndex={42}>Tab order</View>
      )
    })
  })
})
