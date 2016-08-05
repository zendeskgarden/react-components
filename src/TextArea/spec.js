import React from 'react'
import expect from 'test/expect'
import sinon from 'sinon'

import TextArea from './'

describe('TextArea', () => {
  it('renders a textarea with no styling', () => {
    expect(
      <TextArea.Core />,
      'to render as',
      <textarea />
    )
  })

  describe('when changing the text', () => {
    it('onChangeText is called', () => {
      const onChangeText = sinon.spy()

      return expect(
        <TextArea.Core onChangeText={ onChangeText }/>,
        'when deeply rendered',
        'with event', 'change', { target: { value: 'hello' } }, 'on', <textarea/>,
      ).then(() => {
        expect(onChangeText, 'to have calls satisfying', () => {
          onChangeText('hello')
        })
      })
    })
  })
})
