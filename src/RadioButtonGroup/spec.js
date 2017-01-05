import React from 'react'
import expect from 'test/expect'
import sinon from 'sinon'

import RadioButton from '../RadioButton'
import RadioButtonGroup from '.'
import View from '../core/View'

describe('RadioButtonGroup', () => {
  it('renders a RadioButtonGroup with RadioButtons', () => {
    expect(
      <RadioButtonGroup>
        <RadioButton value={1}>1</RadioButton>
        <RadioButton value={2}>2</RadioButton>
      </RadioButtonGroup>,
      'to render as',
      <View>
        <RadioButton value={1}>1</RadioButton>
        <RadioButton value={2}>2</RadioButton>
      </View>
    )
  })

  it('renders RadioButtons as disabled when set by RadioButton', () => {
    expect(
      <RadioButtonGroup>
        <RadioButton value={1}>1</RadioButton>
        <RadioButton disabled value={2}>2</RadioButton>
        <RadioButton value={3}>3</RadioButton>
      </RadioButtonGroup>,
      'to render as',
      <View>
        <RadioButton value={1}>1</RadioButton>
        <RadioButton disabled value={2}>2</RadioButton>
        <RadioButton value={3}>3</RadioButton>
      </View>
    )
  })

  it('calls the onChange handle with the new value of the RadioButtonGroup', () => {
    const onSelect = sinon.spy()

    return expect(
      <RadioButtonGroup onSelect={onSelect}>
        <RadioButton value={1}>1</RadioButton>
        <RadioButton value={2}>2</RadioButton>
        <RadioButton value={3}>3</RadioButton>
      </RadioButtonGroup>,
      'when deeply rendered',
      'with event change', 'on', <input />,
    ).then(() => {
      expect(onSelect, 'to have calls satisfying', () => {
        onSelect(1)
      })
    })
  })

  describe('with value matching one of the RadioButtons', () => {
    it('renders RadioButton as checked', () => {
      expect(
        <RadioButtonGroup selected={2}>
          <RadioButton value={1}>1</RadioButton>
          <RadioButton value={2}>2</RadioButton>
          <RadioButton value={3}>3</RadioButton>
        </RadioButtonGroup>,
        'to render as',
        <View>
          <RadioButton value={1}>1</RadioButton>
          <RadioButton checked value={2}>2</RadioButton>
          <RadioButton value={3}>3</RadioButton>
        </View>
      )
    })
  })

  describe('with dir set to rtl', () => {
    it('renders rtl RadioButtons', () => {
      expect(
        <RadioButtonGroup dir='rtl'>
          <RadioButton value={1}>1</RadioButton>
          <RadioButton value={2}>2</RadioButton>
          <RadioButton value={3}>3</RadioButton>
        </RadioButtonGroup>,
        'to render as',
        <View>
          <RadioButton dir='rtl' value={1}>1</RadioButton>
          <RadioButton dir='rtl' value={2}>2</RadioButton>
          <RadioButton dir='rtl' value={3}>3</RadioButton>
        </View>
      )
    })
  })

  describe('with disabled RadioButtonGroup', () => {
    it('renders RadioButtons as disabled', () => {
      expect(
        <RadioButtonGroup disabled>
          <RadioButton value={1}>1</RadioButton>
          <RadioButton value={2}>2</RadioButton>
          <RadioButton value={3}>3</RadioButton>
        </RadioButtonGroup>,
        'to render as',
        <View>
          <RadioButton disabled value={1}>1</RadioButton>
          <RadioButton disabled value={2}>2</RadioButton>
          <RadioButton disabled value={3}>3</RadioButton>
        </View>
      )
    })

    it('renders RadioButtons as not disabled when overriden by RadioButton', () => {
      expect(
        <RadioButtonGroup disabled>
          <RadioButton value={1}>1</RadioButton>
          <RadioButton disabled={false} value={2}>2</RadioButton>
          <RadioButton value={3}>3</RadioButton>
        </RadioButtonGroup>,
        'to render as',
        <View>
          <RadioButton disabled value={1}>1</RadioButton>
          <RadioButton value={2}>2</RadioButton>
          <RadioButton disabled value={3}>3</RadioButton>
        </View>
      )
    })
  })
})
