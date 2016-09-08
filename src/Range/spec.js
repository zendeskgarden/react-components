import React from 'react'
import expect from 'test/expect'
import sinon from 'sinon'

import Range from '.'
import View from '../core/View'

describe('Range', () => {
  it('renders an input of type range with a given min, max, step and value', () => {
    expect(
      <Range
        max={ 100 }
        min={ 0 }
        step={ 5 }
        value={ 10 }
      />,
      'to render as',
      <View>
        <input
          max={ 100 }
          min={ 0 }
          step={ 5 }
          type='range'
          value={ 10 }
        />
      </View>
    )
  })

  describe('when disabled', () => {
    it('renders a disabled range', () => {
      expect(
        <Range disabled />,
        'to render as',
        <View className='c-range'>
          <input
            className='c-range__input'
            disabled
            type='range'
          />
        </View>
      )
    })
  })

  describe('with a test id', () => {
    it('renders a range with the specified test id', () => {
      expect(
        <Range testId='testing' />,
        'to contain',
        <input
          data-test-id='testing'
        />
      )
    })
  })

  describe('with a tab index', () => {
    it('renders a range with the specified tab index', () => {
      expect(
        <Range tabIndex={ 42 } />,
        'to contain',
        <input
          tabIndex={ 42 }
        />
      )
    })
  })

  describe('when value changes', () => {
    it('calls an onChange handle with a new value', () => {
      const onChange = sinon.spy()

      return expect(
          <Range
            max={ 15 }
            min={ 0 }
            onChange={ onChange }
            value={ 10 }
          />,
          'when deeply rendered',
          'with event change', 'on', <input/>,
        ).then(() => {
          expect(onChange, 'to have calls satisfying', () => {
            onChange(10)
          })
        })
    })
  })
})
