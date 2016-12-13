import React from 'react'
import expect from 'test/expect'
import sinon from 'sinon'
import TestUtils from 'react-addons-test-utils'

import Toggle from '.'
import View from '../core/View'

describe('Toggle', () => {
  it('renders a toggle that is not checked', () => {
    expect(
      <Toggle checked={ false }>Toggle me!</Toggle>,
      'to render as',
      <View className='toggle'>
        <input
          checked={ false }
          className='input'
          type='checkbox'
        />
        <label className='label' dir='ltr'>Toggle me!</label>
      </View>
    )
  })

  describe('when checked', () => {
    it('renders a toggle that is checked', () => {
      expect(
        <Toggle checked>Toggle me!</Toggle>,
        'to render as',
        <View className='toggle'>
          <input
            checked
            className='input'
            type='checkbox'
          />
          <label className='label' dir='ltr'>Toggle me!</label>
        </View>
      )
    })

    describe('and toggled', () => {
      it('calls the onChange handle with the new state of the checkbox', () => {
        const onChange = sinon.spy()

        return expect(
          <Toggle
            onChange={ onChange }
            checked
          >
            Toggle me!
          </Toggle>,
          'when deeply rendered',
          'with event change', { target: { checked: false } }, 'on', <input/>,
        ).then(() => {
          expect(onChange, 'to have calls satisfying', () => {
            onChange(false)
          })
        })
      })
    })
  })

  describe('when toggled', () => {
    it('calls the onChange handle with the new state of the checkbox', () => {
      const onChange = sinon.spy()

      return expect(
        <Toggle checked={ false } onChange={ onChange }>Toggle me!</Toggle>,
        'when deeply rendered',
        'with event change', { target: { checked: true } }, 'on', <input/>,
      ).then(() => {
        expect(onChange, 'to have calls satisfying', () => {
          onChange(true)
        })
      })
    })
  })

  describe('when disabled', () => {
    it('renders a toggle that is disabled', () => {
      expect(
        <Toggle checked={ false } disabled>Toggle me!</Toggle>,
        'to render as',
        <View className='toggle'>
          <input
            checked={ false }
            className='input'
            disabled
            type='checkbox'
          />
          <label className='label' dir='ltr'>Toggle me!</label>
        </View>
      )
    })

    describe('and checked', () => {
      it('renders a toggle that is disabled and checked', () => {
        expect(
          <Toggle checked disabled>Toggle me!</Toggle>,
          'to render as',
          <View className='toggle'>
            <input
              checked
              className='input'
              disabled
              type='checkbox'
            />
            <label className='label' dir='ltr'>Toggle me!</label>
          </View>
        )
      })
    })
  })

  describe('when using it as an uncontrolled input', () => {
    describe('when using defaultChecked', () => {
      it('it is checked on the DOM node', () => {
        let node

        TestUtils.renderIntoDocument(
          <Toggle
            defaultChecked
            ref={ (ref) => ref && (node = ref.input) }
          />
        )

        expect(node.checked, 'to equal', true)
      })

      it('it is not checked on the DOM node', () => {
        let node

        TestUtils.renderIntoDocument(
          <Toggle
            defaultChecked={ false }
            ref={ (ref) => ref && (node = ref.input) }
          />
        )

        expect(node.checked, 'to be false')
      })
    })

    describe('when toggled', () => {
      it('calls the onChange handle with the new state of the checkbox', () => {
        let node
        const onChange = sinon.spy()

        TestUtils.renderIntoDocument(
          <Toggle
            defaultChecked={ false }
            onChange={ onChange }
            ref={ (ref) => ref && (node = ref.input) }
          />
        )

        TestUtils.Simulate.change(node, { target: { checked: true } })

        expect(onChange, 'to have calls satisfying', () => {
          onChange(true)
        })
      })

      it('calls the onChange handle with the new state of the checkbox', () => {
        const onChange = sinon.spy()
        let node

        TestUtils.renderIntoDocument(
          <Toggle
            defaultChecked
            onChange={ onChange }
            ref={ (ref) => ref && (node = ref.input) }
          />
        )

        TestUtils.Simulate.change(node, { target: { checked: false } })

        expect(onChange, 'to have calls satisfying', () => {
          onChange(false)
        })
      })
    })
  })

  describe('with a test id', () => {
    it('renders a toggle with the specified test id', () => {
      expect(
        <Toggle testId='testing'>Toggle me!</Toggle>,
        'to contain',
        <input
          data-test-id='testing'
        />
      )
    })
  })

  describe('with a tab index', () => {
    it('renders a toggle with the specified tab index', () => {
      expect(
        <Toggle tabIndex={ 42 }>Toggle me!</Toggle>,
        'to contain',
        <input
          tabIndex={ 42 }
        />
      )
    })
  })
})
