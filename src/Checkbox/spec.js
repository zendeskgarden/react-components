import React from 'react'
import expect from 'test/expect'
import sinon from 'sinon'

import Checkbox from '.'
import View from '../core/View'

describe('Checkbox', () => {
  it('renders a checkbox that is not checked', () => {
    expect(
      <Checkbox>Check me out!</Checkbox>,
      'to render as',
      <View className='checkbox'>
        <input
          checked={ false }
          className='input'
          type='checkbox'
        />
        <label className='label' dir='ltr'>Check me out!</label>
      </View>
    )
  })

  describe('when checked', () => {
    it('renders a checkbox that is checked', () => {
      expect(
        <Checkbox checked>Check me out!</Checkbox>,
        'to render as',
        <View className='checkbox'>
          <input
            checked
            className='input'
            type='checkbox'
          />
          <label className='label' dir='ltr'>Check me out!</label>
        </View>
      )
    })

    describe('and toggled', () => {
      it('calls the onChange handle with the new state of the checkbox', () => {
        const onChange = sinon.spy()

        return expect(
          <Checkbox
            onChange={ onChange }
            checked
          >
            Check me out!
          </Checkbox>,
          'when deeply rendered',
          'with event change', 'on', <input/>,
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
        <Checkbox onChange={ onChange }>Check me out!</Checkbox>,
        'when deeply rendered',
        'with event change', 'on', <input/>,
      ).then(() => {
        expect(onChange, 'to have calls satisfying', () => {
          onChange(true)
        })
      })
    })
  })

  describe('when disabled', () => {
    it('renders a checkbox that is disabled', () => {
      expect(
        <Checkbox disabled>Check me out!</Checkbox>,
        'to render as',
        <View className='checkbox'>
          <input
            checked={ false }
            className='input'
            disabled
            type='checkbox'
          />
          <label className='label' dir='ltr'>Check me out!</label>
        </View>
      )
    })

    describe('and checked', () => {
      it('renders a checkbox that is disabled and checked', () => {
        expect(
          <Checkbox checked disabled>Check me out!</Checkbox>,
          'to render as',
          <View className='checkbox'>
            <input
              checked
              className='input'
              disabled
              type='checkbox'
            />
            <label className='label' dir='ltr'>Check me out!</label>
          </View>
        )
      })
    })
  })

  describe('with a test id', () => {
    it('renders a checkbox with the specified test id', () => {
      expect(
        <Checkbox testId='testing'>Check me out!</Checkbox>,
        'to contain',
        <input
          data-test-id='testing'
        />
      )
    })
  })

  describe('with a tab index', () => {
    it('renders a checkbox with the specified tab index', () => {
      expect(
        <Checkbox tabIndex={ 42 }>Check me out!</Checkbox>,
        'to contain',
        <input
          tabIndex={ 42 }
        />
      )
    })
  })
})
