import React from 'react'
import expect from 'test/expect'
import sinon from 'sinon'
import TestUtils from 'react-addons-test-utils'

import RadioButton from '.'
import View from '../core/View'

describe('RadioButton', () => {
  it('renders a RadioButton that is not checked', () => {
    expect(
      <RadioButton checked={false} name='g1'>Check me out!</RadioButton>,
      'to render as',
      <View className='radio'>
        <input
          checked={false}
          className='input'
          type='radio'
        />
        <label className='label' dir='ltr'>Check me out!</label>
      </View>
    )
  })

  it('renders a RadioButton with name', () => {
    expect(
      <RadioButton name='g1'>Check me out!</RadioButton>,
      'to render as',
      <View className='radio'>
        <input
          name='g1'
          className='input'
          type='radio'
        />
        <label className='label' dir='ltr'>Check me out!</label>
      </View>
    )
  })

  it('renders a RadioButton with a right name', () => {
    expect(
      <RadioButton checked={false} name='g1'>Check me out!</RadioButton>,
      'to render as',
      <View className='radio'>
        <input
          checked={false}
          className='input'
          type='radio'
        />
        <label className='label' dir='ltr'>Check me out!</label>
      </View>
    )
  })

  it('renders a RadioButton that is checked', () => {
    expect(
      <RadioButton name='g1' checked>Check me out!</RadioButton>,
      'to render as',
      <View className='radio'>
        <input
          checked
          className='input'
          type='radio'
        />
        <label className='label' dir='ltr'>Check me out!</label>
      </View>
    )
  })

  it('calls the onChange handle with the new state of the RadioButton', () => {
    const onChange = sinon.spy()

    return expect(
      <RadioButton name='g1' checked onChange={onChange} value={123}>Check me out!</RadioButton>,
      'when deeply rendered',
      'with event change', 'on', <input />,
    ).then(() => {
      expect(onChange, 'to have calls satisfying', () => {
        onChange(123)
      })
    })
  })

  describe('when disabled', () => {
    it('renders a RadioButton that is disabled', () => {
      expect(
        <RadioButton checked={false} name='g1' disabled>Check me out!</RadioButton>,
        'to render as',
        <View className='radio'>
          <input
            checked={false}
            className='input'
            disabled
            type='radio'
          />
          <label className='label' dir='ltr'>Check me out!</label>
        </View>
      )
    })

    describe('and checked', () => {
      it('renders a RadioButton that is disabled and checked', () => {
        expect(
          <RadioButton name='g1' checked disabled>Check me out!</RadioButton>,
          'to render as',
          <View className='radio'>
            <input
              checked
              className='input'
              disabled
              type='radio'
            />
            <label className='label' dir='ltr'>Check me out!</label>
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
          <RadioButton
            defaultChecked
            ref={(ref) => ref && (node = ref.input)}
          />
        )

        expect(node.checked, 'to equal', true)
      })

      it('it is not checked on the DOM node', () => {
        let node

        TestUtils.renderIntoDocument(
          <RadioButton
            defaultChecked={false}
            ref={(ref) => ref && (node = ref.input)}
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
          <RadioButton
            defaultChecked={false}
            onChange={onChange}
            value={123}
            ref={(ref) => ref && (node = ref.input)}
          />
        )

        TestUtils.Simulate.change(node, { target: { checked: true } })

        expect(onChange, 'to have calls satisfying', () => {
          onChange(123)
        })
      })

      it('calls the onChange handle with the new state of the checkbox', () => {
        const onChange = sinon.spy()
        let node

        TestUtils.renderIntoDocument(
          <RadioButton
            defaultChecked
            onChange={onChange}
            value={123}
            ref={(ref) => ref && (node = ref.input)}
          />
        )

        TestUtils.Simulate.change(node, { target: { checked: false } })

        expect(onChange, 'to have calls satisfying', () => {
          onChange(123)
        })
      })
    })
  })

  describe('with a test id', () => {
    it('renders a RadioButton with the specified test id', () => {
      expect(
        <RadioButton name='g1' testId='testing'>Check me out!</RadioButton>,
        'when deeply rendered',
        'to contain',
        <input
          data-test-id='testing'
        />
      )
    })
  })

  describe('with a tab index', () => {
    it('renders a RadioButton with the specified tab index', () => {
      expect(
        <RadioButton name='g1' tabIndex={42}>Check me out!</RadioButton>,
        'when deeply rendered',
        'to contain',
        <input
          tabIndex={42}
        />
      )
    })
  })
})
