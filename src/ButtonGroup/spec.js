import React from 'react'
import expect from 'test/expect'
import ButtonGroup from '.'
import Button from '../Button'
import View from '../core/View'

describe('ButtonGroup', () => {
  it('wraps its children in a button group element', () => {
    expect(
      <ButtonGroup>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>,
      'to render as',
      <View className='group'>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </View>
    )
  })
})
