import React from 'react'
import expect from 'test/expect'
import sinon from 'sinon'
import TestUtils from 'react-addons-test-utils'

import Range from '.'
import View from '../core/View'

describe('Range', () => {
  it('renders an input of type range with a given min, max, step and value', () => {
    expect(
      <Range
        max={100}
        min={0}
        step={5}
        value={10}
      />,
      'to render as',
      <View>
        <input
          max={100}
          min={0}
          step={5}
          type='range'
          value={10}
        />
      </View>
    )
  })

  it('renders an input of type range with default min, max, step', () => {
    expect(
      <Range
        value={10}
      />,
      'to render as',
      <View>
        <input
          max={100}
          min={0}
          step={1}
          type='range'
          value={10}
        />
      </View>
    )
  })

  describe('when disabled', () => {
    it('renders a disabled range', () => {
      expect(
        <Range disabled />,
        'to render as',
        <View className='range'>
          <input
            className='input'
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
        'when deeply rendered',
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
        <Range tabIndex={42} />,
        'when deeply rendered',
        'to contain',
        <input
          tabIndex={42}
        />
      )
    })
  })

  describe('when value changes', () => {
    it('calls an onChange handle with a new value', () => {
      const onChange = sinon.spy()

      return expect(
        <Range
          max={15}
          min={0}
          onChange={onChange}
          value={10}
          />,
          'when deeply rendered',
          'with event change', 'on', <input />,
        ).then(() => {
          expect(onChange, 'to have calls satisfying', () => {
            onChange(10)
          })
        })
    })
  })

  describe('with a label', () => {
    it('renders a label above the input', () => {
      expect(
        <Range
          label='This is a label'
          max={100}
          min={0}
          step={5}
          value={10}
        />,
        'to render as',
        <View>
          <label>This is a label</label>
          <input
            max={100}
            min={0}
            step={5}
            type='range'
            value={10}
          />
        </View>
      )
    })

    describe('with an id', () => {
      it('uses the id for the input and wires the label to it', () => {
        expect(
          <Range
            id='my-id'
            label='This is a label'
            max={100}
            min={0}
            step={5}
            value={10}
          />,
          'to render as',
          <View>
            <label htmlFor='my-id'>This is a label</label>
            <input
              id='my-id'
              max={100}
              min={0}
              step={5}
              type='range'
              value={10}
            />
          </View>
        )
      })
    })
  })

  describe('when using it as an uncontrolled Range', () => {
    describe('when using defaultValue', () => {
      it('it is set on the DOM node', () => {
        let node

        TestUtils.renderIntoDocument(
          <Range
            defaultValue={30}
            ref={ref => { node = ref.input }}
          />
        )

        expect(node.value, 'to equal', '30')
      })
    })

    describe('when value changes', () => {
      it('calls an onChange handle with a new value', () => {
        const onChange = sinon.spy()

        return expect(
          <Range
            defaultValue={10}
            max={15}
            min={0}
            onChange={onChange}
          />,
          'when deeply rendered',
          'with event change', 'on', <input />,
          ).then(() => {
            expect(onChange, 'to have calls satisfying', () => {
              onChange(10)
            })
          })
      })
    })
  })
})
