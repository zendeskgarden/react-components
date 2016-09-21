import React from 'react'
import expect from 'test/expect'
import sinon from 'sinon'

import RadioButton from '.'
import View from '../core/View'

describe('RadioButton', () => {
  it('renders a RadioButton that is not checked', () => {
    expect(
      <RadioButton name='g1'>Check me out!</RadioButton>,
      'to render as',
      <View className='radio'>
        <input
          checked={ false }
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
      <RadioButton name='g1'>Check me out!</RadioButton>,
      'to render as',
      <View className='radio'>
        <input
          checked={ false }
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
      <RadioButton name='g1' onChange={ onChange } value={ 123 }>Check me out!</RadioButton>,
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
        <RadioButton name='g1' disabled>Check me out!</RadioButton>,
        'to render as',
        <View className='radio'>
          <input
            checked={ false }
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

  describe('with a test id', () => {
    it('renders a RadioButton with the specified test id', () => {
      expect(
        <RadioButton name='g1' testId='testing'>Check me out!</RadioButton>,
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
        <RadioButton name='g1' tabIndex={ 42 }>Check me out!</RadioButton>,
        'to contain',
        <input
          tabIndex={ 42 }
        />
      )
    })
  })
})
