import React from 'react'
import expect from 'test/expect'
import sinon from 'sinon'
import ButtonGroup from '.'

describe('ButtonGroup', () => {
  it('renders a tab component showing the active button', () => {
    expect(
      <ButtonGroup active='two'>
        <ButtonGroup.Item id='one'>One</ButtonGroup.Item>
        <ButtonGroup.Item id='two'>Two</ButtonGroup.Item>
        <ButtonGroup.Item id='three'>Three</ButtonGroup.Item>
      </ButtonGroup>,
      'to deeply render as',
      <nav className='group' role='tablist'>
        <button aria-selected={ false } className='type_default c-btn' role='tab'>One</button>
        <button aria-selected className='type_default c-btn active' role='tab'>Two</button>
        <button aria-selected={ false } className='type_default c-btn' role='tab'>Three</button>
      </nav>
    )
  })

  it('renders disabled buttons as disabled', () => {
    expect(
      <ButtonGroup>
        <ButtonGroup.Item id='one'>One</ButtonGroup.Item>
        <ButtonGroup.Item id='two'>Two</ButtonGroup.Item>
        <ButtonGroup.Item id='three' disabled>Three</ButtonGroup.Item>
      </ButtonGroup>,
      'to deeply render as',
      <nav className='group' role='tablist'>
        <button>One</button>
        <button>Two</button>
        <button aria-disabled className='disabled'>Three</button>
      </nav>
    )
  })

  describe('when clicking on an enabled tab', () => {
    it('emits an onActivate event', () => {
      const onActivate = sinon.spy()

      return expect(
        <ButtonGroup active='three' onActivate={ onActivate }>
          <ButtonGroup.Item id='one' disabled>One</ButtonGroup.Item>
          <ButtonGroup.Item id='two'>Two</ButtonGroup.Item>
          <ButtonGroup.Item id='three'>Three</ButtonGroup.Item>
        </ButtonGroup>,
        'when deeply rendered',
        'with event', 'click', 'on', <button>Two</button>
      ).then(() => {
        expect(onActivate, 'to have calls satisfying', () => {
          onActivate('two')
        })
      })
    })
  })

  describe('when clicking on an disabled tab', () => {
    it('does not emits an onActivate event', () => {
      const onActivate = sinon.spy()

      return expect(
        <ButtonGroup active='three' onActivate={ onActivate }>
          <ButtonGroup.Item id='one'>One</ButtonGroup.Item>
          <ButtonGroup.Item id='two' disabled>Two</ButtonGroup.Item>
          <ButtonGroup.Item id='three'>Three</ButtonGroup.Item>
        </ButtonGroup>,
        'when deeply rendered',
        'with event', 'click', 'on', <button>Two</button>
      ).then(() => {
        expect(onActivate, 'was not called')
      })
    })
  })

  describe('when given a test id', () => {
    it('renders a tab component with that test id', () => {
      expect(
        <ButtonGroup testId='test-me'>
          <ButtonGroup.Item id='one'>One</ButtonGroup.Item>
          <ButtonGroup.Item id='two' disabled>Two</ButtonGroup.Item>
          <ButtonGroup.Item id='three'>Three</ButtonGroup.Item>
        </ButtonGroup>,
        'to deeply render as',
        <nav className='group' data-test-id='test-me'/>
      )
    })
  })
})
